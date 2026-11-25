"""
Centralized Editable Portfolio Data
===================================
Populated with verified details from Ankit Kishor Dhanorkar's 2026 CV.
"""

from __future__ import annotations

from typing import Any

PROFILE: dict[str, Any] = {
    "name": "Ankit Dhanorkar",
    "full_name": "Ankit Kishor Dhanorkar",
    "positioning": (
        "Python Software Developer · Application Development · VFX Pipeline Automation"
    ),
    "hero_headline": "Building Intelligent Software & Creative Technology.",
    "professional_headline": (
        "Engineering Intelligent Solutions for Creative and Business Workflows."
    ),
    "animated_roles": [
        "Python Software Developer",
        "Application Developer",
        "VFX Pipeline Developer",
        "Workflow Automation Engineer",
    ],
    "hero_supporting_text": (
        "I design and develop custom Python applications, Nuke automation tools, "
        "automated file validation pipelines, and scalable workflow solutions "
        "bridging software engineering and high-end visual effects production."
    ),
    "about_intro": (
        "Python developer and VFX Pipeline TD with 16+ years in VFX production, "
        "specializing in pipeline automation, Nuke scripting, custom applications, "
        "file validation, and workflow optimization."
    ),
    "about_philosophy": (
        "Developed internal tools for shot workflows, automated validation, "
        "attendance tracking, and vendor/client budget management while bringing "
        "hands-on production leadership as a former Paint Lead, Paint Supervisor, "
        "and Prep Supervisor across major international film and television "
        "productions. Currently serving as Pipeline TD at Bubble Creations Digital "
        "Studios Pvt. Ltd., Pune while pursuing my Bachelor of Computer "
        "Applications (BCA, Semester 5) at Symbiosis International University."
    ),
    "current_organization": "Bubble Creations Digital Studios Pvt. Ltd., Pune",
    "portrait_static_path": "portfolio/images/portrait.png",
    "portrait_alt": (
        "Ankit Kishor Dhanorkar — Python Software Developer and VFX Pipeline TD"
    ),
    "og_image_static_path": "portfolio/images/og-preview.svg",
    "resume_static_path": "portfolio/assets/Ankit_Dhanorkar_Resume.pdf",
    "resume_filename": "Ankit_Dhanorkar_Resume.pdf",
    "career_summary": (
        "Python developer and VFX Pipeline TD with 16+ years in VFX production "
        "(Apr 2010 – Present), experienced in pipeline automation, Nuke scripting, "
        "Maya plugin maintenance, Thinkbox Deadline workflows, automated "
        "shot/output validation, custom internal applications, and production "
        "leadership across major international studio productions."
    ),
    "email": "dhanorkarankit04@gmail.com",
    "phone": "+91-9987962561",
    "linkedin_url": "https://www.linkedin.com/in/ankit-dhanorkar-5653b939",
    "linkedin_handle": "linkedin.com/in/ankit-dhanorkar-5653b939",
    "github_url": "https://github.com/dhanorkarankit04",
    "github_handle": "github.com/dhanorkarankit04",
    "location": "Pune, India",
    "languages": ["English", "Hindi", "Marathi"],
    "seo_title": (
        "Ankit Kishor Dhanorkar — Python Software Developer & VFX Pipeline Engineer"
    ),
    "seo_description": (
        "Portfolio of Ankit Kishor Dhanorkar — Python Software Developer, "
        "Application Developer, and VFX Pipeline Developer based in Pune, India."
    ),
}

