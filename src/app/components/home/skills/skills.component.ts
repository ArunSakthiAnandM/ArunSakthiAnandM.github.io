import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skillsList = [
    {
      title: 'Programming Languages',
      skills: [
        'C',
        'C++',
        'Java',
        'JavaScript',
        'Typescript',
        'HTML',
        'CSS',
        'Python',
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        'Spring',
        'Spring boot',
        'Angular',
        'Otter',
        'StencilJS',
        'React',
        'NodeJS',
        'ExpressJS',
      ],
    },
    {
      title: 'Tools and Applications',
      skills: [
        'PostgreSQL',
        'MongoDB',
        'Firebase',
        'Supabase',
        'Android Studio',
        'Git',
        'Github',
        'LaTeX',
      ],
    },
  ];
}
