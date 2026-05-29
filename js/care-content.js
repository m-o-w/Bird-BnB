// Bird Care Hub content — curated for Indian bird parents
const CARE_CONTENT = {
    pageTitle: "Bird Care Hub | Love For Cockatiels",
    pageDescription: "Free care guide for new bird parents in India. Learn how to settle, bond, feed, and care for your hand-raised cockatiel or parrot.",
    heading: "Bird Care Hub",
    subheading: "Everything a new bird parent needs to know — practical, India-specific guidance from Love For Cockatiels.",
    
    tabs: [
        {
            id: "bringing-home",
            icon: "ph-house-line",
            title: "Bringing Your Bird Home",
            shortTitle: "Bringing Home",
            sections: [
                {
                    heading: "The first 24-48 hours",
                    content: "Your new bird has just experienced a big change. Even a hand-raised, tamed bird needs 1-2 days to adjust to new sights, sounds, and smells. Keep the environment calm and let the bird observe its new home from inside the cage."
                },
                {
                    heading: "Setting up the cage",
                    list: [
                        "Place the cage in a corner of a quiet, frequently-used room (so the bird sees the family but isn't isolated)",
                        "Keep it at chest height — birds feel unsafe at floor level and stressed if too high",
                        "Avoid the kitchen (fumes are deadly) and direct sunlight",
                        "Stay away from windows and air-conditioner direct flow",
                        "Add 2-3 perches of varying thickness, 1-2 toys, food and water bowls"
                    ]
                },
                {
                    heading: "Day 1-3: Settling in",
                    list: [
                        "Don't open the cage immediately. Let the bird eat, drink, and observe",
                        "Speak softly and move slowly around the cage",
                        "Keep other pets and small children away initially",
                        "Don't worry if the bird eats less the first day — this is normal stress response",
                        "Maintain the same diet your breeder gave you for at least 2 weeks before changing anything"
                    ]
                },
                {
                    heading: "Common worries (and what's normal)",
                    list: [
                        "Sitting still and quiet for hours — totally normal in the first week",
                        "Eating less than expected — normal for 1-3 days",
                        "Sleeping more than usual — normal due to stress",
                        "Not chirping or singing — normal until the bird feels safe",
                        "Heavy panting, drooping wings, fluffed up all day — NOT normal, contact us or a vet"
                    ]
                },
                {
                    heading: "India-specific tips",
                    list: [
                        "Summer (April-June): keep cage in the shade, never near a hot wall, ensure cool drinking water",
                        "Monsoon: avoid damp areas — fungal infections are common in humid conditions",
                        "Winter (especially Delhi NCR/North India): keep above 20°C, cover cage at night with breathable cloth",
                        "Diwali/festivals: move the bird to a quiet inner room — fireworks cause severe stress",
                        "Mosquito coils, agarbatti (incense), and room sprays are toxic — avoid in the bird's room"
                    ]
                }
            ]
        },
        {
            id: "bonding",
            icon: "ph-heart",
            title: "Bonding With Your Bird",
            shortTitle: "Bonding",
            sections: [
                {
                    heading: "Trust comes first",
                    content: "Even hand-raised birds need to rebuild trust in a new environment. The goal in week 1-2 is for the bird to feel safe with you nearby, not necessarily perch on you. Patience is everything."
                },
                {
                    heading: "Week 1: Be present",
                    list: [
                        "Sit near the cage and read, work, or talk on the phone — let the bird get used to your voice",
                        "Hand-feed favorite treats (millet sprays work well) through cage bars",
                        "Don't force interaction — let curiosity build naturally",
                        "Keep a routine: feed, clean, and interact at consistent times"
                    ]
                },
                {
                    heading: "Week 2-3: First handling",
                    list: [
                        "Slowly open the cage door and offer your hand or a perch — don't grab",
                        "Use the 'step up' command: gently press your finger against the bird's lower chest. A trained bird will step up",
                        "Reward every step with a treat and calm praise",
                        "Keep first sessions to 5-10 minutes to avoid overwhelming the bird"
                    ]
                },
                {
                    heading: "Out-of-cage time",
                    list: [
                        "Once the bird steps up reliably, allow 30-60 minutes of supervised out-of-cage time daily",
                        "BIRD-PROOF the room first: close windows, switch off ceiling fans, cover mirrors, remove toxic plants",
                        "Cover non-stick pans (Teflon fumes can kill birds in minutes)",
                        "Other pets — cats and dogs — should be in another room"
                    ]
                },
                {
                    heading: "Talking and tricks",
                    list: [
                        "Cockatiels are better at whistling tunes than mimicking words — start with a simple whistle",
                        "Repeat short words ('hello', 'good boy') 5-10 times daily during calm moments",
                        "Most cockatiels start mimicking sounds at 6-9 months",
                        "African Greys and Macaws can pick up words faster but need consistent training",
                        "Reward any attempt with a treat — never scold for noise"
                    ]
                }
            ]
        },
        {
            id: "diet",
            icon: "ph-bowl-food",
            title: "Diet & Nutrition",
            shortTitle: "Diet",
            sections: [
                {
                    heading: "The right diet matters",
                    content: "An all-seed diet is the #1 cause of premature death in pet birds. A balanced diet should include pellets, fresh vegetables, some fruits, and limited seeds. Always provide clean filtered water, changed daily."
                },
                {
                    heading: "Daily diet (cockatiels & similar)",
                    list: [
                        "60-70% pellets (Vetafarm, Harrison's, or ZuPreem if available — start with what your breeder used)",
                        "20-25% fresh vegetables (chopped finely)",
                        "5-10% fresh fruit",
                        "Up to 10% seed mix as treats only — not the main meal"
                    ]
                },
                {
                    heading: "Indian vegetables that are safe and healthy",
                    list: [
                        "Palak (spinach) — limited, 2-3 times a week",
                        "Methi (fenugreek leaves) — excellent for feathers",
                        "Gajar (carrot) — raw or steamed",
                        "Shimla mirch (capsicum, especially red) — high in vitamin A",
                        "Kheera (cucumber) — hydrating in summer",
                        "Lauki (bottle gourd), tori (ridge gourd), tinda — all safe",
                        "Broccoli, cauliflower — excellent",
                        "Sprouted moong/chana — high protein, perfect for breeding birds"
                    ]
                },
                {
                    heading: "Indian fruits that are safe",
                    list: [
                        "Apple (no seeds — apple seeds are toxic)",
                        "Papaya, mango (small pieces, ripe)",
                        "Banana",
                        "Guava (seedless or with seeds removed)",
                        "Pomegranate",
                        "Berries when in season"
                    ]
                },
                {
                    heading: "DANGEROUS foods — never give",
                    list: [
                        "Avocado — toxic to all birds",
                        "Chocolate, coffee, tea",
                        "Salt, sugar, oily/spicy/fried Indian food",
                        "Onion, garlic — both toxic",
                        "Apple seeds, cherry pits, mango pit",
                        "Alcohol — even tiny amounts are fatal",
                        "Dairy — birds can't digest it (no paneer, no milk)",
                        "Raw meat, eggs (cooked egg is fine occasionally)"
                    ]
                },
                {
                    heading: "Indian-specific food cautions",
                    list: [
                        "No chapati with salt, ghee, or butter — birds can't process these",
                        "No mithai or sweets",
                        "No street food, biscuits, or namkeen",
                        "Be careful with leafy greens from markets — wash thoroughly to remove pesticides",
                        "Tap water is generally fine but filtered/RO water is safer in cities"
                    ]
                }
            ]
        },
        {
            id: "health",
            icon: "ph-first-aid-kit",
            title: "Health & First Aid",
            shortTitle: "Health",
            sections: [
                {
                    heading: "Birds hide illness",
                    content: "Birds are prey animals — they instinctively hide signs of weakness. By the time symptoms are obvious, the bird may be very sick. Daily observation is the best preventive care you can give."
                },
                {
                    heading: "Warning signs — call a vet immediately",
                    list: [
                        "Fluffed-up feathers all day (not just when sleeping)",
                        "Sitting on the cage floor",
                        "Tail bobbing while breathing — sign of respiratory distress",
                        "Discharge from eyes, nostrils, or beak",
                        "Diarrhoea or watery droppings (more than once a day)",
                        "Vomiting or regurgitating without context",
                        "Sudden weight loss, sunken eyes",
                        "Loss of balance, falling off perch",
                        "Not eating for over 24 hours"
                    ]
                },
                {
                    heading: "Common health issues in Indian conditions",
                    list: [
                        "Heatstroke (summer): bird pants heavily, holds wings away from body. Move to cooler area, mist with cool water",
                        "Respiratory infections (monsoon humidity): keep environment dry, clean cage frequently",
                        "Crop infections: unusual smell from beak, slow crop emptying",
                        "Mites: scratching, dull feathers, white residue around eyes/beak",
                        "Egg-binding (female birds): straining, inability to lay — emergency"
                    ]
                },
                {
                    heading: "First aid before reaching a vet",
                    list: [
                        "Keep the bird warm — put a 40W bulb near the cage (not too close), maintain 28-32°C",
                        "Reduce stress — cover cage partially, keep the room quiet",
                        "Offer easy-to-eat foods like soaked pellets or warm porridge",
                        "Encourage hydration — drops of electrolyte water on the beak",
                        "Don't give human medications — many are fatal to birds"
                    ]
                },
                {
                    heading: "Finding an avian vet in India",
                    list: [
                        "Avian vets are limited in India — find one BEFORE an emergency",
                        "Major cities (Delhi, Mumbai, Bangalore, Chennai, Hyderabad) have specialist exotic vets",
                        "The Wild Buddies, Maxpets, Cessna Lifeline, and CGS Hospital have avian-experienced vets",
                        "WhatsApp us if you need a vet recommendation in your city — we'll point you to a trusted one",
                        "Keep a transport carrier ready — never carry a sick bird in just your hands"
                    ]
                },
                {
                    heading: "Routine health basics",
                    list: [
                        "Annual check-up with an avian vet for adult birds",
                        "Weigh your bird weekly — sudden changes signal illness",
                        "Clean cage weekly, food/water bowls daily",
                        "Watch droppings — colour, consistency, frequency are health indicators"
                    ]
                }
            ]
        },
        {
            id: "environment",
            icon: "ph-thermometer",
            title: "Cage & Environment",
            shortTitle: "Environment",
            sections: [
                {
                    heading: "The right cage",
                    content: "Bigger is always better. Birds need space to fly between perches, climb, and move freely. Small decorative cages cause severe behavioural and physical problems."
                },
                {
                    heading: "Minimum cage sizes",
                    list: [
                        "Cockatiel: 24\" L x 18\" W x 24\" H minimum (bigger is better)",
                        "Lovebird: 18\" L x 18\" W x 24\" H",
                        "Conure: 24\" L x 24\" W x 30\" H",
                        "African Grey: 36\" L x 24\" W x 48\" H",
                        "Macaw: 48\" L x 36\" W x 60\" H or larger",
                        "Bar spacing matters: too wide and small birds escape or get stuck"
                    ]
                },
                {
                    heading: "Inside the cage",
                    list: [
                        "2-3 perches at different heights and thicknesses (natural wood is best)",
                        "Avoid sandpaper perches — they damage feet",
                        "Food bowl, water bowl, and a separate veggie bowl",
                        "2-3 toys (chewable, foraging, swing) — rotate weekly to prevent boredom",
                        "A cuttlebone for calcium",
                        "Newspaper or paper liner at the bottom — easy to change"
                    ]
                },
                {
                    heading: "Climate control (critical in India)",
                    list: [
                        "Ideal temperature: 20-30°C — birds tolerate up to 35°C if shaded with airflow",
                        "Below 18°C is risky for most pet parrots",
                        "Above 38°C requires immediate cooling: cool water mist, fan (indirect), move to AC room",
                        "Humidity 40-60% is ideal — too dry causes feather problems, too humid causes infections",
                        "Avoid air-conditioner direct flow on the cage"
                    ]
                },
                {
                    heading: "Bird-proofing your home",
                    list: [
                        "Ceiling fans OFF when bird is out of cage — biggest cause of pet bird fatalities in India",
                        "Close windows and doors before letting bird out",
                        "Cover mirrors — birds can fly into them",
                        "No non-stick (Teflon) cookware while bird is in the home — fumes are fatal",
                        "Remove toxic houseplants: oleander, lily, ivy, peace lily, dieffenbachia",
                        "Remove other birds-of-prey style pets (cats especially)"
                    ]
                },
                {
                    heading: "Sleep and light",
                    list: [
                        "Birds need 10-12 hours of uninterrupted sleep nightly",
                        "Cover the cage with a breathable cloth at night — also blocks mosquitoes in summer",
                        "Avoid bright lights / TV near the cage after sunset",
                        "Natural sunlight (filtered through a window or balcony) is great — direct sun is harmful"
                    ]
                }
            ]
        },
        {
            id: "grooming",
            icon: "ph-drop",
            title: "Grooming & Hygiene",
            shortTitle: "Grooming",
            sections: [
                {
                    heading: "Bathing",
                    list: [
                        "Most birds love a bath 2-3 times a week",
                        "Use a shallow dish of plain room-temperature water in the cage",
                        "Spray bottle misting works well — light gentle mist over the bird",
                        "Bathing helps feather health and skin hydration",
                        "Bath in the morning so feathers dry well before night",
                        "Never use shampoo, soap, or warm water"
                    ]
                },
                {
                    heading: "Nail trimming",
                    list: [
                        "Most birds need nails trimmed every 2-3 months",
                        "Provide rough perches (natural branches, cement perches) for natural wear",
                        "If trimming yourself, use proper bird nail clippers and trim only the tip",
                        "Stop immediately if you see blood — apply styptic powder or cornstarch",
                        "When in doubt, get an avian vet or experienced groomer to do it"
                    ]
                },
                {
                    heading: "Beak care",
                    list: [
                        "Healthy birds keep their own beak in shape through chewing",
                        "Provide cuttlebone, mineral block, and chewable wood toys",
                        "Overgrown beak → vet visit (could indicate liver disease)",
                        "Never trim a beak yourself — it has blood vessels and nerves"
                    ]
                },
                {
                    heading: "Wing clipping (optional)",
                    list: [
                        "Wing clipping is a personal choice — many bird parents avoid it",
                        "If clipping for safety, only an experienced avian vet should do it",
                        "Clipped birds still need exercise — encourage climbing and out-of-cage time",
                        "Feathers grow back in 3-6 months"
                    ]
                },
                {
                    heading: "Cage hygiene",
                    list: [
                        "Daily: change paper liner, refresh water, remove old food",
                        "Weekly: scrub all perches, toys, and bowls with mild soap and rinse thoroughly",
                        "Monthly: full cage deep clean with bird-safe disinfectant (avoid bleach near the bird)",
                        "Wash veggies thoroughly — pesticide residue is harmful"
                    ]
                }
            ]
        }
    ],
    
    cta: {
        title: "Have More Questions?",
        subtitle: "We share lifetime care guidance with every bird that goes home with our customers. WhatsApp us anytime.",
        buttonText: "WhatsApp Us"
    }
};
