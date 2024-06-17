export interface Achievement {}

export interface Blog {
  id: number;
  title: string;
  description: Array<{ heading: string; content: string }>;
  conclusion: string;
  imagePaths: Array<string>;
}

export interface Certification {}

export interface Education {
  title: string;
  subTitle: string;
  start: string;
  end: string;
  link: string;
}

export interface Experience {
  title: string;
  subTitle: string;
  start: string;
  end: string;
  link: string;
  desc: Array<string>;
}

export interface Project {
  id: number;
  title: string;
  timeline: string;
  desc: string;
  skills: Array<string>;
  link: string;
}

export interface Teaching {}
