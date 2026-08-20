import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-certifications-section',
  styleUrl: './certifications-section.scss',
  templateUrl: './certifications-section.html',
})
export class CertificationsSection {
  private readonly languageService = inject(LanguageService);

  protected readonly content = this.languageService.content;
  protected readonly data = this.languageService.data;
}
