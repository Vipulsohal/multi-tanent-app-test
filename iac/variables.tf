variable "services" {
  type        = list(string)
  default     = ["stackdriver.googleapis.com", "monitoring.googleapis.com", "cloudbuild.googleapis.com", "artifactregistry.googleapis.com", "cloudresourcemanager.googleapis.com", "cloudresourcemanager.googleapis.com", "storage-api.googleapis.com", "servicemanagement.googleapis.com", "pubsub.googleapis.com"]
  description = "List of services to be enable"
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

variable "project" {
  type        = string
  description = "Define the name/ID of Project"
}

variable "k8s_roles" {
  description = "roles to bind with kubernetes"
  type        = list(string)
  default     = ["roles/iam.workloadIdentityUser"]
}

variable "service_accounts" {
  type        = any
  description = "List of Service Accounts to be created"
}

variable "region" {
  type        = string
  description = "Mention the region for e.g. asia-east1, use-central1, asia-south1, etc."
}

variable "buckets" {
  type        = any
  description = "List of buckets"
}

variable "pub_name" {
  type = any
}

variable "artifact_registry_and_trigger" {
  type        = bool
  description = "Whether to create registry or tiggers"
}


variable "artifact_registries" {
  type        = any
  description = "Details of artifactory Registries to be created"
}


variable "build_logging_option" {
  description = "how to log the build logs"
  default     = "STACKDRIVER_ONLY"
}

variable "cloud_build_service_account" {
  default = ""
}

variable "build_variables" {
  type    = map(string)
  default = {}
}

variable "build_timeout" {
  type    = string
  default = "600s"
}

variable "identifier" {
  type        = string
  description = "Identifier"
}

variable "env" {
  type        = string
  description = "Environment details"
}
variable "cert_domain" {
  type        = string
  description = "cert domain"
}
variable "services" {
  type        = list(string)
  default     = ["stackdriver.googleapis.com", "monitoring.googleapis.com", "cloudbuild.googleapis.com", "artifactregistry.googleapis.com", "cloudresourcemanager.googleapis.com", "cloudresourcemanager.googleapis.com", "storage-api.googleapis.com", "servicemanagement.googleapis.com", "pubsub.googleapis.com"]
  description = "List of services to be enable"
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

variable "project" {
  type        = string
  description = "Define the name/ID of Project"
}

variable "service_accounts" {
  type        = any
  description = "List of Service Accounts to be created"
}

variable "buckets" {
  type        = any
  description = "List of buckets"
}

variable "region" {
  type        = string
  description = "Mention the region for e.g. asia-east1, use-central1, asia-south1, etc."
}



variable "artifact_registry_and_trigger" {
  type        = bool
  description = "Whether to create registry or tiggers"
}


variable "cloudbuild_triggers" {
  type        = any
  description = "CloudBuild Triggers List"
}

variable "build_logging_option" {
  description = "how to log the build logs"
  default     = "STACKDRIVER_ONLY"
}

variable "cloud_build_service_account" {
  default = ""
}

variable "build_variables" {
  type    = map(string)
  default = {}
}

variable "build_timeout" {
  type    = string
  default = "600s"
}

variable "identifier" {
  type        = string
  description = "Identifier"
}

variable "env" {
  type        = string
  description = "Environment details"
}

variable "pub_name" {
  type = any
}
