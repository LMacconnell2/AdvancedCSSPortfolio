/**
 * Theme Management System
 * Handles automatic theme detection, manual toggle, and preference persistence
 */

/**
 * Theme manager object containing all theme-related functionality
 */
const themeManager = {
    getStoredTheme: () => localStorage.getItem('theme'),

    setStoredTheme: (theme) => localStorage.setItem('theme', theme),

    getSystemPreference: () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },

    getPreferredTheme: () => themeManager.getStoredTheme() || themeManager.getSystemPreference(),

    applyTheme: (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
        }
        themeManager.updateToggleButton(theme);
    },

    updateToggleButton: (theme) => {
        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            // UPDATED: Selectors match your HTML nested spans
            const lightIcon = toggleButton.querySelector('.theme-toggle__theme-icon--light');
            const darkIcon = toggleButton.querySelector('.theme-toggle__theme-icon--dark');

            if (theme === 'dark') {
                if (lightIcon) lightIcon.style.display = 'inline';
                if (darkIcon) darkIcon.style.display = 'none';
            } else {
                if (lightIcon) lightIcon.style.display = 'none';
                if (darkIcon) darkIcon.style.display = 'inline';
            }
            toggleButton.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        }
    },

    toggleTheme: () => {
        const currentTheme = themeManager.getPreferredTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        themeManager.setStoredTheme(newTheme);
        themeManager.applyTheme(newTheme);
        return newTheme;
    },

    init: () => {
        themeManager.applyTheme(themeManager.getPreferredTheme());
        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', themeManager.toggleTheme);
        }
    }
};

/**
 * Filter functionality for product categories
 */
const filterManager = {
    filterProducts: (category) => {
        // UPDATED: Matches BEM class .products__product-card
        const products = document.querySelectorAll('.products__product-card');

        products.forEach((product) => {
            if (category === 'all' || product.dataset.category === category) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    },

    /**
     * Update active state of filter buttons
     * @param {HTMLElement} activeButton The button that was clicked
     */
    updateActiveButton: (activeButton) => {
        const buttons = document.querySelectorAll('[data-filter]');
        buttons.forEach((button) => {
            button.classList.remove('filters__filter-button--active');
            button.classList.add('filters__filter-button');
        });
        activeButton.classList.add('filters__filter-button--active');
    },

    /**
     * Initialize filter system
     * Sets up click handlers for all filter buttons
     */
    init: () => {
        // UPDATED: Targeting buttons with the data-filter attribute
        const filterButtons = document.querySelectorAll('[data-filter]');

        filterButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const category = button.dataset.filter;
                filterManager.filterProducts(category);
                filterManager.updateActiveButton(button);
            });
        });
    }
};

themeManager.init();
filterManager.init();
