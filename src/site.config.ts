// ═══════════════════════════════════════════════════════════════════════════
//  Everything on the site is edited from this one file.
// ═══════════════════════════════════════════════════════════════════════════

export const SITE = {
  name: 'Aidan Truel',
  email: 'atruel@ethz.ch',
  // One sentence. Used for search results and link previews.
  description: 'Computational neuroscience graduate student',
};

// Shown as a row of icon links under your name. Delete any you don't use.
// `icon` picks a glyph from src/components/Icon.astro:
// mail · file · scholar · linkedin · github · link
export const PROFILES: { label: string; href: string; icon: string }[] = [
  { label: 'Email',          icon: 'mail',     href: `mailto:${SITE.email}` },
  { label: 'Google Scholar', icon: 'scholar',  href: 'https://scholar.google.com/citations?user=TeViXnUAAAAJ&hl=en&oi=ao' },
  { label: 'LinkedIn',       icon: 'linkedin', href: 'https://www.linkedin.com/in/aidan-truel/' },
  { label: 'CV',             icon: 'file',     href: '/Aidan_Truel_CV_Web.pdf' },
  // { label: 'GitHub',      icon: 'github',   href: 'TODO' },
];

// Two or three short paragraphs. Plain text; each string is one paragraph.
export const BIO: string[] = [
  'I am a computational neuroscience master’s student at the Institute of Neuroinformatics, supervised by Professor Timothée Proix.',
  //'TODO — Then the specifics: current role, the problems you are chasing, the methods you use.',
  //'TODO — Close with what you are looking for next (a PhD in X, working on Y).',
];

export interface Entry {
  when?: string;     // '2023 – 25', '2024', 'Expected 2026'. Omit for undated items.
  title: string;
  where?: string;
  note?: string;
}

export const EDUCATION: Entry[] = [
  {
    when: '09/2024 - 10/2026',
    title: 'MSc in Neural Systems and Computation',
    where: 'ETH Zürich and University of Zürich',
    note: 'GPA 5.6/6.0',
  },
  {
    when: '09/2020 - 03/2024',
    title: 'BS in Mathematics specialized in Computer Science',
    where: 'UC San Diego',
    note: 'GPA 3.85/4.00',
  },
  {
    when: '09/2020 - 03/2024',
    title: 'BS in Cognitive Science specialized in Machine Learning',
    where: 'UC San Diego',
    note: 'GPA 3.85/4.00',
  },
];

export const EXPERIENCE: Entry[] = [
  {
    when: '09/2024 - Present',
    title: 'Graduate Student Researcher',
    where: 'Institute of Neuroinformatics, Zurich, Switzerland',
  },
  {
    when: '10/2022 - 05/2024',
    title: 'Undergraduate Research Assistant',
    where: 'de Sa Natural Computation Lab, UC San Diego',
  },
  {
    when: '09/2022 - 03/2024',
    title: 'Instructional Assistant',
    where: 'UCSD Cognitive Science Department',
  },
  {
    when: '06/2022 - 09/2023',
    title: 'Software Engineering Intern',
    where: 'Ready.net',
  },
];

export interface Publication {
  title: string;
  authors: string;   // wrap your own name in ** ** to bold it
  venue: string;
  year?: string;
  links?: { label: string; href: string }[];
}

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Development and Characterization of Zinc Dry Electrodes for Wearable Electrophysiology',
    authors: 'Cassia Rizq, Alessandro D’Amico, **Aidan Truel**, Joelle Faybishenko, Min Suk Lee, Jeong-Hoon Kim, Gert Cauwenberghs, Virginia R de Sa',
    venue: 'IEEE Engineering in Medicine and Biology Conference (EMBC)',
    year: '2024',
    links: [
      { label: 'IEEE', href: 'https://ieeexplore.ieee.org/abstract/document/10782529' },
      { label: 'PDF',   href: '/zinc-dry-electrodes-embc-2024.pdf' },
    ],
  },
];

// Awards, talks, teaching, service — delete the section if you have none.
export const AWARDS: Entry[] = [
  {
    when: '2023 - 2024',
    title: 'Research Experience in Interdisciplinary Artificial Intelligence',
    where: 'National Science Foundation',
  },
  {
    when: '2023 - 2024',
    title: 'Undergraduate Scholarship',
    where: 'Halıcıoğlu Data Science Institute, UC San Diego',
  },
  {
    when: '2023',
    title: 'Second Place, NeuroTechX Student Clubs Competition',
    where: 'International collegiate neurotechnology competition',
    note: 'Also awarded the neuroethics prize, for the Aeromus project.',
  },
  {
    when: 'Summer 2023',
    title: 'Research Experience for Undergraduates',
    where: 'National Science Foundation',
  },
  {
    when: '2020 - 2024',
    title: 'Provost Honors',
    where: 'Sixth College, UC San Diego',
  },
  {
    title: 'Collegiate National Competitor',
    where: 'USA Triathlon',
  },
  {
    title: 'Eagle Scout',
    where: 'Boy Scouts of America',
  },
];

export interface Project {
  title: string;
  meta?: string;                 // '2025 · Research' — small uppercase line
  blurb: string;
  // Paste the *share* URL; the embed URL is derived automatically.
  // YouTube: https://youtu.be/ID  or  https://www.youtube.com/watch?v=ID
  // Vimeo:   https://vimeo.com/ID
  video?: string;
  caption?: string;
  links?: { label: string; href: string }[];
}

export const PROJECTS: Project[] = [];
