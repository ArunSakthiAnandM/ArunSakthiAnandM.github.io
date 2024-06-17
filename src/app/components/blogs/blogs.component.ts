import { Component } from '@angular/core';
import { blogs } from '../../../data/blogs';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  itemsList = blogs;
}