ABOUT_PILLARS: list[dict[str, str]] = [
    {
        "index": "01",
        "domain": "Software Engineering",
        "title": "Python Application Development",
        "description": (
            "Custom Python GUI applications (PyQt/PySide), Django web backends, "
            "and modular internal tools built for everyday reliability."
        ),
    },
    {
        "index": "02",
        "domain": "VFX Pipeline",
        "title": "VFX Pipeline & Nuke Automation",
        "description": (
            "Nuke Python tools and gizmos, legacy Maya plugin compatibility "
            "updates, Thinkbox Deadline integration, and shot validation."
        ),
    },
    {
        "index": "03",
        "domain": "VFX Pipeline",
        "title": "Server & Workflow Automation",
        "description": (
            "Automated server file transfers preserving directory trees and "
            "permissions, eliminating repetitive manual production bottlenecks."
        ),
    },
    {
        "index": "04",
        "domain": "Software Engineering",
        "title": "Internal Business Applications",
        "description": (
            "Dedicated operational applications including attendance tracking "
            "and vendor/client budget management backed by relational databases."
        ),
    },
    {
        "index": "05",
        "domain": "Leadership & Systems",
        "title": "Technical Troubleshooting & QA",
        "description": (
            "Debugging, performance optimization, and automated validation "
            "catching naming, frame range, resolution, and file integrity issues."
        ),
    },
    {
        "index": "06",
        "domain": "Leadership & Systems",
        "title": "Department & Team Leadership",
        "description": (
            "Proven leadership as Paint Lead, Paint Supervisor, and Prep "
            "Supervisor driving artist training, quality benchmarks, and "
            "cross-department delivery."
        ),
    },
]

SKILL_CATEGORIES: list[dict[str, Any]] = [
    {
        "id": "programming",
        "title": "Programming & Scripting",
        "accent": "cyan",
        "icon": "code-2",
        "skills": ["Python", "PHP", "Bash", "JavaScript", "Java (academic coursework)"],
    },
    {
        "id": "backend",
        "title": "Web & Backend",
        "accent": "blue",
        "icon": "server",
        "skills": ["Django", "HTML & CSS", "Nginx", "Gunicorn", "Redis"],
    },
    {
        "id": "desktop",
        "title": "Desktop Development",
        "accent": "lavender",
        "icon": "monitor",
        "skills": [
            "PyQt / PySide",
            "Custom Python GUI tools",
            "Qt Widgets",
            "QTreeView & QFileSystemModel",
        ],
    },
    {
        "id": "devops",
        "title": "Databases & Infrastructure",
        "accent": "mint",
        "icon": "box",
        "skills": ["PostgreSQL", "MySQL", "SQL", "Docker", "Celery", "Linux & Git"],
    },
    {
        "id": "vfx",
        "title": "VFX & Production",
        "accent": "cyan",
        "icon": "film",
        "skills": [
            "Nuke scripting & gizmos",
            "Maya plugin maintenance",
            "Thinkbox Deadline",
            "Shot & render validation",
            "OpenEXR / OpenImageIO",
        ],
    },
    {
        "id": "ai-automation",
        "title": "Engineering & Automation",
        "accent": "lavender",
        "icon": "sparkles",
        "skills": [
            "Application development",
            "Workflow automation",
            "Debugging & troubleshooting",
            "Performance optimization",
            "Foundational AI knowledge",
        ],
    },
]

PROJECT_FILTERS: list[str] = [
    "All",
    "VFX Pipeline",
    "Desktop Software",
    "Business Software",
]

