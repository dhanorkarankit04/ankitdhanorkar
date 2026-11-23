# Ankit Dhanorkar — Software & VFX Pipeline Engineer Portfolio

A production-quality personal portfolio showcasing equal expertise across **Software Engineering**, **Python Application Development**, **VFX Pipeline Development**, and **Technical Leadership**, engineered for **100% free static hosting on GitHub Pages**.

---

## Architecture Overview

This repository provides two synchronized layers:

1. **Django Project & Static Site Generator (`django_portfolio/`)**
   - Uses Python & Django for local development, modular templates, centralized data configuration, URL routing, SEO generation (`sitemap.xml`, `robots.txt`, JSON-LD), and automated tests.
   - Includes a custom management command (`python manage.py export_static`) that renders every public page and project case study into standalone HTML + static assets for **GitHub Pages** (`username.github.io`).
2. **Interactive Preview Frontend (`src/`, `public/`, `index.html`)**
   - Live interactive frontend mirroring the exact visual design system, interactive Canvas2D node network, GSAP animations, project category filtering, case study viewer, and static PDF resume download.

### Development-Only vs. Published Static Features

GitHub Pages serves **static files only** and does not run Python or Django servers.

| Feature | Local Django Development | Published GitHub Pages Site |
| :--- | :--- | :--- |
| Django dev server (`runserver`) | Active locally | Not required / not running |
| SQLite (`db.sqlite3`) | Optional local development only | Zero database dependency |
| Django templates & views | Renders HTML on demand | Pre-rendered into static `.html` files |
| Project detail routes (`/projects/<slug>/`) | Dynamic URL dispatch | Static `/projects/<slug>/index.html` pages |
| Contact & email copy | Static `mailto:` + clipboard JS | Static `mailto:` + clipboard JS (no server/paid form) |
| Resume download | Static PDF file | Static PDF file |
| SEO (`sitemap.xml`, `robots.txt`, JSON-LD) | Rendered via Django | Exported as static files |

---

## Editing Your Profile, Projects & Assets

Update centralized data files before publishing — no template rewrites required:

- **Django data file**: `django_portfolio/portfolio/data/portfolio_data.py`
- **Interactive frontend data file**: `src/data/portfolioData.ts`

Replace these editable placeholders with your verified details:

1. **Email, LinkedIn, GitHub, and Location** in `PROFILE`.
2. **Portrait Photo**: Replace `django_portfolio/static/portfolio/images/portrait.jpg` (and portrait path in `portfolioData.ts`).
3. **Resume PDF**: Replace `django_portfolio/static/portfolio/assets/Ankit_Dhanorkar_Resume.pdf` and `public/assets/Ankit_Dhanorkar_Resume.pdf`.
4. **Experience Dates & Organizations**: Update `EXPERIENCE` placeholders (`Dates to be confirmed`, `Organization details to be confirmed`).
5. **Education Status & Certifications**: Update `EDUCATION` (BCA completion status/dates) and `CERTIFICATIONS`.
6. **Project Results & Public GitHub Links**: Populate `results_status` and `github_url` only when verified and publicly shareable.

---

## Local Django Development Setup

```bash
cd django_portfolio
python3 -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -r requirements.txt

# Run automated test suite (views, SEO endpoints, static export validation)
python manage.py test --verbosity=2

# Start local Django development server
python manage.py runserver
```

Visit `http://127.0.0.1:8000/`.

---

## Exporting the Static Website Locally

Run the static export command from `django_portfolio/`:

```bash
python manage.py export_static --output _site --site-url https://<your-username>.github.io
```

Or use the convenience script:

```bash
python scripts/export_static.py --output _site
```

Verify the exported static build independently of Django using Python's built-in static file server:

```bash
python3 -m http.server 8080 --directory _site
```

Open `http://127.0.0.1:8080/` and verify:
- Homepage loads with all CSS, JavaScript, images, animations, and fonts intact.
- Category filters and Copy Email button work without any running backend.
- Every `/projects/<slug>/` link opens its standalone static case study page.
- Resume PDF downloads cleanly.
- `robots.txt`, `sitemap.xml`, `404.html`, and `.nojekyll` exist in `_site/`.

---

## Free GitHub Pages Deployment with Custom Domain (`ankitdhanorkar.com`)

GitHub Pages hosts your static portfolio **100% free** with automatic Let's Encrypt HTTPS, and works seamlessly with your custom domain (`ankitdhanorkar.com`).

1. **Purchase / manage `ankitdhanorkar.com`** at any domain registrar (Cloudflare Registrar, Namecheap, Porkbun, GoDaddy, etc.).
2. **Create a GitHub repository** (for example `<your-github-username>.github.io` or `portfolio`) and push this codebase to `main`.
3. **Enable GitHub Actions deployment**:
   - In GitHub, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
   - Under **Custom domain**, enter `ankitdhanorkar.com` and save.
4. **Configure DNS records at your domain registrar**:

| Type | Host / Name | Value / Target |
| :--- | :--- | :--- |
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `<your-github-username>.github.io` |

5. Wait for DNS propagation (usually 5–30 minutes), then check **Enforce HTTPS** in **Settings → Pages**.

The workflow (`.github/workflows/deploy-pages.yml`) automatically:
1. Installs Python dependencies from `django_portfolio/requirements.txt`.
2. Executes `python manage.py test` to catch regressions.
3. Runs `python manage.py export_static --output _site` with `PORTFOLIO_SITE_URL=https://ankitdhanorkar.com` and generates `_site/CNAME`.
4. Verifies every local `/static/` reference exists in `_site`.
5. Publishes `_site` directly to GitHub Pages.

---

## Testing & Deployment Checklist

- [ ] Replace placeholder email, LinkedIn URL, GitHub URL, and location.
- [ ] Replace placeholder portrait image and resume PDF.
- [ ] Confirm BCA status/dates, experience dates, and any verified project outcomes.
- [ ] Run `python manage.py test` with zero failures.
- [ ] Run `python manage.py export_static --output _site` and inspect via `python3 -m http.server`.
- [ ] Verify mobile navigation, keyboard focus rings, and `prefers-reduced-motion` behavior.
- [ ] Test OpenGraph link preview with LinkedIn Post Inspector after deploying to GitHub Pages.
