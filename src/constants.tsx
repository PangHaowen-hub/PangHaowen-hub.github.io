import { Terminal, Sigma, FileText, BarChart } from 'lucide-react';
import type { Project, Experience, Skill, Internship, Award } from './types';

import project1 from './assets/images/cecam.png';
import project2 from './assets/images/d3m.png';
import project3 from './assets/images/dm-sam.png';
import project4 from './assets/images/ncct-ct.png';
import project5 from './assets/images/lobes.png';

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
    imageUrl: project1,
    githubUrl: 'https://github.com/PangHaowen-hub/DRCAM',
    demoUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S174680942501585X'
  },
  {
    id: '2',
    title: 'CEMRI Synthesis from NCMRI',
    description: 'Deformation-driven diffusion model for synthesis of contrast-enhanced MRI with brain tumors.',
    tags: ['Image Synthesis', 'Diffusion Model', 'Deformation', 'MRI'],
    imageUrl: project2,
    githubUrl: 'https://github.com/PangHaowen-hub/D3M',
    demoUrl: 'https://link.springer.com/chapter/10.1007/978-3-032-05325-1_15'
  },
  {
    id: '3',
    title: 'Uncertainty-Guided Image Synthesis',
    description: 'Cascaded diffusion model and segment anything model for medical image synthesis via uncertainty-guided prompt generation.',
    tags: ['Image Synthesis', 'Diffusion Model', 'Segment Anything Model'],
    imageUrl: project3,
    githubUrl: 'https://github.com/PangHaowen-hub/DM-SAM',
    demoUrl: 'https://link.springer.com/chapter/10.1007/978-3-031-96628-6_14',
  },
  {
    id: '4',
    title: 'CECT Synthesis from NCCT',
    description: 'NCCT-CECT image synthesizers and their application to pulmonary vessel segmentation.',
    tags: ['Image Synthesis', 'GAN', 'CT', 'Vessel Segmentation'],
    imageUrl: project4,
    demoUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S0169260723000561',
  },
  {
    id: '5',
    title: 'Pulmonary Lobes Segmentation',
    description: 'A fully automatic segmentation pipeline of pulmonary lobes before and after lobectomy from computed tomography images.',
    tags: ['Image Segmentation', 'nnU-Net', 'CT'],
    imageUrl: project5,
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
      "Research Focus: PET image synthesis from MRI."
    ]
  },
  {
    company: "Beijing Institute of Technology",
    role: "PhD Student",
    period: "2023 - Present",
    description: [
      "Supervisor: Prof. Chuyang Ye.",
      "Research Focus: Medical image synthesis, diffusion Models, and GANs for brain MRI."
    ]
  },
  {
    company: "Northeastern University",
    role: "Master's Degree",
    period: "2020 - 2023",
    description: [
      "Supervisor: Prof. Shouliang Qi.",
      "Research Focus: Medical image segmentation and synthesis."
    ]
  },
];

export const INTERNSHIPS: Internship[] = [
  {
    company: "Canon Medical Systems",
    role: "Image Generation Algorithm Intern",
    period: "Winter 2024",
    description: [
      "Developed deep learning model for contrast-enhanced CT synthesis from non-contrast CT, aiming to support pulmonary embolism screening and reduce patient contrast agent exposure."
    ]
  },
  {
    company: "HIKVISION",
    role: "Deep Learning Algorithm Intern",
    period: "Spring 2022",
    description: [
      "Conducted research and deployment of a lightweight fire video object detection algorithm, improving detection robustness and real-time performance in resource-constrained environments."
    ]
  },
  {
    company: "Technology and Engineering Center for Space Utilization, CAS",
    role: "Algorithm Intern",
    period: "Summer 2021",
    description: [
      "Designed and implemented lightweight deep learning models for satellite component segmentation and deployment, contributing to on-orbit equipment perception for space engineering applications."
    ]
  }
];

export const AWARDS: Award[] = [
  {
    title: "2nd Prize of MICCAI2024 BraTS Global MRI Synthesis Challenge",
    date: "2024",
    description: "Synthesize realistic image contrasts given multiple available images to facilitate brain tumor segmentation."
  },
  {
    title: "2nd Prize of MICCAI2023 SynthRAD",
    date: "2023",
    description: "Synthesize computed tomography for radiotherapy."
  },
  {
    title: "2nd Prize of ISICDM2023 Glioma Segmentation Challenge",
    date: "2023",
    description: "Developed a self-supervised pre-training method to enable robust model training with limited labeled data."
  },
  {
    title: "1st Prize of ISICDM2021 Lung CT Anatomy Segmentation Challenge",
    date: "2021",
    description: "Developed a self-supervised pre-training method to enable robust model training with limited labeled data."
  },
  {
    title: "The Outstanding Master's Thesis of Northeastern University",
    date: "2023",
    description: "One of two awarded in the College of Medicine and Biological Information Engineering."
  }
];
