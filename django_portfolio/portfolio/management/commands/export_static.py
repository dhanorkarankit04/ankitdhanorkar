"""
Management command: export_static
=================================
Renders every public Django page into clean, standalone static HTML files,
copies all static assets (CSS, JS, images, resume PDF), generates `.nojekyll`
and `404.html`, and validates that no local assets or internal links are broken.

Usage:
    python manage.py export_static --output _site
    python manage.py export_static --output ../docs --site-url https://ankitdhanorkar.github.io
"""

from __future__ import annotations

from pathlib import Path
import re
import shutil
from typing import Any

from django.conf import settings
from django.core.management.base import BaseCommand, CommandError
from django.test import Client

from portfolio.data.portfolio_data import PROJECTS
from portfolio.views import custom_404


class Command(BaseCommand):
    help = "Export the Django portfolio into a standalone static site for GitHub Pages."

    def add_arguments(self, parser: Any) -> None:
        parser.add_argument(
            "--output",
            default="_site",
            help="Target directory for the exported static site (default: _site).",
        )
        parser.add_argument(
            "--site-url",
            default=None,
            help="Override canonical base URL (e.g. https://ankitdhanorkar.com).",
        )
        parser.add_argument(
            "--cname",
            default=None,
            help="Custom domain written to CNAME file (pass empty string to omit).",
        )

    def handle(self, *args: Any, **options: Any) -> None:
        output_dir = Path(options["output"]).resolve()
        if options["site_url"]:
            settings.SITE_BASE_URL = options["site_url"].rstrip("/")

        if output_dir.exists():
            shutil.rmtree(output_dir)
        output_dir.mkdir(parents=True, exist_ok=True)

        client = Client(HTTP_HOST="localhost")

        routes: list[tuple[str, Path]] = [
            ("/", output_dir / "index.html"),
            ("/robots.txt", output_dir / "robots.txt"),
            ("/sitemap.xml", output_dir / "sitemap.xml"),
        ]

        for project in PROJECTS:
            slug = project["slug"]
            routes.append(
                (f"/projects/{slug}/", output_dir / "projects" / slug / "index.html")
            )

        exported_html_files: list[Path] = []

        for url_path, destination in routes:
            response = client.get(url_path)
            if response.status_code != 200:
                raise CommandError(
                    f"Failed to export '{url_path}' (HTTP {response.status_code})."
                )
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_bytes(response.content)
            if destination.suffix == ".html":
                exported_html_files.append(destination)
            self.stdout.write(f"Exported {url_path} -> {destination.relative_to(output_dir)}")

        # Export custom 404.html for GitHub Pages
        from django.test import RequestFactory

        rf = RequestFactory()
        req_404 = rf.get("/404.html")
        resp_404 = custom_404(req_404)
        dest_404 = output_dir / "404.html"
        dest_404.write_bytes(resp_404.content)
        exported_html_files.append(dest_404)
        self.stdout.write("Exported /404.html -> 404.html")

        # Copy static assets directly into <output>/static/
        static_dest = output_dir / "static"
        static_dest.mkdir(parents=True, exist_ok=True)
        for static_src in settings.STATICFILES_DIRS:
            src_path = Path(static_src)
            if src_path.exists():
                shutil.copytree(src_path, static_dest, dirs_exist_ok=True)

        # Prevent GitHub Pages Jekyll processing so filenames/assets remain intact
        (output_dir / ".nojekyll").write_text("", encoding="utf-8")

        # Write CNAME file when deploying to a custom domain (e.g. ankitdhanorkar.com)
        custom_domain = (
            options["cname"].strip()
            if options["cname"] is not None
            else getattr(settings, "CUSTOM_DOMAIN", "").strip()
        )
        if custom_domain:
            (output_dir / "CNAME").write_text(f"{custom_domain}\n", encoding="utf-8")
            self.stdout.write(f"Wrote CNAME -> {custom_domain}")

        # Verify local /static/ references exist in the exported bundle
        missing_assets = self._verify_exported_assets(output_dir, exported_html_files)
        if missing_assets:
            raise CommandError(
                "Missing static assets detected in exported HTML:\n"
                + "\n".join(f"  - {item}" for item in sorted(missing_assets))
            )

        self.stdout.write(
            self.style.SUCCESS(
                f"Static export complete: {len(routes) + 1} pages + static assets -> {output_dir}"
            )
        )

    @staticmethod
    def _verify_exported_assets(
        output_dir: Path, html_files: list[Path]
    ) -> set[str]:
        pattern = re.compile(r'(?:src|href)="(/static/[^"]+)"')
        missing: set[str] = set()
        for html_file in html_files:
            content = html_file.read_text(encoding="utf-8")
            for match in pattern.findall(content):
                rel = match.lstrip("/")
                if not (output_dir / rel).exists():
                    missing.add(match)
        return missing
