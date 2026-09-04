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
  // Points at the /cv page, which carries the PDF download link.
  { label: 'CV',             icon: 'file',     href: '/cv' },
  // { label: 'GitHub',      icon: 'github',   href: 'TODO' },
];

// Path to the PDF in public/, offered for download at the top of /cv.
export const CV_PDF = '/cv.pdf';

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
  // Longer detail, shown only where <EntryList detailed /> is used (the CV page).
  bullets?: string[];
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
    bullets: [
      'Master’s thesis with Professor Timothée Proix applying methods from control theory and nonlinear dynamics to understand the neural basis of speech perception.',
      'Research project with Professor Timothée Proix investigating phoneme representations during natural speech perception, by decoding phonetic features from intracranial EEG recordings.',
      'Research project with Professor Richard Hahnloser examining functional connectivity between Broca’s area and premotor cortex during speech production.',
    ],
  },
  {
    when: '10/2022 - 05/2024',
    title: 'Undergraduate Research Assistant',
    where: 'de Sa Natural Computation Lab, UC San Diego',
    bullets: [
      'Developed novel architectures to improve the performance and usability of brain-computer interfaces, improving clinical viability.',
      'Collected EEG data and set up real-time processing pipelines for brain-computer interface experiments.',
    ],
  },
  {
    when: '09/2022 - 03/2024',
    title: 'Instructional Assistant',
    where: 'UCSD Cognitive Science Department',
    bullets: [
      'Taught COGS 11: Minds and Brains with Professor Mary Boyle, and COGS 118C: Neural Signal Processing with Professor Eran Mukamel.',
      'Led weekly discussion sections with 50+ students, and created and graded weekly quizzes and assignments.',
    ],
  },
  {
    when: '06/2022 - 09/2023',
    title: 'Software Engineering Intern',
    where: 'Ready.net',
    bullets: [
      'Generated documentation and tests for the UI, Apollo GraphQL resolvers, and all backend utilities.',
    ],
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

// Conference presentations. Shown on the CV page.
export const PRESENTATIONS: Entry[] = [
  { when: '2026', title: 'Society for the Neurobiology of Language Conference' },
  { when: '2024', title: 'IEEE Engineering in Medicine and Biology Conference' },
  { when: '2024', title: 'California Neurotechnology Symposium' },
  { when: '2023', title: 'California Neurotechnology Symposium' },
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

// A category and the comma-separated things in it. Used for skills and
// coursework on the CV page.
export interface Definition {
  label: string;
  items: string;
}

export const SKILLS: Definition[] = [
  {
    label: 'Programming',
    items: 'Python, MATLAB, R, SQL, Bash, git, Linux, SLURM',
  },
  {
    label: 'Libraries',
    items: 'MNE-Python, scikit-learn, PyTorch, PsychoPy, PyLSL, EEGLab, ERPLab, NLTK, spaCy, Hugging Face Transformers',
  },
  {
    label: 'Neural',
    items: 'Electrophysiology (EEG, sEEG, ECOG), preprocessing (rereferencing, artifact rejection, filtering, epoching), ERP analysis, neural encoding and decoding models, functional connectivity, source localization',
  },
  {
    label: 'Modeling',
    items: 'Time series (spectral analysis, time-frequency decomposition, phase-amplitude coupling), dimensionality reduction (PCA, ICA, CSP), statistical inference (cluster-based permutation testing, Bayesian methods), deep learning (EEGNet, CNNs, RNNs, transformers)',
  },
  {
    label: 'Languages',
    items: 'English (native), Spanish (B2), German (B1)',
  },
];

export const COURSEWORK: Definition[] = [
  {
    label: 'Applied Math',
    items: 'Differential Equations, Probability Theory, Stochastic Processes, Statistics, Recursive Estimation, Convex Optimization, Signal Processing, Network Science',
  },
  {
    label: 'Computer Science',
    items: 'Advanced Data Structures, Analysis of Algorithms, Software Tools and Techniques',
  },
  {
    label: 'Machine Learning',
    items: 'Machine Learning for EEG/BCIs, Probabilistic Reasoning and Learning, Learning in Deep Artificial and Biological Neural Networks, Computer Vision',
  },
  {
    label: 'Neuroscience',
    items: 'Cognitive Neuroscience, Neuroinformatics, Translational Neuromodeling, Neural Signal Processing, Neural Control of Movement, Computational Vision',
  },
  {
    label: 'Language',
    items: 'Deep Learning for Natural Language Understanding, Neural Foundation of Speech, Evolutionary Language Science',
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

export const PROJECTS: Project[] = [
  {
    title: 'Phoneme Representations in Natural Speech',
    meta: '2026 · Research',
    blurb: 'Investigating how phonetic information is distributed across cortex, in space and in time, during naturalistic speech perception — using single-channel sEEG decoding. Accepted as a poster presentation at the 2026 Society for the Neurobiology of Language conference.',
    // links: [{ label: 'Poster', href: 'TODO' }],
  },
  {
    title: 'Neural Basis of Speech Production',
    meta: 'Research',
    blurb: 'Examined functional connectivity between Broca’s area and premotor cortex during speech production, using multivariate Granger causality analysis. Found feedforward information flow from dorsal BA44 to BA6v and feedback from ventral BA6v to BA44, alongside a striking dissociation between word and sentence production.',
    links: [
      { label: 'GitHub', href: 'https://github.com/ETHZMSProjects/ASL_MEA_Functional_Connectivity' },
    ],
  },
  {
    title: 'Zinc Dry Electrodes for Wearable Electrophysiology',
    meta: '2024 · Publication',
    blurb: 'Characterized novel concentric-ring electrodes with electrochemical impedance spectroscopy and on-body EMG testing, showing zinc to be a suitable material for electrophysiology. Presented at the IEEE Engineering in Medicine and Biology Conference in June 2024.',
    links: [
      { label: 'IEEE', href: 'https://ieeexplore.ieee.org/abstract/document/10782529' },
      { label: 'PDF',  href: '/zinc-dry-electrodes-embc-2024.pdf' },
    ],
  },
  {
    title: 'EEG Handwriting BCI',
    meta: 'Research',
    blurb: 'Collected EEG data and pen-tip trajectories while a healthy subject wrote individual characters on a tablet, then used EEGNet to decode pen velocity from neural activity — reaching 61% character classification accuracy.',
  },
  {
    title: 'Aeromus',
    meta: '2023 · Award',
    blurb: 'An EMG-enabled computer mouse that navigates a laptop in real time with hand gestures and air scrolling. Awarded second place overall, and the neuroethics prize, at the international NeuroTechX Student Clubs Competition.',
    video: 'https://www.youtube.com/watch?v=JHjZnrZFi4o',
    caption: 'Project demo — Triton NeuroTech, UC San Diego, 2023.',
    links: [
      { label: 'GitHub', href: 'https://github.com/NeuroTech-UCSD/aeroMus' },
    ],
  },
  {
    title: 'Pretraining Handwriting BCI',
    meta: 'Research',
    blurb: 'Pre-trained an RNN on large handwriting datasets to decode text from the neural representation of attempted handwriting in a locked-in patient, cutting character error rate by 1.5%. Developed a multi-subject pretraining procedure that overweights training data from subjects whose handwriting style most closely matches the test subject, improving cross-subject generalization.',
  },
  {
    title: 'Spelling BCI',
    meta: 'Project',
    blurb: 'A hybrid motor-imagery and 10-class SSVEP brain-computer interface for playing the New York Times Spelling Bee in real time on OpenBCI hardware, with 70–95% accuracy across subjects.',
  },
];