PROJECTS: list[dict[str, Any]] = [
    {
        "slug": "shotsnap",
        "title": "ShotSnap",
        "category": "VFX Pipeline / Python Automation",
        "filter_group": "VFX Pipeline",
        "short_description": (
            "Internal production workflow utility developed to support efficient "
            "shot-related operations across daily VFX production tasks."
        ),
        "technologies": ["Python", "Pipeline Integration", "VFX Workflow Automation"],
        "image_static_path": "portfolio/images/project-shotsnap.jpg",
        "image_alt": "Architectural visualization representing ShotSnap VFX pipeline utility",
        "problem_statement": (
            "Repetitive shot-level operations across studio environments introduce "
            "manual friction and inconsistencies when performed by hand."
        ),
        "solution_overview": (
            "Designed and developed ShotSnap as an internal Python tool integrated "
            "into studio conventions to streamline recurring shot workflows."
        ),
        "my_contribution": (
            "End-to-end Python utility architecture, studio workflow integration, "
            "artist feedback iteration, and production deployment."
        ),
        "architecture_details": [
            "Modular Python architecture separating shot path resolution from actions.",
            "Configurable adapters matching studio directory structures and naming.",
            "Lightweight execution integrated cleanly into daily VFX workflows.",
        ],
        "results_status": (
            "Deployed internally to support daily studio shot workflows."
        ),
        "github_url": None,
    },
    {
        "slug": "custom-file-explorer",
        "title": "Custom File Explorer",
        "category": "Desktop Software",
        "filter_group": "Desktop Software",
        "short_description": (
            "Python-based desktop application built with PyQt/PySide for "
            "structured file and folder navigation and management."
        ),
        "technologies": [
            "Python",
            "PyQt / PySide",
            "Qt Widgets",
            "QTreeView",
            "QFileSystemModel",
        ],
        "image_static_path": "portfolio/images/project-file-explorer.jpg",
        "image_alt": "Architectural visualization representing Custom File Explorer built with Qt",
        "problem_statement": (
            "Standard OS file browsers lack workflow-specific navigation controls "
            "for deeply nested studio and project directory trees."
        ),
        "solution_overview": (
            "Engineered a responsive desktop file explorer in Python using Qt "
            "Model/View architecture pairing QTreeView and QFileSystemModel."
        ),
        "my_contribution": (
            "Desktop UI architecture, Qt Model/View implementation, filesystem "
            "interaction handlers, and usability refinements."
        ),
        "architecture_details": [
            "Qt Model/View pattern pairing QFileSystemModel with customized QTreeView.",
            "Clean Python controller layer isolating UI components from filesystem I/O.",
            "Extensible component layout ready for custom studio metadata hooks.",
        ],
        "results_status": (
            "Built for structured project directory navigation and internal file management."
        ),
        "github_url": None,
    },
    {
        "slug": "shot-output-validation-tool",
        "title": "Shot Output Validation Tool",
        "category": "Pipeline Automation",
        "filter_group": "VFX Pipeline",
        "short_description": (
            "Automated validation tool checking output structure, file naming, "
            "frame ranges, resolution, zero-byte files, empty folders, temporary "
            "files, and file integrity."
        ),
        "technologies": ["Python", "Output Validation", "Pipeline Scripting", "QA Automation"],
        "image_static_path": "portfolio/images/project-shot-validation.jpg",
        "image_alt": "Architectural visualization representing Shot Output Validation Tool",
        "problem_statement": (
            "Manual pre-delivery checks across VFX deliverables are slow and risk "
            "missing naming mismatches, broken frame ranges, zero-byte frames, "
            "empty folders, or stray temporary files."
        ),
        "solution_overview": (
            "Built an automated Python output validation suite inspecting delivery "
            "directory structures, naming conventions, frame sequence continuity, "
            "resolutions, zero-byte files, empty folders, and temporary artifacts."
        ),
        "my_contribution": (
            "Validation rule engineering, automated filesystem and sequence "
            "inspection logic, diagnostic reporting, and production team support."
        ),
        "architecture_details": [
            "Dedicated check modules covering output structure, naming, frame ranges, and resolution.",
            "Automated file integrity sweep catching zero-byte files, empty folders, and temp artifacts.",
            "Integrated with automated server transfers preserving folder trees and permissions.",
        ],
        "results_status": (
            "Actively used in studio production pipelines to verify delivery integrity before handoff."
        ),
        "github_url": None,
    },
    {
        "slug": "attendance-management-application",
        "title": "Attendance Management Application",
        "category": "Business Software",
        "filter_group": "Business Software",
        "short_description": (
            "Internal business application developed to organize employee "
            "attendance records and streamline daily operational tracking."
        ),
        "technologies": ["Python", "SQL", "Relational Database", "Application Development"],
        "image_static_path": "portfolio/images/project-business-suite.jpg",
        "image_alt": "Architectural visualization representing Attendance Management Application",
        "problem_statement": (
            "Tracking daily team attendance across disconnected spreadsheets adds "
            "administrative overhead and complicates consistent operational reporting."
        ),
        "solution_overview": (
            "Developed an internal attendance management application providing "
            "structured record capture, organized relational storage, and clear workflows."
        ),
        "my_contribution": (
            "Relational database schema design, application logic implementation, "
            "input validation, and internal workflow tailoring."
        ),
        "architecture_details": [
            "Normalized relational schema capturing daily attendance entries.",
            "Clean separation between business validation, persistence, and views.",
            "Structured for predictable reporting and long-term maintenance.",
        ],
        "results_status": (
            "Developed as an internal operational application for organizing attendance records."
        ),
        "github_url": None,
    },
    {
        "slug": "vendor-client-budget-management",
        "title": "Vendor & Client Budget Management",
        "category": "Business Application",
        "filter_group": "Business Software",
        "short_description": (
            "Business application for managing vendor and client information "
            "alongside structured project budget records."
        ),
        "technologies": ["Python", "SQL / RDBMS", "Business Workflow Architecture"],
        "image_static_path": "portfolio/images/project-business-suite.jpg",
        "image_alt": "Architectural visualization representing Vendor & Client Budget Management",
        "problem_statement": (
            "Managing vendor details, client records, and budget allocations across "
            "fragmented files limits visibility and increases tracking errors."
        ),
        "solution_overview": (
            "Engineered a dedicated business application centralizing vendor/client "
            "profiles and budget records into auditable management workflows."
        ),
        "my_contribution": (
            "Data modeling, core Python application development, budget record "
            "validation, and summary reporting views."
        ),
        "architecture_details": [
            "Relational schema linking vendor profiles, client accounts, and budget lines.",
            "Validation controls enforcing consistent financial record categorization.",
            "Modular codebase engineered to evolve alongside operational growth.",
        ],
        "results_status": (
            "Built to centralize internal vendor/client records and budget tracking."
        ),
        "github_url": None,
    },
]

