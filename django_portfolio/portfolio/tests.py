"""Automated unit tests for views, SEO routes, accessibility landmarks, and static export."""

from __future__ import annotations

from pathlib import Path
import tempfile

from django.core.management import call_command
from django.test import SimpleTestCase
from django.urls import reverse
from html import escape
from .data.portfolio_data import PROFILE, PROJECTS


class PortfolioRoutesTests(SimpleTestCase):
    def test_homepage_renders_core_identity_and_sections(self) -> None:
        response = self.client.get(reverse("portfolio:home"))
        self.assertEqual(response.status_code, 200)
        html = response.content.decode("utf-8")

        self.assertIn(PROFILE["name"], html)
        self.assertIn("Building Intelligent Software", html)
        self.assertIn("Bubble Creations Digital Studio", html)
        self.assertIn("Bachelor of Computer Applications (BCA)", html)
        self.assertIn('id="main-content"', html)
        self.assertIn('application/ld+json', html)

    def test_all_project_detail_pages_return_200(self) -> None:
        for project in PROJECTS:
            url = reverse("portfolio:project_detail", kwargs={"slug": project["slug"]})
            response = self.client.get(url)
            self.assertEqual(response.status_code, 200)
            html = response.content.decode("utf-8")
            self.assertIn(project["title"], html)
            self.assertIn("Problem Statement", html)
            self.assertIn("Architecture Details", html)

    def test_unknown_project_slug_returns_404(self) -> None:
        response = self.client.get("/projects/non-existent-tool/")
        self.assertEqual(response.status_code, 404)

    def test_robots_txt_and_sitemap_xml(self) -> None:
        robots = self.client.get(reverse("portfolio:robots_txt"))
        self.assertEqual(robots.status_code, 200)
        self.assertIn("Sitemap:", robots.content.decode("utf-8"))

        sitemap = self.client.get(reverse("portfolio:sitemap_xml"))
        self.assertEqual(sitemap.status_code, 200)
        xml = sitemap.content.decode("utf-8")
        self.assertIn("<urlset", xml)
        for project in PROJECTS:
            self.assertIn(f"/projects/{project['slug']}/", xml)


class StaticExportCommandTests(SimpleTestCase):
    def test_export_static_generates_complete_github_pages_bundle(self) -> None:
        with tempfile.TemporaryDirectory() as tmp_dir:
            out_path = Path(tmp_dir)
            call_command("export_static", output=str(out_path), verbosity=0)

            self.assertTrue((out_path / "index.html").is_file())
            self.assertTrue((out_path / "404.html").is_file())
            self.assertTrue((out_path / "robots.txt").is_file())
            self.assertTrue((out_path / "sitemap.xml").is_file())
            self.assertTrue((out_path / ".nojekyll").is_file())
            self.assertTrue((out_path / "CNAME").is_file())
            self.assertEqual(
                (out_path / "CNAME").read_text(encoding="utf-8").strip(),
                "ankitdhanorkar.com",
            )
            self.assertTrue(
                (out_path / "static" / "portfolio" / "css" / "main.css").is_file()
            )
            self.assertTrue(
                (out_path / "static" / "portfolio" / "js" / "main.js").is_file()
            )
            self.assertTrue(
                (
                    out_path
                    / "static"
                    / "portfolio"
                    / "assets"
                    / "Ankit_Dhanorkar_CV_2026.pdf"
                ).is_file()
            )

            for project in PROJECTS:
                project_html = out_path / "projects" / project["slug"] / "index.html"
                self.assertTrue(project_html.is_file())
                self.assertIn(
                    project["title"], project_html.read_text(encoding="utf-8")
                )
