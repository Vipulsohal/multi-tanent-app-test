output "gcs_names" {
  value       = [for bucket in google_storage_bucket.gcs : bucket.name]
  description = "The Name of the Buckets being created"
}
