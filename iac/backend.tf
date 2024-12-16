terraform {
  required_version = ">= 1.0"
  backend "gcs" {
    bucket = "kritique-iac-apps"
    prefix = "kritique-state-files"
  }
}
