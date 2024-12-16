resource "google_service_account" "service_account" {

  account_id  = var.service_account
  description = "Service Account for ${var.service_account}"
}

resource "google_project_iam_member" "role" {


  for_each = var.custom_role ? {} : { for role in var.iam_role : role.role => role }
  project  = var.project
  role     = each.value.role
  member   = "serviceAccount:${google_service_account.service_account.email}"
}

resource "google_project_iam_custom_role" "my-custom-role" {
  count       = var.custom_role ? 1 : 0
  role_id     = var.role_id
  title       = var.role_title
  description = "Custom Role for Role ${var.role_id} with title ${var.role_title}"
  permissions = var.role_permissions
}

resource "google_project_iam_binding" "sa_role_binding" {
  count      = var.custom_role ? 1 : 0
  project    = var.project
  role       = google_project_iam_custom_role.my-custom-role[0].name
  members    = ["serviceAccount:${google_service_account.service_account.email}"]
  depends_on = [google_service_account.service_account]
}