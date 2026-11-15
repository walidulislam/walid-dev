export interface Project {
  id: string;
  title: string;
  category: string;
  technology: string;
  description: string;
  thumbnail: string;
  features: string[];
  tags: string[];
  liveUrl?: string;
  clientRepo?: string;
  serverRepo?: string;
  isNextJs?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  subtext: string;
  color?: string;
  icon?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  group?: string;
  gpa?: string;
  semester?: string;
  session?: string;
  status?: string;
  description: string;
  tags: string[];
  badge: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  iconName: 'home' | 'about' | 'skills' | 'projects' | 'education' | 'contact';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
