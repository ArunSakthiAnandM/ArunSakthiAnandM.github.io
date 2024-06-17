import { Project } from './data.model';

export const projects: Array<Project> = [
  {
    id: 5,
    title: 'TODO App',
    timeline: 'September 2023',
    desc: 'A Full-Stack Todo Application that incorporates key web features like Authorisation, Route Protection',
    skills: [
      'Node',
      'Express',
      'PugJS',
      'MongoDB',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    link: 'https://github.com/ArunSakthiAnandM/TODO-App',
  },
  {
    id: 4,
    title: 'HERMES',
    timeline: 'January 2020',
    desc: 'An Android Chat Application exclusive to IIT Hyderabad users',
    skills: ['Java', 'Firebase', 'Android Studio'],
    link: 'https://github.com/ArunSakthiAnandM/Hermes_Android_App/tree/main/Hermes-main',
  },
  {
    id: 3,
    title: 'TOY CAR',
    timeline: 'November 2019',
    desc: 'Voice-driven toy car built using python deep-learning APIs',
    skills: [
      'Python',
      'Keras',
      'TensorFlow',
      'Librosa',
      'Arduino Programming Language(C++)',
    ],
    link: 'https://github.com/ArunSakthiAnandM/Voice_Controlled_Toy_Car',
  },
  {
    id: 2,
    title: 'CALCULATOR',
    timeline: 'October 2020',
    desc: 'Built a basic calculator controlled by ATmega328 micro-controller from scratch',
    skills: ['Arduino Programming Language (C++)'],
    link: 'https://github.com/ArunSakthiAnandM/Arduino_UNO_Calculator/tree/main/Hardware_Calculator',
  },
  {
    id: 1,
    title: 'DRONE',
    timeline: 'March 2020',
    desc: 'Built a drone (Manually wired and calibrated) that works on auto and manual pilot modes}',
    skills: ['IoT'],
    link: '',
  },
];
