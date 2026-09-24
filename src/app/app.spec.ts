import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

function sectionText(compiled: HTMLElement, sectionId: string): string {
  return compiled.querySelector(`section#${sectionId}`)?.textContent ?? '';
}

const privateIdentifiers = [
  ['4466', '3087P'],
  ['3eld', '4TAD', 'pjh0'],
  ['2025', '-XTIFCD', '2418'],
  ['1889', '0721'],
  ['014', '/20', '-ED'],
].map((parts) => parts.join(''));

const unearnedAwsCertification = ['AWS Certified', ' Developer'].join('');

describe('App', () => {
  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio owner name', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Tania Veiga');
  });

  it('should render the one-page portfolio sections', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('section#home')).toBeTruthy();
    expect(compiled.querySelector('section#about')).toBeTruthy();
    expect(compiled.querySelector('section#contact')).toBeTruthy();
    expect(compiled.querySelector('section#training')).toBeTruthy();
    expect(compiled.querySelector('section#certifications')).toBeTruthy();

    const sectionOrder = [
      ...(compiled.querySelector('.app-main') as HTMLElement).children,
    ].map((section) => section.tagName.toLowerCase());
    expect(sectionOrder).toEqual([
      'app-hero-section',
      'app-experience-section',
      'app-projects-section',
      'app-about-section',
      'app-skills-section',
      'app-education-section',
      'app-training-section',
      'app-certifications-section',
    ]);
  });

  it('should render the updated hero and personal about copy in both languages', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const hero = compiled.querySelector('section#home') as HTMLElement;
    const about = compiled.querySelector('section#about') as HTMLElement;

    expect(hero.textContent).toContain('Backend Developer · Java · Python · AWS');
    expect(hero.textContent).toContain(
      "I'm a backend developer with experience in enterprise applications, databases, data integration and processing.",
    );
    expect(about.querySelectorAll('p').length).toBe(3);
    expect(about.textContent).toContain("I'm Tania, a backend developer and a naturally curious person.");
    expect(about.textContent).toContain('Hanzo and Nami');

    const spanishButton = compiled.querySelector(
      'button[aria-label="Switch to Spanish"]',
    ) as HTMLButtonElement;
    spanishButton.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(hero.textContent).toContain('Backend Developer · Java · Python · AWS');
    expect(hero.textContent).toContain(
      'Soy desarrolladora backend con experiencia en aplicaciones empresariales, bases de datos e integración y procesamiento de datos.',
    );
    expect(about.querySelectorAll('p').length).toBe(3);
    expect(about.textContent).toContain('Soy Tania, desarrolladora backend');
    expect(about.textContent).toContain('Hanzo y Nami');
  });

  it('should render validated professional experience', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('ERHARDT Serikat');
    expect(compiled.textContent).toContain('Software Engineer');
    expect(compiled.textContent).toContain('legacy Pro*C modules integrated with Oracle');
  });

  it('should keep formal education separate from courses', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const educationText = sectionText(compiled, 'education');

    expect(educationText).toContain('Universitat Oberta de Catalunya');
    expect(educationText).toContain('Multiplatform Application Development (DAM)');
    expect(educationText).toContain('Networked Computer Systems Administration (ASIR)');
    expect(educationText).not.toContain('Full-Stack Web Programming');
    expect(educationText).not.toContain('Developing on AWS');
  });

  it('should render courses inside the training section', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const trainingText = sectionText(compiled, 'training');

    expect(trainingText).toContain('Advanced Course in Python Programming');
    expect(trainingText).toContain('Developing on AWS');
    expect(trainingText).toContain('Full-Stack Web Programming');
    expect(trainingText).toContain('350 hours');
    expect(trainingText).toContain('Grade: Outstanding');
  });

  it('should render the AWS certification', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('AWS Certified Cloud Practitioner');
    expect(compiled.textContent).toContain('Foundation-level knowledge of AWS Cloud concepts');
  });

  it('should switch the visible language and document metadata', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const spanishButton = compiled.querySelector(
      'button[aria-label="Switch to Spanish"]',
    ) as HTMLButtonElement;

    spanishButton.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(compiled.textContent).toContain('Sobre mí');
    expect(compiled.textContent).toContain('Ingeniera de Software');
    expect(compiled.textContent).toContain('Cursos');
    expect(compiled.textContent).toContain('Cursos y formación especializada');
    expect(compiled.textContent).toContain('Curso Superior de Programación con Python');
    expect(compiled.textContent).toContain('350 horas');
    expect(compiled.textContent).toContain('Calificación: Sobresaliente');
    expect(compiled.textContent).toContain('Grado en Ingeniería Informática');
    expect(compiled.textContent).toContain('Certificaciones');
    expect(compiled.textContent).toContain(
      'Conocimientos fundamentales sobre conceptos de AWS Cloud',
    );
    expect(document.documentElement.lang).toBe('es');
    expect(document.title).toBe('Tania Veiga | Desarrolladora Backend');
  });

  it('should not render a phone number, sample content or the Angular placeholder', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const textContent = compiled.textContent ?? '';

    expect(textContent).not.toMatch(/\+?\d[\d\s().-]{7,}\d/);
    expect(textContent).not.toContain('Lorem ipsum');
    expect(textContent).not.toContain('Example');
    expect(textContent).not.toContain('Congratulations! Your app is running.');
    expect(textContent).not.toContain('Explore the Docs');
    for (const privateIdentifier of privateIdentifiers) {
      expect(textContent).not.toContain(privateIdentifier);
    }
    expect(textContent).not.toContain(unearnedAwsCertification);
  });

  it('should keep AWS course content out of certifications', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const trainingText = sectionText(compiled, 'training');
    const certificationsText = sectionText(compiled, 'certifications');

    expect(trainingText).toContain('Developing on AWS');
    expect(certificationsText).toContain('AWS Certified Cloud Practitioner');
    expect(certificationsText).not.toContain('Developing on AWS');
    expect(certificationsText).not.toContain(unearnedAwsCertification);
  });

  it('should render only the three authorized projects', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const projectsSection = compiled.querySelector('section#projects') as HTMLElement;
    const projectArticles = projectsSection.querySelectorAll('article');
    const projectsText = projectsSection.textContent ?? '';

    expect(projectArticles.length).toBe(3);
    expect(projectsText).toContain('Taller & Cars Listanco');
    expect(projectsText).toContain('Digital Tachograph Data Processing');
    expect(projectsText).toContain('Python Admin Web');
    expect(projectsText).toContain('Full-Stack Developer & Web Architect');
    const caseStudyLinks = projectsSection.querySelectorAll<HTMLAnchorElement>(
      'a[href="/projects/taller-cars-listanco"]',
    );
    expect(caseStudyLinks.length).toBe(1);
    expect(caseStudyLinks[0].textContent).toContain('View case study');
    expect(caseStudyLinks[0].target).toBe('');
    expect(
      projectsSection.querySelector<HTMLAnchorElement>('a[href="https://tallercarslistanco.es/"]')
        ?.rel,
    ).toContain('noopener');
    expect(
      projectsSection.querySelector('.projects-section__technology-count')?.getAttribute('aria-label'),
    ).toBe('1 additional technology: Railway');
    expect(projectsText).not.toContain(['Automated PDF', ' Reporting'].join(''));
    expect(projectsText).not.toContain(['Generación automatizada', ' de informes PDF'].join(''));

    const spanishButton = compiled.querySelector(
      'button[aria-label="Switch to Spanish"]',
    ) as HTMLButtonElement;
    spanishButton.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(projectsSection.textContent).toContain('Procesamiento de datos de tacógrafos digitales');
    expect(projectsSection.textContent).toContain('Desarrolladora Full-Stack y Arquitecta Web');
    expect(projectsSection.textContent).toContain('Desarrolladora Python');
    expect(caseStudyLinks[0].textContent).toContain('Ver detalle');
    expect(
      projectsSection.querySelector('.projects-section__technology-count')?.getAttribute('aria-label'),
    ).toBe('1 tecnología adicional: Railway');

    const englishButton = compiled.querySelector(
      'button[aria-label="Cambiar a inglés"]',
    ) as HTMLButtonElement;
    englishButton.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(projectsSection.textContent).toContain('Taller & Cars Listanco');
    expect(projectsSection.textContent).toContain('Full-Stack Developer & Web Architect');
  });

  it('should render and localize the Taller & Cars Listanco case study', async () => {
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/projects/taller-cars-listanco');

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const caseStudy = compiled.querySelector('.case-study') as HTMLElement;

    expect(caseStudy).toBeTruthy();
    expect(compiled.querySelector('app-projects-section')).toBeNull();
    expect(caseStudy.textContent).toContain('Delivered · In production');
    expect(caseStudy.textContent).toContain('Inventory API');
    expect(caseStudy.querySelector('img')?.getAttribute('src')).toBe(
      '/images/projects/taller-cars-listanco.webp',
    );

    const externalLinks = caseStudy.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]');
    expect(externalLinks.length).toBe(2);
    expect([...externalLinks].every((link) => link.rel.includes('noopener'))).toBe(true);
    expect(
      caseStudy.querySelector<HTMLAnchorElement>(
        'a[href="https://github.com/ElyonKyla/compraventa-coches"]',
      ),
    ).toBeTruthy();

    const spanishButton = compiled.querySelector(
      'button[aria-label="Switch to Spanish"]',
    ) as HTMLButtonElement;
    spanishButton.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(caseStudy.textContent).toContain('Entregado · En producción');
    expect(caseStudy.textContent).toContain('API de inventario');
    expect(caseStudy.textContent).toContain('Volver a proyectos');
  });

  it('should navigate every case-study header link back to its landing section', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    const compiled = fixture.nativeElement as HTMLElement;
    const sectionIds = [
      'home',
      'experience',
      'projects',
      'about',
      'skills',
      'education',
      'training',
      'certifications',
      'contact',
    ];

    for (const sectionId of sectionIds) {
      await router.navigateByUrl('/projects/taller-cars-listanco');
      fixture.detectChanges();
      await fixture.whenStable();

      const link = compiled.querySelector<HTMLAnchorElement>(
        `.site-header__nav a[href="/#${sectionId}"]`,
      );
      expect(link, `missing header link for ${sectionId}`).toBeTruthy();

      link?.click();
      fixture.detectChanges();
      await fixture.whenStable();

      expect(router.url).toBe(`/#${sectionId}`);
      expect(compiled.querySelector(`section#${sectionId}`)).toBeTruthy();
    }
  });

  it('should preserve the landing header fragment links', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll<HTMLAnchorElement>(
      '.site-header__nav .site-header__link',
    );

    expect([...links].map((link) => link.getAttribute('href'))).toEqual([
      '#home',
      '#experience',
      '#projects',
      '#about',
      '#skills',
      '#education',
      '#training',
      '#certifications',
      '#contact',
    ]);
  });

  it('should manage the accessible mobile navigation state', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const toggle = compiled.querySelector('.site-header__menu-toggle') as HTMLButtonElement;
    const navigation = compiled.querySelector('.site-header__nav') as HTMLElement;

    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(toggle.getAttribute('aria-label')).toBe('Open menu');
    expect(navigation.classList.contains('site-header__nav--open')).toBe(false);

    toggle.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(toggle.getAttribute('aria-label')).toBe('Close menu');
    expect(navigation.classList.contains('site-header__nav--open')).toBe(true);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');

    toggle.click();
    fixture.detectChanges();
    navigation.querySelector<HTMLAnchorElement>('a')?.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');

    toggle.click();
    fixture.detectChanges();
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');

    const spanishButton = compiled.querySelector(
      'button[aria-label="Switch to Spanish"]',
    ) as HTMLButtonElement;
    spanishButton.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-label')).toBe('Abrir menú');
  });

  it('should localize case-study metadata and restore landing metadata', async () => {
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/projects/taller-cars-listanco');

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    const canonical = () => document.head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]');
    const metaContent = (selector: string) =>
      document.head.querySelector<HTMLMetaElement>(selector)?.content ?? null;

    expect(document.title).toBe('Taller & Cars Listanco | Project by Tania Veiga');
    expect(metaContent('meta[name="description"]')).toBe(
      'Case study of the website and inventory system developed for Taller & Cars Listanco using Angular, Directus, Netlify and Railway.',
    );
    expect(metaContent('meta[property="og:title"]')).toBe(document.title);
    expect(metaContent('meta[property="og:description"]')).toBe(
      metaContent('meta[name="description"]'),
    );
    expect(metaContent('meta[property="og:url"]')).toBe(
      'https://taniaveiga-dev.netlify.app/projects/taller-cars-listanco',
    );
    expect(canonical().length).toBe(1);
    expect(canonical()[0].href).toBe(
      'https://taniaveiga-dev.netlify.app/projects/taller-cars-listanco',
    );

    const spanishButton = compiled.querySelector(
      'button[aria-label="Switch to Spanish"]',
    ) as HTMLButtonElement;
    spanishButton.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(document.title).toBe('Taller & Cars Listanco | Proyecto de Tania Veiga');
    expect(metaContent('meta[name="description"]')).toBe(
      'Caso de estudio del sitio web y sistema de inventario desarrollado para Taller & Cars Listanco con Angular, Directus, Netlify y Railway.',
    );
    expect(metaContent('meta[property="og:title"]')).toBe(document.title);
    expect(metaContent('meta[property="og:description"]')).toBe(
      metaContent('meta[name="description"]'),
    );
    expect(canonical().length).toBe(1);

    await router.navigateByUrl('/');
    fixture.detectChanges();
    await fixture.whenStable();

    expect(document.title).toBe('Tania Veiga | Desarrolladora Backend');
    expect(canonical().length).toBe(0);
    expect(metaContent('meta[name="description"]')).toBeNull();
    expect(metaContent('meta[property="og:title"]')).toBeNull();
    expect(metaContent('meta[property="og:description"]')).toBeNull();
    expect(metaContent('meta[property="og:url"]')).toBeNull();
  });

  it('should initialize the project carousel on the first project', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const slides = compiled.querySelectorAll<HTMLElement>('.projects-section__item');
    const previousButton = compiled.querySelector(
      '.projects-carousel__arrow--previous',
    ) as HTMLButtonElement;

    expect(previousButton.disabled).toBe(true);
    expect(slides[0].hasAttribute('aria-hidden')).toBe(false);
    expect(slides[1].getAttribute('aria-hidden')).toBe('true');
    expect(compiled.querySelector('.projects-carousel__counter')?.textContent).toContain('01 / 03');
  });

  it('should advance the project carousel one project at a time', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const nextButton = compiled.querySelector(
      '.projects-carousel__arrow--next',
    ) as HTMLButtonElement;

    nextButton.click();
    fixture.detectChanges();

    const slides = compiled.querySelectorAll<HTMLElement>('.projects-section__item');
    expect(slides[0].getAttribute('aria-hidden')).toBe('true');
    expect(slides[1].hasAttribute('aria-hidden')).toBe(false);
    expect(compiled.querySelector('.projects-carousel__counter')?.textContent).toContain('02 / 03');
  });

  it('should disable the next control on the final project', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const nextButton = compiled.querySelector(
      '.projects-carousel__arrow--next',
    ) as HTMLButtonElement;

    nextButton.click();
    fixture.detectChanges();
    nextButton.click();
    fixture.detectChanges();

    expect(nextButton.disabled).toBe(true);
    expect(compiled.querySelector('.projects-carousel__counter')?.textContent).toContain('03 / 03');
  });

  it('should select a project directly from its indicator', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const indicators = compiled.querySelectorAll<HTMLButtonElement>(
      '.projects-carousel__indicator',
    );

    indicators[2].click();
    fixture.detectChanges();

    expect(indicators[2].getAttribute('aria-pressed')).toBe('true');
    expect(compiled.querySelector('.projects-carousel__counter')?.textContent).toContain('03 / 03');
  });

  it('should preserve the selected project and localize carousel labels', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const projectsSection = compiled.querySelector('section#projects') as HTMLElement;
    const indicators = compiled.querySelectorAll<HTMLButtonElement>(
      '.projects-carousel__indicator',
    );

    indicators[1].click();
    fixture.detectChanges();
    expect(projectsSection.getAttribute('aria-label')).toBe('Featured projects carousel');
    expect(projectsSection.querySelector('article')?.getAttribute('aria-label')).toBe(
      'Project 1 of 3',
    );
    expect(indicators[1].getAttribute('aria-label')).toBe('Show project 2');

    const spanishButton = compiled.querySelector(
      'button[aria-label="Switch to Spanish"]',
    ) as HTMLButtonElement;
    spanishButton.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(projectsSection.getAttribute('aria-label')).toBe('Carrusel de proyectos destacados');
    expect(projectsSection.querySelectorAll('article')[1].getAttribute('aria-label')).toBe(
      'Proyecto 2 de 3',
    );
    expect(indicators[1].getAttribute('aria-label')).toBe('Mostrar proyecto 2');
    expect(indicators[1].getAttribute('aria-pressed')).toBe('true');
    expect(compiled.querySelector('.projects-carousel__counter')?.textContent).toContain('02 / 03');
  });

  it('should support arrow-key navigation in the project carousel', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const projectsSection = compiled.querySelector('section#projects') as HTMLElement;

    projectsSection.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'ArrowRight' }));
    fixture.detectChanges();

    expect(compiled.querySelector('.projects-carousel__counter')?.textContent).toContain('02 / 03');
  });

  it('should render FastAPI in the skills section in both languages', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Frameworks & platforms');
    expect(compiled.textContent).toContain('FastAPI');

    const spanishButton = compiled.querySelector(
      'button[aria-label="Switch to Spanish"]',
    ) as HTMLButtonElement;

    spanishButton.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(compiled.textContent).toContain('Frameworks y plataformas');
    expect(compiled.textContent).toContain('FastAPI');
  });
});
