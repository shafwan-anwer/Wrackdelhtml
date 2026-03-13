/**
 * Header Scroll Animation
 * Adds white background to header on scroll
 */

(function() {
    'use strict';

    // Get header element
    const header = document.querySelector('.elementor-location-header');
    const headerSection = document.querySelector('.vamtam-sticky-header--transparent-header');

    if (!header || !headerSection) {
        console.warn('Header elements not found');
        return;
    }

    // Threshold for when to add background (in pixels)
    const SCROLL_THRESHOLD = 50;

    // Track scroll state to optimize performance
    let isScrolled = false;
    let ticking = false;

    /**
     * Add or remove scrolled class based on scroll position
     */
    function updateHeaderState() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > SCROLL_THRESHOLD && !isScrolled) {
            // User scrolled down
            header.classList.add('header-scrolled');
            headerSection.classList.add('header-scrolled');
            isScrolled = true;
        } else if (scrollTop <= SCROLL_THRESHOLD && isScrolled) {
            // User scrolled to top
            header.classList.remove('header-scrolled');
            headerSection.classList.remove('header-scrolled');
            isScrolled = false;
        }

        ticking = false;
    }

    /**
     * Request animation frame for smooth performance
     */
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateHeaderState);
            ticking = true;
        }
    }

    // Listen to scroll events
    window.addEventListener('scroll', requestTick, { passive: true });

    // Check initial state
    updateHeaderState();

})();
