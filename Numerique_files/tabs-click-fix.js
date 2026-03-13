/**
 * Manual Tab Click Handler - Ensures tabs work properly
 * This script adds click functionality to Elementor tabs
 */

(function() {
    'use strict';

    function initTabClicks() {
        // Find all tab widgets
        const tabWidgets = document.querySelectorAll('.elementor-widget-tabs');

        tabWidgets.forEach(function(widget) {
            // Get all tab titles
            const desktopTitles = widget.querySelectorAll('.elementor-tab-desktop-title');
            const mobileTitles = widget.querySelectorAll('.elementor-tab-mobile-title');
            const allTitles = [...desktopTitles, ...mobileTitles];

            // Add click handler to each tab title
            allTitles.forEach(function(title) {
                // Remove existing listeners to prevent duplicates
                const newTitle = title.cloneNode(true);
                title.parentNode.replaceChild(newTitle, title);

                // Add click event
                newTitle.addEventListener('click', function(e) {
                    e.preventDefault();
                    const tabNumber = this.getAttribute('data-tab');
                    switchTab(widget, tabNumber);
                });

                // Add Enter key support for accessibility
                newTitle.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        const tabNumber = this.getAttribute('data-tab');
                        switchTab(widget, tabNumber);
                    }
                });
            });
        });
    }

    function switchTab(widget, tabNumber) {
        // Get all tabs and contents
        const allTitles = widget.querySelectorAll('.elementor-tab-title');
        const allContents = widget.querySelectorAll('.elementor-tab-content');

        // Deactivate all tabs
        allTitles.forEach(function(title) {
            title.classList.remove('elementor-active');
            title.setAttribute('aria-selected', 'false');
            title.setAttribute('tabindex', '-1');
        });

        allContents.forEach(function(content) {
            content.classList.remove('elementor-active');
            content.style.display = 'none';
            content.setAttribute('hidden', 'hidden');
        });

        // Activate selected tab
        const selectedTitles = widget.querySelectorAll('[data-tab="' + tabNumber + '"]');
        const selectedContent = widget.querySelector('#elementor-tab-content-' + widget.querySelector('.elementor-tab-title').getAttribute('aria-controls').split('-').slice(-1)[0].split('')[0] + tabNumber);

        // If we can't find by ID, try by data-tab
        let contentToShow = selectedContent;
        if (!contentToShow) {
            contentToShow = widget.querySelector('.elementor-tab-content[data-tab="' + tabNumber + '"]');
        }

        selectedTitles.forEach(function(title) {
            title.classList.add('elementor-active');
            title.setAttribute('aria-selected', 'true');
            title.setAttribute('tabindex', '0');
        });

        if (contentToShow) {
            contentToShow.classList.add('elementor-active');
            contentToShow.style.display = 'block';
            contentToShow.removeAttribute('hidden');

            // Trigger animations if any
            const animatedElements = contentToShow.querySelectorAll('[data-settings*="animation"]');
            animatedElements.forEach(function(el) {
                const animations = el.className.match(/animate__\w+/g);
                if (animations) {
                    animations.forEach(function(anim) {
                        el.classList.remove(anim);
                        // Force reflow
                        void el.offsetWidth;
                        el.classList.add(anim);
                    });
                }
            });

            // Trigger window resize for any sliders/carousels inside tabs
            setTimeout(function() {
                window.dispatchEvent(new Event('resize'));
            }, 100);
        }

        console.log('Switched to tab:', tabNumber);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTabClicks);
    } else {
        initTabClicks();
    }

    // Also run after a short delay to catch dynamically loaded content
    setTimeout(initTabClicks, 500);
    setTimeout(initTabClicks, 1000);

    // Re-initialize if new content is added
    const observer = new MutationObserver(function(mutations) {
        let shouldReinit = false;
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1 && (
                        node.classList && node.classList.contains('elementor-widget-tabs') ||
                        node.querySelector && node.querySelector('.elementor-widget-tabs')
                    )) {
                        shouldReinit = true;
                    }
                });
            }
        });
        if (shouldReinit) {
            setTimeout(initTabClicks, 100);
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log('Tab click handler initialized ✓');
})();
