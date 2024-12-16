resource "google_cloudbuild_trigger" "build-trigger" {

  # name        = "${var.repo_name}-${var.branch_trigger}-trigger"
  name            = "${var.trigger_name}-trigger"
  description     = "Trigger for Repo ${var.repo_name} for branch ${var.trigger_name}"
  service_account = var.cloud_build_service_account != "" ? "projects/${var.project}/serviceAccounts/${var.cloud_build_service_account}" : ""
  included_files  = var.trigger_included_files

 /* dynamic "trigger_template" {

    for_each = var.trigger_template
    content {
      branch_name = lookup(trigger_template.value, "branch_name", var.trigger_name)
      repo_name   = var.repo_name
    }
  }*/

  dynamic "pubsub_config" {
    for_each = var.pubsub_config
    content {
      # topic = "projects/${var.project}/topics/${pubsub_config.value.topic}-pubsub"
      topic = "projects/${var.project}/topics/${pubsub_config.value.pubsub_env}"
    }
  }

  dynamic "source_to_build" {
    for_each = var.pubsub_config
    content {
      uri       = source_to_build.value.repo_url
      ref       = source_to_build.value.branch
      repo_type = "GITHUB"
    }
  }
  
  approval_config {
     approval_required = var.approval_required 
  }

  dynamic "github" {
    for_each = var.trigger_github

    content {
      owner = github.value.owner
      name  = github.value.name
      push {
        branch = github.value.branch_name
      }
    }

  }

  #  dynamic "git_file_source" {
  #   for_each = var.pubsub_config
  #   content {
  #     path = ""
  #     uri       = "https://source.developers.google.com/p/${var.project}/r/${var.repo_name}"
  #     revision      = "refs/heads/master"
  #     repo_type = "CLOUD_SOURCE_REPOSITORIES"
  #   }
  # }
  substitutions = var.build_variables

  filename = var.steps
  # build {
  #   dynamic "step" {
  #     # for_each = lookup(each.value, "steps", [])
  #     for_each = { for s in var.steps : s.ind => s }
  #     iterator = steps
  #     content {
  #       name       = steps.value.name
  #       args       = steps.value.args
  #       env        = lookup(steps.value, "env", [])
  #       id         = lookup(steps.value, "id", "")
  #       entrypoint = lookup(steps.value, "entrypoint", "")
  #       dir        = lookup(steps.value, "dir", "")
  #       wait_for   = lookup(steps.value, "wait_for", [])
  #     }
  #   }

  #   timeout = var.build_timeout
  #   options {
  #     logging = var.build_logging_option
  #   }
  # }


}