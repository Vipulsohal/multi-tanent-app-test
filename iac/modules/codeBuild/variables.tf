variable "branch_trigger" {
  # type        = list(string)
  # default     = ["master"]
  default     = "master"
  description = "Options of trigger"
}

variable "repo_name" {
  type        = string
  description = "Repo to be build"
}

variable "steps" {
  type = string
}

variable "build_variables" {
  type    = map(string)
  default = {}
}

variable "build_timeout" {
  type    = string
  default = "600s"
}

variable "trigger_template" {
}

variable "trigger_github" {

}

variable "pubsub_config" {
}

variable "project" {

}

variable "cloud_build_service_account" {
  default = ""
}

variable "build_logging_option" {
  default = "CLOUD_LOGGING_ONLY"
}

variable "trigger_name" {

}

variable "trigger_included_files" {
  default = ""
}
variable "approval_required" {
  default = false
}