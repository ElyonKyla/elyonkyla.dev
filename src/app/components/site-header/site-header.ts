import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

@Component({
  imports: [LanguageSwitcher],
  selector: 'app-site-header',
  styleUrl: './site-header.scss',
  templateUrl: './site-header.html',
})
export class SiteHeader {
  protected readonly content = inject(LanguageService).content;
}
