variable "pub_name" {
  type        = string
  description = "Name of Publisher"
}

variable "pub_sub_labels" {
  type        = any
  description = "PubSub Labels"
}

variable "create_subscription" {
  description = "Flag to conditionally create the instance"
  type        = bool
  default     = false
}