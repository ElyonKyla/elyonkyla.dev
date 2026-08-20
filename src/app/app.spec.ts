import { TestBed } from '@angular/core/testing';
import { App } from './app';

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

  it('should render only the two authorized projects', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const projectsSection = compiled.querySelector('section#projects') as HTMLElement;
    const projectArticles = projectsSection.querySelectorAll('article');
    const projectsText = projectsSection.textContent ?? '';

    expect(projectArticles.length).toBe(2);
    expect(projectsText).toContain('Digital Tachograph Data Processing');
    expect(projectsText).toContain('Python Admin Web');
    expect(projectsText).not.toContain(['Automated PDF', ' Reporting'].join(''));
    expect(projectsText).not.toContain(['Generación automatizada', ' de informes PDF'].join(''));
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
