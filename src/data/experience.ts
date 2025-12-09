import { Experience } from './data.model';

export const experience: Array<Experience> = [
  {
    title: 'Air India',
    subTitle: 'Lead Engineer (Full-Stack)',
    start: 'June 2024',
    end: 'Present',
    link: 'https://www.airindia.com/',
    desc: [
      'Modernized a mission-critical Spring Boot platform by upgrading from Java 8 to 21 and Spring 2 to 3, reducing p99 latency by around 40% and garbage collection pauses by 95% in production workloads.',
      'Built a high throughput push notification microservice using asynchronous pipelines with FCM and APNs, replacing external vendors and achieving 60% infra cost savings while maintaining high reliability and scalability.',
      "Led a team of four to redesign Air India's notification system into a decoupled Azure Service Bus-based architecture with multiple priority topics and dead-letter queues, improving throughput from 30 to 75 TPS.",
      'Re-architected the backend and datastore of the Preference Management System by replacing Couchbase with MongoDB and Redis, reducing infrastructure costs from 1.6L to 85K, and built an Angular interface enabling users to update preferences through a streamlined UI.',
      'Developed a Notification Dashboard using Angular, with secure RBAC and reducing campaign launch cycles from hours to minutes by eliminating direct database operations and enabling self-service workflows.',
    ],
  },
  {
    title: 'Air India',
    subTitle: 'Software Development Engineer Trainee',
    start: 'June 2023',
    end: 'May 2024',
    link: 'https://www.airindia.com/',
    desc: [
      'Received High Flyer Award for contributions in migrating core backend services during the Air India-Vistara integration, scaling systems to multi-terabyte datasets and ensuring consistency, zero-downtime rollouts, and reliability across distributed microservices.',
      'Enhanced the airline search experience by developing UI components (StencilJS + Angular) and leading the upgrade from Angular 13 to 18, improving stability, performance, and maintainability.',
      "Developed a serverless Web Performance Monitoring platform using Node.js (v16+), TypeScript, Azure Functions, PostgreSQL, and Playwright automation to track Core Web Vitals and deliver real-time performance analytics and competitive benchmarking for Air India's digital transformation.",
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
