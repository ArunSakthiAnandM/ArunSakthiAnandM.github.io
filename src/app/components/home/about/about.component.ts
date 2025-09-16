import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
