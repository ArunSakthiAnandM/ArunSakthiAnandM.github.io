import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent {
  constructor() {}

  @Input() itemsList: any;
  @Input() showDesc: boolean | undefined;
  @Input() header: string | undefined;
}
