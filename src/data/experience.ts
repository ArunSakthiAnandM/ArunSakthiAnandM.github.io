import { Experience } from './data.model';

export const experience: Array<Experience> = [
  {
    title: 'Air India',
    subTitle: 'Lead Engineer',
    start: 'June 2024',
    end: 'Present',
    link: 'https://www.airindia.com/',
    desc: [
      'Developed Preference Management module, enabling users to customize notification settings across channels.',
      'Architected push notification backend (Spring Boot + Firebase/APNs), replacing third-party vendors and cutting costs by 60%.',
      'Built internal notifications dashboard enabling non-tech analysts to publish campaigns, reducing turnaround time from hours to minutes.',
      'Migrated Air India website front-end from Angular 14 to Angular 18, enhancing performance by 10% in Lighthouse reports and reducing bundle size by 20%.',
    ],
  },
  {
    title: 'Air India',
    subTitle: 'Graduate Engineer Trainee',
    start: 'June 2023',
    end: 'June 2024',
    link: 'https://www.airindia.com/',
    desc: [
      'Developed search widget component for Air India homepage using StencilJS and AEM, enhancing site functionality and user search experience.',
      'Built back-end for report generator to assess Air India websites performance using Node.js, deployed as Azure Functions app for scalability.',
    ],
  },
  {
    title: 'KPIT Technologies',
    subTitle: 'Software Developer Intern',
    start: 'May 2022',
    end: 'July 2022',
    link: 'https://www.kpit.com/',
    desc: [
      'Worked with QEMU spice protocols to get remote access to virtual machines',
    ],
  },
  {
    title: 'CRIOT',
    subTitle: 'Intern Trainee',
    start: 'January 2020',
    end: 'March 2020',
    link: 'https://www.linkedin.com/company/criot/',
    desc: ['Worked with python libraries namely NumPy, SciPy, Matplotlib'],
  },
];
// {
//     title: '',
//     subTitle: '',
//     start: '',
//     end: '',
//     link: '',
//     desc: ['', ''],
//   }
