import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects-section',
  styleUrl: './projects-section.scss',
  templateUrl: './projects-section.html',
})
export class ProjectsSection {
  private readonly languageService = inject(LanguageService);

  protected readonly content = this.languageService.content;
  protected readonly data = this.languageService.data;
}
