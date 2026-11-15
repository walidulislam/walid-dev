import { Project, EducationItem } from '@/types';

export const FEATURED_PROJECTS: Project[] = [
  {
    id: '01',
    title: 'BloodBank',
    category: 'Blood Donation Application',
    technology: 'MERN Stack',
    thumbnail: '/assets/Projects/project1.jpg',
    description:
      'A comprehensive blood donation platform designed to connect donors seamlessly with recipients in critical need of blood across Bangladesh.',
    features: [
      'Donor & volunteer management portal',
      'Instant blood donation request workflows',
      'Role-based Admin dashboard & analytics',
      'Real-time blood group search & filtering',
      'Secure funding integration powered by Stripe',
      'Automated request status & donation tracking',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'JWT'],
    liveUrl: 'https://blood-bank-wesite.netlify.app',
    clientRepo: 'https://github.com/walidulislam/blood-bank-client',
    serverRepo: 'https://github.com/walidulislam/blood-bank-server',
    isNextJs: false,
  },
  {
    id: '02',
    title: 'HomeNest',
    category: 'Real Estate / Property Platform',
    technology: 'MERN Stack',
    thumbnail: '/assets/Projects/project2.jpg',
    description:
      'A modern real estate and property discovery web application engineered to help users explore, verify, and manage premium property listings with complete transparency.',
    features: [
      'Interactive verified property listings directory',
      'Category-based property exploration & search filters',
      'User property management & submission system',
      'In-depth property details with high-res imagery',
      'Community ratings and customer review system',
      'Personalized user wishlist and dashboard',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Tailwind CSS'],
    liveUrl: 'https://home-nest-website.netlify.app/',
    clientRepo: 'https://github.com/walidulislam/home-nest-client',
    serverRepo: 'https://github.com/walidulislam/home-nest-server',
    isNextJs: false,
  },
  {
    id: '03',
    title: 'BDx Glory',
    category: 'E-commerce Website',
    technology: 'Next.js',
    thumbnail: '/assets/Projects/project3.jpg',
    description:
      'BDx Glory is a modern, high-performance e-commerce platform built with Next.js delivering a sleek, brutalist streetwear shopping experience.',
    features: [
      'Modern, responsive e-commerce storefront',
      'Fast product catalog browsing with real-time filters',
      'Detailed product view with specifications & sizing',
      'Category-based streetwear collection exploration',
      'Intuitive shopping cart and checkout interaction',
      'High-performance App Router server-side rendering',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Turbopack'],
    liveUrl: 'https://bdx-glory-website.netlify.app/',
    clientRepo: 'https://github.com/walidulislam/e-commerce-website',
    isNextJs: true,
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-01',
    degree: 'Diploma in Computer Science & Technology',
    institution: 'Barishal Polytechnic Institute',
    period: '2022 – Present (Session: 2022–23)',
    semester: '8th Semester',
    session: '2022–23',
    description:
      'Currently studying in the 8th Semester of Diploma in Computer Science & Technology. Deepening expertise in modern computer systems, data structures, full-stack software development, and networked web systems.',
    tags: ['Computer Technology', '8th Semester', 'Session 2022–23', 'Software Engineering'],
    badge: '8th Semester',
  },
  {
    id: 'edu-02',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Jhalokathi Govt. High School',
    period: 'Passing Year: 2022',
    group: 'Commerce',
    gpa: '4.64 / 5.00',
    description:
      'Completed secondary education with high distinction in the Commerce group, developing analytical problem-solving skills, mathematical foundation, and discipline.',
    tags: ['Commerce', 'GPA: 4.64 / 5.00', 'Passing Year 2022'],
    badge: 'GPA 4.64 / 5.00',
  },
  {
    id: 'edu-03',
    degree: 'Complete Web Development Course (Level 1)',
    institution: 'Programming Hero',
    period: 'Batch 12 • Professional Certification',
    status: 'Level 1 (Batch 12)',
    description:
      'Completed the intensive Level 1 Complete Web Development Course (Batch 12) from Programming Hero. Mastered frontend architectures with React and Next.js, robust backend APIs with Node.js and Express, database management with MongoDB, and modern full-stack workflows.',
    tags: ['Programming Hero', 'Level 1', 'Batch 12', 'MERN Stack', 'Next.js', 'Completed'],
    badge: 'Level 1 (Batch 12)',
  },
];
