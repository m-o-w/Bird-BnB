// Content population script - populates dynamic content from CONFIG

// Populate hero section
function populateHero() {
    if (typeof CONFIG === 'undefined') return;
    
    const hero = CONFIG.hero;
    const contact = CONFIG.contact;
    
    // Hero badge
    const heroBadge = document.getElementById('hero-badge');
    if (heroBadge && hero.badge) {
        heroBadge.textContent = hero.badge;
    }
    
    // Hero title
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle && hero.title) {
        heroTitle.innerHTML = hero.title;
    }
    
    // Hero description
    const heroDesc = document.getElementById('hero-description');
    if (heroDesc && hero.description) {
        heroDesc.textContent = hero.description;
    }
    
    // Hero image
    const heroImage = document.getElementById('hero-image');
    if (heroImage && hero.heroImage) {
        heroImage.src = hero.heroImage;
    }
    
    // WhatsApp link
    const whatsappLink = document.getElementById('whatsapp-link');
    const whatsappText = document.getElementById('whatsapp-text');
    if (whatsappLink && contact.whatsapp) {
        const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;
        whatsappLink.href = whatsappUrl;
    }
    if (whatsappText && contact.phone) {
        whatsappText.textContent = `WhatsApp ${contact.phone}`;
    }
}

// Populate about section
function populateAbout() {
    if (typeof CONFIG === 'undefined') return;
    
    const about = CONFIG.about;
    const stats = CONFIG.stats;
    
    // About badge
    const aboutBadge = document.getElementById('about-badge');
    if (aboutBadge && about.badge) {
        aboutBadge.textContent = about.badge;
    }
    
    // About title
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle && about.title) {
        aboutTitle.textContent = about.title;
    }
    
    // About descriptions
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
    if (statBirds && stats.birdsCaredFor) {
        statBirds.textContent = stats.birdsCaredFor;
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
    if (statLocation && stats.location) {
        statLocation.textContent = stats.location;
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
    
    // Services title
    const servicesTitle = document.getElementById('services-title');
    if (servicesTitle && services.title) {
        servicesTitle.textContent = services.title;
    }
    
    // Services description
    const servicesDesc = document.getElementById('services-description');
    if (servicesDesc && services.description) {
        servicesDesc.textContent = services.description;
    }
    
    // Services grid
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
    
    // Gallery title
    const galleryTitle = document.getElementById('gallery-title');
    if (galleryTitle && gallery.title) {
        galleryTitle.textContent = gallery.title;
    }
    
    // Gallery grid
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid && gallery.birds) {
        galleryGrid.innerHTML = gallery.birds.map(bird => `
            <div class="group relative overflow-hidden rounded-2xl aspect-square shadow-md">
                <img src="${bird.image}" class="object-cover w-full h-full transform group-hover:scale-110 transition duration-500" alt="${bird.name}">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <span class="text-white font-bold text-lg">${bird.name}</span>
                </div>
            </div>
        `).join('') + `
            <div class="group relative overflow-hidden rounded-2xl aspect-square shadow-md bg-emerald-100 flex items-center justify-center">
                <div class="text-center p-4">
                    <i class="ph-fill ph-plus-circle text-4xl text-emerald-500 mb-2"></i>
                    <p class="font-bold text-emerald-800">And Many More!</p>
                </div>
            </div>
        `;
    }
}

// Populate liability section
function populateLiability() {
    if (typeof CONFIG === 'undefined') return;
    
    const liability = CONFIG.liability;
    
    // Liability title
    const liabilityTitle = document.getElementById('liability-title');
    if (liabilityTitle && liability.title) {
        liabilityTitle.textContent = liability.title;
    }
    
    // Liability description
    const liabilityDesc = document.getElementById('liability-description');
    if (liabilityDesc && liability.description) {
        liabilityDesc.textContent = liability.description;
    }
    
    // Liability terms
    const liabilityTerms = document.getElementById('liability-terms');
    if (liabilityTerms && liability.terms) {
        liabilityTerms.innerHTML = liability.terms.map(term => `
            <li><strong>${term.title}</strong> ${term.text}</li>
        `).join('');
    }
    
    // Liability disclaimer
    const liabilityDisclaimer = document.getElementById('liability-disclaimer');
    if (liabilityDisclaimer && liability.disclaimer) {
        liabilityDisclaimer.textContent = liability.disclaimer;
    }
}

// Populate footer section
function populateFooter() {
    if (typeof CONFIG === 'undefined') return;
    
    const footer = CONFIG.footer;
    const contact = CONFIG.contact;
    
    // Footer title
    const footerTitle = document.getElementById('footer-title');
    if (footerTitle && footer.title) {
        footerTitle.textContent = footer.title;
    }
    
    // Footer subtitle
    const footerSubtitle = document.getElementById('footer-subtitle');
    if (footerSubtitle && footer.subtitle) {
        footerSubtitle.textContent = footer.subtitle;
    }
    
    // Footer phone
    const footerPhone = document.getElementById('footer-phone');
    if (footerPhone && contact.phone) {
        footerPhone.textContent = contact.phone;
    }
    
    // Footer WhatsApp link
    const footerWhatsappLink = document.getElementById('footer-whatsapp-link');
    if (footerWhatsappLink && contact.whatsapp) {
        const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;
        footerWhatsappLink.href = whatsappUrl;
    }
    
    // Footer copyright
    const footerCopyright = document.getElementById('footer-copyright');
    if (footerCopyright && footer.copyright) {
        footerCopyright.textContent = footer.copyright;
    }
    
    // Footer location
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
    
    // Update page title
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
    populateLiability();
    populateFooter();
});

