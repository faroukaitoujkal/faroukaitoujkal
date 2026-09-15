export const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            themeLight: "Switch to light mode",
            themeDark: "Switch to dark mode",
        },
        hero: {
            status: "Open to new opportunities",
            greeting: "Hello, I'm",
            role: "Software Developer",
            description: "Passionate developer crafting modern websites, responsive web apps, and custom software solutions. Combining clean code, intuitive user interfaces, and reliable development (React, Node.js, TypeScript, C#, Java) to deliver solid, maintainable digital products.",
            cta: "Get in touch",
            downloadCV: "Download Resume",
            location: "Brussels, Belgium",
            stats: [
                { value: "Software Dev", label: "Full Stack & Architecture" },
                { value: "Web & Apps", label: "Modern & Responsive" },
                { value: "Clean Code", label: "MVC & Modular APIs" },
                { value: "Brussels", label: "On-site & Hybrid" }
            ]
        },
        about: {
            title: "About Me",
            subtitle: "Driven by architecture, problem-solving, and building high-impact web and software solutions.",
            description: "Software Developer experienced in building full-stack web applications and software systems, from database design to reactive user interfaces. I focus on clean architecture, modular code, and delivering intuitive, maintainable solutions tailored to real-world needs.",
            highlights: [
                {
                    title: "End-to-End Delivery",
                    desc: "Capable of taking a product from requirements to production: database schemas, secure REST APIs, and modern UIs."
                },
                {
                    title: "Architecture & Clean Code",
                    desc: "Advocate for MVC, separation of concerns, strict typing with TypeScript, and maintainable codebase design."
                },
                {
                    title: "Web & Software Development",
                    desc: "Building modern websites, robust backend APIs, and desktop or web software systems built for longevity."
                }
            ],
            hobbies: {
                title: "Beyond Code",
                items: [
                    { name: "Gaming & Tech", icon: "gamepad" },
                    { name: "Football", icon: "football" },
                    { name: "Traveling", icon: "plane" },
                    { name: "Cinema", icon: "film" }
                ]
            },
            quote: "\"Transforming complex challenges into elegant, resilient, and scalable digital solutions.\""
        },
        experience: {
            title: "Experience & Journey",
            subtitle: "Proven track record in IT training, enterprise consulting, and software development.",
            tabs: {
                experience: "Professional Experience",
                education: "Education & Degree"
            },
            refTitle: "Professional Reference / Lead Dev",
            work: [
                {
                    period: "Sep 2026 - Present",
                    role: "IT Trainer",
                    company: "Espace Forma",
                    location: "Brussels, Belgium",
                    description: "Training and mentoring learners in software programming, coding fundamentals, and general computer science skills.",
                    points: [
                        "Delivered interactive training modules covering programming fundamentals, algorithms, and software development logic.",
                        "Instructed learners in general IT, web technologies, and practical digital problem-solving.",
                        "Designed structured educational materials, hands-on coding exercises, and real-world project assignments.",
                        "Mentored learners individually to build technical confidence and practical problem-solving autonomy."
                    ],
                    skills: ["Programming", "IT Training", "Pedagogy", "Algorithms", "Web Fundamentals", "Mentoring"]
                },
                {
                    period: "Jan 2025 - Jun 2025",
                    role: "Developer Consultant (Internship)",
                    company: "AMA European Consulting",
                    location: "Brussels, Belgium",
                    description: "Full Stack development and enhancement of an enterprise application using modern backend standards.",
                    points: [
                        "Designed and developed robust server-side modules in Node.js using TypeScript for strict type safety.",
                        "Architected relational database schemas and optimized data queries with PostgreSQL.",
                        "Developed modular REST APIs ensuring high reliability, validation, and data security.",
                        "Applied agile principles (Kanban, Jira), participating in code reviews and architecture iterations."
                    ],
                    skills: ["Node.js", "TypeScript", "PostgreSQL", "REST APIs", "Git", "Kanban"],
                    reference: {
                        name: "Arsène Laurent",
                        role: "Lead Developer | Developer Consultant",
                        company: "AMA European Consulting"
                    }
                }
            ],
            education: [
                {
                    period: "2022 - 2025",
                    degree: "Bachelor in Computer Science: Application Development",
                    institution: "Haute École Libre de Bruxelles - Ilya Prigogine",
                    location: "Brussels, Belgium",
                    description: "Comprehensive university training focused on software development, OOP, systems architecture, and web development.",
                    points: [
                        "Object-Oriented Programming & Patterns: Java, C#, TypeScript, MVC architectures.",
                        "Database Systems: Relational modeling, SQL, PL/SQL, indexing and transactions.",
                        "Web & Distributed Systems: Angular, React, Node.js, WebSockets, real-time communications.",
                        "Project Management: Agile/Scrum methodologies, Git version control, technical specifications."
                    ],
                    skills: ["Software Development", "OOP & MVC", "SQL & Databases", "Full Stack Web", "Agile"]
                },
                {
                    period: "2016 - 2022",
                    degree: "Secondary Education - Scientific Studies",
                    institution: "Campus Saint Jean",
                    location: "Brussels, Belgium",
                    description: "Strong scientific foundation in mathematics, logic, and analytical problem solving."
                }
            ]
        },
        skills: {
            title: "Technical Skills",
            subtitle: "A modern, battle-tested stack spanning frontend, backend, databases, and DevOps.",
            categories: {
                all: "All Skills",
                frontend: "Frontend",
                backend: "Backend & APIs",
                database: "Databases & Real-time",
                tools: "Architecture & Tools"
            },
            list: [
                { name: 'TypeScript', category: 'frontend', level: 'Advanced', description: 'Strict typing, scalable architectures, modern ESNext features' },
                { name: 'JavaScript', category: 'frontend', level: 'Proficient', description: 'Modern DOM manipulation, async/await, reactive patterns' },
                { name: 'React', category: 'frontend', level: 'Advanced', description: 'Hooks, Context API, component design, responsive UI' },
                { name: 'Angular', category: 'frontend', level: 'Proficient', description: 'Enterprise frontend framework, RxJS, TypeScript services' },
                { name: 'HTML5 & CSS3', category: 'frontend', level: 'Advanced', description: 'Semantic HTML, responsive layouts, CSS variables, glassmorphism' },
                { name: 'Node.js', category: 'backend', level: 'Advanced', description: 'Server-side runtimes, asynchronous microservices, REST APIs' },
                { name: 'C# / .NET', category: 'backend', level: 'Advanced', description: 'Robust backend development, object-oriented design, APIs' },
                { name: 'Java', category: 'backend', level: 'Advanced', description: 'Core OOP, multi-threading, software development principles' },
                { name: 'PostgreSQL', category: 'database', level: 'Proficient', description: 'Relational modeling, indexing, ACID transactions, complex joins' },
                { name: 'SQL & PL/SQL', category: 'database', level: 'Proficient', description: 'Advanced querying, stored procedures, database normalization' },
                { name: 'SignalR', category: 'database', level: 'Proficient', description: 'Bi-directional real-time communication & WebSockets' },
                { name: 'JavaFX', category: 'tools', level: 'Proficient', description: 'Desktop GUI development, MVC architecture, event handling' },
                { name: 'Git & GitHub', category: 'tools', level: 'Advanced', description: 'Version control, branch workflows, collaborative PRs' },
                { name: 'Jira & Kanban', category: 'tools', level: 'Advanced', description: 'Agile sprint planning, backlog management, CI/CD mindset' }
            ]
        },
        projects: {
            title: "Featured Projects",
            subtitle: "Production-ready systems, full-stack applications, and real-time implementations.",
            filterAll: "All",
            filterRealtime: "Real-Time / Web",
            filterDesktop: "Desktop Software",
            viewCode: "Source Code",
            viewDetails: "Architecture Details",
            liveDemo: "Live Demo",
            items: [
                {
                    id: 'basketBall',
                    title: "BasketBall_LiveScore",
                    category: "realtime",
                    badge: "Real-Time & Full Stack",
                    desc: "Comprehensive basketball match simulation platform with real-time websocket broadcasting and relational database management.",
                    features: [
                        "Real-time live score updates powered by SignalR WebSockets.",
                        "Rich Angular & TypeScript client with dynamic dashboards.",
                        "Robust C# backend architecture managing complex match events.",
                        "Relational SQL database schema modeling teams, players, fouls, quarters, and statistics."
                    ],
                    tech: ["C#", ".NET", "Angular", "TypeScript", "SignalR", "SQL"],
                    image: "/assets/images/basketball_preview.jpg",
                    github: "https://github.com/faroukaitoujkal/BasketBall_LiveScore",
                    demo: null
                },
                {
                    id: 'helbHotel',
                    title: "HelbHotel Management System",
                    category: "desktop",
                    badge: "Software Architecture",
                    desc: "Desktop hotel management system automating room reservations, guest lifecycle, and availability tracking.",
                    features: [
                        "Strict Model-View-Controller (MVC) architectural separation.",
                        "Interactive JavaFX graphical user interface for seamless desk operations.",
                        "Data persistence layer for guest records, billing, and room booking.",
                        "Optimized search and filtering algorithms for availability."
                    ],
                    tech: ["Java", "JavaFX", "MVC", "SQL"],
                    image: "/assets/images/helbhotel-preview.jpg",
                    github: "https://github.com/faroukaitoujkal/HELBHotel",
                    demo: null
                },
                {
                    id: 'helbTower',
                    title: "HelbTower - RPG Engine",
                    category: "desktop",
                    badge: "Game Engine & UI",
                    desc: "Tactical medieval RPG video game showcasing rich event-driven GUI systems, state machines, and OOP design.",
                    features: [
                        "Event-driven JavaFX rendering engine with custom asset animations.",
                        "MVC pattern isolating game state logic from visual presentation.",
                        "Inventory management, turn-based battle mechanics, and character stats.",
                        "Designed for high frame-rate responsiveness and clean modular code."
                    ],
                    tech: ["Java", "JavaFX", "MVC", "OOP Design"],
                    image: "/assets/images/helbtower_preview.jpg",
                    github: "https://github.com/faroukaitoujkal/HELBTower",
                    demo: null
                }
            ]
        },
        contact: {
            title: "Let's Connect",
            subtitle: "Have a project, role, or collaboration in mind? I'd love to hear from you.",
            message: "Ready to discuss your next technical milestone?",
            infoDescription: "I am actively looking for software developer roles in Brussels or hybrid/remote. Whether you have a specific opening, an ambitious product, or simply want to connect, feel free to reach out directly.",
            locationLabel: "Location",
            locationValue: "Brussels, Belgium",
            phoneLabel: "Phone",
            phoneValue: "+32 488 96 74 19",
            emailLabel: "Email",
            emailValue: "faroukaitoujkal@gmail.com",
            copied: "Copied to clipboard!",
            form: {
                name: "Your Name",
                email: "Your Email",
                subject: "Subject",
                message: "How can I help you?",
                send: "Send Message",
                sending: "Sending...",
                success: "Message sent successfully! I will reply shortly.",
                error: "Failed to send message. Please reach out via direct email.",
                placeholders: {
                    name: "John Doe",
                    email: "john@example.com",
                    subject: "Job opportunity",
                    message: "Hello Farouk..."
                }
            },
            email: "Email",
            github: "GitHub",
            linkedin: "LinkedIn",
        },
        footer: {
            copyright: "Ait Oujkal Farouk — Software Developer",
            tagline: "Developing resilient, high-performance software and web systems.",
            rights: "All rights reserved.",
            legal: "Legal Notice",
            privacy: "Privacy Policy",
            contact: "Contact",
        },
        legalPage: {
            title: "Legal Notice",
            sections: [
                {
                    title: "1. Publisher",
                    content: "This website is published by Ait Oujkal Farouk, Software Developer based in Brussels, Belgium."
                },
                {
                    title: "2. Hosting",
                    content: "This website is hosted by Vercel Inc. (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA)."
                },
                {
                    title: "3. Intellectual Property",
                    content: "All content on this website (text, images, code, and design) is the property of Ait Oujkal Farouk unless otherwise noted."
                }
            ]
        },
        privacyPage: {
            title: "Privacy Policy",
            sections: [
                {
                    title: "1. Data Processing",
                    content: "Personal data collected through the contact form (name, email, message) is solely used to respond to your inquiry and is never shared or sold."
                },
                {
                    title: "2. Cookies & Analytics",
                    content: "This site does not use third-party tracking or advertising cookies."
                },
                {
                    title: "3. Your Rights",
                    content: "You may request the modification or deletion of any transmitted contact information at any time by contacting faroukaitoujkal@gmail.com."
                }
            ]
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            about: "À Propos",
            experience: "Parcours",
            skills: "Compétences",
            projects: "Projets",
            contact: "Contact",
            themeLight: "Passer au thème clair",
            themeDark: "Passer au thème sombre",
        },
        hero: {
            status: "Disponible pour de nouvelles opportunités",
            greeting: "Bonjour, je suis",
            role: "Software Developer",
            description: "Développeur passionné par la création de sites web modernes, d'applications interactives et de logiciels fiables. J'allie sens du détail, code propre et technologies éprouvées (React, Node.js, TypeScript, C#, Java, SQL) pour concevoir des solutions élégantes et évolutives.",
            cta: "Me contacter",
            downloadCV: "Télécharger mon CV",
            location: "Bruxelles, Belgique",
            stats: [
                { value: "Software Dev", label: "Architecture & Code" },
                { value: "Web & Logiciel", label: "Applications Modernes" },
                { value: "Clean Code", label: "MVC & APIs Modulaires" },
                { value: "Bruxelles", label: "Sur site & Hybride" }
            ]
        },
        about: {
            title: "À Propos de Moi",
            subtitle: "Passionné par la conception de logiciels fiables, de sites web ergonomiques et la résolution de défis techniques.",
            description: "Développeur passionné par le développement web et logiciel, j'interviens de la modélisation de bases de données jusqu'au développement d'applications complètes et réactives. J'aime concevoir des architectures modulaires, fiables et propres en appliquant les meilleures pratiques du développement logiciel. Rigoureux, curieux et polyvalent, je transforme des besoins concrets en solutions digitales intuitives et robustes.",
            highlights: [
                {
                    title: "Vision End-to-End",
                    desc: "Capacité à concevoir une solution de bout en bout : modélisation de données, APIs REST sécurisées et interfaces web dynamiques."
                },
                {
                    title: "Architecture & Rigueur",
                    desc: "Attachement aux principes MVC, au typage strict avec TypeScript, à la lisibilité du code et à sa maintenabilité."
                },
                {
                    title: "Développement Web & Logiciel",
                    desc: "Création de sites web modernes, d'APIs REST robustes et d'applications logicielles intuitives et performantes."
                }
            ],
            hobbies: {
                title: "Au-delà du Code",
                items: [
                    { name: "Jeux Vidéo & Tech", icon: "gamepad" },
                    { name: "Football", icon: "football" },
                    { name: "Voyages", icon: "plane" },
                    { name: "Cinéma", icon: "film" }
                ]
            },
            quote: "\"Transformer des défis complexes en solutions logicielles simples, robustes et scalables.\""
        },
        experience: {
            title: "Parcours & Expérience",
            subtitle: "Une expérience concrète en formation IT, conseil en entreprise et développement logiciel.",
            tabs: {
                experience: "Expérience Professionnelle",
                education: "Formation & Diplômes"
            },
            refTitle: "Référence professionnelle / Lead Dev",
            work: [
                {
                    period: "Sept 2026 - Présent",
                    role: "Formateur IT",
                    company: "Espace Forma",
                    location: "Bruxelles, Belgique",
                    description: "Formation et accompagnement d'apprenants en programmation informatique et compétences IT générales.",
                    points: [
                        "Animation de sessions de formation en programmation, logique algorithmique et développement logiciel.",
                        "Transmission de compétences en technologies web, outils numériques et informatique générale.",
                        "Conception de supports pédagogiques, d'exercices pratiques et encadrement de projets concrets.",
                        "Accompagnement personnalisé des apprenants pour développer leur autonomie technique et leurs capacités de résolution de problèmes."
                    ],
                    skills: ["Programmation", "Formation IT", "Pédagogie", "Algorithmique", "Bases Web", "Mentorat"]
                },
                {
                    period: "Janv 2025 - Juin 2025",
                    role: "Développeur Consultant (Stage)",
                    company: "AMA European Consulting",
                    location: "Bruxelles, Belgique",
                    description: "Développement et renforcement d'une application d'entreprise selon les standards modernes du développement logiciel.",
                    points: [
                        "Conception et implémentation de fonctionnalités backend en Node.js avec TypeScript pour un typage strict et une scalabilité accrue.",
                        "Modélisation du schéma relationnel et optimisation des opérations de données sous PostgreSQL.",
                        "Développement d'APIs REST robustes assurant intégrité, validation des données et performances.",
                        "Application des méthodologies agiles (Kanban, Jira), participation active aux revues de code et aux décisions d'architecture."
                    ],
                    skills: ["Node.js", "TypeScript", "PostgreSQL", "APIs REST", "Git", "Kanban"],
                    reference: {
                        name: "Arsène Laurent",
                        role: "Lead Developer | Développeur Consultant",
                        company: "AMA European Consulting"
                    }
                }
            ],
            education: [
                {
                    period: "2022 - 2025",
                    degree: "Bachelier en Informatique : Développement d'applications",
                    institution: "Haute École Libre de Bruxelles - Ilya Prigogine",
                    location: "Bruxelles, Belgique",
                    description: "Cursus intensif en développement logiciel, programmation orientée objet, conception de bases de données et technologies web.",
                    points: [
                        "POO & Design Patterns : Maîtrise approfondie de Java, C#, TypeScript et de l'architecture MVC.",
                        "Bases de Données Relationnelles : Modélisation avancée, requêtage SQL, PL/SQL, transactions et indexation.",
                        "Écosystème Web & Distribué : Angular, React, Node.js, WebSockets et protocoles de communication temps réel.",
                        "Méthodes de travail : Gestion de versions avec Git/GitHub, démarches agiles, rédaction de spécifications techniques."
                    ],
                    skills: ["Développement Logiciel", "POO & MVC", "SQL & Modélisation", "Web Full Stack", "Méthodes Agiles"]
                },
                {
                    period: "2016 - 2022",
                    degree: "Enseignement Secondaire - Études Scientifiques",
                    institution: "Campus Saint Jean",
                    location: "Bruxelles, Belgique",
                    description: "Formation scientifique approfondie axée sur les mathématiques, la rigueur analytique et la logique."
                }
            ]
        },
        skills: {
            title: "Compétences Techniques",
            subtitle: "Un ensemble technologique maîtrisé couvrant le frontend, le backend, les bases de données et les outils.",
            categories: {
                all: "Toutes",
                frontend: "Frontend",
                backend: "Backend & APIs",
                database: "Bases de données & Temps Réel",
                tools: "Architecture & Outils"
            },
            list: [
                { name: 'TypeScript', category: 'frontend', level: 'Avancé', description: 'Typage statique strict, architectures évolutives, fonctionnalités modernes' },
                { name: 'JavaScript', category: 'frontend', level: 'Intermédiaire', description: 'Manipulation DOM avancée, asynchronisme async/await, logique réactive' },
                { name: 'React', category: 'frontend', level: 'Avancé', description: 'Hooks, Context API, composants modulaires, intégration d\'interfaces dynamiques' },
                { name: 'Angular', category: 'frontend', level: 'Intermédiaire', description: 'Framework d\'entreprise, injection de dépendances, services et RxJS' },
                { name: 'HTML5 & CSS3', category: 'frontend', level: 'Avancé', description: 'Structure sémantique, flexbox/grid, animations et glassmorphism' },
                { name: 'Node.js', category: 'backend', level: 'Avancé', description: 'Serveurs asynchrones, développement d\'APIs REST modulaires et rapides' },
                { name: 'C# / .NET', category: 'backend', level: 'Avancé', description: 'Développement backend orienté objet, architectures robustes, Web APIs' },
                { name: 'Java', category: 'backend', level: 'Avancé', description: 'Fondamentaux POO rigoureux, multithreading, structures de données' },
                { name: 'PostgreSQL', category: 'database', level: 'Intermédiaire', description: 'Conception relationnelle, clés étrangères, indexation et requêtes complexes' },
                { name: 'SQL & PL/SQL', category: 'database', level: 'Intermédiaire', description: 'Procédures stockées, requêtage performant, normalisation de données' },
                { name: 'SignalR', category: 'database', level: 'Intermédiaire', description: 'Communication bidirectionnelle temps réel via WebSockets' },
                { name: 'JavaFX', category: 'tools', level: 'Intermédiaire', description: 'Interfaces graphiques desktop riches avec architecture MVC' },
                { name: 'Git & GitHub', category: 'tools', level: 'Avancé', description: 'Gestion de branches, workflow collaboratif, pull requests et versioning' },
                { name: 'Jira & Kanban', category: 'tools', level: 'Avancé', description: 'Suivi de tickets, sprints agiles et organisation de livrables' }
            ]
        },
        projects: {
            title: "Projets Réalisés",
            subtitle: "Applications complètes, architectures temps réel et systèmes logiciels.",
            filterAll: "Tous",
            filterRealtime: "Temps Réel / Web",
            filterDesktop: "Logiciel Desktop",
            viewCode: "Code GitHub",
            viewDetails: "Détails Techniques",
            liveDemo: "Démo en ligne",
            items: [
                {
                    id: 'basketBall',
                    title: "BasketBall_LiveScore",
                    category: "realtime",
                    badge: "Temps Réel & Full Stack",
                    desc: "Plateforme web de simulation et de suivi de matchs de basket avec diffusion des scores en temps réel via WebSockets.",
                    features: [
                        "Diffusion temps réel des scores et événements de match grâce à SignalR.",
                        "Interface interactive développée en Angular & TypeScript.",
                        "Architecture backend en C# assurant la cohérence des règles de jeu.",
                        "Base de données relationnelle SQL modélisant équipes, joueurs, fautes, chronos et statistiques."
                    ],
                    tech: ["C#", ".NET", "Angular", "TypeScript", "SignalR", "SQL"],
                    image: "/assets/images/basketball_preview.jpg",
                    github: "https://github.com/faroukaitoujkal/BasketBall_LiveScore",
                    demo: null
                },
                {
                    id: 'helbHotel',
                    title: "Système de Gestion HelbHotel",
                    category: "desktop",
                    badge: "Architecture Logicielle",
                    desc: "Application desktop de gestion hôtelière automatisant la réservation de chambres, la gestion des clients et la facturation.",
                    features: [
                        "Séparation architecturale stricte en Modèle-Vue-Contrôleur (MVC).",
                        "Interface graphique intuitive sous JavaFX conçue pour les opérations de réception.",
                        "Persistance des réservations, calculs automatiques des disponibilités.",
                        "Code clair, maintenable et découplé facilitant les extensions futures."
                    ],
                    tech: ["Java", "JavaFX", "MVC", "SQL"],
                    image: "/assets/images/helbhotel-preview.jpg",
                    github: "https://github.com/faroukaitoujkal/HELBHotel",
                    demo: null
                },
                {
                    id: 'helbTower',
                    title: "HelbTower - Moteur de Jeu RPG",
                    category: "desktop",
                    badge: "Moteur & Interface",
                    desc: "Jeu vidéo RPG tactique dans un univers médiéval mettant en valeur la programmation événementielle et la POO.",
                    features: [
                        "Moteur d'interface événementiel sous JavaFX avec animations d'éléments visuels.",
                        "Implémentation rigoureuse du pattern MVC dissociant l'état du jeu du rendu.",
                        "Gestion d'inventaire, combats au tour par tour et progression de statistiques.",
                        "Optimisation des temps de réponse et architecture logicielle propre."
                    ],
                    tech: ["Java", "JavaFX", "MVC", "POO"],
                    image: "/assets/images/helbtower_preview.jpg",
                    github: "https://github.com/faroukaitoujkal/HELBTower",
                    demo: null
                }
            ]
        },
        contact: {
            title: "Me Contacter",
            subtitle: "Un projet à concrétiser, une opportunité ou une question ? Échangeons ensemble.",
            message: "Prêt à échanger sur vos défis techniques et vos projets.",
            infoDescription: "Je suis activement à l'écoute d'opportunités en tant que Software Developer (CDI / Missions) à Bruxelles ou en formule hybride/remote. N'hésitez pas à me contacter par message, email direct ou téléphone.",
            locationLabel: "Localisation",
            locationValue: "Bruxelles, Belgique",
            phoneLabel: "Téléphone",
            phoneValue: "+32 488 96 74 19",
            emailLabel: "Email",
            emailValue: "faroukaitoujkal@gmail.com",
            copied: "Copié dans le presse-papier !",
            form: {
                name: "Votre Nom",
                email: "Votre Email",
                subject: "Sujet",
                message: "Comment puis-je vous aider ?",
                send: "Envoyer le message",
                sending: "Envoi en cours...",
                success: "Message envoyé avec succès ! Je vous répondrai rapidement.",
                error: "Échec de l'envoi. Vous pouvez m'écrire directement par email.",
                placeholders: {
                    name: "Jean Dupont",
                    email: "jean@exemple.com",
                    subject: "Opportunité professionnelle",
                    message: "Bonjour Farouk..."
                }
            },
            email: "Email",
            github: "GitHub",
            linkedin: "LinkedIn",
        },
        footer: {
            copyright: "Ait Oujkal Farouk — Software Developer",
            tagline: "Conception de logiciels résilients, performants et évolutifs.",
            rights: "Tous droits réservés.",
            legal: "Mentions légales",
            privacy: "Politique de confidentialité",
            contact: "Contact",
        },
        legalPage: {
            title: "Mentions Légales",
            sections: [
                {
                    title: "1. Éditeur du site",
                    content: "Ce site web est édité par Ait Oujkal Farouk, Software Developer domicilié à Bruxelles, Belgique."
                },
                {
                    title: "2. Hébergement",
                    content: "Ce site est hébergé par Vercel Inc. (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis)."
                },
                {
                    title: "3. Propriété Intellectuelle",
                    content: "L'ensemble du contenu de ce site (textes, images, code, architecture graphique) est la propriété exclusive de Ait Oujkal Farouk sauf mention contraire."
                }
            ]
        },
        privacyPage: {
            title: "Politique de Confidentialité",
            sections: [
                {
                    title: "1. Traitement des données",
                    content: "Les données transmises via le formulaire de contact (nom, adresse email, message) sont uniquement utilisées pour répondre à votre sollicitation et ne font l'objet d'aucune cession à des tiers."
                },
                {
                    title: "2. Cookies & Traceurs",
                    content: "Ce site n'utilise aucun cookie publicitaire ou traceur intrusif."
                },
                {
                    title: "3. Vos droits",
                    content: "Vous disposez d'un droit d'accès, de rectification ou de suppression de vos informations en me contactant directement à faroukaitoujkal@gmail.com."
                }
            ]
        }
    },
};
