export interface Education {
  year: string;
  degree: string;
  institution: string;
  detail: string;
}

export interface SkillGroup {
  icon: string;
  color: 'cyan' | 'violet' | 'rose';
  title: string;
  tags: string[];
}

export interface Project {
  icon: string;
  color: 'cyan' | 'violet' | 'rose';
  title: string;
  points: string[];
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface CertificateInfo {
  programme: string;
  issuer: string;
  centre: string;
  duration: string;
  credentialId: string;
  description: string;
}

export const contact: ContactInfo = {
  email: 'anushkanathani11@gmail.com',
  phone: '9525938124',
  location: 'Muzaffarpur, Bihar',
  linkedin: '#',
  github: '#',
};

export const education: Education[] = [
  {
    year: '2025 – Present',
    degree: 'CA Intermediate',
    institution: 'Institute of Chartered Accountants of India',
    detail: 'Pursuing',
  },
  {
    year: '2025 – 2028',
    degree: 'B.Com (Honours)',
    institution: 'Indira Gandhi National Open University',
    detail: 'Expected Graduation',
  },
  {
    year: '2025',
    degree: 'Class 12',
    institution: 'Central Board of Secondary Education',
    detail: 'Scored 88.6%',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    icon: '📊',
    color: 'cyan',
    title: 'Business & Analytics',
    tags: [
      'KPI Analysis',
      'Problem Framing',
      'Data Interpretation',
      'Data Visualization',
      'Regression',
      'Data Cleaning',
    ],
  },
  {
    icon: '💻',
    color: 'violet',
    title: 'Tools & Programming',
    tags: ['Python', 'Tableau', 'Excel', 'Data Structures', 'APIs', 'File Handling'],
  },
  {
    icon: '🤖',
    color: 'rose',
    title: 'AI & Finance',
    tags: [
      'Generative AI',
      'LLM Fundamentals',
      'Prompt Engineering',
      'AI Agents',
      'Accounting',
      'Financial Analysis',
    ],
  },
];

export const projects: Project[] = [
  {
    icon: '📈',
    color: 'cyan',
    title: 'KPI Experiment & Business Analytics',
    points: [
      'Designed a KPI-focused analytics exercise involving experiment design and interpretation of business outcomes',
      'Applied business problem-framing and KPI-based analysis to support data-driven decision-making',
    ],
  },
  {
    icon: '📊',
    color: 'violet',
    title: 'Business Performance Dashboard',
    points: [
      'Developed a dashboard analyzing Profit Margin, Cost, Average Order Value, Return Rate and Shipping Delay',
      'Built interactive data visualizations in Tableau for business performance metrics',
    ],
  },
  {
    icon: '📋',
    color: 'rose',
    title: 'Data Cleaning & Quality Analysis',
    points: [
      'Analyzed data quality in a business dataset and identified duplicate records to improve reliability',
      'Created data-quality and duplicate flags to support cleaner downstream analysis',
    ],
  },
];

export const achievements: Achievement[] = [
  {
    icon: '🥈',
    title: 'State-Level Silver Medalist',
    description: 'Karate, SGFI Games',
  },
  {
    icon: '🥋',
    title: '1st Dan Black Belt',
    description: 'Karate',
  },
  {
    icon: '🏓',
    title: 'Table Tennis & Chess',
    description: 'Recreational Activities',
  },
];

export const certificate: CertificateInfo = {
  programme: 'Business Analytics with Gen & Agentic AI',
  issuer: 'BITS School of Management',
  centre: 'CEPD',
  duration: '6 Dec 2025 – 28 Jun 2026',
  credentialId: 'BITSOM/BA/2511785',
  description:
    'Successfully completed the comprehensive programme covering Business Analytics & Data Science, Data Visualization, Python, Databases, Machine Learning Fundamentals, LLM & Prompt Engineering, Generative AI and AI Agents.',
};

export const stats = [
  { value: '3', suffix: '+', label: 'Projects Completed' },
  { value: '6', suffix: '+', label: 'Months Training' },
  { value: '88', suffix: '%', label: 'Class 12 Score' },
  { value: '1', suffix: 'st', label: 'Dan Black Belt' },
];
