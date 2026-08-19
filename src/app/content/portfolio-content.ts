export type LanguageCode = 'en' | 'es';

export interface NavigationItem {
  readonly id: SectionId;
  readonly label: string;
}

export type SectionId =
  'home' | 'about' | 'experience' | 'skills' | 'projects' | 'education' | 'contact';

export interface LinkLabels {
  readonly github: string;
  readonly linkedin: string;
  readonly email: string;
}

export interface LanguageSwitcherLabels {
  readonly label: string;
  readonly switchToEnglish: string;
  readonly switchToSpanish: string;
}

export interface PortfolioContent {
  readonly documentTitle: string;
  readonly skipLink: string;
  readonly navigationLabel: string;
  readonly contactLinksLabel: string;
  readonly name: string;
  readonly role: string;
  readonly intro: string;
  readonly about: string;
  readonly contact: string;
  readonly navigation: readonly NavigationItem[];
  readonly sectionTitles: Record<SectionId, string>;
  readonly links: LinkLabels;
  readonly languageSwitcher: LanguageSwitcherLabels;
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
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly url?: string;
}

export interface EducationItem {
  readonly title: string;
  readonly institution: string;
  readonly period?: string;
}

export interface PortfolioData {
  readonly experience: readonly ExperienceItem[];
  readonly skills: readonly SkillGroup[];
  readonly projects: readonly ProjectItem[];
  readonly education: readonly EducationItem[];
}

const navigationEn: readonly NavigationItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const navigationEs: readonly NavigationItem[] = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'skills', label: 'Tecnologías' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'education', label: 'Formación' },
  { id: 'contact', label: 'Contacto' },
];

export const portfolioContent: Record<LanguageCode, PortfolioContent> = {
  en: {
    documentTitle: 'Tania Veiga | Backend Developer',
    skipLink: 'Skip to main content',
    navigationLabel: 'Primary navigation',
    contactLinksLabel: 'Contact links',
    name: 'Tania Veiga',
    role: 'Backend Developer · Java · Python · AWS',
    intro:
      'I build backend applications and enterprise solutions, with experience in Java, databases and data processing. I am currently focusing my profile on cloud development with AWS while expanding my Python expertise.',
    about:
      'I am a backend developer with a multidisciplinary technical background spanning software development, systems and infrastructure. I have worked on enterprise applications, data processing and international projects, both independently and alongside other teams.',
    contact:
      'Let’s talk. I’m interested in backend development opportunities, particularly involving Java, Python and AWS.',
    navigation: navigationEn,
    sectionTitles: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    links: {
      github: 'GitHub profile',
      linkedin: 'LinkedIn profile',
      email: 'Contact by email',
    },
    languageSwitcher: {
      label: 'Language selector',
      switchToEnglish: 'Switch to English',
      switchToSpanish: 'Switch to Spanish',
    },
  },
  es: {
    documentTitle: 'Tania Veiga | Desarrolladora Backend',
    skipLink: 'Saltar al contenido principal',
    navigationLabel: 'Navegación principal',
    contactLinksLabel: 'Enlaces de contacto',
    name: 'Tania Veiga',
    role: 'Backend Developer · Java · Python · AWS',
    intro:
      'Desarrollo aplicaciones backend y soluciones empresariales, con experiencia en Java, bases de datos y tratamiento de datos. Actualmente estoy orientando mi perfil hacia el desarrollo cloud con AWS y ampliando mis conocimientos en Python.',
    about:
      'Soy desarrolladora backend con una trayectoria técnica multidisciplinar que combina desarrollo de software, sistemas e infraestructura. He trabajado con aplicaciones empresariales, procesamiento de datos y proyectos internacionales, desenvolviéndome tanto de forma autónoma como en colaboración con otros equipos.',
    contact:
      '¿Hablamos? Estoy interesada en oportunidades de desarrollo backend, especialmente con Java, Python y AWS.',
    navigation: navigationEs,
    sectionTitles: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Tecnologías',
      projects: 'Proyectos',
      education: 'Formación',
      contact: 'Contacto',
    },
    links: {
      github: 'Perfil de GitHub',
      linkedin: 'Perfil de LinkedIn',
      email: 'Contactar por email',
    },
    languageSwitcher: {
      label: 'Selector de idioma',
      switchToEnglish: 'Cambiar a inglés',
      switchToSpanish: 'Cambiar a español',
    },
  },
};

export const portfolioData: PortfolioData = {
  experience: [],
  skills: [],
  projects: [],
  education: [],
};
