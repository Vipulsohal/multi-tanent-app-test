variable "roles" {
  description = "Roles to bind"
  type        = list(string)
}

variable "members" {
  description = "Mmeebrs to bind with Roles"
  type        = list(string)
}

variable "project" {
  type        = string
  description = "Define the name/ID of Project"
}