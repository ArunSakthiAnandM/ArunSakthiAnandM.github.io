import { Component } from '@angular/core';
import { blogs } from '../../../data/blogs';

@Component({
  selector: 'app-blogs',
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  itemsList = blogs;
  expandedBlogs: boolean[] = [];

  toggleBlog(index: number) {
    this.expandedBlogs[index] = !this.expandedBlogs[index];
  }
}
