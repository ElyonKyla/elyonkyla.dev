import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-education-section',
  styleUrl: './education-section.scss',
  templateUrl: './education-section.html',
})
export class EducationSection {
  private readonly languageService = inject(LanguageService);

  protected readonly content = this.languageService.content;
  protected readonly data = this.languageService.data;
}
