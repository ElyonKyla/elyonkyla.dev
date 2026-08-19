import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about-section',
  styleUrl: './about-section.scss',
  templateUrl: './about-section.html',
})
export class AboutSection {
  protected readonly content = inject(LanguageService).content;
}
