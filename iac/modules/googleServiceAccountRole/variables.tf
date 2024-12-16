variable "service_account" {
  type        = string
  description = "Name of service account"
}

variable "iam_role" {
  # type        = list(string)
  default     = null
  description = "Existing roles"
}

variable "project" {
  type        = string
  description = "Define the name/ID of Project"
}

variable "role_id" {
  type        = string
  default     = null
  description = "Role ID of service account"
}

variable "role_title" {
  type        = string
  default     = null
  description = "Title of custom Role"
}

variable "role_permissions" {
  type        = list(string)
  default     = null
  description = "Permissions in role"
}

variable "custom_role" {
  type        = bool
  description = "To identify the whether we are creating custom role or not"

}


# variable "iam_condition" {
#   type        = any
#   description = "IAM condition"
# }