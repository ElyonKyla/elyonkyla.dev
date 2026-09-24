import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

@Component({
  imports: [LanguageSwitcher, RouterLink],
  selector: 'app-site-header',
  styleUrl: './site-header.scss',
  templateUrl: './site-header.html',
})
export class SiteHeader {
  private readonly router = inject(Router);

  protected readonly content = inject(LanguageService).content;
  protected readonly isCaseStudy = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects.startsWith('/projects/taller-cars-listanco')),
    ),
    { initialValue: this.router.url.startsWith('/projects/taller-cars-listanco') },
  );
}
