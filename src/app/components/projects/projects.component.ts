import { Component } from '@angular/core';
import { projects } from '../../../data/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  itemsList = projects;
}
