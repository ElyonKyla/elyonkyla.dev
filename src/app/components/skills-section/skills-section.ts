import { Component, inject } from '@angular/core';
import { portfolioData } from '../../content/portfolio-content';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills-section',
  styleUrl: './skills-section.scss',
  templateUrl: './skills-section.html',
})
export class SkillsSection {
  protected readonly content = inject(LanguageService).content;
  protected readonly skillGroups = portfolioData.skills;
}
