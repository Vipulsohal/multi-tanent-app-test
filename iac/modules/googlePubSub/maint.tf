resource "google_pubsub_topic" "pub" {
  name   = var.pub_name
  labels = var.pub_sub_labels
}

resource "google_pubsub_subscription" "pubsub_subscription" {
  count = var.create_subscription ? 1 : 0
  name  = "${var.pub_name}-subscription"
  topic = var.pub_name
	
  # 20 minutes
  message_retention_duration = "1200s"
  retain_acked_messages      = true

  ack_deadline_seconds = 20

  expiration_policy {
    ttl = "300000.5s"
  }
  retry_policy {
    minimum_backoff = "10s"
  }

  enable_message_ordering    = false
}