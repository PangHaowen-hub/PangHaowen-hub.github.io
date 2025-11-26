import { Terminal, Sigma, FileText, BarChart } from 'lucide-react';
import type { Project, Experience, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Haowen Pang",
  role: "PhD Student",
  tagline: "Medical Image Synthesis. Medical Image Translation. Diffusion Model. Generative Adversarial Network. Flow Matching.",
  email: "haowen.pang@bit.edu.cn",
  github: "https://github.com/panghaowen-hub",
  googleScholar: "https://scholar.google.com/citations?user=eJEDpA0AAAAJ",
  about: `I am currently a PhD student at the Beijing Institute of Technology, under the supervision of Prof. Chuyang Ye. I obtained my Master's degree from Northeastern University, where I was advised by Prof. Shouliang Qi. Presently, I am also a visiting PhD student in the research group of Prof. Anqi Qiu at Hong Kong Polytechnic University. My research primarily focuses on medical image synthesis, particularly brain MRI. I am deeply interested in developing foundation models to enhance image quality and promote intelligent diagnosis in neuroimaging.`
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CEMRI Dose Reduction',
    description: 'Dose reduction via contrast amplification modeling for brain contrast-enhanced magnetic resonance images.',
    tags: ['Image Synthesis', 'GAN', 'CEMRI'],
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/PangHaowen-hub/DRCAM',
    demoUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S174680942501585X'
  },
  {
    id: '2',
    title: 'CEMRI Synthesis from NCMRI',
    description: 'Deformation-driven diffusion model for synthesis of contrast-enhanced MRI with brain tumors.',
    tags: ['Image Synthesis', 'Diffusion Model', 'Deformation', 'MRI'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/PangHaowen-hub/D3M',
    demoUrl: 'https://example.com'
  },
  {
    id: '3',
    title: 'Uncertainty-Guided Image Synthesis',
    description: 'Cascaded diffusion model and segment anything model for medical image synthesis via uncertainty-guided prompt generation.',
    tags: ['Image Synthesis', 'Diffusion Model', 'Segment Anything Model'],
    imageUrl: 'https://images.unsplash.com/photo-1631557993077-8490a07e868c?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/PangHaowen-hub/DM-SAM',
    demoUrl: 'https://link.springer.com/chapter/10.1007/978-3-031-96628-6_14',
  },
  {
    id: '4',
    title: 'CECT Synthesis from NCCT',
    description: 'NCCT-CECT image synthesizers and their application to pulmonary vessel segmentation.',
    tags: ['Image Synthesis', 'GAN', 'CT', 'Vessel Segmentation'],
    imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S0169260723000561',
  },
  {
    id: '5',
    title: 'Pulmonary Lobes Segmentation',
    description: 'A fully automatic segmentation pipeline of pulmonary lobes before and after lobectomy from computed tomography images.',
    tags: ['Image Segmentation', 'nnU-Net', 'CT'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S0010482522005595'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', icon: <Terminal size={20} />, level: 95 },
  { name: 'MATLAB', icon: <Sigma size={20} />, level: 80 },
  { name: 'LaTeX', icon: <FileText size={20} />, level: 95 },
  { name: 'R', icon: <BarChart size={20} />, level: 80 },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Hong Kong Polytechnic University",
    role: "Visiting PhD Student",
    period: "2025 - Present",
    description: [
      "Supervisor: Prof. Anqi Qiu.",
      "Conducting research on neuroimaging."
    ]
  },
  {
    company: "Beijing Institute of Technology",
    role: "PhD Student",
    period: "2023 - Present",
    description: [
      "Supervisor: Prof. Chuyang Ye.",
      "Research Focus: Medical image synthesis, Diffusion Models, and GANs for brain MRI."
    ]
  },
  {
    company: "Northeastern University",
    role: "Master's Degree",
    period: "2020 - 2023",
    description: [
      "Supervisor: Prof. Shouliang Qi.",
      "Research Focus: medical image segmentation and synthesis."
    ]
  },
  // {
  //   company: "Hebei University",
  //   role: "Bachelor's Degree",
  //   period: "2016 - 2020",
  //   description: [
  //     "Majored in Information and Computing Science."
  //   ]
  // }
];
