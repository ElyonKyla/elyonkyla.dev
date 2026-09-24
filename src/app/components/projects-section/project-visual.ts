import { Component, input } from '@angular/core';
import { ProjectItem } from '../../content/portfolio-content';

@Component({
  selector: 'app-project-visual',
  styleUrl: './project-visual.scss',
  templateUrl: './project-visual.html',
})
export class ProjectVisual {
  readonly project = input.required<ProjectItem>();
}
