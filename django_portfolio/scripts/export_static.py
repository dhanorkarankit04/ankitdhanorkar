#!/usr/bin/env python3
"""
Standalone helper script to build the static GitHub Pages site from Django.

Usage:
    python scripts/export_static.py --output _site
"""

from __future__ import annotations

import os
from pathlib import Path
import sys


def main() -> None:
    project_root = Path(__file__).resolve().parent.parent
    sys.path.insert(0, str(project_root))
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

    import django
    from django.core.management import execute_from_command_line

    django.setup()
    execute_from_command_line(["manage.py", "export_static", *sys.argv[1:]])


if __name__ == "__main__":
    main()
