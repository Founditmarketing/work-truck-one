export const services = [
    {
        id: 'service-bodies',
        title: 'Service Bodies',
        description: 'Versatile service bodies offering organized storage, tool access, and durable construction for demanding job-site tasks.',
        image: 'https://images.unsplash.com/photo-1621305417070-07ff330e70ed?q=80&w=2940&auto=format&fit=crop',
        span: 'col-span-1 md:col-span-2 row-span-2',
        fullDescription: 'Service bodies transform your standard cab chassis into a high-capacity mobile workstation. Engineered from heavy-duty steel or lightweight, corrosion-resistant aluminum, these bodies offer organized, lockable compartments to keep all your gear secure and easily accessible. We customize the shelving and layout to perfectly match your trade, maximizing your efficiency on every job site.',
        features: [
            'Heavy-gauge galvanneal steel or marine-grade aluminum construction',
            'Automotive-style weather stripping for dry compartments',
            'Double-panel door construction for enhanced security',
            'Infinite locking tie-downs and adjustable shelving options',
            'Integrated LED compartment lighting systems'
        ],
        benefits: [
            'Dramatically improves job site organization and efficiency',
            'Protects expensive tools from theft and extreme weather',
            'Projects a highly professional image to your clients',
            'Reduces unnecessary trips back to the shop or supply house'
        ],
        faqs: [
            {
                question: 'Aluminum vs. Steel: Which is right for me?',
                answer: 'Steel offers maximum structural durability for extreme abuse, while aluminum saves significant weight (increasing payload capacity) and is inherently corrosion-resistant.'
            },
            {
                question: 'Can you match the body paint to my cab?',
                answer: 'Absolutely. We offer high-quality, color-matched painting services to ensure your entire rig looks cohesive and professional.'
            },
            {
                question: 'Do you install master locking systems?',
                answer: 'Yes, we can install single-key or electronic master locking systems that secure all compartments with the push of a button.'
            }
        ]
    },
    {
        id: 'flatbeds',
        title: 'Platforms & Flatbeds',
        description: 'Strong, open platforms and flatbeds built for hauling equipment, oversized loads, and rugged work environments.',
        image: '/images/flatbed.png',
        span: 'col-span-1 md:col-span-1 row-span-2',
        fullDescription: 'Our commercial-grade platforms and flatbeds are designed to handle the heaviest, bulkiest loads without breaking a sweat. Built with high-strength steel or structural aluminum, these open-deck designs give you the versatility to haul oversized materials, machinery, or pallets. Available with customized bulkheads, stake racks, and integrated tie-downs for ultimate load security.',
        features: [
            'Treadplate, smooth steel, or extruded aluminum decking',
            'Heavy-duty rub rails and integrated stake pockets',
            'Reinforced structural channel crossmembers',
            'Customized headache racks (bulkheads) with optional window screening',
            'Underbody toolboxes for essential storage'
        ],
        benefits: [
            'Maximum versatility for loading oversized, awkwardly shaped cargo',
            'Easy 360-degree loading access for forklifts or cranes',
            'Durable construction withstands dropping heavy materials',
            'Adaptable with side racks for varied hauling needs'
        ],
        faqs: [
            {
                question: 'Can I add a gooseneck hitch to a flatbed?',
                answer: 'Yes, most of our flatbed installations include structurally integrated gooseneck and receiver hitches.'
            },
            {
                question: 'What type of decking is best for hauling equipment?',
                answer: 'Steel treadplate is the most common for heavy equipment due to its durability and grip, though we also offer rumber (rubberised lumber) for specialized traction needs.'
            }
        ]
    },
    {
        id: 'liftgates',
        title: 'Liftgates',
        description: 'Heavy-duty liftgates provide safe, efficient loading support for commercial trucks and daily work operations.',
        image: 'https://images.unsplash.com/photo-1586864387799-d4212903260b?q=80&w=2940&auto=format&fit=crop',
        span: 'col-span-1 md:col-span-1 row-span-1',
        fullDescription: 'We install premium hydraulic liftgates to eliminate the physical strain and safety hazards of manual loading. Whether you need a simple fold-away gate for a delivery van or a rail-style gate for heavy cargo handling, our systems ensure smooth, dependable performance. Let our experts seamlessly integrate a liftgate into your existing bed or body.',
        features: [
            'Lifting capacities ranging from 1,000 lbs to 6,000+ lbs',
            'Tuckaway, cantilever, rail-lift, and conventional models',
            'Steel or lightweight aluminum extruded platforms',
            'Dual hydraulic cylinders for maximum stability',
            'Weather-sealed electrical controls'
        ],
        benefits: [
            'Prevents severe workplace lifting injuries and worker comp claims',
            'Allows a single operator to load/unload heavy pallets',
            'Significantly speeds up delivery cycle times',
            'Protects fragile or expensive cargo from drop damage'
        ],
        faqs: [
            {
                question: 'Can a liftgate be added to my existing truck?',
                answer: 'In most cases, yes. We can retrofit liftgates to existing box trucks, flatbeds, and even some service bodies depending on the chassis overhang.'
            },
            {
                question: 'How do I maintain my liftgate?',
                answer: 'Regular preventative maintenance involves checking hydraulic fluid levels, inspecting lines for leaks, and lubricating all pivot points. We offer fleet maintenance contracts to handle this for you.'
            }
        ]
    },
    {
        id: 'cranes',
        title: 'Cranes',
        description: 'High-performance truck-mounted cranes provide precise lifting power for construction, utility, and industrial applications.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2940&auto=format&fit=crop',
        span: 'col-span-1 md:col-span-1 row-span-1',
        fullDescription: 'Transform your work truck into a high-powered mobile lifting platform with our custom telescopic and articulated cranes. Ideal for municipalities, mechanics, and heavy construction professionals, these cranes provide pinpoint accuracy and immense torque for lifting heavy equipment, pipes, and machinery directly on the job site.',
        features: [
            'Telescopic (stiff-boom) and Articulating (knuckle-boom) styles',
            'Lifting capacities from 2,000 lbs up to 14,000 lbs+',
            'Proportional wireless remote controls for precise positioning',
            'Hydraulic outriggers and stabilizers for safety',
            'Integrated air compressors and generator systems'
        ],
        benefits: [
            'Brings heavy lifting capability directly to remote job sites',
            'Reduces the need to rent dedicated crane equipment',
            'Allows a single technician to perform engine pulls or pipe laying',
            'Minimizes manual labor and associated safety risks'
        ],
        faqs: [
            {
                question: 'Do I need a CDL to operate a mechanics crane truck?',
                answer: 'It depends on the Gross Vehicle Weight Rating (GVWR) of the entire truck/chassis, not just the crane. If the chassis is under 26,000 lbs, standard licensing usually applies.'
            },
            {
                question: 'Does my chassis need to be reinforced?',
                answer: 'Absolutely. A crane induces massive twisting forces. We engineer and install proper subframes, shear plates, and outriggers to safely transfer the load.'
            }
        ]
    },
    {
        id: 'dump-bodies',
        title: 'Dump Bodies',
        description: 'Durable dump bodies delivering smooth dumping performance for construction, landscaping, and heavy hauling jobs.',
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2940&auto=format&fit=crop',
        span: 'col-span-1 md:col-span-1 row-span-1',
        fullDescription: 'Tackle aggressive hauling with our brutally strong dump bodies. Available in heavy-gauge steel or thick plate aluminum, these bodies paired with specialized power take-off (PTO) or electric hoists ensure smooth, controlled dumping of gravel, dirt, asphalt, and debris. Designed to resist corrosion and withstand daily beatings.',
        features: [
            'High-tensile steel (Hardox) or structural aluminum construction',
            'Electric-over-hydraulic or PTO-driven hoist systems',
            'Double-acting tailgates and crossmemberless designs',
            'Cab shields and automatic tarping systems',
            'Sloped dirt-shedding top rails'
        ],
        benefits: [
            'Rapid unloading of bulk materials saves hours of labor',
            'Built to withstand dropping boulders and abrasive materials',
            'Customizable side heights to maximize specific cubic yard capacities',
            'Improves profitability on hauling and debris removal contracts'
        ],
        faqs: [
            {
                question: 'Should I choose an electric hoist or a PTO hoist?',
                answer: 'Electric hoists are great for lighter 1-ton chassis (landscaping, light debris). For heavy, continuous commercial dumping (asphalt, concrete chunks), a transmission-mounted PTO system is required.'
            },
            {
                question: 'Do you install automated tarp systems?',
                answer: 'Yes, we strongly recommend electric tarp systems to keep your drivers safely in the cab and maintain DOT compliance for loose loads.'
            }
        ]
    },
    {
        id: 'hooklifts',
        title: 'Hooklifts & Hoists',
        description: 'Versatile hooklift systems enabling quick body changes and efficient handling of varied work-truck tasks.',
        image: 'https://images.unsplash.com/photo-1580674684081-776733156bf6?q=80&w=2832&auto=format&fit=crop',
        span: 'col-span-1 md:col-span-2 row-span-1',
        fullDescription: 'Hooklift and hoist systems let a single cab chassis do the work of an entire fleet. In minutes, your driver can roll off a dump bed and roll on a flatbed or a shipping container without leaving the cab. This system drastically decreases truck downtime, maximizes your capital investment, and boosts overall operational flexibility.',
        features: [
            'Capacities ranging from 9,000 lbs to over 60,000 lbs',
            'In-cab controls for completely touchless body swapping',
            'Dual pivot geometry for true dumping capabilities',
            'Compatibility with a massive variety of specialized bodies',
            'Rear bumper and light extensions for varying body lengths'
        ],
        benefits: [
            'One chassis, multiple functions (Dump, Flatbed, Chipper Box)',
            'Eliminates the cost of insuring and maintaining multiple truck cabs',
            'Allows pre-loading of bodies while the truck is out on delivery',
            'Keeps drivers safe inside the cab during body exchanges'
        ],
        faqs: [
            {
                question: 'Hooklift vs. Cable Hoist: What is the difference?',
                answer: 'Cable hoists (roll-offs) are great for pulling extreme weights in straight lines (like massive dumpsters). Hooklifts allow for precise maneuvering, can pick up containers at off-angles, and offer true dump-truck steep angles.'
            },
            {
                question: 'Can I use my existing containers with a new hooklift?',
                answer: 'Often, yes. We can weld specialized A-frame hook receivers onto your existing containers and flatbeds to make them compatible.'
            }
        ]
    },
    {
        id: 'accessories',
        title: 'Accessories & Strobes',
        description: 'Custom lighting, hardware, strobes, and emergency lighting to ensure regulatory compliance and job site safety.',
        image: 'https://images.unsplash.com/photo-1533470192478-9897d90d5461?q=80&w=2832&auto=format&fit=crop',
        span: 'col-span-1 md:col-span-1 row-span-1',
        fullDescription: 'Enhance your fleet visibility and functionally with high-intensity warning strobes, LED compartment lighting, and work beacons. We also specialize in essential heavy-duty accessories including Pintle hitches, gooseneck plates, toolboxes, ladder racks, and custom bumpers to perfectly tailor your truck’s capability to your specific daily use case.',
        features: [
            'Class 1, 2, and 3 LED directional and omnidirectional strobes',
            'Heavy-duty towing infrastructure: Pintle, Gooseneck, Class V',
            'Custom fabricated ladder and material racks',
            'Auxiliary battery arrays and power inverters',
            'Grille guards, winches, and aggressive off-road bumpers'
        ],
        benefits: [
            'Ensures critical DOT and job site visibility compliance',
            'Prevents rear-end collisions during roadside stops',
            'Customizes stock trucks for incredibly niche daily tasks',
            'Provides reliable 110v power anywhere on the map'
        ],
        faqs: [
            {
                question: 'Do you handle the complete 12v electrical wiring?',
                answer: 'Yes, our certified 12v technicians use marine-grade heat shrink, looming, and isolated relay panels to ensure your truck’s factory harness is never compromised.'
            },
            {
                question: 'Can you match municipal lighting specifications?',
                answer: 'Absolutely. We regularly upfit trucks to meet highly specific state, municipal, and utility lighting and safety mandates.'
            }
        ]
    },
];
