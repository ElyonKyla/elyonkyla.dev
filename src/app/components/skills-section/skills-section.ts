import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills-section',
  styleUrl: './skills-section.scss',
  templateUrl: './skills-section.html',
})
export class SkillsSection {
  private readonly languageService = inject(LanguageService);

  protected readonly content = this.languageService.content;
  protected readonly data = this.languageService.data;
}