EXPERIENCE: list[dict[str, Any]] = [
    {
        "role": "Pipeline TD",
        "organization": "Bubble Creations Digital Studios Pvt. Ltd., Pune",
        "period": "Dec 2021 – Present",
        "domain_focus": "Python Software Engineering & VFX Pipeline Automation",
        "summary": (
            "Building Python-based Nuke automation tools, gizmos, Maya plugin "
            "compatibility updates, automated server transfers, output validation "
            "systems, and custom internal applications supporting VFX production."
        ),
        "highlights": [
            "Build Python-based Nuke automation tools, gizmos, and custom applications supporting VFX production.",
            "Maintain Maya plugin compatibility across newer studio software versions.",
            "Automate server transfers while preserving folder structures and file permissions.",
            "Validate output structure, frame ranges, file naming, resolution, empty or temporary files, and output integrity.",
            "Develop custom internal tools and support production teams with technical troubleshooting.",
        ],
        "credits": [],
    },
    {
        "role": "Prep Supervisor",
        "organization": "Bubble Creations Digital Studios Pvt. Ltd., Pune",
        "period": "Jan 2018 – Dec 2021",
        "domain_focus": "Department Leadership & Production Tooling",
        "summary": (
            "Led team operations and artist training, supported production "
            "troubleshooting, and built Nuke automation tools to eliminate "
            "repetitive tasks across major international film and television productions."
        ),
        "highlights": [
            "Led team operations, artist training, and department quality standards.",
            "Supported production troubleshooting and built Nuke tools to reduce repetitive manual tasks.",
            "Coordinated cross-department handoffs and production delivery schedules.",
        ],
        "credits": [
            "Mission: Impossible",
            "The Flash",
            "Arrow",
            "Shazam!",
            "Creed II",
            "Ad Astra",
        ],
    },
    {
        "role": "Paint Supervisor",
        "organization": "Gener8 Digital Media Corp, Pune",
        "period": "Jul 2015 – Dec 2017",
        "domain_focus": "Stereoscopic Supervision & Quality Management",
        "summary": (
            "Supervised stereoscopic paint execution and quality consistency "
            "across major theatrical studio releases."
        ),
        "highlights": [
            "Supervised stereoscopic paint workflows and final quality control on global tentpole features.",
            "Guided artists through complex stereo depth and clean-plate technical challenges.",
        ],
        "credits": ["Batman v Superman", "The Jungle Book", "Wonder Woman"],
    },
    {
        "role": "Paint Lead",
        "organization": "Bubble Creations Digital Studios Pvt. Ltd.",
        "period": "Mar 2014 – Jul 2015",
        "domain_focus": "Paint Workflow Coordination & Deliverables",
        "summary": (
            "Coordinated paint workflows, artist teams, and production deliverables "
            "to meet studio quality and schedule milestones."
        ),
        "highlights": [
            "Coordinated paint workflows, artists, and daily production deliverables.",
            "Maintained consistent shot quality reviews and cross-department handoffs.",
        ],
        "credits": [],
    },
    {
        "role": "Roto Co-Lead",
        "organization": "Bubble Creations Digital Studios Pvt. Ltd., Pune",
        "period": "Mar 2013 – Mar 2014",
        "domain_focus": "Rotoscope Production & Team Coordination",
        "summary": (
            "Supported VFX shot production through precision rotoscope work "
            "while co-leading daily team coordination."
        ),
        "highlights": [
            "Performed rotoscope tasks supporting VFX shot production schedules.",
            "Assisted team coordination and shot review consistency across departments.",
        ],
        "credits": [],
    },
    {
        "role": "Roto & Paint Artist",
        "organization": "Prime Focus, Mumbai",
        "period": "Apr 2010 – Mar 2013",
        "domain_focus": "Stereoscopic & VFX Production",
        "summary": (
            "Executed stereoscopic and VFX roto and paint shots for major "
            "international theatrical productions."
        ),
        "highlights": [
            "Worked on stereoscopic and VFX shot production for global studio releases.",
            "Delivered high-precision roto and paint shots under theatrical delivery schedules.",
        ],
        "credits": [
            "Thor: The Dark World",
            "Captain America: The Winter Soldier",
        ],
    },
]

