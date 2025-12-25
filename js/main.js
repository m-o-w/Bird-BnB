// Main JavaScript for Bird BnB website

// Create falling feathers
function createFeathers() {
    const container = document.getElementById('feather-container');
    if (!container) return;
    
    const featherCount = CONFIG.animations.featherCount;
    const minDuration = CONFIG.animations.featherMinDuration;
    const maxDuration = CONFIG.animations.featherMaxDuration;

    for (let i = 0; i < featherCount; i++) {
        const feather = document.createElement('div');
        feather.classList.add('feather');
        
        // Random starting position and delay
        feather.style.left = Math.random() * 100 + 'vw';
        feather.style.animationName = 'drift';
        feather.style.animationDuration = (Math.random() * (maxDuration - minDuration) + minDuration) + 's';
        feather.style.animationDelay = (Math.random() * 5) + 's';
        
        container.appendChild(feather);
    }
}

// Mobile Menu Toggle
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    const menu = document.getElementById('mobile-menu');
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (menu) {
                menu.classList.add('hidden'); // Close mobile menu if open
            }
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    createFeathers();
    initMobileMenu();
    initSmoothScroll();
});

