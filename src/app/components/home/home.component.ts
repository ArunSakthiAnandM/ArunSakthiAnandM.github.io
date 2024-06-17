import { Component } from '@angular/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { education } from '../../../data/education';
import { experience } from '../../../data/experience';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutmeComponent, AboutComponent, WorkComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  experience = experience;
  education = education;
}
