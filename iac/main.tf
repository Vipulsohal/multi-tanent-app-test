module "services" {
  source                     = "./modules/googleProjectService"
  services                   = var.services
  disable_on_destroy         = var.disable_on_destroy
  disable_dependent_services = var.disable_dependent_services
}


module "k8s-sa" {
  source  = "./modules/googleBindingRoleIAM"
  project = var.project
  roles   = var.k8s_roles
  members = ["serviceAccount:${var.project}.svc.id.goog[${var.identifier}/${var.service_accounts[0]["sa_name"]}]"]

  depends_on = [
    module.services
  ]
}


module "service-accounts" {
  source = "./modules/googleServiceAccountRole"

  project         = var.project
  for_each        = { for sa in var.service_accounts : sa.sa_name => sa }
  service_account = each.value.sa_name
  iam_role        = lookup(each.value, "sa_role", null)
  #iam_condition    = lookup(each.value, "iam_condition", null)
  custom_role      = lookup(each.value, "custom_role", null)
  role_id          = lookup(each.value, "sa_role_id", null)
  role_title       = lookup(each.value, "sa_role_title", null)
  role_permissions = lookup(each.value, "sa_role_permission", null)

  depends_on = [
    module.services
  ]
}

module "gcs" {
  source  = "./modules/googleCloudStorage"
  buckets = var.buckets
  depends_on = [
    module.services
  ]
}


module "pubsubs" {
  source         = "./modules/googlePubSub"
  for_each       = { for pubsub in var.pub_name : pubsub.pub_name => pubsub }
  pub_name       = each.value.pub_name
  pub_sub_labels = each.value.labels
  create_subscription =  lookup(each.value, "create_subscription", false)
  depends_on = [
    module.services
  ]
}

module "artifactory-registry" {
  source                        = "./modules/artifactoryRegistry"

  for_each                      = var.artifact_registry_and_trigger == true ? { for artifact_registry in var.artifact_registries : artifact_registry.artifact_registry_name => artifact_registry } : null
  project         				= var.project
  application_name              = each.value.artifact_registry_name
  artifactory_registry_location = each.value.artifactory_registry_location
  depends_on = [
    module.services
  ]
}


module "triggers" {
  source = "./modules/codeBuild"

  for_each                    = var.artifact_registry_and_trigger == true ? { for trigger in var.cloudbuild_triggers : trigger.trigger_name => trigger } : null
  trigger_template            = lookup(each.value, "trigger_template", {})
  trigger_github              = lookup(each.value, "trigger_github", {})
  pubsub_config               = lookup(each.value, "pubsub_config", {})
  trigger_included_files      = lookup(each.value, "trigger_included_files", "")
  trigger_name                = each.value.trigger_name
  repo_name                   = lookup(each.value, "repo_name", "")
  build_logging_option        = lookup(each.value, "build_logging_option", var.build_logging_option)
  cloud_build_service_account = lookup(each.value, "cloud_build_service_account", var.cloud_build_service_account)
  steps                       = each.value.build_steps
  build_variables             = lookup(each.value, "build_variables", var.build_variables)
  build_timeout               = lookup(each.value, "build_timeout", var.build_timeout)
  approval_required           = lookup(each.value, "approval_required", false)
  project                     = var.project
  depends_on = [
    module.service-accounts
  ]
}