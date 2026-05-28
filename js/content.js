// Content population script - populates dynamic content from CONFIG

// Populate hero section
function populateHero() {
    if (typeof CONFIG === 'undefined') return;
    
    const hero = CONFIG.hero;
    const contact = CONFIG.contact;
    
    const heroBadge = document.getElementById('hero-badge');
    if (heroBadge && hero.badge) {
        heroBadge.textContent = hero.badge;
    }
    
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle && hero.title) {
        heroTitle.innerHTML = hero.title;
    }
    
    const heroDesc = document.getElementById('hero-description');
    if (heroDesc && hero.description) {
        heroDesc.textContent = hero.description;
    }
    
    const heroImage = document.getElementById('hero-image');
    if (heroImage && hero.heroImage) {
        heroImage.src = hero.heroImage;
    }
    
    // Build WhatsApp URL once and apply everywhere
    const whatsappUrl = contact.whatsapp
        ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage || '')}`
        : '#';
    
    // Apply WhatsApp URL to all known WhatsApp links across the site
    [
        'whatsapp-link',
        'nav-whatsapp-link',
        'nav-mobile-whatsapp-link',
        'footer-whatsapp-link',
        'footer-phone-link'
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.href = whatsappUrl;
    });
    
    const whatsappText = document.getElementById('whatsapp-text');
    if (whatsappText && contact.phone) {
        whatsappText.textContent = `WhatsApp ${contact.phone}`;
    }
}

// Populate about section
function populateAbout() {
    if (typeof CONFIG === 'undefined') return;
    
    const about = CONFIG.about;
    const stats = CONFIG.stats;
    
    const aboutBadge = document.getElementById('about-badge');
    if (aboutBadge && about.badge) {
        aboutBadge.textContent = about.badge;
    }
    
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle && about.title) {
        aboutTitle.textContent = about.title;
    }
    
    const aboutDesc1 = document.getElementById('about-desc1');
    if (aboutDesc1 && about.description1) {
        aboutDesc1.innerHTML = about.description1;
    }
    
    const aboutDesc2 = document.getElementById('about-desc2');
    if (aboutDesc2 && about.description2) {
        aboutDesc2.textContent = about.description2;
    }
    
    // Stats
    const statBirds = document.getElementById('stat-birds');
    if (statBirds && stats.birdsSold) {
        statBirds.textContent = stats.birdsSold;
    }
    
    const statOwners = document.getElementById('stat-owners');
    if (statOwners && stats.happyOwners) {
        statOwners.textContent = stats.happyOwners;
    }
    
    const statYears = document.getElementById('stat-years');
    if (statYears && stats.yearsExperience) {
        statYears.textContent = stats.yearsExperience;
    }
    
    const statLocation = document.getElementById('stat-location');
    if (statLocation && stats.specialty) {
        statLocation.textContent = stats.specialty;
    }
    
    // Why Choose Us
    const whyChooseTitle = document.getElementById('why-choose-title');
    if (whyChooseTitle && about.whyChooseUs && about.whyChooseUs.title) {
        whyChooseTitle.textContent = about.whyChooseUs.title;
    }
    
    const whyChooseList = document.getElementById('why-choose-list');
    if (whyChooseList && about.whyChooseUs && about.whyChooseUs.features) {
        whyChooseList.innerHTML = about.whyChooseUs.features.map(feature => `
            <li class="flex items-start gap-3">
                <div class="bg-emerald-100 p-1 rounded-full text-emerald-600 mt-1 shrink-0"><i class="ph-bold ph-check"></i></div>
                <span class="text-gray-700 font-medium">${feature}</span>
            </li>
        `).join('');
    }
}

// Populate services section
function populateServices() {
    if (typeof CONFIG === 'undefined') return;
    
    const services = CONFIG.services;
    
    const servicesTitle = document.getElementById('services-title');
    if (servicesTitle && services.title) {
        servicesTitle.textContent = services.title;
    }
    
    const servicesDesc = document.getElementById('services-description');
    if (servicesDesc && services.description) {
        servicesDesc.textContent = services.description;
    }
    
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid && services.items) {
        servicesGrid.innerHTML = services.items.map(service => {
            const iconBgClass = {
                'orange': 'bg-orange-100 text-orange-600',
                'green': 'bg-green-100 text-green-600',
                'blue': 'bg-blue-100 text-blue-600'
            }[service.iconBg] || 'bg-gray-100 text-gray-600';
            
            return `
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover transition duration-300">
                    <div class="w-14 h-14 ${iconBgClass} rounded-full flex items-center justify-center mb-6">
                        <i class="ph-fill ${service.icon} text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">${service.title}</h3>
                    <p class="text-gray-600">${service.description}</p>
                </div>
            `;
        }).join('');
    }
}

// Populate gallery section
function populateGallery() {
    if (typeof CONFIG === 'undefined') return;
    
    const gallery = CONFIG.gallery;
    
    const galleryTitle = document.getElementById('gallery-title');
    if (galleryTitle && gallery.title) {
        galleryTitle.textContent = gallery.title;
    }
    
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid && gallery.birds) {
        const colors = [
            'bg-emerald-100',
            'bg-pink-100',
            'bg-orange-100',
            'bg-blue-100',
            'bg-purple-100'
        ];

        galleryGrid.innerHTML = gallery.birds.map((bird, index) => {
            const color = colors[index % colors.length];
            const scale = bird.scale || 115;
            const align = bird.align || 'center';
            
            const positionClass = align === 'left'
                ? 'left-0'
                : align === 'right'
                ? 'right-0'
                : 'left-1/2 -translate-x-1/2';

            return `
                <div class="group flex flex-col items-center">
                    <!-- Colored card with bird popping out the top -->
                    <div class="relative w-full h-36 md:h-40 ${color} rounded-2xl shadow-md overflow-visible flex items-end justify-center transition-all duration-500 group-hover:shadow-xl">
                        <img src="${bird.image}" 
                             class="absolute bottom-0 ${positionClass} h-auto max-w-none drop-shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 origin-bottom" 
                             style="width: ${scale}%;"
                             alt="${bird.name}">
                    </div>
                    <span class="mt-4 font-bold text-gray-800 text-center text-sm md:text-base">${bird.name}</span>
                </div>
            `;
        }).join('');
    }
}

// Populate reviews section
function populateReviews() {
    if (typeof CONFIG === 'undefined' || !CONFIG.reviews) return;
    
    const reviews = CONFIG.reviews;
    
    const reviewsTitle = document.getElementById('reviews-title');
    if (reviewsTitle && reviews.title) {
        reviewsTitle.textContent = reviews.title;
    }
    
    const reviewsDesc = document.getElementById('reviews-description');
    if (reviewsDesc && reviews.description) {
        reviewsDesc.textContent = reviews.description;
    }
    
    const reviewsGrid = document.getElementById('reviews-grid');
    if (reviewsGrid && reviews.highlights) {
        reviewsGrid.innerHTML = reviews.highlights.map(highlight => `
            <div class="bg-gradient-to-br from-yellow-50 to-emerald-50 p-6 rounded-2xl border border-emerald-100 shadow-sm">
                <div class="flex items-center gap-1 mb-3">
                    <i class="ph-fill ph-star text-yellow-500"></i>
                    <i class="ph-fill ph-star text-yellow-500"></i>
                    <i class="ph-fill ph-star text-yellow-500"></i>
                    <i class="ph-fill ph-star text-yellow-500"></i>
                    <i class="ph-fill ph-star text-yellow-500"></i>
                </div>
                <h4 class="font-bold text-gray-900 mb-2">${highlight.title}</h4>
                <p class="text-gray-600 text-sm">${highlight.text}</p>
            </div>
        `).join('');
    }
    
    const googleLink = document.getElementById('google-reviews-link');
    if (googleLink && reviews.googleProfileUrl) {
        googleLink.href = reviews.googleProfileUrl;
    }
}

// Populate footer section
function populateFooter() {
    if (typeof CONFIG === 'undefined') return;
    
    const footer = CONFIG.footer;
    const contact = CONFIG.contact;
    
    const footerTitle = document.getElementById('footer-title');
    if (footerTitle && footer.title) {
        footerTitle.textContent = footer.title;
    }
    
    const footerSubtitle = document.getElementById('footer-subtitle');
    if (footerSubtitle && footer.subtitle) {
        footerSubtitle.textContent = footer.subtitle;
    }
    
    const footerPhone = document.getElementById('footer-phone');
    if (footerPhone && contact.phone) {
        footerPhone.textContent = contact.phone;
    }
    
    const footerCopyright = document.getElementById('footer-copyright');
    if (footerCopyright && footer.copyright) {
        footerCopyright.textContent = footer.copyright;
    }
    
    const footerLocation = document.getElementById('footer-location');
    if (footerLocation && footer.locationText) {
        footerLocation.textContent = footer.locationText;
    }
}

// Populate business name
function populateBusinessName() {
    if (typeof CONFIG === 'undefined') return;
    
    const businessName = document.getElementById('business-name');
    if (businessName && CONFIG.business && CONFIG.business.name) {
        businessName.textContent = CONFIG.business.name;
    }
    
    if (CONFIG.business && CONFIG.business.name && CONFIG.business.tagline) {
        document.title = `${CONFIG.business.name} | ${CONFIG.business.tagline}`;
    }
}

// Initialize all content population
document.addEventListener('DOMContentLoaded', () => {
    populateBusinessName();
    populateHero();
    populateAbout();
    populateServices();
    populateGallery();
    populateReviews();
    populateFooter();
});
