import { Component, inject } from '@angular/core';
import { LanguageCode } from '../../content/portfolio-content';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  styleUrl: './language-switcher.scss',
  templateUrl: './language-switcher.html',
})
export class LanguageSwitcher {
  protected readonly languageService = inject(LanguageService);
  protected readonly content = this.languageService.content;
  protected readonly currentLanguage = this.languageService.currentLanguage;

  protected setLanguage(language: LanguageCode): void {
    this.languageService.setLanguage(language);
  }
}
