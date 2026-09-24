import { Component, input } from '@angular/core';
import { TallerCarsCaseStudyContent } from '../../content/taller-cars-case-study-content';

@Component({
  selector: 'app-case-study-architecture',
  styleUrl: './case-study-architecture.scss',
  templateUrl: './case-study-architecture.html',
})
export class CaseStudyArchitecture {
  readonly content = input.required<TallerCarsCaseStudyContent>();
}
