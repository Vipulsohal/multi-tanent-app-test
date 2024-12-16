resource "google_storage_bucket" "gcs" {

  for_each                    = { for bucket in var.buckets : bucket.name => bucket }
  name                        = lookup(each.value, "name")
  location                    = lookup(each.value, "location")
  storage_class               = lookup(each.value, "storage_class")
  labels                      = lookup(each.value, "labels")
  uniform_bucket_level_access = lookup(each.value, "uniform_bucket_level_access")
  dynamic "lifecycle_rule" {
    for_each = lookup(each.value, "gcs_lifecycle", [])
    iterator = gcs_lifecycle
    content {
      action {
        type          = lookup(gcs_lifecycle.value, "type", "SetStorageClass")
        storage_class = lookup(gcs_lifecycle.value, "storage_class", "REGIONAL")
      }

      condition {
        age = lookup(gcs_lifecycle.value, "age", "50")
      }
    }
  }

  dynamic "logging" {
    for_each = lookup(each.value, "gcs_log_bucket", [])
    iterator = gcs_log_bucket
    content {
      log_bucket = lookup(gcs_log_bucket.value, "log_bucket", null)
    }
  }
  
  dynamic "website" {
    for_each = lookup(each.value, "website", [])
    iterator = website
    content {
      main_page_suffix = lookup(website.value, "main_page_suffix", null)
	  not_found_page = lookup(website.value, "not_found_page", null)
    }
  }

}

resource "google_storage_bucket_iam_binding" "binding" {
  for_each = { for bucket in var.buckets : bucket.name => bucket
    if lookup(bucket, "service_accounts", []) != []
  }

  bucket     = lookup(each.value, "name")
  role       = "roles/storage.objectViewer"
  members    = lookup(each.value, "service_accounts", [])
  depends_on = [google_storage_bucket.gcs]

}




# By default if bucket contains the object it will fail to delete the bucket