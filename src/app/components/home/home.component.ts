import { Component } from '@angular/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { experience } from '../../../../public/data/experience';
import { education } from '../../../../public/data/education';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutmeComponent, AboutComponent, WorkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  experience = experience;
  education = education;
}
