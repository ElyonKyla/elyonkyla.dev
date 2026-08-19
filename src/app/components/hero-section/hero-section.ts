import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero-section',
  styleUrl: './hero-section.scss',
  templateUrl: './hero-section.html',
})
export class HeroSection {
  protected readonly content = inject(LanguageService).content;
}
