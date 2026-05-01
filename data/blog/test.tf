resource "google_project_iam_binding" "grant_gke_roles" {
  project = "your-project-id"
  role    = "roles/resourcemanager.projectIamAdmin"

  members = [
    "serviceAccount:your-service-account@your-project-id.iam.gserviceaccount.com",
  ]

  condition {
    title       = "gke_roles_only"
    description = "Allow this principal to grant or revoke only approved GKE roles."
    expression  = <<EOT
api.getAttribute(
  'iam.googleapis.com/modifiedGrantsByRole',
  []
).hasOnly([
  'roles/container.developer',
  'roles/container.clusterViewer'
])
EOT
  }
}
