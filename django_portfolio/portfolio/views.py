"""Views for the Ankit Dhanorkar portfolio application."""

from __future__ import annotations

import json
from typing import Any

from django.conf import settings
from django.http import Http404, HttpRequest, HttpResponse
from django.shortcuts import render

from .data.portfolio_data import (
    ABOUT_PILLARS,
    BCA_COURSEWORK,
    EDUCATION,
    EXPERIENCE,
    PROFILE,
    PROJECT_FILTERS,
    PROJECTS,
    SKILL_CATEGORIES,
    get_project_by_slug,
)


def _base_context(
    page_title: str,
    page_description: str,
    canonical_path: str,
) -> dict[str, Any]:
    """Build shared SEO, OpenGraph, and structured data context for all pages."""
    site_url = settings.SITE_BASE_URL.rstrip("/")
    canonical_url = f"{site_url}{canonical_path}"

    structured_data = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Person",
            "name": PROFILE["full_name"],
            "alternateName": PROFILE["name"],
            "jobTitle": "Python Software Developer & VFX Pipeline Developer",
            "description": PROFILE["about_intro"],
            "email": f"mailto:{PROFILE['email']}",
            "telephone": PROFILE["phone"],
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressCountry": "IN",
            },
            "worksFor": {
                "@type": "Organization",
                "name": PROFILE["current_organization"],
            },
            "sameAs": [PROFILE["linkedin_url"]],
            "knowsAbout": [
                "Python",
                "Django",
                "Software Engineering",
                "VFX Pipeline Development",
                "Nuke Scripting & Gizmos",
                "Maya Plugin Maintenance",
                "Thinkbox Deadline",
                "PyQt",
                "PySide",
                "PostgreSQL",
                "MySQL",
                "Docker",
                "Celery",
                "Redis",
            ],
            "url": f"{site_url}/",
        },
    }

    return {
        "profile": PROFILE,
        "site_base_url": site_url,
        "canonical_url": canonical_url,
        "page_title": page_title,
        "page_description": page_description,
        "structured_data_json": json.dumps(structured_data, indent=2),
        "animated_roles_json": json.dumps(PROFILE["animated_roles"]),
    }


def home(request: HttpRequest) -> HttpResponse:
    """Render the complete portfolio homepage."""
    context = _base_context(
        page_title=PROFILE["seo_title"],
        page_description=PROFILE["seo_description"],
        canonical_path="/",
    )
    context.update(
        {
            "about_pillars": ABOUT_PILLARS,
            "skill_categories": SKILL_CATEGORIES,
            "project_filters": PROJECT_FILTERS,
            "projects": PROJECTS,
            "experience": EXPERIENCE,
            "education": EDUCATION,
            "bca_coursework": BCA_COURSEWORK,
        }
    )
    return render(request, "portfolio/home.html", context)


def project_detail(request: HttpRequest, slug: str) -> HttpResponse:
    """Render a dedicated, SEO-friendly case study page for a single project."""
    project = get_project_by_slug(slug)
    if project is None:
        raise Http404("Project not found.")

    idx = next(i for i, item in enumerate(PROJECTS) if item["slug"] == slug)
    prev_project = PROJECTS[(idx - 1) % len(PROJECTS)]
    next_project = PROJECTS[(idx + 1) % len(PROJECTS)]

    context = _base_context(
        page_title=f"{project['title']} — Case Study | {PROFILE['name']}",
        page_description=project["short_description"],
        canonical_path=f"/projects/{project['slug']}/",
    )
    context.update(
        {
            "project": project,
            "prev_project": prev_project,
            "next_project": next_project,
        }
    )
    return render(request, "portfolio/project_detail.html", context)


def robots_txt(request: HttpRequest) -> HttpResponse:
    """Serve robots.txt pointing crawlers to sitemap.xml."""
    context = {"site_base_url": settings.SITE_BASE_URL.rstrip("/")}
    return render(
        request,
        "portfolio/robots.txt",
        context,
        content_type="text/plain; charset=utf-8",
    )


def sitemap_xml(request: HttpRequest) -> HttpResponse:
    """Serve XML sitemap listing homepage and all project case studies."""
    context = {
        "site_base_url": settings.SITE_BASE_URL.rstrip("/"),
        "projects": PROJECTS,
    }
    return render(
        request,
        "portfolio/sitemap.xml",
        context,
        content_type="application/xml; charset=utf-8",
    )


def custom_404(request: HttpRequest, exception: Exception | None = None) -> HttpResponse:
    """Render branded 404 page (also exported to 404.html for GitHub Pages)."""
    context = _base_context(
        page_title=f"Page Not Found | {PROFILE['name']}",
        page_description="The requested portfolio page could not be found.",
        canonical_path="/404.html",
    )
    return render(request, "portfolio/404.html", context, status=404)
