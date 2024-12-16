resource "google_project_iam_binding" "sa_role_binding" {
  for_each = toset(var.roles)
  role     = each.key
  members  = var.members
  project  = var.project
}