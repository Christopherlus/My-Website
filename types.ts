export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
  link?: string;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  details: string[];
}

export interface SkillSet {
  category: string;
  items: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
}
