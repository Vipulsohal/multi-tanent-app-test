resource "google_project_service" "project" {
  for_each                   = toset(var.services)
  service                    = each.key
  disable_dependent_services = var.disable_dependent_services
  disable_on_destroy         = var.disable_on_destroy
}