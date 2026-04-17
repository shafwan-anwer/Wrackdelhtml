// Simple Mobile Menu - Completely Custom Approach
document.addEventListener('DOMContentLoaded', function() {
    // Fix lazy loaded logo images in mobile header
    fixLazyLoadedLogos();

    if (window.innerWidth <= 1024) {
        console.log('🚀 Starting simple mobile menu initialization...');
        initSimpleMobileMenu();
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth <= 1024) {
            initSimpleMobileMenu();
        }
    });

    function fixLazyLoadedLogos() {
        console.log('🖼️ Fixing lazy-loaded logos...');

        // Find all lazy-loaded images in the mobile header
        const mobileHeader = document.querySelector('.elementor-hidden-desktop');
        if (mobileHeader) {
            const lazyImages = mobileHeader.querySelectorAll('img[data-lazy-src]');
            console.log('Found lazy images:', lazyImages.length);

            lazyImages.forEach(img => {
                const lazySrc = img.getAttribute('data-lazy-src');
                if (lazySrc) {
                    console.log('Loading image:', lazySrc);
                    img.src = lazySrc;
                    img.removeAttribute('data-lazy-src');
                    img.classList.add('lazyloaded');
                }
            });
        }
    }

    function initSimpleMobileMenu() {
        // Fix logos again when menu initializes
        fixLazyLoadedLogos();

        // Create custom mobile menu if it doesn't exist
        if (document.getElementById('custom-mobile-menu')) {
            console.log('⚠️ Custom menu already exists');
            return;
        }

        console.log('✨ Creating custom mobile menu...');

        // Create the mobile menu HTML
        const mobileMenuHTML = `
            <div id="custom-mobile-menu" class="custom-mobile-menu">
                <button class="mobile-menu-close" aria-label="Close menu"></button>
                <div class="custom-mobile-menu-content">
                    <ul class="custom-mobile-nav">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="testimonials.html">Testimonials</a></li>
                        <li><a href="faq.html">FAQs</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="careers.html">Careers</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li class="submenu-parent">
                            <span class="submenu-toggle">Legal ▼</span>
                            <ul class="submenu">
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="terms-conditions.html">Terms & Conditions</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        `;

        // Add menu to body
        document.body.insertAdjacentHTML('beforeend', mobileMenuHTML);
        console.log('✅ Custom menu added to DOM');

        // Close button handler
        const closeBtn = document.querySelector('.mobile-menu-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                const menu = document.getElementById('custom-mobile-menu');
                const overlay = document.querySelector('.mobile-menu-overlay');
                const toggles = document.querySelectorAll('.elementor-menu-toggle');

                menu.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                toggles.forEach(t => t.setAttribute('aria-expanded', 'false'));
                document.body.style.overflow = '';
            });
        }

        // Add hamburger middle bars
        const menuToggles = document.querySelectorAll('.elementor-menu-toggle');
        console.log('🍔 Found hamburger toggles:', menuToggles.length);

        menuToggles.forEach(toggle => {
            if (!toggle.querySelector('.hamburger-middle')) {
                const middleBar = document.createElement('span');
                middleBar.className = 'hamburger-middle';
                toggle.appendChild(middleBar);
            }

            // Remove old event listeners
            const newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);

            // Add click handler
            newToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const menu = document.getElementById('custom-mobile-menu');
                const overlay = document.querySelector('.mobile-menu-overlay');
                const isOpen = menu.classList.contains('active');

                console.log('🎯 Hamburger clicked. Menu is currently:', isOpen ? 'OPEN' : 'CLOSED');

                if (isOpen) {
                    // Close
                    menu.classList.remove('active');
                    if (overlay) overlay.classList.remove('active');
                    this.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                    console.log('❌ Menu closed');
                } else {
                    // Open
                    menu.classList.add('active');
                    if (overlay) overlay.classList.add('active');
                    this.setAttribute('aria-expanded', 'true');
                    document.body.style.overflow = 'hidden';
                    console.log('✅ Menu opened');
                }
            });
        });

        // Handle submenu toggles
        document.querySelectorAll('.submenu-toggle').forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                const submenu = this.nextElementSibling;
                const isOpen = submenu.style.display === 'block';

                if (isOpen) {
                    submenu.style.display = 'none';
                    this.textContent = this.textContent.replace('▲', '▼');
                } else {
                    submenu.style.display = 'block';
                    this.textContent = this.textContent.replace('▼', '▲');
                }
            });
        });

        // Close menu when clicking a link
        document.querySelectorAll('#custom-mobile-menu a').forEach(link => {
            link.addEventListener('click', function() {
                const menu = document.getElementById('custom-mobile-menu');
                const overlay = document.querySelector('.mobile-menu-overlay');
                const toggles = document.querySelectorAll('.elementor-menu-toggle');

                menu.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                toggles.forEach(t => t.setAttribute('aria-expanded', 'false'));
                document.body.style.overflow = '';
            });
        });

        // Close when clicking overlay
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('mobile-menu-overlay')) {
                const menu = document.getElementById('custom-mobile-menu');
                const overlay = document.querySelector('.mobile-menu-overlay');
                const toggles = document.querySelectorAll('.elementor-menu-toggle');

                menu.classList.remove('active');
                overlay.classList.remove('active');
                toggles.forEach(t => t.setAttribute('aria-expanded', 'false'));
                document.body.style.overflow = '';
            }
        });

        console.log('🎉 Simple mobile menu initialization complete!');
    }
});

// Also fix logos on window load (in case DOMContentLoaded was too early)
window.addEventListener('load', function() {
    console.log('🔄 Window loaded - double-checking lazy logos...');
    const mobileHeader = document.querySelector('.elementor-hidden-desktop');
    if (mobileHeader) {
        const lazyImages = mobileHeader.querySelectorAll('img[data-lazy-src]');
        lazyImages.forEach(img => {
            const lazySrc = img.getAttribute('data-lazy-src');
            if (lazySrc) {
                img.src = lazySrc;
                img.removeAttribute('data-lazy-src');
                img.classList.add('lazyloaded');
            }
        });
    }
});
