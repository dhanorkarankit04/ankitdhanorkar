"""
Django settings for Ankit Dhanorkar's Portfolio Website.

Architecture note:
- Django is used for local development, modular templating, URL routing,
  centralized data management, and automated testing.
- For free GitHub Pages hosting (which serves static files only), run:
    python manage.py export_static --output ../docs
  This renders all public pages, project detail routes, sitemap.xml,
  robots.txt, 404.html, and static assets into standalone HTML/CSS/JS.
"""

from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent

# Local development secret key — never commit a real production secret.
# GitHub Pages publishes pure static HTML and does not run Django.
SECRET_KEY = os.environ.get(
    "DJANGO_SECRET_KEY",
    "dev-only-insecure-key-not-used-in-static-export",
)

DEBUG = os.environ.get("DJANGO_DEBUG", "True").lower() in ("1", "true", "yes")

ALLOWED_HOSTS = [
    host.strip()
    for host in os.environ.get(
        "DJANGO_ALLOWED_HOSTS", "127.0.0.1,localhost,testserver"
    ).split(",")
    if host.strip()
]

# Canonical site base URL and custom domain for GitHub Pages deployment
SITE_BASE_URL = os.environ.get(
    "PORTFOLIO_SITE_URL", "https://ankitdhanorkar.com"
).rstrip("/")
CUSTOM_DOMAIN = os.environ.get(
    "PORTFOLIO_CUSTOM_DOMAIN", "ankitdhanorkar.com"
).strip()

INSTALLED_APPS = [
    "django.contrib.staticfiles",
    "portfolio.apps.PortfolioConfig",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.template.context_processors.static",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"

# Optional SQLite database for local development experiments only.
# The published GitHub Pages static website has zero database dependencies.
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

# Root-relative static path configured for username.github.io repositories
STATIC_URL = "/static/"
STATICFILES_DIRS = [BASE_DIR / "static"]
STATIC_ROOT = BASE_DIR / "staticfiles"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
