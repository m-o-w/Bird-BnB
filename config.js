// Configuration file for Bird BnB website
const CONFIG = {
    // Business Information
    business: {
        name: "Bird BnB",
        tagline: "Pet Bird Boarding & Care",
        location: "Delhi",
        country: "India"
    },

    // Contact Information
    contact: {
        phone: "9643394044",
        whatsapp: "919643394044",
        whatsappMessage: "Hi, I'm interested in boarding my bird."
    },

    // Statistics
    stats: {
        birdsCaredFor: "500+",
        happyOwners: "200+",
        yearsExperience: "5+",
        location: "Delhi"
    },

    // Hero Section
    hero: {
        badge: "🐦 Pet Bird Boarding & Care",
        title: "A Safe <span class=\"text-emerald-500\">Nest</span> Away From Home",
        description: "Leaving town? Let your feathered friends stay in our temperature-controlled, loving environment. Specialized care for all parrots and pet birds.",
        heroImage: "https://images.unsplash.com/photo-1552728089-57bdde30beb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },

    // About Section
    about: {
        badge: "About Us",
        title: "Delhi's Trusted Bird Boarding Service",
        description1: "Located in the heart of Delhi, <strong>Bird BnB</strong> was founded by passionate bird lovers who understand the unique needs of avian companions. We've created a sanctuary where your feathered friends receive the same love and attention they get at home.",
        description2: "Our team is trained in avian care, understanding the specific requirements of different bird species. From the right temperature settings to familiar feeding routines, we ensure your bird's stay is comfortable and stress-free.",
        whyChooseUs: {
            title: "Why Choose Us?",
            features: [
                "Climate-controlled aviary environments",
                "Personalized diet as per your instructions",
                "Daily health monitoring & updates",
                "Experienced avian care specialists",
                "Safe, clean & stress-free housing",
                "Convenient Delhi location"
            ]
        }
    },

    // Services Section
    services: {
        title: "Why Birds Love Us",
        description: "We understand that birds aren't just pets; they are family. Our facility in Delhi is designed specifically for avian needs.",
        items: [
            {
                icon: "ph-sun",
                iconBg: "orange",
                title: "Climate Controlled",
                description: "Our facility maintains optimal temperature and humidity levels 24/7 to mimic a natural, comfortable environment for your birds, safe from Delhi's extreme weather."
            },
            {
                icon: "ph-bowl-food",
                iconBg: "green",
                title: "Owner-Specified Diet",
                description: "We strictly follow the diet plan you provide. Whether it's chop, pellets, or seeds, we ensure your bird eats exactly what they are used to."
            },
            {
                icon: "ph-heart",
                iconBg: "blue",
                title: "Love & Interaction",
                description: "Birds are social creatures. We provide daily interaction, head scratches (if allowed!), and out-of-cage time based on your instructions."
            }
        ]
    },

    // Gallery Section
    gallery: {
        title: "Our Common Guests",
        birds: [
            {
                name: "Budgies",
                image: "https://images.unsplash.com/photo-1610058882042-494a827018c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Cockatiels",
                image: "https://images.unsplash.com/photo-1544605057-a99bdd632b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Love Birds",
                image: "https://images.unsplash.com/photo-1608916325964-b0a5688536f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Sun Conures",
                image: "https://images.unsplash.com/photo-1596707328606-f6d34559c394?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "African Greys",
                image: "https://images.unsplash.com/photo-1549557404-0c2d3080e21b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Ringnecks",
                image: "https://images.unsplash.com/photo-1582260656910-c089f38c3592?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Macaws",
                image: "https://images.unsplash.com/photo-1517424641619-a991f2780e0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    // Liability Section
    liability: {
        title: "Terms of Boarding & Liability",
        description: "At Bird BnB, we treat every bird with the utmost care, love, and professional attention. However, it is important to acknowledge that birds are sensitive livestock.",
        terms: [
            {
                title: "Indemnification:",
                text: "By using our services, the bird owner agrees to indemnify and hold harmless Bird BnB from any liability regarding sickness, injury, or death due to natural causes, stress, or pre-existing conditions."
            },
            {
                title: "Veterinary Care:",
                text: "In case of an emergency, we will attempt to contact you immediately. If unreachable, we will seek veterinary care at the owner's expense."
            },
            {
                title: "Dietary Risks:",
                text: "We strictly follow the owner's provided diet plan and accept no liability for health issues arising from the specified diet."
            }
        ],
        disclaimer: "Complete terms will be provided in the boarding agreement form."
    },

    // Footer/CTA Section
    footer: {
        title: "Ready to Book a Stay?",
        subtitle: "Give your bird a vacation while you take yours.",
        copyright: "© 2024 Bird BnB. All rights reserved.",
        locationText: "Located in Delhi, India."
    },

    // Animation Settings
    animations: {
        featherCount: 10,
        featherMinDuration: 5,
        featherMaxDuration: 10
    }
};

