import { Component } from '@angular/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutmeComponent,
    AboutComponent,
    WorkComponent,
    EducationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
