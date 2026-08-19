import { Component, inject } from '@angular/core';
import { portfolioData } from '../../content/portfolio-content';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects-section',
  styleUrl: './projects-section.scss',
  templateUrl: './projects-section.html',
})
export class ProjectsSection {
  protected readonly content = inject(LanguageService).content;
  protected readonly projects = portfolioData.projects;
}
