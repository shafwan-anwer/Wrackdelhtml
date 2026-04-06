#!/usr/bin/env python3
import re

# Read the file
with open('/Users/ayeshafazly/Wrackdelhtml/services.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Service 1 - Update first service box (Paid search marketing -> Social Media Management)
content = re.sub(
    r'aria-label="Paid search marketing">\s*<i aria-hidden="true" class="vamtamtheme- vamtam-theme-search-marketing"></i>\s*</a>\s*</div>\s*<div class="elementor-icon-box-content">\s*<h5 class="elementor-icon-box-title">\s*</h5>\s*<p class="elementor-icon-box-description">\s*Craft campaigns , built just for your business , to ensure real and quantifiable ROI\.',
    r'aria-label="Social Media Management">\n\t\t\t\t<i aria-hidden="true" class="vamtamtheme- vamtam-theme-social-media"></i>\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t<div class="elementor-icon-box-content">\n\n\t\t\t\t\t\t\t\t<h5 class="elementor-icon-box-title">\n\t\t\t\t\t<a href="#">Social Media Management</a>\n\t\t\t\t</h5>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<p class="elementor-icon-box-description">\n\t\t\t\t\t\tWe help businesses build a strong presence across platforms by creating engaging content, managing accounts, and running effective campaigns. Services include: social media strategy development, content planning and creation, account management, community engagement, and performance tracking.',
    content,
    flags=re.DOTALL
)

# Service 2 - Update SEO service
content = re.sub(
    r'<h5 class="elementor-icon-box-title">\s*<a href="services\.html">Search engine optimization</a>\s*</h5>\s*<p class="elementor-icon-box-description">\s*Maintain your best spot on the search results page, so you can find new customers and re-engage loyal ones\.',
    r'<h5 class="elementor-icon-box-title">\n\t\t\t\t\t<a href="#">Search Engine Optimization (SEO)</a>\n\t\t\t\t</h5>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<p class="elementor-icon-box-description">\n\t\t\t\t\t\tOur SEO strategies help your website rank higher, attract qualified traffic, and build credibility online. Services include: website SEO audits, keyword research and strategy, on-page optimization, technical SEO improvements, and content optimization.',
    content,
    flags=re.DOTALL
)

# Service 3 - Update Email marketing -> Content Creation & Branding
content = re.sub(
    r'aria-label="Email marketing">\s*<i aria-hidden="true" class="vamtamtheme- vamtam-theme-email"></i>\s*</a>\s*</div>\s*<div class="elementor-icon-box-content">\s*<h5 class="elementor-icon-box-title">\s*<a href="services\.html">Email marketing</a>\s*</h5>\s*<p class="elementor-icon-box-description">\s*When it comes to reaching your target audience, you can\'t get much closer than direct to their inboxes\.',
    r'aria-label="Content Creation & Branding">\n\t\t\t\t<i aria-hidden="true" class="vamtamtheme- vamtam-theme-idea"></i>\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t<div class="elementor-icon-box-content">\n\n\t\t\t\t\t\t\t\t<h5 class="elementor-icon-box-title">\n\t\t\t\t\t<a href="#">Content Creation & Branding</a>\n\t\t\t\t</h5>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<p class="elementor-icon-box-description">\n\t\t\t\t\t\tStrong content is the foundation of successful digital marketing. We create compelling visual and written content that tells your brand story. Services include: creative campaign concepts, graphic design and branded visuals, social media content creation, video and short-form content, and brand messaging.',
    content,
    flags=re.DOTALL
)

# Service 4 - Update Conversion rate optimization -> Paid Advertising
content = re.sub(
    r'aria-label="Conversion rate optimization">\s*<i aria-hidden="true" class="vamtamtheme- vamtam-theme-rocket"></i>\s*</a>\s*</div>\s*<div class="elementor-icon-box-content">\s*<h5 class="elementor-icon-box-title">\s*<a href="services\.html">Conversion rate optimization</a>\s*</h5>\s*<p class="elementor-icon-box-description">\s*Craft campaigns , built just for your business , to ensure real and quantifiable ROI\.',
    r'aria-label="Paid Advertising">\n\t\t\t\t<i aria-hidden="true" class="vamtamtheme- vamtam-theme-campaigns"></i>\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t<div class="elementor-icon-box-content">\n\n\t\t\t\t\t\t\t\t<h5 class="elementor-icon-box-title">\n\t\t\t\t\t<a href="#">Paid Advertising</a>\n\t\t\t\t</h5>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<p class="elementor-icon-box-description">\n\t\t\t\t\t\tWe design and manage targeted advertising campaigns that deliver measurable results. Platforms we manage: Facebook & Instagram Ads, Google Ads (Search & Display), YouTube Advertising, retargeting campaigns, and conversion optimization.',
    content,
    flags=re.DOTALL
)

# Service 5 - Update Social media marketing to keep it
content = re.sub(
    r'<h5 class="elementor-icon-box-title">\s*<a href="#">[\s\n]*Social media marketing[\s\n]*</a>\s*</h5>\s*<p class="elementor-icon-box-description">\s*Social Media Management is vital for company and brand awareness',
    r'<h5 class="elementor-icon-box-title">\n\t\t\t\t\t<a href="#">Influencer Marketing</a>\n\t\t\t\t</h5>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<p class="elementor-icon-box-description">\n\t\t\t\t\t\tWe collaborate with carefully selected influencers to amplify your brand reach and build authentic connections. Services include: influencer selection & outreach, campaign planning & execution, content coordination & approvals, and performance tracking & reporting.',
    content,
    flags=re.DOTALL
)

# Service 6 - Update Google shopping -> Website Strategy & Digital Consulting
content = re.sub(
    r'aria-label="Google shopping">\s*<i aria-hidden="true" class="vamtamtheme- vamtam-theme-google"></i>\s*</a>\s*</div>\s*<div class="elementor-icon-box-content">\s*<h5 class="elementor-icon-box-title">\s*<a href="services\.html">Google shopping</a>\s*</h5>\s*<p class="elementor-icon-box-description">\s*Google shopping ads are a no-brainer for any eCommerce company with an online presence wishing to increase sales\.',
    r'aria-label="Website Strategy">\n\t\t\t\t<i aria-hidden="true" class="vamtamtheme- vamtam-theme-puzzle"></i>\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t<div class="elementor-icon-box-content">\n\n\t\t\t\t\t\t\t\t<h5 class="elementor-icon-box-title">\n\t\t\t\t\t<a href="#">Website Strategy & Digital Consulting</a>\n\t\t\t\t</h5>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<p class="elementor-icon-box-description">\n\t\t\t\t\t\tYour website is the center of your digital presence. We help businesses create websites and digital strategies that attract visitors and convert them. Services include: website strategy and planning, conversion optimization, digital marketing consulting, and campaign planning.',
    content,
    flags=re.DOTALL
)

# Service 7 - Keep Influencer marketing box but move it earlier (we already updated service 5)
# Service 8 - Update Amazon shopping -> Analytics & Performance Tracking
content = re.sub(
    r'aria-label="Amazon shopping">\s*<i aria-hidden="true" class="vamtamtheme- vamtam-theme-amazon"></i>\s*</a>\s*</div>\s*<div class="elementor-icon-box-content">\s*<h5 class="elementor-icon-box-title">\s*<a href="services\.html">Amazon shopping</a>\s*</h5>\s*<p class="elementor-icon-box-description">\s*Marketing on Amazon is all about keywords and presentation\.',
    r'aria-label="Analytics & Performance Tracking">\n\t\t\t\t<i aria-hidden="true" class="vamtamtheme- vamtam-theme-chart"></i>\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t<div class="elementor-icon-box-content">\n\n\t\t\t\t\t\t\t\t<h5 class="elementor-icon-box-title">\n\t\t\t\t\t<a href="#">Analytics & Performance Tracking</a>\n\t\t\t\t</h5>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<p class="elementor-icon-box-description">\n\t\t\t\t\t\tWe continuously monitor performance to ensure campaigns are optimized and delivering results. What we track: campaign performance, audience behavior, conversion rates, and ROI and growth insights.',
    content,
    flags=re.DOTALL
)

# Update actual Influencer marketing box to keep title but update description
content = re.sub(
    r'<h5 class="elementor-icon-box-title">\s*<a href="services\.html">Influencer marketing</a>\s*</h5>\s*<p class="elementor-icon-box-description">\s*Grow your brand with the help of our influencers and marketing experts\.',
    r'<h5 class="elementor-icon-box-title">\n\t\t\t\t\t<a href="#">Website Strategy & Digital Consulting</a>\n\t\t\t\t</h5>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<p class="elementor-icon-box-description">\n\t\t\t\t\t\tYour website is the center of your digital presence. We help businesses create websites and digital strategies that attract visitors and convert them into customers. Services include: website strategy and planning, conversion optimization, digital marketing consulting, and campaign planning and analytics.',
    content,
    flags=re.DOTALL
)

# Write the updated content back
with open('/Users/ayeshafazly/Wrackdelhtml/services.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Services updated successfully!")
