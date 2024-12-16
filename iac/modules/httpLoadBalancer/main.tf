resource "google_compute_backend_bucket" "backend" {
  name        = "${var.identifier}-${var.env}-name"
  bucket_name = var.backend_bucket_name
}


resource "google_compute_global_address" "default" {
  name         = "${var.identifier}-${var.env}-address"
  ip_version   = "IPV4"
  address_type = "EXTERNAL"
}


resource "google_compute_global_forwarding_rule" "http" {
  name       = "${var.identifier}-${var.env}-http-rule"
  target     = google_compute_target_http_proxy.default.self_link
  ip_address = google_compute_global_address.default.address
  port_range = "80"
}

resource "google_compute_global_forwarding_rule" "https" {
  name       = "${var.identifier}-${var.env}-https-rule"
  target     = google_compute_target_https_proxy.default.self_link
  ip_address = google_compute_global_address.default.address
  port_range = "443"
}

resource "google_compute_target_http_proxy" "default" {
  name    =  "${var.identifier}-${var.env}-proxy"
  url_map = google_compute_url_map.default.id
}

resource "google_compute_managed_ssl_certificate" "default" {
  name = "kritique-ssl-cert"

  managed {
    domains = [	"${var.cert_domain}"]
  }
}

resource "google_compute_target_https_proxy" "default" {
  name             = "kritique-https-proxy"
  url_map          = google_compute_url_map.default.id
  ssl_certificates = [google_compute_managed_ssl_certificate.default.id]
}

/*resource "google_compute_target_https_proxy" "default" {
  name    =  "${var.identifier}-${var.env}-proxy"
  url_map = google_compute_url_map.default.id
}*/

resource "google_compute_url_map" "default" {
  name        ="${var.identifier}-${var.env}-url-map"

  default_service = google_compute_backend_bucket.backend.id

  host_rule {
    # hosts        = ["mysite.com"]
    hosts = ["${google_compute_global_address.default.address}"]
    path_matcher = "allpaths"
  }


  path_matcher {
    name            = "allpaths"
    default_service = google_compute_backend_bucket.backend.id

    path_rule {
      paths   = ["/"]
      service = google_compute_backend_bucket.backend.id
    }
  }

}