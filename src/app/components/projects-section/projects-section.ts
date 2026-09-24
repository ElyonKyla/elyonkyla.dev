import {
  Component,
  ElementRef,
  HostListener,
  inject,
  OnDestroy,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ProjectVisual } from './project-visual';

@Component({
  imports: [ProjectVisual],
  selector: 'app-projects-section',
  styleUrl: './projects-section.scss',
  templateUrl: './projects-section.html',
})
export class ProjectsSection implements OnDestroy {
  private readonly languageService = inject(LanguageService);
  private scrollFrame: number | undefined;

  @ViewChild('carouselViewport') private viewport?: ElementRef<HTMLElement>;
  @ViewChildren('projectSlide') private slides?: QueryList<ElementRef<HTMLElement>>;

  protected readonly content = this.languageService.content;
  protected readonly data = this.languageService.data;
  protected readonly activeIndex = signal(0);

  protected showProject(index: number): void {
    const lastIndex = this.data().projects.length - 1;
    const nextIndex = Math.max(0, Math.min(index, lastIndex));

    this.activeIndex.set(nextIndex);
    this.scrollToProject(nextIndex, this.prefersReducedMotion() ? 'auto' : 'smooth');
  }

  protected onTrackScroll(): void {
    this.scheduleFrame(() => {
      const viewport = this.viewport?.nativeElement;
      const slides = this.slides?.toArray() ?? [];

      if (!viewport || slides.length === 0) {
        return;
      }

      const viewportLeft = viewport.getBoundingClientRect().left;
      const closestIndex = slides.reduce((closest, slide, index) => {
        const currentDistance = Math.abs(slide.nativeElement.getBoundingClientRect().left - viewportLeft);
        const closestDistance = Math.abs(
          slides[closest].nativeElement.getBoundingClientRect().left - viewportLeft,
        );
        return currentDistance < closestDistance ? index : closest;
      }, 0);

      this.activeIndex.set(closestIndex);
    });
  }

  protected onCarouselKeydown(event: KeyboardEvent): void {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
      return;
    }

    event.preventDefault();
    this.showProject(this.activeIndex() + (event.key === 'ArrowRight' ? 1 : -1));
  }

  protected formatNumber(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  @HostListener('window:resize')
  protected onWindowResize(): void {
    this.scheduleFrame(() => this.scrollToProject(this.activeIndex(), 'auto'));
  }

  ngOnDestroy(): void {
    if (this.scrollFrame !== undefined) {
      globalThis.cancelAnimationFrame?.(this.scrollFrame);
    }
  }

  private scrollToProject(index: number, behavior: ScrollBehavior): void {
    const viewport = this.viewport?.nativeElement;
    const slide = this.slides?.get(index)?.nativeElement;

    if (!viewport || !slide) {
      return;
    }

    const left =
      viewport.scrollLeft +
      slide.getBoundingClientRect().left -
      viewport.getBoundingClientRect().left;
    viewport.scrollTo?.({ behavior, left });
  }

  private scheduleFrame(callback: () => void): void {
    if (this.scrollFrame !== undefined) {
      globalThis.cancelAnimationFrame?.(this.scrollFrame);
    }

    if (globalThis.requestAnimationFrame) {
      this.scrollFrame = globalThis.requestAnimationFrame(() => {
        this.scrollFrame = undefined;
        callback();
      });
      return;
    }

    callback();
  }

  private prefersReducedMotion(): boolean {
    return globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  }
}
