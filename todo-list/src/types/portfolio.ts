export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'frontend' | 'fullstack' | 'mobile' | 'tools';
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level: number; 
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  description: string;
  iconName: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Employee {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website?: string;
  address?: {
    city: string;
    street?: string;
    suite?: string;
  };
  company?: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
}

export interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
