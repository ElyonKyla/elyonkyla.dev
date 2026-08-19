import { Component, inject } from '@angular/core';
import { portfolioData } from '../../content/portfolio-content';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience-section',
  styleUrl: './experience-section.scss',
  templateUrl: './experience-section.html',
})
export class ExperienceSection {
  protected readonly content = inject(LanguageService).content;
  protected readonly experience = portfolioData.experience;
}
