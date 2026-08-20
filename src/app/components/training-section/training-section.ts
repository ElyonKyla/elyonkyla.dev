import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-training-section',
  styleUrl: './training-section.scss',
  templateUrl: './training-section.html',
})
export class TrainingSection {
  private readonly languageService = inject(LanguageService);

  protected readonly content = this.languageService.content;
  protected readonly data = this.languageService.data;
}
