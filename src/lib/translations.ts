export type Language = "fr" | "en";

export const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navbar
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.talk": "Parlons-en",

    // Hero
    "hero.greeting": "Je suis Maharavo",
    "hero.title1": "Développeur",
    "hero.title2": "Logiciel & Web",
    "hero.lead": "Créer des applications web full-stack, des applications mobiles et des systèmes backend robustes. Des interfaces interactives aux architectures de bases de données scalables.",
    "hero.cv": "Télécharger CV",

    // Services
    "services.title": "Services",
    "services.subtitle": "Des solutions complètes du frontend au backend",
    "services.fullstack.title": "Développement Web Full-Stack",
    "services.fullstack.desc": "Création d'applications web complètes avec des frontends React, des backends Node.js et des architectures de bases de données robustes. Du MVP à la production.",
    "services.fullstack.tag1": "React & TypeScript",
    "services.fullstack.tag2": "Node.js & Express",
    "services.fullstack.tag3": "PostgreSQL & MongoDB",
    "services.mobile.title": "Développement d'Applications Mobiles",
    "services.mobile.desc": "Création d'applications mobiles cross-platform avec React Native et Expo. Mises à jour en temps réel, support hors ligne et performances natives.",
    "services.mobile.tag1": "React Native",
    "services.mobile.tag2": "Expo",
    "services.mobile.tag3": "Cross-platform",
    "services.backend.title": "Développement Backend & API",
    "services.backend.desc": "Conception et implémentation d'APIs RESTful, endpoints GraphQL et systèmes temps réel avec WebSockets. Scalables, sécurisés et bien documentés.",
    "services.backend.tag1": "REST & GraphQL",
    "services.backend.tag2": "Socket.io",
    "services.backend.tag3": "Auth & JWT",
    "services.database.title": "Architecture de Bases de Données",
    "services.database.desc": "Conception de schémas efficaces, optimisation des requêtes et mise en place de stratégies de cache. PostgreSQL, MongoDB, Redis et solutions cloud.",
    "services.database.tag1": "PostgreSQL & MongoDB",
    "services.database.tag2": "Redis & Firebase",
    "services.database.tag3": "Supabase",

    // About
    "about.title": "À propos",
    "about.bio": "Je suis Maharavo, développeur logiciel basé à Antananarivo, Madagascar. Je conçois et développe des interfaces interactives, des backends complexes et des architectures de bases de données robustes. Je me concentre sur un code propre, maintenable et des solutions pragmatiques qui répondent à des besoins concrets.",
    "about.approach": "Mon Approche",
    "about.step1": "Comprendre les besoins et l'architecture",
    "about.step2": "Construire un code propre et maintenable",
    "about.step3": "Déployer et itérer",
    "about.repos": "Dépôts sur GitHub",
    "about.projects": "Projets full-stack",
    "about.languages": "Langages maîtrisés",

    // Skills
    "skills.title": "Compétences",
    "skills.subtitle": "Développement full-stack avec des technologies modernes",
    "skills.languages": "Langages",
    "skills.spokenLanguages": "Langues parlées",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.databases": "Bases de données",
    "skills.devops": "DevOps & Outils",
    "skills.testing": "Tests",

    // Projects
    "projects.title": "Projets récents.",
    "projects.subtitle": "Quelques projets issus de mes dépôts GitHub.",
    "projects.all": "Tous",
    "projects.empty": "Aucun dépôt dans cette langue pour le moment.",

    // Contact
    "contact.title": "Construisons quelque chose ensemble.",
    "contact.desc": "Je suis ouvert aux collaborations, stages et projets intéressants. N'hésitez pas à me contacter.",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.facebook": "Facebook",
    "contact.email": "Email",

    // Footer
    "footer.rights": "© {year} Maharavo · Développeur Logiciel",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.talk": "Let's Talk",

    // Hero
    "hero.greeting": "I am Maharavo",
    "hero.title1": "Software & Web",
    "hero.title2": "Developer",
    "hero.lead": "Building full-stack web applications, mobile apps, and robust backend systems. From interactive frontends to scalable database architectures.",
    "hero.cv": "Download CV",

    // Services
    "services.title": "Services",
    "services.subtitle": "Building complete digital solutions from frontend to backend",
    "services.fullstack.title": "Full-Stack Web Development",
    "services.fullstack.desc": "Building complete web applications with React frontends, Node.js backends, and robust database architectures. From MVP to production-ready platforms.",
    "services.fullstack.tag1": "React & TypeScript",
    "services.fullstack.tag2": "Node.js & Express",
    "services.fullstack.tag3": "PostgreSQL & MongoDB",
    "services.mobile.title": "Mobile App Development",
    "services.mobile.desc": "Creating cross-platform mobile applications with React Native and Expo. Real-time updates, offline support, and native performance.",
    "services.mobile.tag1": "React Native",
    "services.mobile.tag2": "Expo",
    "services.mobile.tag3": "Cross-platform",
    "services.backend.title": "Backend & API Development",
    "services.backend.desc": "Designing and implementing RESTful APIs, GraphQL endpoints, and real-time systems with WebSockets. Scalable, secure, and well-documented.",
    "services.backend.tag1": "REST & GraphQL",
    "services.backend.tag2": "Socket.io",
    "services.backend.tag3": "Auth & JWT",
    "services.database.title": "Database Architecture",
    "services.database.desc": "Designing efficient database schemas, optimizing queries, and setting up caching strategies. PostgreSQL, MongoDB, Redis, and cloud solutions.",
    "services.database.tag1": "PostgreSQL & MongoDB",
    "services.database.tag2": "Redis & Firebase",
    "services.database.tag3": "Supabase",

    // About
    "about.title": "About Me",
    "about.bio": "I'm Maharavo, a software developer based in Antananarivo, Madagascar. I design and build interactive frontends, complex backends, and robust database architectures. I focus on clean, maintainable code and pragmatic solutions that address concrete needs.",
    "about.approach": "My Approach",
    "about.step1": "Understand requirements & architecture",
    "about.step2": "Build clean, maintainable code",
    "about.step3": "Deploy & iterate",
    "about.repos": "Repositories on GitHub",
    "about.projects": "Full-stack projects",
    "about.languages": "Languages mastered",

    // Skills
    "skills.title": "Skills",
    "skills.subtitle": "Full-stack development with modern technologies",
    "skills.languages": "Languages",
    "skills.spokenLanguages": "Spoken Languages",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.databases": "Databases",
    "skills.devops": "DevOps & Tools",
    "skills.testing": "Testing",

    // Projects
    "projects.title": "Recent projects.",
    "projects.subtitle": "A selection of projects from my GitHub repositories.",
    "projects.all": "All",
    "projects.empty": "No repositories in this language yet.",

    // Contact
    "contact.title": "Let's build something together.",
    "contact.desc": "I'm open to collaborations, internships, and interesting projects. Reach out anytime.",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.facebook": "Facebook",
    "contact.email": "Email",

    // Footer
    "footer.rights": "© {year} Maharavo · Software Developer",
  },
};
