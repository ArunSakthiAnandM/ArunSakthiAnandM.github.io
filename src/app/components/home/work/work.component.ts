import { Component, OnInit } from '@angular/core';
import { experience } from '../../../../../public/data/experience';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent implements OnInit {
  constructor() {}
  experience = experience;
  ngOnInit(): void {}
}
