import { NavItem, SocialLink } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home', iconName: 'home' },
  { id: 'about', label: 'About', href: '#about', iconName: 'about' },
  { id: 'skills', label: 'Tech Stack', href: '#skills', iconName: 'skills' },
  { id: 'projects', label: 'Projects', href: '#projects', iconName: 'projects' },
  { id: 'education', label: 'Education', href: '#education', iconName: 'education' },
  { id: 'contact', label: 'Contact', href: '#contact', iconName: 'contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/walidulislam', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/walidulislam', icon: 'linkedin' },
  { name: 'Facebook', url: 'https://www.facebook.com/walidul.islam.196/', icon: 'facebook' },
];

export const PERSONAL_INFO = {
  name: 'Md. Walidul Islam',
  nickname: 'Walid',
  title: 'Frontend Developer | MERN Stack Developer',
  roles: [
    'Frontend Developer',
    'React Developer',
    'MERN Stack Developer',
    'Creative Web Developer',
  ],
  description:
    'I build modern, responsive, and user-centric web applications with a strong focus on clean UI, smooth interactions, and meaningful user experiences.',
  location: 'Barishal, Bangladesh',
  currentFocus: 'MERN Stack Development',
  email: 'walidulislam2005@gmail.com',
  resumeUrl: '/resume.pdf',
  availability: 'Available for freelance & full-time',
};
