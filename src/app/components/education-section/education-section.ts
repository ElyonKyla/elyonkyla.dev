import { Component, inject } from '@angular/core';
import { portfolioData } from '../../content/portfolio-content';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-education-section',
  styleUrl: './education-section.scss',
  templateUrl: './education-section.html',
})
export class EducationSection {
  protected readonly content = inject(LanguageService).content;
  protected readonly education = portfolioData.education;
}
