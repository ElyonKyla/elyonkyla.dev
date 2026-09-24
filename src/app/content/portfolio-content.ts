export type LanguageCode = 'en' | 'es';

export type SectionId =
  | 'home'
  | 'about'
  | 'experience'
  | 'skills'
  | 'projects'
  | 'education'
  | 'training'
  | 'certifications'
  | 'contact';

export interface NavigationItem {
  readonly id: SectionId;
  readonly label: string;
}

export interface LinkLabels {
  readonly github: string;
  readonly linkedin: string;
  readonly email: string;
  readonly repository: string;
  readonly liveSite: string;
  readonly caseStudy: string;
}

export interface LanguageSwitcherLabels {
  readonly label: string;
  readonly switchToEnglish: string;
  readonly switchToSpanish: string;
}

export interface ProjectCarouselLabels {
  readonly regionLabel: string;
  readonly carouselDescription: string;
  readonly slideDescription: string;
  readonly project: string;
  readonly of: string;
  readonly previous: string;
  readonly next: string;
  readonly showProject: string;
}

export interface PortfolioContent {
  readonly documentTitle: string;
  readonly skipLink: string;
  readonly navigationLabel: string;
  readonly openNavigationLabel: string;
  readonly closeNavigationLabel: string;
  readonly contactLinksLabel: string;
  readonly name: string;
  readonly role: string;
  readonly intro: string;
  readonly about: readonly string[];
  readonly aboutImageAlt: string;
  readonly contact: string;
  readonly projectsIntro: string;
  readonly navigation: readonly NavigationItem[];
  readonly sectionTitles: Record<SectionId, string>;
  readonly links: LinkLabels;
  readonly languageSwitcher: LanguageSwitcherLabels;
  readonly projectCarousel: ProjectCarouselLabels;
}

export interface ExperienceItem {
  readonly title: string;
  readonly organization: string;
  readonly period: string;
  readonly description: string;
}

export interface SkillGroup {
  readonly title: string;
  readonly skills: readonly string[];
}

export interface ProjectItem {
  readonly number: string;
  readonly category: string;
  readonly title: string;
  readonly role: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly visual: 'screenshot' | 'data-flow' | 'admin';
  readonly visualLabel: string;
  readonly additionalTechnologyLabel?: string;
  readonly imageSrc?: string;
  readonly displayUrl?: string;
  readonly repositoryUrl?: string;
  readonly liveUrl?: string;
}

export interface EducationItem {
  readonly title: string;
  readonly institution: string;
  readonly period: string;
}

export interface TrainingItem {
  readonly title: string;
  readonly provider: string;
  readonly period: string;
  readonly duration: string;
  readonly detail?: string;
}

export interface CertificationItem {
  readonly title: string;
  readonly description: string;
}

export interface PortfolioData {
  readonly experience: readonly ExperienceItem[];
  readonly skills: readonly SkillGroup[];
  readonly projects: readonly ProjectItem[];
  readonly education: readonly EducationItem[];
  readonly training: readonly TrainingItem[];
  readonly certifications: readonly CertificationItem[];
}

