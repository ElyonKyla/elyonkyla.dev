import { DOCUMENT } from '@angular/common';
import { computed, Component, effect, inject, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { tallerCarsCaseStudyContent } from '../../content/taller-cars-case-study-content';
import { LanguageService } from '../../services/language.service';
import { CaseStudyArchitecture } from './case-study-architecture';

const caseStudyUrl = 'https://taniaveiga-dev.netlify.app/projects/taller-cars-listanco';

@Component({
  imports: [CaseStudyArchitecture, RouterLink],
  selector: 'app-taller-cars-case-study',
  styleUrl: './taller-cars-case-study.scss',
  templateUrl: './taller-cars-case-study.html',
})
export class TallerCarsCaseStudy implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly languageService = inject(LanguageService);
  private readonly meta = inject(Meta);
  private readonly canonical = this.createCanonical();

  protected readonly content = computed(
    () => tallerCarsCaseStudyContent[this.languageService.currentLanguage()],
  );
  protected readonly technologies = ['Angular', 'TypeScript', 'Directus', 'Netlify', 'Railway'];

  constructor() {
    effect(() => {
      const content = this.content();

      this.document.title = content.metaTitle;
      this.canonical.href = caseStudyUrl;
      this.meta.updateTag({ name: 'description', content: content.metaDescription });
      this.meta.updateTag({ property: 'og:title', content: content.metaTitle });
      this.meta.updateTag({ property: 'og:description', content: content.metaDescription });
      this.meta.updateTag({ property: 'og:url', content: caseStudyUrl });
    });
  }

  ngOnDestroy(): void {
    this.document.title = this.languageService.content().documentTitle;
    this.canonical.remove();
    this.meta.removeTag("name='description'");
    this.meta.removeTag("property='og:title'");
    this.meta.removeTag("property='og:description'");
    this.meta.removeTag("property='og:url'");
  }

  private createCanonical(): HTMLLinkElement {
    this.document.head.querySelectorAll('link[rel="canonical"]').forEach((link) => link.remove());
    const canonical = this.document.createElement('link');
    canonical.rel = 'canonical';
    this.document.head.append(canonical);
    return canonical;
  }
}
