import type React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number; // 0-100
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export const SectionId = {
  HERO: 'home',
  ABOUT: 'about',
  PROJECTS: 'projects',
  CONTACT: 'contact',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];
