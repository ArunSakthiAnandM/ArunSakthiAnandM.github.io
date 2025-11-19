import { Experience } from './data.model';

export const experience: Array<Experience> = [
  {
    title: 'Air India',
    subTitle: 'Lead Engineer',
    start: 'June 2024',
    end: 'Present',
    link: 'https://www.airindia.com/',
    desc: [
      'Built a high-throughput, distributed push-notification microservice using Spring Boot, Firebase, APNs, achieving 3x lower latency and 60% infra cost reduction through non-blocking I/O, and batched message pipelines.',
      'Re-architected the Preference Management System using PostgreSQL + Redis, replacing Couchbase and cutting infra spend from 1.6L to 85K while improving lookup performance by 30% via optimized data modeling and cache-first access patterns.',
      'Designed a self-service Notification Dashboard, integrating backend APIs with secure RBAC and reducing campaign launch cycles from hours to minutes by removing direct DB operations.',
      'Migrated core backend services during the Air India-Vistara integration, scaling systems to multi-terabyte datasets and ensuring consistency, zero-downtime rollouts, and reliability across distributed microservices.',
      'Upgraded a legacy service from Java 11 to Java 21, eliminating redundant DB calls and adopting virtual threads to improve concurrency, boost throughput, and reduce system load under peak traffic.',
    ],
  },
  {
    title: 'Air India',
    subTitle: 'Graduate Engineer Trainee',
    start: 'June 2023',
    end: 'June 2024',
    link: 'https://www.airindia.com/',
    desc: [
      'Enhanced the airline search experience by developing UI components (StencilJS + AngularJS) and leading the upgrade from Angular 13 to 18, improving stability, performance, and maintainability.',
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
