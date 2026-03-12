#!/usr/bin/env python3
"""
Script to update navigation menus in HTML files.
This script replaces old navigation structures with new ones.
"""

import re
import sys

# Define the old patterns to replace (for instances 2-6 in each file)
# Pattern 1: Services as single item + About Us dropdown + Work dropdown
old_pattern_1 = r'(<li class="mega-menu-solutions menu-item menu-item-type-post_type menu-item-object-page menu-item-121"><a href="services\.html" class="elementor-item"[^>]*>(?:<span[^>]*>)?(?:<span[^>]*>)?Services(?:</span>)?(?:</span>)?</a></li>\s*<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-135"><a href="about-us\.html" class="elementor-item has-submenu"[^>]*>(?:<span[^>]*>)?(?:<span[^>]*>)?About Us(?:</span>)?(?:</span>)?<span class="sub-arrow"><i[^>]*></i></span></a>\s*<ul class="sub-menu elementor-nav-menu--dropdown"[^>]*>.*?</ul>\s*</li>\s*<li class="menu-item menu-item-type-post_type menu-item-object-page[^"]*menu-item-(?:has-children )?menu-item-3226"><a href="portfolio\.html"[^>]*>(?:<span[^>]*>)?(?:<span[^>]*>)?Work(?:</span>)?(?:</span>)?<span class="sub-arrow"><i[^>]*></i></span></a>\s*<ul class="sub-menu elementor-nav-menu--dropdown"[^>]*>.*?</ul>\s*</li>\s*<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-119"><a href="contact\.html" class="elementor-item"[^>]*>(?:<span[^>]*>)?(?:<span[^>]*>)?Contact(?:</span>)?(?:</span>)?</a></li>)'

def read_file(filepath):
    """Read file content."""
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(filepath, content):
    """Write content to file."""
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    if len(sys.argv) < 2:
        print("Usage: python update_navigation.py <file1> <file2> ...")
        sys.exit(1)

    files = sys.argv[1:]

    for filepath in files:
        print(f"Processing {filepath}...")
        content = read_file(filepath)

        # Count replacements
        initial_length = len(content)

        # Simple approach: we'll manually identify and replace sections
        # This would be better done with targeted edits via the tool

        print(f"  File size: {initial_length} bytes")
        print(f"  Skipping automated regex approach - using manual edits instead")

    print("Script complete. Use manual Edit tool for precise updates.")

if __name__ == "__main__":
    main()
