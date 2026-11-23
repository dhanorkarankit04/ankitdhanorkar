"""Root URL configuration for Ankit Dhanorkar's portfolio."""

from django.urls import include, path

urlpatterns = [
    path("", include("portfolio.urls")),
]

handler404 = "portfolio.views.custom_404"
