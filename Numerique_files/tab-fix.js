// Force active tab content to be visible - runs AFTER all other scripts
(function() {
    function ensureTabsVisible() {
        // Find all tab widgets
        var tabWidgets = document.querySelectorAll('.elementor-widget-tabs');

        tabWidgets.forEach(function(widget) {
            // Get all tab titles and content
            var tabTitles = widget.querySelectorAll('.elementor-tab-title');
            var tabContents = widget.querySelectorAll('.elementor-tab-content');

            // Check if any tab is already active
            var hasActive = widget.querySelector('.elementor-tab-content.elementor-active');

            if (!hasActive && tabTitles.length > 0 && tabContents.length > 0) {
                // No active tab found - activate the first one
                var firstTitle = tabTitles[0];
                var firstContent = tabContents[0];

                // Add active class
                firstTitle.classList.add('elementor-active');
                firstContent.classList.add('elementor-active');

                // Set attributes
                firstTitle.setAttribute('aria-selected', 'true');
                firstTitle.setAttribute('aria-expanded', 'true');
            }

            // Now show all active tabs
            var activeTabs = widget.querySelectorAll('.elementor-tab-content.elementor-active');
            activeTabs.forEach(function(tab) {
                tab.style.setProperty('display', 'block', 'important');
                tab.style.setProperty('visibility', 'visible', 'important');
                tab.style.setProperty('opacity', '1', 'important');
                tab.removeAttribute('hidden');
            });
        });
    }

    // Run immediately
    ensureTabsVisible();

    // Run after delays to catch any dynamic loading
    setTimeout(ensureTabsVisible, 50);
    setTimeout(ensureTabsVisible, 200);
    setTimeout(ensureTabsVisible, 500);
    setTimeout(ensureTabsVisible, 1000);
    setTimeout(ensureTabsVisible, 2000);

    // Watch for DOM changes and re-apply if needed
    var observer = new MutationObserver(function(mutations) {
        var needsUpdate = false;
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                var target = mutation.target;
                if (target.classList.contains('elementor-tab-content') &&
                    target.classList.contains('elementor-active')) {
                    needsUpdate = true;
                }
            }
        });
        if (needsUpdate) {
            ensureTabsVisible();
        }
    });

    // Observe all tab widgets
    document.querySelectorAll('.elementor-widget-tabs').forEach(function(widget) {
        observer.observe(widget, {
            attributes: true,
            subtree: true,
            attributeFilter: ['class', 'style', 'hidden']
        });
    });
})();
