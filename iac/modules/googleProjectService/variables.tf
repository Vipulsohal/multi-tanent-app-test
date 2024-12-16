variable "services" {
  type        = list(string)
  description = "List of services to be enable"
  default     = ["stackdriver.googleapis.com", "monitoring.googleapis.com", "compute.googleapis.com", "compute.googleapis.com", "gkehub.googleapis.com", "datamigration.googleapis.com", "cloudbuild.googleapis.com", "container.googleapis.com", "servicenetworking.googleapis.com", "file.googleapis.com", "artifactregistry.googleapis.com", "cloudresourcemanager.googleapis.com", "sqladmin.googleapis.com", "cloudresourcemanager.googleapis.com", "storage-api.googleapis.com", "sourcerepo.googleapis.com", "dns.googleapis.com"]
}

variable "disable_dependent_services" {
  type        = bool
  default     = false
  description = "Whether to disable dependent services on destroy"
}

variable "disable_on_destroy" {
  type        = bool
  default     = false
  description = "Whether to disable services on destroy"
}