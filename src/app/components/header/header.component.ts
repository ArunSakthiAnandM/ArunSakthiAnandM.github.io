import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  onMobileHeaderClick(e: Event) {
    const mobileHeaderList = document.getElementsByClassName(
      'mobile-header-list-container'
    );
    console.log(mobileHeaderList);
    mobileHeaderList[0].classList.toggle('hide-mobile');
  }
}
