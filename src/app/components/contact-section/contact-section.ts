import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact-section',
  styleUrl: './contact-section.scss',
  templateUrl: './contact-section.html',
})
export class ContactSection {
  protected readonly content = inject(LanguageService).content;
}
