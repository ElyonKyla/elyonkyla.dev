import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { LanguageCode, portfolioContent, portfolioData } from '../content/portfolio-content';

const storageKey = 'portfolio-language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly language = signal<LanguageCode>(this.getInitialLanguage());

  readonly currentLanguage = this.language.asReadonly();
  readonly content = computed(() => portfolioContent[this.language()]);
  readonly data = computed(() => portfolioData[this.language()]);

  constructor() {
    effect(() => {
      const language = this.language();
      const content = portfolioContent[language];

      this.document.documentElement.lang = language;
      this.document.title = content.documentTitle;
      this.saveLanguage(language);
    });
  }

  setLanguage(language: LanguageCode): void {
    this.language.set(language);
  }

  private getInitialLanguage(): LanguageCode {
    const storedLanguage = this.getStoredLanguage();
    return storedLanguage ?? 'en';
  }

  private getStoredLanguage(): LanguageCode | null {
    try {
      const storedValue = globalThis.localStorage?.getItem(storageKey);
      return this.isLanguageCode(storedValue) ? storedValue : null;
    } catch {
      return null;
    }
  }

  private saveLanguage(language: LanguageCode): void {
    try {
      globalThis.localStorage?.setItem(storageKey, language);
    } catch {
      return;
    }
  }

  private isLanguageCode(value: string | null | undefined): value is LanguageCode {
    return value === 'en' || value === 'es';
  }
}