EDUCATION: list[dict[str, str]] = [
    {
        "degree": "Bachelor of Computer Applications (BCA) — Pursuing, Semester 5",
        "institution": (
            "Symbiosis International (Deemed University), Symbiosis School for "
            "Online and Digital Learning (SSODL), Pune"
        ),
        "status": "In Progress · Online Programme",
        "notes": (
            "Coursework spanning Python software development, OOP, data "
            "structures & algorithms, RDBMS/SQL, software testing, web "
            "technologies, Linux shell scripting, networking, and cloud computing."
        ),
    },
    {
        "degree": "Advanced Diploma in 3D Animation & Visual Effects",
        "institution": "MAAC, Pune",
        "status": "Completed · 3-Year Programme",
        "notes": (
            "3-year production programme covering visual effects pipelines, "
            "compositing, 3D fundamentals, and studio workflows."
        ),
    },
    {
        "degree": "H.S.C. (2007) & S.S.C. (2005)",
        "institution": "P.N. College, Pusad · Shivaji High School, Pusad",
        "status": "Completed",
        "notes": "Higher Secondary and Secondary School credentials.",
    },
]

BCA_COURSEWORK: list[dict[str, Any]] = [
    {
        "category": "Programming & Software Engineering",
        "courses": [
            "Introduction to Python",
            "Advanced Programming in Python",
            "Object Oriented Programming",
            "Data Structures & Advanced Algorithms",
            "Software Engineering Practices",
            "Software Testing",
            "Computational Thinking",
        ],
    },
    {
        "category": "Web & Enterprise Development",
        "courses": [
            "Web Technologies",
            "Web Development using Python",
            "PHP",
            "Introduction to Java Enterprise Framework",
        ],
    },
    {
        "category": "Database & Analytics",
        "courses": [
            "Relational Database Management System",
            "SQL Programming",
            "Data Analytics using MS-Excel",
            "Foundations of Data Warehousing & Data Mining",
            "Big Data Analytics",
        ],
    },
    {
        "category": "Systems, Cloud & Security",
        "courses": [
            "Introduction to Operating System",
            "Linux Shell Scripting",
            "Network Essentials",
            "Network Security Essentials",
            "Introduction to Cloud Computing",
        ],
    },
]


def get_project_by_slug(slug: str) -> dict[str, Any] | None:
    """Return a single project dictionary matching the given URL slug."""
    for project in PROJECTS:
        if project["slug"] == slug:
            return project
    return None
