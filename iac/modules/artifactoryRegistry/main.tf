resource "google_artifact_registry_repository" "repo" {
  provider = google-beta

  location      = var.artifactory_registry_location
  repository_id = var.application_name
  description   = "${var.application_name} docker repository"
  format        = "DOCKER"
}

resource "google_artifact_registry_repository_iam_binding" "binding" {
  project = var.project
  location =  var.artifactory_registry_location
  repository = var.application_name
  role = "roles/artifactregistry.reader"
  members = [
    "allUsers",
  ]
}