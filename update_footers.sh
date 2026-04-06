#!/bin/bash

# Script to update footer navigation menus across all HTML pages

# Footer menu pattern to find and replace
OLD_MENU='<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1483"><a href="about-us.html" class="elementor-item"><span class="vamtam-nav-text-wrap"><span class="vamtam-nav-text">About<\/span><\/span><\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1482"><a href="blog.html" class="elementor-item"><span class="vamtam-nav-text-wrap"><span class="vamtam-nav-text">Blog<\/span><\/span><\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1481"><a href="#" class="elementor-item"><span class="vamtam-nav-text-wrap"><span class="vamtam-nav-text">Careers<\/span><\/span><\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1480"><a href="team.html" class="elementor-item"><span class="vamtam-nav-text-wrap"><span class="vamtam-nav-text">Team<\/span><\/span><\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1477"><a href="portfolio.html" class="elementor-item"><span class="vamtam-nav-text-wrap"><span class="vamtam-nav-text">Portfolio<\/span><\/span><\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1487"><a href="#" class="elementor-item"><span class="vamtam-nav-text-wrap"><span class="vamtam-nav-text">Awards<\/span><\/span><\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1478"><a href="contact.html" class="elementor-item"><span class="vamtam-nav-text-wrap"><span class="vamtam-nav-text">Contact<\/span><\/span><\/a><\/li>'

NEW_MENU='<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home"><a href="index.html" class="elementor-item"><span class="vamtam-nav-text-wrap"><span class="vamtam-nav-text">HOME<\/span><\/span><\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-services"><a href="services.html" class="elementor-item"><span class="vamtam-nav-text-wrap"><span class="vamtam-nav-text">SERVICES<\/span><\/span><\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1483"><a href="about-us.html" class="elementor-item"><span class="vamtam-nav-text-wrap"><span class="vamtam-nav-text">ABOUT US<\/span><\/span><\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1477"><a href="portfolio.html" class="elementor-item"><span class="vamtam-nav-text-wrap"><span class="vamtam-nav-text">PORTFOLIO<\/span><\/span><\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1480"><a href="team.html" class="elementor-item"><span class="vamtam-nav-text-wrap"><span class="vamtam-nav-text">TEAM<\/span><\/span><\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-testimonials"><a href="testimonials.html" class="elementor-item"><span class="vamtam-nav-text-wrap"><span class="vamtam-nav-text">TESTIMONIALS<\/span><\/span><\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-faqs"><a href="faq.html" class="elementor-item"><span class="vamtam-nav-text-wrap"><span class="vamtam-nav-text">FAQS<\/span><\/span><\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1478"><a href="contact.html" class="elementor-item"><span class="vamtam-nav-text-wrap"><span class="vamtam-nav-text">CONTACT<\/span><\/span><\/a><\/li>'

# Mobile menu pattern
OLD_MOBILE_MENU='<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1483"><a href="about-us.html" class="elementor-item" tabindex="-1">About<\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1482"><a href="blog.html" class="elementor-item" tabindex="-1">Blog<\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1481"><a href="#" class="elementor-item" tabindex="-1">Careers<\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1480"><a href="team.html" class="elementor-item" tabindex="-1">Team<\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1477"><a href="portfolio.html" class="elementor-item" tabindex="-1">Portfolio<\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1487"><a href="#" class="elementor-item" tabindex="-1">Awards<\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1478"><a href="contact.html" class="elementor-item" tabindex="-1">Contact<\/a><\/li>'

NEW_MOBILE_MENU='<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home"><a href="index.html" class="elementor-item" tabindex="-1">HOME<\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-services"><a href="services.html" class="elementor-item" tabindex="-1">SERVICES<\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1483"><a href="about-us.html" class="elementor-item" tabindex="-1">ABOUT US<\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1477"><a href="portfolio.html" class="elementor-item" tabindex="-1">PORTFOLIO<\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1480"><a href="team.html" class="elementor-item" tabindex="-1">TEAM<\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-testimonials"><a href="testimonials.html" class="elementor-item" tabindex="-1">TESTIMONIALS<\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-faqs"><a href="faq.html" class="elementor-item" tabindex="-1">FAQS<\/a><\/li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1478"><a href="contact.html" class="elementor-item" tabindex="-1">CONTACT<\/a><\/li>'

for file in *.html; do
    if [ "$file" != "index.html" ] && [ "$file" != "index_backup.html" ]; then
        echo "Updating $file..."
        perl -i -0pe "s/$OLD_MENU/$NEW_MENU/gs" "$file"
        perl -i -0pe "s/$OLD_MOBILE_MENU/$NEW_MOBILE_MENU/gs" "$file"
    fi
done

echo "Footer navigation updated on all pages!"