const navigationEn: readonly NavigationItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'training', label: 'Courses' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const navigationEs: readonly NavigationItem[] = [
  { id: 'home', label: 'Inicio' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Tecnologías' },
  { id: 'education', label: 'Formación' },
  { id: 'training', label: 'Cursos' },
  { id: 'certifications', label: 'Certificaciones' },
  { id: 'contact', label: 'Contacto' },
];

export const portfolioContent: Record<LanguageCode, PortfolioContent> = {
  en: {
    documentTitle: 'Tania Veiga | Backend Developer',
    skipLink: 'Skip to main content',
    navigationLabel: 'Primary navigation',
    openNavigationLabel: 'Open menu',
    closeNavigationLabel: 'Close menu',
    contactLinksLabel: 'Contact links',
    name: 'Tania Veiga',
    role: 'Backend Developer · Java · Python · AWS',
    intro:
      "Backend developer with experience in enterprise applications, databases, data integration and processing. I've worked on national and international projects and continue to expand my skills with Python, AWS and new backend technologies.",
    about: [
      "I'm Tania, a backend developer and a naturally curious person. I enjoy understanding how things work, solving problems and continuing to learn, both at work and beyond.",
      "I began my professional career working across systems and software development, and over time I found my place in backend development. I particularly enjoy working with logic and data, and building solutions that make sense beyond the code itself.",
      "Away from the keyboard, I enjoy reading, cooking and trying new things. I also live with two cats, Hanzo and Nami, who firmly believe that every desk belongs to them. I'm currently combining my professional development with a degree in Computer Engineering while continuing to learn about backend and cloud technologies.",
    ],
    aboutImageAlt: 'Portrait of Tania Veiga',
    contact:
      'Let’s talk. I’m interested in backend development opportunities, particularly involving Java, Python and AWS.',
    projectsIntro: 'Web and backend solutions developed for real clients and personal projects.',
    navigation: navigationEn,
    sectionTitles: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Featured projects',
      education: 'Education',
      training: 'Courses & Specialized Training',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    links: {
      github: 'GitHub profile',
      linkedin: 'LinkedIn profile',
      email: 'Contact by email',
      repository: 'GitHub',
      liveSite: 'View live site',
      caseStudy: 'View case study',
    },
    languageSwitcher: {
      label: 'Language selector',
      switchToEnglish: 'Switch to English',
      switchToSpanish: 'Switch to Spanish',
    },
    projectCarousel: {
      regionLabel: 'Featured projects carousel',
      carouselDescription: 'carousel',
      slideDescription: 'slide',
      project: 'Project',
      of: 'of',
      previous: 'Previous project',
      next: 'Next project',
      showProject: 'Show project',
    },
  },
  es: {
    documentTitle: 'Tania Veiga | Desarrolladora Backend',
    skipLink: 'Saltar al contenido principal',
    navigationLabel: 'Navegación principal',
    openNavigationLabel: 'Abrir menú',
    closeNavigationLabel: 'Cerrar menú',
    contactLinksLabel: 'Enlaces de contacto',
    name: 'Tania Veiga',
    role: 'Backend Developer · Java · Python · AWS',
    intro:
      'Desarrolladora backend con experiencia en aplicaciones empresariales, bases de datos e integración y procesamiento de datos. He trabajado en proyectos nacionales e internacionales y continúo ampliando mi perfil con Python, AWS y nuevas tecnologías backend.',
    about: [
      'Soy Tania, desarrolladora backend y una persona bastante curiosa por naturaleza. Me gusta entender cómo funcionan las cosas, resolver problemas y seguir aprendiendo, tanto dentro como fuera del trabajo.',
      'Empecé mi trayectoria profesional entre sistemas y desarrollo, y con los años fui encontrando mi sitio en el backend, donde disfruto especialmente trabajando con lógica, datos y construyendo soluciones que tengan sentido más allá del código.',
      'Fuera del teclado, me gusta leer, cocinar y probar cosas nuevas. También convivo con dos gatos, Hanzo y Nami, que tienen bastante claro que cualquier escritorio les pertenece. Actualmente compagino mi desarrollo profesional con el Grado en Ingeniería Informática y continúo aprendiendo sobre backend y cloud.',
    ],
    aboutImageAlt: 'Retrato de Tania Veiga',
    contact:
      '¿Hablamos? Estoy interesada en oportunidades de desarrollo backend, especialmente con Java, Python y AWS.',
    projectsIntro:
      'Soluciones web y backend desarrolladas para clientes reales y proyectos personales.',
    navigation: navigationEs,
    sectionTitles: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Tecnologías',
      projects: 'Proyectos destacados',
      education: 'Formación',
      training: 'Cursos y formación especializada',
      certifications: 'Certificaciones',
      contact: 'Contacto',
    },
    links: {
      github: 'Perfil de GitHub',
      linkedin: 'Perfil de LinkedIn',
      email: 'Contactar por email',
      repository: 'GitHub',
      liveSite: 'Visitar web',
      caseStudy: 'Ver detalle',
    },
    languageSwitcher: {
      label: 'Selector de idioma',
      switchToEnglish: 'Cambiar a inglés',
      switchToSpanish: 'Cambiar a español',
    },
    projectCarousel: {
      regionLabel: 'Carrusel de proyectos destacados',
      carouselDescription: 'carrusel',
      slideDescription: 'diapositiva',
      project: 'Proyecto',
      of: 'de',
      previous: 'Proyecto anterior',
      next: 'Proyecto siguiente',
      showProject: 'Mostrar proyecto',
    },
  },
};

