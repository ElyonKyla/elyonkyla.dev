import { LanguageCode } from './portfolio-content';

export interface TallerCarsCaseStudyContent {
  readonly back: string;
  readonly category: string;
  readonly status: string;
  readonly title: string;
  readonly role: string;
  readonly summary: string;
  readonly imageAlt: string;
  readonly objectiveTitle: string;
  readonly objective: string;
  readonly solutionTitle: string;
  readonly solution: string;
  readonly featuresTitle: string;
  readonly features: readonly string[];
  readonly architectureTitle: string;
  readonly architectureDescription: string;
  readonly architectureFrontend: string;
  readonly architectureCms: string;
  readonly architectureDeployment: string;
  readonly architectureHosting: string;
  readonly architectureFlow: string;
  readonly seoTitle: string;
  readonly seo: string;
  readonly workTitle: string;
  readonly work: string;
  readonly technologiesTitle: string;
  readonly linksTitle: string;
  readonly liveSite: string;
  readonly repository: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
}

export const tallerCarsCaseStudyContent: Record<LanguageCode, TallerCarsCaseStudyContent> = {
  en: {
    back: 'Back to projects',
    category: 'CLIENT PROJECT',
    status: 'Delivered · In production',
    title: 'Taller & Cars Listanco',
    role: 'Full-Stack Developer & Web Architect',
    summary:
      'The official website for a mechanical workshop and vehicle sales business, bringing together the company presentation, services, vehicle catalogue and contact channels in a production-ready platform.',
    imageAlt: 'Taller & Cars Listanco homepage displayed in a browser',
    objectiveTitle: 'Objective',
    objective:
      'Create a clear, credible digital presence for both sides of the business: workshop services and vehicle sales. The site needed to make current stock easy to discover while giving the team an efficient way to keep the inventory up to date.',
    solutionTitle: 'Solution',
    solution:
      'A responsive Angular website with a structured vehicle catalogue, individual vehicle pages and direct contact paths. Content and inventory management are separated from the public frontend through a private Directus administration panel.',
    featuresTitle: 'Features',
    features: [
      'Catalogue of available and reserved vehicles.',
      'Individual vehicle pages with photographs and technical specifications.',
      'Stock filters for faster vehicle discovery.',
      'Dedicated information about vehicle imports from Germany.',
      'Business services, location and contact information.',
      'Private inventory management through Directus.',
    ],
    architectureTitle: 'Architecture',
    architectureDescription:
      'The public Angular application consumes inventory managed in Directus. Netlify serves the frontend, while Railway hosts the private CMS and its data services.',
    architectureFrontend: 'Angular frontend',
    architectureCms: 'Directus CMS',
    architectureDeployment: 'Deployed on Netlify',
    architectureHosting: 'Hosted on Railway',
    architectureFlow: 'Inventory API',
    seoTitle: 'SEO & local presence',
    seo:
      'The project includes local SEO foundations, canonical URLs, an XML sitemap, social sharing metadata and structured data so search engines can understand the business, services and location.',
    workTitle: 'Work delivered',
    work:
      'I designed and developed the experience, defined the web architecture, configured the inventory platform and deployments, and delivered the complete project in production.',
    technologiesTitle: 'Technologies',
    linksTitle: 'Project links',
    liveSite: 'View live site',
    repository: 'View repository',
    metaTitle: 'Taller & Cars Listanco | Project by Tania Veiga',
    metaDescription:
      'Case study of the website and inventory system developed for Taller & Cars Listanco using Angular, Directus, Netlify and Railway.',
  },
  es: {
    back: 'Volver a proyectos',
    category: 'PROYECTO PARA CLIENTE',
    status: 'Entregado · En producción',
    title: 'Taller & Cars Listanco',
    role: 'Desarrolladora Full-Stack y Arquitecta Web',
    summary:
      'La web oficial de un taller mecánico y negocio de compraventa, que reúne la presentación de la empresa, sus servicios, el catálogo de vehículos y las vías de contacto en una plataforma preparada para producción.',
    imageAlt: 'Portada de Taller & Cars Listanco mostrada en un navegador',
    objectiveTitle: 'Objetivo',
    objective:
      'Crear una presencia digital clara y fiable para las dos áreas del negocio: los servicios de taller y la compraventa de vehículos. La web debía facilitar la consulta del stock y permitir al equipo mantener el inventario actualizado de forma eficiente.',
    solutionTitle: 'Solución',
    solution:
      'Una web responsive desarrollada con Angular, con un catálogo estructurado, fichas individuales de vehículos y vías directas de contacto. La gestión de contenido e inventario se separa del frontend público mediante un panel privado de Directus.',
    featuresTitle: 'Funcionalidades',
    features: [
      'Catálogo de vehículos disponibles o reservados.',
      'Fichas individuales con fotografías y especificaciones técnicas.',
      'Filtros de stock para localizar vehículos con rapidez.',
      'Información específica sobre la importación de vehículos desde Alemania.',
      'Servicios del negocio, ubicación e información de contacto.',
      'Gestión privada del inventario mediante Directus.',
    ],
    architectureTitle: 'Arquitectura',
    architectureDescription:
      'La aplicación pública Angular consume el inventario gestionado en Directus. Netlify sirve el frontend y Railway aloja el CMS privado y sus servicios de datos.',
    architectureFrontend: 'Frontend Angular',
    architectureCms: 'CMS Directus',
    architectureDeployment: 'Desplegado en Netlify',
    architectureHosting: 'Alojado en Railway',
    architectureFlow: 'API de inventario',
    seoTitle: 'SEO y presencia local',
    seo:
      'El proyecto incorpora fundamentos de SEO local, URLs canónicas, sitemap XML, metadatos para redes sociales y datos estructurados para que los buscadores comprendan el negocio, sus servicios y su ubicación.',
    workTitle: 'Trabajo realizado',
    work:
      'Diseñé y desarrollé la experiencia, definí la arquitectura web, configuré la plataforma de inventario y los despliegues, y entregué el proyecto completo en producción.',
    technologiesTitle: 'Tecnologías',
    linksTitle: 'Enlaces del proyecto',
    liveSite: 'Visitar web',
    repository: 'Ver repositorio',
    metaTitle: 'Taller & Cars Listanco | Proyecto de Tania Veiga',
    metaDescription:
      'Caso de estudio del sitio web y sistema de inventario desarrollado para Taller & Cars Listanco con Angular, Directus, Netlify y Railway.',
  },
};
