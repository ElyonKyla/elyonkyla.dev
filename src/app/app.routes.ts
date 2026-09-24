import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'projects/taller-cars-listanco',
    loadComponent: () =>
      import('./pages/taller-cars-case-study/taller-cars-case-study').then(
        ({ TallerCarsCaseStudy }) => TallerCarsCaseStudy,
      ),
  },
];
