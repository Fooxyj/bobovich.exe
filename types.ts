import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
  year?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: React.ReactNode;
  category?: 'strategy' | 'creative' | 'tools';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}