export const portfolioData: Record<LanguageCode, PortfolioData> = {
  en: {
    experience: [
      {
        period: '2024–2025',
        organization: 'ERHARDT Serikat',
        title: 'Software Engineer',
        description:
          'Worked with legacy Pro*C modules integrated with Oracle and XSL-FO/XSLT templates for PDF reporting.',
      },
      {
        period: '2023–2024',
        organization: 'Locatel Fleets Solution S.L.',
        title: 'Backend Developer',
        description:
          'Developed a Java backend solution for processing digital tachograph and driver card data in accordance with European regulations. Worked with XML generation and processing, independently implemented functionality, and performed functional and integration testing.',
      },
      {
        period: '2022–2023',
        organization: 'Open Soft Servicios Informáticos',
        title: 'Software Developer',
        description:
          'Developed and integrated new features into an ERP for business logistics using Java and the Ontimize framework.',
      },
      {
        period: '2022',
        organization: 'University of Vigo',
        title: 'R&D Collaborator · Department of Mechanical Engineering',
        description:
          'Managed the data centre infrastructure used for research simulations in a virtualized environment.',
      },
      {
        period: '2019–2022',
        organization: 'SIVSA · Stellantis project',
        title: 'Packaging Manager',
        description:
          'Analysed and optimized distributed unattended installations worldwide. Packaged and deployed industrial design, graphics, office, data analysis and visualization software for the automotive sector.',
      },
      {
        period: '2019',
        organization: 'EDISA',
        title: 'Systems Administrator and Developer',
        description:
          'Worked with Oracle development modules on the LIBRA platform and administered and deployed the LIBRA service using Docker.',
      },
    ],
    skills: [
      { title: 'Backend & languages', skills: ['Java', 'Python', 'C#', 'Pro*C'] },
      {
        title: 'Frameworks & platforms',
        skills: ['Flask', 'FastAPI', 'Ontimize', 'Angular', 'React', '.NET'],
      },
      { title: 'Databases', skills: ['Oracle', 'SQL', 'MySQL', 'Microsoft SQL Server'] },
      { title: 'Cloud & containers', skills: ['AWS', 'Docker'] },
      { title: 'Data & integration', skills: ['XML', 'XSLT', 'XSL-FO'] },
      { title: 'Web development', skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP'] },
      {
        title: 'Systems & infrastructure',
        skills: [
          'GNU/Linux',
          'Windows',
          'Windows Server',
          'Active Directory',
          'PowerShell',
          'DNS',
          'DHCP',
          'LDAP',
          'LAMP',
          'VMware',
        ],
      },
      { title: 'Workflow', skills: ['Git', 'Agile', 'Scrum'] },
      { title: 'Languages', skills: ['Spanish · Native', 'Galician · Native', 'English · B2'] },
    ],
    projects: [
      {
        number: '01',
        category: 'CLIENT PROJECT',
        title: 'Taller & Cars Listanco',
        role: 'Full-Stack Developer & Web Architect',
        description:
          'Corporate website and vehicle catalogue developed and deployed for Taller & Cars Listanco. It includes individual vehicle pages, stock filtering, a private inventory panel powered by Directus, responsive design, local SEO, and deployment on Netlify and Railway.',
        technologies: ['Angular', 'TypeScript', 'Directus', 'Netlify', 'Railway'],
        visual: 'screenshot',
        visualLabel: 'Taller & Cars Listanco homepage',
        additionalTechnologyLabel: '1 additional technology: Railway',
        imageSrc: '/images/projects/taller-cars-listanco.webp',
        displayUrl: 'tallercarslistanco.es',
        liveUrl: 'https://tallercarslistanco.es/',
      },
      {
        number: '02',
        category: 'BACKEND & DATA',
        title: 'Digital Tachograph Data Processing',
        role: 'Backend Developer',
        description:
          'Java backend solution for processing digital tachograph and driver card data under European regulatory requirements, including structured XML generation and functional and integration testing.',
        technologies: ['Java', 'XML'],
        visual: 'data-flow',
        visualLabel: 'Abstract Java and XML data flow illustration',
      },
      {
        number: '03',
        category: 'PERSONAL PROJECT',
        title: 'Python Admin Web',
        role: 'Python Developer',
        description:
          'Flask web application for user administration, with CRUD operations, JSON persistence and Jinja2 templates.',
        technologies: ['Python', 'Flask', 'Jinja2', 'JSON'],
        visual: 'admin',
        visualLabel: 'Stylized administrative panel illustration',
        repositoryUrl: 'https://github.com/ElyonKyla/Python_Admin_Web',
      },
    ],
    education: [
      {
        title: 'Bachelor’s Degree in Computer Engineering',
        institution: 'Universitat Oberta de Catalunya (UOC) · Software Engineering track',
        period: 'In progress',
      },
      {
        title: 'Higher Technician in Multiplatform Application Development (DAM)',
        institution: 'CIPF A Carballeira',
        period: '2016–2018',
      },
      {
        title: 'Higher Technician in Networked Computer Systems Administration (ASIR)',
        institution: 'CIPF A Carballeira',
        period: '2014–2016',
      },
    ],
    training: [
      {
        title: 'Advanced Course in Python Programming',
        provider: 'Deusto Formación',
        period: 'Completed on 4 March 2026',
        duration: '350 hours',
        detail: 'Grade: Outstanding',
      },
      {
        title: 'Developing on AWS',
        provider: 'Centro de Novas Tecnoloxías de Galicia (CNTG) · Xunta de Galicia',
        period: '15–26 September 2025',
        duration: '45 hours',
        detail: 'Virtual training focused on developing and deploying applications on AWS.',
      },
      {
        title: 'Full-Stack Web Programming',
        provider: 'Adecco Learning & Consulting · Adecco Formación',
        period: '26 April–21 June 2023',
        duration: '260 hours',
        detail: '230 classroom hours and 30 online training hours.',
      },
    ],
    certifications: [
      {
        title: 'AWS Certified Cloud Practitioner',
        description:
          'Foundation-level knowledge of AWS Cloud concepts, core services, security, pricing and architectural best practices.',
      },
    ],
  },
  es: {
    experience: [
      {
        period: '2024–2025',
        organization: 'ERHARDT Serikat',
        title: 'Ingeniera de Software',
        description:
          'Trabajo con módulos heredados Pro*C integrados con Oracle y plantillas XSL-FO/XSLT para la generación de informes PDF.',
      },
      {
        period: '2023–2024',
        organization: 'Locatel Fleets Solution S.L.',
        title: 'Backend Developer',
        description:
          'Desarrollo backend en Java de una solución para procesar datos de tacógrafos digitales y tarjetas de conductor conforme a la normativa europea. Tratamiento y generación de XML, desarrollo autónomo de funcionalidades y ejecución de pruebas funcionales y de integración.',
      },
      {
        period: '2022–2023',
        organization: 'Open Soft Servicios Informáticos',
        title: 'Desarrolladora de Software',
        description:
          'Desarrollo e incorporación de nuevas funcionalidades en un ERP orientado a la logística empresarial mediante Java y el framework Ontimize.',
      },
      {
        period: '2022',
        organization: 'Universidad de Vigo',
        title: 'Colaboradora en I+D · Departamento de Ingeniería Mecánica',
        description:
          'Gestión de la infraestructura del CPD dedicada a simulaciones de investigación en un entorno virtualizado.',
      },
      {
        period: '2019–2022',
        organization: 'SIVSA · Proyecto Stellantis',
        title: 'Packaging Manager',
        description:
          'Análisis y optimización de instalaciones distribuidas y desatendidas a nivel mundial. Empaquetado y despliegue de software de diseño industrial y gráfico, ofimática, análisis y visualización de datos para el sector automovilístico.',
      },
      {
        period: '2019',
        organization: 'EDISA',
        title: 'Administradora de Sistemas y Desarrolladora',
        description:
          'Trabajo con módulos de desarrollo Oracle en la plataforma LIBRA y administración y despliegue del servicio LIBRA mediante Docker.',
      },
    ],
    skills: [
      { title: 'Backend y lenguajes', skills: ['Java', 'Python', 'C#', 'Pro*C'] },
      {
        title: 'Frameworks y plataformas',
        skills: ['Flask', 'FastAPI', 'Ontimize', 'Angular', 'React', '.NET'],
      },
      { title: 'Bases de datos', skills: ['Oracle', 'SQL', 'MySQL', 'Microsoft SQL Server'] },
      { title: 'Cloud y contenedores', skills: ['AWS', 'Docker'] },
      { title: 'Datos e integración', skills: ['XML', 'XSLT', 'XSL-FO'] },
      { title: 'Desarrollo web', skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP'] },
      {
        title: 'Sistemas e infraestructura',
        skills: [
          'GNU/Linux',
          'Windows',
          'Windows Server',
          'Active Directory',
          'PowerShell',
          'DNS',
          'DHCP',
          'LDAP',
          'LAMP',
          'VMware',
        ],
      },
      { title: 'Flujo de trabajo', skills: ['Git', 'Agile', 'Scrum'] },
      { title: 'Idiomas', skills: ['Español · Nativo', 'Gallego · Nativo', 'Inglés · B2'] },
    ],
    projects: [
      {
        number: '01',
        category: 'PROYECTO PARA CLIENTE',
        title: 'Taller & Cars Listanco',
        role: 'Desarrolladora Full-Stack y Arquitecta Web',
        description:
          'Sitio web corporativo y catálogo de vehículos desarrollado y puesto en producción para Taller & Cars Listanco. Incluye fichas individuales de vehículos, filtrado de stock, un panel privado de inventario con Directus, diseño responsive, SEO local y despliegue en Netlify y Railway.',
        technologies: ['Angular', 'TypeScript', 'Directus', 'Netlify', 'Railway'],
        visual: 'screenshot',
        visualLabel: 'Portada de Taller & Cars Listanco',
        additionalTechnologyLabel: '1 tecnología adicional: Railway',
        imageSrc: '/images/projects/taller-cars-listanco.webp',
        displayUrl: 'tallercarslistanco.es',
        liveUrl: 'https://tallercarslistanco.es/',
      },
      {
        number: '02',
        category: 'BACKEND Y DATOS',
        title: 'Procesamiento de datos de tacógrafos digitales',
        role: 'Desarrolladora Backend',
        description:
          'Solución backend en Java para procesar datos de tacógrafos digitales y tarjetas de conductor conforme a requisitos regulatorios europeos, incluyendo generación estructurada de XML y pruebas funcionales y de integración.',
        technologies: ['Java', 'XML'],
        visual: 'data-flow',
        visualLabel: 'Ilustración abstracta del flujo de datos entre Java y XML',
      },
      {
        number: '03',
        category: 'PROYECTO PERSONAL',
        title: 'Python Admin Web',
        role: 'Desarrolladora Python',
        description:
          'Aplicación web Flask para la administración de usuarios, con operaciones CRUD, persistencia JSON y plantillas Jinja2.',
        technologies: ['Python', 'Flask', 'Jinja2', 'JSON'],
        visual: 'admin',
        visualLabel: 'Ilustración estilizada de un panel administrativo',
        repositoryUrl: 'https://github.com/ElyonKyla/Python_Admin_Web',
      },
    ],
    education: [
      {
        title: 'Grado en Ingeniería Informática',
        institution:
          'Universitat Oberta de Catalunya (UOC) · Itinerario de Ingeniería del Software',
        period: 'En curso',
      },
      {
        title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
        institution: 'CIPF A Carballeira',
        period: '2016–2018',
      },
      {
        title: 'Técnico Superior en Administración de Sistemas Informáticos en Red (ASIR)',
        institution: 'CIPF A Carballeira',
        period: '2014–2016',
      },
    ],
    training: [
      {
        title: 'Curso Superior de Programación con Python',
        provider: 'Deusto Formación',
        period: 'Finalizado el 4 de marzo de 2026',
        duration: '350 horas',
        detail: 'Calificación: Sobresaliente',
      },
      {
        title: 'Developing on AWS',
        provider: 'Centro de Novas Tecnoloxías de Galicia (CNTG) · Xunta de Galicia',
        period: '15–26 de septiembre de 2025',
        duration: '45 horas',
        detail: 'Formación virtual orientada al desarrollo y despliegue de aplicaciones en AWS.',
      },
      {
        title: 'Programación Web Full Stack',
        provider: 'Adecco Learning & Consulting · Adecco Formación',
        period: '26 de abril–21 de junio de 2023',
        duration: '260 horas',
        detail: '230 horas presenciales y 30 horas de teleformación.',
      },
    ],
    certifications: [
      {
        title: 'AWS Certified Cloud Practitioner',
        description:
          'Conocimientos fundamentales sobre conceptos de AWS Cloud, servicios principales, seguridad, precios y buenas prácticas arquitectónicas.',
      },
    ],
  },
};
