# Provider Values
project = ""
region  = "europe-west3"
identifier = "multiannentapp"
env        = "stage"
cert_domain = "origin-multiannentapp-react-app-stage.com"
artifact_registry_and_trigger = true

service_accounts = [
  {
    sa_name     = "multiannentapp-service",
    custom_role = false,
    sa_role = [
		{ role = "roles/pubsub.editor"},
    ]
  },
  {
    sa_name     = "multiannentapp-react-app-readonly",
    custom_role = false,
    sa_role = []
  }
]


buckets = [
  {
    name          = "multiannentapp-react-app-stage",
    location      = "europe-west3",
    storage_class = "STANDARD",
    labels = { "environment" = "stage",
    "platform" = "multiannentapp" },
    uniform_bucket_level_access = true,
	website =[{ main_page_suffix = "index.html"
				not_found_page   = "index.html"}],
  }
]

pub_name = [
  {
    pub_name = "multiannentapp-stage",
    labels = { "environment" = "stage",
    "platform" = "multiannentapp" },
	"create_subscription" = true
  }
]

artifact_registries = [
 
  {
    artifact_registry_name        = "multiannentapp-user-api",
    artifactory_registry_location = "europe"
  },
  {
    artifact_registry_name        = "multiannentapp-question-api",
    artifactory_registry_location = "europe"
  }
]
cloudbuild_triggers = [
  {
    trigger_name                = "multiannentapp-user-api-build",
	cloud_build_service_account = "multiannentapp-cloudbuild-sa@ul-ce-p-902672-prj.iam.gserviceaccount.com"
    labels                      = { app = "multiannentapp-user-api" },
    trigger_included_files      = ["services/user-api/**"],
    build_variables             = {}
    trigger_template = [{ branch_name = "master" }]
    build_steps = "cloudbuild.yaml"
  },
  {
    trigger_name                = "multiannentapp-chat-api-build",
	cloud_build_service_account = "multiannentapp-cloudbuild-sa@ul-ce-p-902672-prj.iam.gserviceaccount.com"
    labels                      = { app = "multiannentapp-user-api" },
    trigger_included_files      = ["services/chat-api/**"],
    build_variables             = {}
    trigger_template = [{ branch_name = "master" }]
    build_steps = "cloudbuild.yaml"

  },
  {
    trigger_name                = "multiannentapp-react-app-prod",
	cloud_build_service_account = "multiannentapp-cloudbuild-sa@ul-ce-p-902672-prj.iam.gserviceaccount.com"
    labels                      = { app = "multiannentapp-react-app" },
    trigger_included_files      = ["react-app/**"],
	build_variables             = {}
    trigger_template = [{ branch_name = "master" }]
    build_steps = "cloudbuild-react-app.yaml"
	approval_required = true}
  ]