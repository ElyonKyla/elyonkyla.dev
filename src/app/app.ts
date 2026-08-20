import { Component, inject } from '@angular/core';
import { AboutSection } from './components/about-section/about-section';
import { CertificationsSection } from './components/certifications-section/certifications-section';
import { ContactSection } from './components/contact-section/contact-section';
import { EducationSection } from './components/education-section/education-section';
import { ExperienceSection } from './components/experience-section/experience-section';
import { HeroSection } from './components/hero-section/hero-section';
import { ProjectsSection } from './components/projects-section/projects-section';
import { SiteHeader } from './components/site-header/site-header';
import { SkillsSection } from './components/skills-section/skills-section';
import { TrainingSection } from './components/training-section/training-section';
import { LanguageService } from './services/language.service';

@Component({
  imports: [
    SiteHeader,
    HeroSection,
    AboutSection,
    ExperienceSection,
    SkillsSection,
    ProjectsSection,
    EducationSection,
    TrainingSection,
    CertificationsSection,
    ContactSection,
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly content = inject(LanguageService).content;
}
