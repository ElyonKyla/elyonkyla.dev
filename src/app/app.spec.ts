import { TestBed } from '@angular/core/testing';
import { App } from './app';

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
    expect(document.documentElement.lang).toBe('es');
    expect(document.title).toBe('Tania Veiga | Desarrolladora Backend');
  });
});
