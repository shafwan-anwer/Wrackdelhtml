// Mobile Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Only run on mobile/tablet devices
    if (window.innerWidth <= 1024) {
        initMobileMenu();
    }

    // Reinitialize on window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            if (window.innerWidth <= 1024) {
                initMobileMenu();
            }
        }, 250);
    });

    function initMobileMenu() {
        console.log('🔧 Initializing mobile menu...');

        // Create overlay if it doesn't exist
        if (!document.querySelector('.mobile-menu-overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'mobile-menu-overlay';
            document.body.appendChild(overlay);
            console.log('✅ Overlay created');
        }

        // Add middle bar to hamburger icons if not already added
        const menuToggles = document.querySelectorAll('.elementor-menu-toggle');
        console.log('📍 Found menu toggles:', menuToggles.length);

        menuToggles.forEach(toggle => {
            if (!toggle.querySelector('.hamburger-middle')) {
                const middleBar = document.createElement('span');
                middleBar.className = 'hamburger-middle';
                toggle.appendChild(middleBar);
            }
        });

        // Handle hamburger menu toggle clicks
        menuToggles.forEach(toggle => {
            // Remove any existing click listeners by cloning
            const newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);

            newToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                const navWidget = this.closest('.elementor-widget-nav-menu');
                const dropdown = navWidget ? navWidget.querySelector('.elementor-nav-menu--dropdown') : null;
                const overlay = document.querySelector('.mobile-menu-overlay');

                console.log('🎯 Toggle clicked. Current state:', isExpanded ? 'OPEN' : 'CLOSED');
                console.log('📦 Dropdown element:', dropdown);
                console.log('🎭 Overlay element:', overlay);

                if (dropdown) {
                    if (isExpanded) {
                        // Close menu
                        console.log('❌ Closing menu...');
                        this.setAttribute('aria-expanded', 'false');
                        dropdown.setAttribute('aria-hidden', 'true');
                        dropdown.style.cssText = 'display: none !important;';
                        if (overlay) overlay.classList.remove('active');
                        document.body.style.overflow = '';
                        console.log('✅ Menu closed');
                    } else {
                        // Open menu - BE VERY AGGRESSIVE
                        console.log('✅ Opening menu...');
                        this.setAttribute('aria-expanded', 'true');
                        dropdown.setAttribute('aria-hidden', 'false');

                        // Force all display properties
                        dropdown.style.cssText = `
                            display: block !important;
                            visibility: visible !important;
                            opacity: 1 !important;
                            position: fixed !important;
                            top: 70px !important;
                            left: 0 !important;
                            right: 0 !important;
                            width: 100vw !important;
                            background: white !important;
                            z-index: 99999 !important;
                            max-height: calc(100vh - 70px) !important;
                            overflow-y: auto !important;
                            padding: 20px 0 !important;
                        `;

                        if (overlay) overlay.classList.add('active');
                        document.body.style.overflow = 'hidden';

                        console.log('✅ Menu opened successfully');
                        console.log('📊 Dropdown styles:', {
                            display: dropdown.style.display,
                            visibility: dropdown.style.visibility,
                            opacity: dropdown.style.opacity,
                            position: dropdown.style.position
                        });
                    }
                } else {
                    console.error('❌ Dropdown not found!');
                }
            });
        });

        // Handle submenu toggles in the dropdown
        setTimeout(function() {
            const submenuLinks = document.querySelectorAll('.elementor-nav-menu--dropdown .has-submenu');
            console.log('Found submenu links:', submenuLinks.length);

            submenuLinks.forEach(link => {
                // Clone to remove existing listeners
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);

                newLink.addEventListener('click', function(e) {
                    const submenu = this.querySelector('.sub-menu');
                    if (submenu) {
                        e.preventDefault();
                        e.stopPropagation();

                        const isExpanded = this.getAttribute('aria-expanded') === 'true';

                        if (isExpanded) {
                            this.setAttribute('aria-expanded', 'false');
                            submenu.setAttribute('aria-hidden', 'true');
                            submenu.style.display = 'none';
                        } else {
                            // Close other submenus first
                            document.querySelectorAll('.elementor-nav-menu--dropdown .sub-menu').forEach(sm => {
                                sm.setAttribute('aria-hidden', 'true');
                                sm.style.display = 'none';
                                sm.parentElement.setAttribute('aria-expanded', 'false');
                            });

                            // Open this submenu
                            this.setAttribute('aria-expanded', 'true');
                            submenu.setAttribute('aria-hidden', 'false');
                            submenu.style.display = 'block';
                        }
                    }
                });
            });
        }, 100);

        // Close menu when clicking a regular (non-submenu) link
        document.addEventListener('click', function(e) {
            const clickedItem = e.target.closest('.elementor-item');
            if (clickedItem && !clickedItem.classList.contains('has-submenu')) {
                // This is a regular link, close the menu
                const overlay = document.querySelector('.mobile-menu-overlay');
                menuToggles.forEach(toggle => {
                    const navWidget = toggle.closest('.elementor-widget-nav-menu');
                    const dropdown = navWidget ? navWidget.querySelector('.elementor-nav-menu--dropdown') : null;

                    if (dropdown && toggle.getAttribute('aria-expanded') === 'true') {
                        toggle.setAttribute('aria-expanded', 'false');
                        dropdown.setAttribute('aria-hidden', 'true');
                        dropdown.style.cssText = 'display: none !important;';
                        if (overlay) overlay.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            }
        });

        // Close menu when clicking overlay or outside
        document.addEventListener('click', function(e) {
            const overlay = document.querySelector('.mobile-menu-overlay');

            // Close if clicking overlay
            if (e.target.classList.contains('mobile-menu-overlay')) {
                console.log('🎭 Overlay clicked, closing menu');
                document.querySelectorAll('.elementor-menu-toggle').forEach(toggle => {
                    const navWidget = toggle.closest('.elementor-widget-nav-menu');
                    const dropdown = navWidget ? navWidget.querySelector('.elementor-nav-menu--dropdown') : null;

                    if (dropdown && toggle.getAttribute('aria-expanded') === 'true') {
                        toggle.setAttribute('aria-expanded', 'false');
                        dropdown.setAttribute('aria-hidden', 'true');
                        dropdown.style.cssText = 'display: none !important;';
                        if (overlay) overlay.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            }

            // Close if clicking outside menu widget
            if (!e.target.closest('.elementor-widget-nav-menu') && !e.target.classList.contains('mobile-menu-overlay')) {
                document.querySelectorAll('.elementor-menu-toggle').forEach(toggle => {
                    const navWidget = toggle.closest('.elementor-widget-nav-menu');
                    const dropdown = navWidget ? navWidget.querySelector('.elementor-nav-menu--dropdown') : null;

                    if (dropdown && toggle.getAttribute('aria-expanded') === 'true') {
                        toggle.setAttribute('aria-expanded', 'false');
                        dropdown.setAttribute('aria-hidden', 'true');
                        dropdown.style.cssText = 'display: none !important;';
                        if (overlay) overlay.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            }
        });
    }
});
