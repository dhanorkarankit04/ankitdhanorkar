/**
 * Centralized Portfolio Data Configuration
 * ----------------------------------------
 * Populated with verified details from Ankit Kishor Dhanorkar's 2026 CV.
 */

const BASE_URL = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
const assetUrl = (relativePath: string): string =>
  `${BASE_URL}${relativePath.replace(/^\/+/, '')}`;

export interface ProfileData {
  name: string;
  fullName: string;
  positioning: string;
  heroHeadline: string;
  professionalHeadline: string;
  animatedRoles: string[];
  heroSupportingText: string;
  aboutIntro: string;
  aboutPhilosophy: string;
  currentOrganization: string;
  portraitSrc: string;
  portraitAlt: string;
  portraitCaption: string;
  resumePdfUrl: string;
  resumeFileName: string;
  careerSummary: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  linkedinHandle: string;
  githubUrl: string | null;
  githubHandle?: string;
  location: string;
  languages: string[];
}

export interface CapabilityPillar {
  id: string;
  index: string;
  title: string;
  domain: 'Software Engineering' | 'VFX Pipeline' | 'Leadership & Systems';
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  accent: 'cyan' | 'lavender' | 'blue' | 'mint';
  iconName: 'code' | 'server' | 'monitor' | 'container' | 'film' | 'sparkles';
  skills: string[];
}

export type ProjectFilterCategory =
  | 'All'
  | 'VFX Pipeline'
  | 'Desktop Software'
  | 'Business Software';

export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  filterGroup: Exclude<ProjectFilterCategory, 'All'>;
  shortDescription: string;
  technologies: string[];
  imageSrc: string;
  imageAlt: string;
  visualVariant: 'vfx' | 'desktop' | 'validation' | 'attendance' | 'budget';
  accent: 'cyan' | 'blue' | 'mint' | 'lavender';
  problemStatement: string;
  solutionOverview: string;
  myContribution: string;
  architectureDetails: string[];
  resultsStatus: string;
  githubUrl: string | null;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  domainFocus: string;
  summary: string;
  highlights: string[];
  credits?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
  notes: string;
}

export interface CourseworkGroup {
  category: string;
  courses: string[];
}

export const PROFILE: ProfileData = {
  name: 'Ankit Dhanorkar',
  fullName: 'Ankit Kishor Dhanorkar',
  positioning:
    'Python Software Developer · Application Development · VFX Pipeline Automation',
  heroHeadline: 'Building Intelligent Software & Creative Technology.',
  professionalHeadline:
    'Engineering Intelligent Solutions for Creative and Business Workflows.',
  animatedRoles: [
    'Python Software Developer',
    'Application Developer',
    'VFX Pipeline Developer',
    'Workflow Automation Engineer',
  ],
  heroSupportingText:
    'I design and develop custom Python applications, Nuke automation tools, automated file validation pipelines, and scalable workflow solutions bridging software engineering and high-end visual effects production.',
  aboutIntro:
    'Developer experienced in Python scripting, custom production tools, Nuke automation, file validation, and workflow optimization. I build internal applications—including attendance tracking and vendor/client budget management tools—alongside reliable production pipeline tooling.',
  aboutPhilosophy:
    'With extensive hands-on leadership experience as Head of Paint Department and Prep/Paint Supervisor across major international film and television productions, I understand production pressure first-hand. Currently serving as Pipeline Developer at Bubble Creations Digital Studio Pvt. Ltd., Pune while pursuing my Bachelor of Computer Applications (BCA, Semester 5) at Symbiosis International University, I combine engineering rigor with real-world operational empathy.',
  currentOrganization: 'Bubble Creations Digital Studio Pvt. Ltd., Pune',
  portraitSrc: assetUrl('assets/aistudio/Confident_tech_presenter_in_office_a6ac70be.png'),
  portraitAlt:
    'Ankit Kishor Dhanorkar — Python Software Developer and VFX Pipeline Engineer',
  portraitCaption:
    'Ankit Kishor Dhanorkar · Pune, India',
  resumePdfUrl: assetUrl('assets/aistudio/Ankit_Dhanorkar_CV_2026_cc6d0b78.pdf'),
  resumeFileName: 'Ankit_Dhanorkar_CV_2026.pdf',
  careerSummary:
    'Python Software Developer and VFX Pipeline Developer experienced in custom application engineering, Nuke automation, Maya plugin adaptation, Thinkbox Deadline workflows, automated shot/output validation, and technical department leadership across major international studio productions.',
  email: 'dhanorkarankit04@gmail.com',
  phone: '+91-9987962561',
  linkedinUrl: 'https://www.linkedin.com/in/ankit-dhanorkar-5653b939',
  linkedinHandle: 'linkedin.com/in/ankit-dhanorkar-5653b939',
  githubUrl: 'https://github.com/dhanorkarankit04',
  githubHandle: 'github.com/dhanorkarankit04',
  location: 'Pune, India',
  languages: ['English', 'Hindi', 'Marathi'],
};

export const ABOUT_PILLARS: CapabilityPillar[] = [
  {
    id: 'python-apps',
    index: '01',
    title: 'Python Application Development',
    domain: 'Software Engineering',
    description:
      'Custom Python GUI applications (PyQt/PySide), Django web backends, and modular internal tools built for everyday reliability.',
  },
  {
    id: 'vfx-pipeline',
    index: '02',
    title: 'VFX Pipeline & Nuke Automation',
    domain: 'VFX Pipeline',
    description:
      'Nuke Python tools and gizmos, legacy Maya plugin compatibility updates, Thinkbox Deadline integration, and automated shot validation.',
  },
  {
    id: 'workflow-optimization',
    index: '03',
    title: 'Server & Workflow Automation',
    domain: 'VFX Pipeline',
    description:
      'Automated server file transfers preserving directory trees and permissions, eliminating repetitive manual production bottlenecks.',
  },
  {
    id: 'business-software',
    index: '04',
    title: 'Internal Business Applications',
    domain: 'Software Engineering',
    description:
      'Dedicated operational applications including attendance tracking and vendor/client budget management backed by relational databases.',
  },
  {
    id: 'problem-solving',
    index: '05',
    title: 'Technical Troubleshooting & QA',
    domain: 'Leadership & Systems',
    description:
      'Debugging, performance optimization, and automated validation catching naming, frame range, resolution, and file integrity issues.',
  },
  {
    id: 'team-leadership',
    index: '06',
    title: 'Department & Team Leadership',
    domain: 'Leadership & Systems',
    description:
      'Proven leadership as Head of Paint Department and Prep/Paint Supervisor driving training, performance reviews, and cross-department delivery.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming & Scripting',
    accent: 'cyan',
    iconName: 'code',
    skills: ['Python', 'PHP', 'Bash', 'JavaScript', 'Java (academic coursework)'],
  },
  {
    id: 'backend',
    title: 'Web & Backend',
    accent: 'blue',
    iconName: 'server',
    skills: ['Django', 'HTML & CSS', 'Nginx', 'Gunicorn', 'Redis'],
  },
  {
    id: 'desktop',
    title: 'Desktop Development',
    accent: 'lavender',
    iconName: 'monitor',
    skills: [
      'PyQt / PySide',
      'Custom Python GUI tools',
      'Qt Widgets',
      'QTreeView & QFileSystemModel',
    ],
  },
  {
    id: 'devops',
    title: 'Databases & Infrastructure',
    accent: 'mint',
    iconName: 'container',
    skills: ['PostgreSQL', 'MySQL', 'SQL', 'Docker', 'Celery', 'Linux & Git'],
  },
  {
    id: 'vfx',
    title: 'VFX & Production',
    accent: 'cyan',
    iconName: 'film',
    skills: [
      'Nuke scripting & gizmos',
      'Maya plugin maintenance',
      'Thinkbox Deadline',
      'Shot & render validation',
      'OpenEXR / OpenImageIO',
    ],
  },
  {
    id: 'ai-automation',
    title: 'Engineering & Automation',
    accent: 'lavender',
    iconName: 'sparkles',
    skills: [
      'Application development',
      'Workflow automation',
      'Debugging & troubleshooting',
      'Performance optimization',
      'Foundational AI knowledge',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'shotsnap',
    title: 'ShotSnap',
    category: 'VFX Pipeline / Python Automation',
    filterGroup: 'VFX Pipeline',
    shortDescription:
      'Internal production workflow utility developed to support efficient shot-related operations across daily VFX production tasks.',
    technologies: ['Python', 'Pipeline Integration', 'VFX Workflow Automation'],
    imageSrc: assetUrl('src/assets/images/visual_vfx_pipeline_1795407157048.jpg'),
    imageAlt: 'Architectural visualization representing ShotSnap VFX pipeline utility',
    visualVariant: 'vfx',
    accent: 'cyan',
    problemStatement:
      'Repetitive shot-level operations across studio environments introduce manual friction and inconsistencies when routine setup and inspection steps are performed manually.',
    solutionOverview:
      'Designed and developed ShotSnap as an internal Python tool integrated directly into studio conventions to standardize and streamline recurring shot-related production workflows.',
    myContribution:
      'End-to-end Python utility architecture, studio workflow integration, artist feedback iteration, and production deployment.',
    architectureDetails: [
      'Modular Python architecture separating shot path resolution from user-facing actions.',
      'Configurable adapters matching studio directory structures and naming standards.',
      'Lightweight execution designed to integrate seamlessly into daily VFX artist workflows.',
    ],
    resultsStatus:
      'Deployed internally to support daily studio shot workflows; quantitative benchmarks remain confidential to studio operations.',
    githubUrl: null,
  },
  {
    slug: 'custom-file-explorer',
    title: 'Custom File Explorer',
    category: 'Desktop Software',
    filterGroup: 'Desktop Software',
    shortDescription:
      'Python-based desktop application built with PyQt/PySide for structured file and folder navigation and management.',
    technologies: ['Python', 'PyQt / PySide', 'Qt Widgets', 'QTreeView', 'QFileSystemModel'],
    imageSrc: assetUrl('src/assets/images/visual_desktop_qt_1795407156567.jpg'),
    imageAlt: 'Architectural visualization representing Custom File Explorer built with Python and Qt',
    visualVariant: 'desktop',
    accent: 'blue',
    problemStatement:
      'Standard operating system file browsers lack production-focused navigation controls when working repeatedly inside deeply nested studio and project directory trees.',
    solutionOverview:
      'Engineered a native desktop file explorer in Python using Qt Model/View architecture, combining QTreeView and QFileSystemModel with streamlined file and folder management workflows.',
    myContribution:
      'Desktop UI architecture, Qt Model/View implementation, filesystem interaction handlers, and usability refinements.',
    architectureDetails: [
      'Qt Model/View pattern pairing QFileSystemModel with customized QTreeView browsing.',
      'Clean Python controller layer isolating UI components from filesystem operations.',
      'Extensible component layout ready for custom studio metadata and preview hooks.',
    ],
    resultsStatus:
      'Built for structured project directory navigation and internal file management workflows.',
    githubUrl: null,
  },
  {
    slug: 'shot-output-validation-tool',
    title: 'Shot Output Validation Tool',
    category: 'Pipeline Automation',
    filterGroup: 'VFX Pipeline',
    shortDescription:
      'Automated validation tool checking output structure, file naming, frame ranges, resolution, zero-byte files, empty folders, temporary files, and file integrity.',
    technologies: ['Python', 'Output Validation', 'Pipeline Scripting', 'QA Automation'],
    imageSrc: assetUrl('src/assets/images/visual_validation_engine_1795407157675.jpg'),
    imageAlt: 'Architectural visualization representing Shot Output Validation Tool',
    visualVariant: 'validation',
    accent: 'mint',
    problemStatement:
      'Manual pre-delivery checks across complex VFX deliverables are time-intensive and risk missing subtle naming mismatches, broken frame ranges, zero-byte frames, stray temporary files, or resolution errors.',
    solutionOverview:
      'Built an automated Python output validation suite that inspects delivery directory structures, naming conventions, frame sequence continuity, image resolutions, zero-byte files, empty folders, and temporary artifacts prior to client/server handoff.',
    myContribution:
      'Validation rule engineering, automated filesystem and sequence inspection logic, clear diagnostic reporting, and production team support.',
    architectureDetails: [
      'Dedicated check modules covering output folder structure, naming syntax, frame ranges, and resolution specs.',
      'Automated file integrity sweep detecting zero-byte frames, leftover temporary files, and empty directories.',
      'Integrated with automated server transfer pipelines preserving folder hierarchy and file permissions.',
    ],
    resultsStatus:
      'Actively used in studio production pipelines to verify delivery integrity before server transfer and client delivery.',
    githubUrl: null,
  },
  {
    slug: 'attendance-management-application',
    title: 'Attendance Management Application',
    category: 'Business Software',
    filterGroup: 'Business Software',
    shortDescription:
      'Internal business application developed to organize employee attendance records and streamline daily operational tracking.',
    technologies: ['Python', 'SQL', 'Relational Database', 'Application Development'],
    imageSrc: assetUrl('src/assets/images/visual_business_workflow_1795407158387.jpg'),
    imageAlt: 'Architectural visualization representing Attendance Management Application',
    visualVariant: 'attendance',
    accent: 'lavender',
    problemStatement:
      'Organizing daily team attendance records across manual spreadsheets creates administrative overhead and complicates consistent operational tracking.',
    solutionOverview:
      'Developed an internal attendance management application providing structured record capture, organized relational storage, and repeatable administrative workflows.',
    myContribution:
      'Relational database schema design, application logic implementation, input validation, and internal workflow tailoring.',
    architectureDetails: [
      'Normalized relational data model capturing structured daily attendance logs.',
      'Clear separation of business rules, database persistence, and user interface views.',
      'Designed for reliable operational lookup and long-term maintainability.',
    ],
    resultsStatus:
      'Developed as an internal operational application for organizing studio attendance records.',
    githubUrl: null,
  },
  {
    slug: 'vendor-client-budget-management',
    title: 'Vendor & Client Budget Management',
    category: 'Business Application',
    filterGroup: 'Business Software',
    shortDescription:
      'Business application for managing vendor and client information alongside structured project budget records.',
    technologies: ['Python', 'SQL / RDBMS', 'Business Workflow Architecture'],
    imageSrc: assetUrl('src/assets/images/visual_business_workflow_1795407158387.jpg'),
    imageAlt: 'Architectural visualization representing Vendor and Client Budget Management application',
    visualVariant: 'budget',
    accent: 'blue',
    problemStatement:
      'Managing vendor details, client records, and project budget allocations across fragmented files limits visibility and increases tracking errors.',
    solutionOverview:
      'Engineered a dedicated business application centralizing vendor/client profiles and budget records into clean, auditable management workflows.',
    myContribution:
      'Data modeling, core Python application development, budget record validation, and operational summary views.',
    architectureDetails: [
      'Relational schema connecting vendor profiles, client accounts, and structured budget entries.',
      'Validation logic enforcing consistent financial record entry and categorization.',
      'Modular codebase engineered to scale cleanly as operational requirements grow.',
    ],
    resultsStatus:
      'Built to centralize internal vendor/client records and structured budget tracking.',
    githubUrl: null,
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'pipeline-developer-bubble',
    role: 'Pipeline Developer',
    organization: 'Bubble Creations Digital Studio Pvt. Ltd., Pune',
    period: 'Dec 2021 – Present',
    domainFocus: 'Python Software Engineering & VFX Pipeline Automation',
    summary:
      'Developing Python-based Nuke automation tools, output validation systems, legacy Maya plugin adaptations, and custom internal applications supporting studio-wide production teams.',
    highlights: [
      'Develop Python-based Nuke automation tools and gizmos for production workflows.',
      'Adapt legacy Maya plugins for compatibility with newer software versions.',
      'Automate server transfers while preserving folder structures and file permissions.',
      'Develop output validation tools for naming, frame ranges, resolution, zero-byte files, empty folders, and temporary files.',
      'Develop custom internal tools and support production teams with technical troubleshooting.',
    ],
  },
  {
    id: 'prep-paint-supervisor-bubble',
    role: 'Prep & Paint Supervisor (Head of Paint Department)',
    organization: 'Bubble Creations Digital Studio Pvt. Ltd., Pune',
    period: 'Jan 2018 – Dec 2021',
    domainFocus: 'Department Leadership & Production Tooling',
    summary:
      'Led paint department operations, artist training, and performance reviews while developing Nuke automation tools to eliminate repetitive production tasks on major Hollywood studio titles.',
    highlights: [
      'Led department operations, artist onboarding, training, and performance reviews.',
      'Developed Nuke tools and workflow automation to reduce repetitive manual tasks.',
      'Coordinated quality benchmarks and cross-department production deliveries.',
    ],
    credits: [
      'Mission: Impossible',
      'The Flash',
      'Arrow',
      'Shazam!',
      'Creed II',
      'Ad Astra',
    ],
  },
  {
    id: 'paint-supervisor-gener8',
    role: 'Paint Supervisor',
    organization: 'GENER8, Pune',
    period: 'Jan 2015 – Jul 2017',
    domainFocus: 'Stereoscopic Supervision & Quality Management',
    summary:
      'Supervised stereoscopic paint execution and quality consistency across tentpole theatrical studio releases.',
    highlights: [
      'Supervised stereoscopic paint workflows and final quality control.',
      'Guided artists on complex stereo depth and clean-plate technical challenges.',
    ],
    credits: ['Batman v Superman', 'The Jungle Book', 'Wonder Woman'],
  },
  {
    id: 'paint-supervisor-roto-lead-bubble',
    role: 'Paint Supervisor / Roto Team Lead',
    organization: 'Bubble Creations Digital Studio',
    period: 'Jan 2015 – Jul 2017',
    domainFocus: 'Team Coordination & Cross-Department Workflows',
    summary:
      'Coordinated paint and roto teams, aligning shot schedules and cross-department handoff workflows.',
    highlights: [
      'Coordinated paint and roto artist teams to meet tight production milestones.',
      'Streamlined cross-department handoffs and technical shot feedback.',
    ],
  },
  {
    id: 'roto-lead-prime-focus',
    role: 'Roto Team Lead / Paint Artist',
    organization: 'Prime Focus Studio, Mumbai',
    period: 'Jan 2012 – Aug 2014',
    domainFocus: 'Stereoscopic & VFX Production',
    summary:
      'Executed and led stereoscopic roto and paint work for major international theatrical VFX productions.',
    highlights: [
      'Delivered high-precision stereoscopic roto and paint shots for global studio releases.',
      'Supported team coordination and shot quality consistency under theatrical schedules.',
    ],
    credits: [
      'Thor: The Dark World',
      'Captain America: The Winter Soldier',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA) — Pursuing, Semester 5',
    institution:
      'Symbiosis International (Deemed University), Symbiosis School for Online and Digital Learning (SSODL), Pune',
    status: 'In Progress · Online Programme',
    notes:
      'Comprehensive computer science curriculum spanning Python software development, OOP, data structures & algorithms, relational databases, software testing, web technologies, Linux shell scripting, networking, and cloud computing.',
  },
  {
    degree: 'Advanced Diploma in 3D Animation & Visual Effects',
    institution: 'MAAC, Pune',
    status: 'Completed · 3-Year Programme',
    notes:
      'Intensive 3-year production training covering visual effects pipelines, compositing, 3D fundamentals, and studio workflows.',
  },
  {
    degree: 'H.S.C. (2007) & S.S.C. (2005)',
    institution: 'P.N. College, Pusad · Shivaji High School, Pusad',
    status: 'Completed',
    notes: 'Higher Secondary and Secondary School academic credentials.',
  },
];

export const BCA_COURSEWORK: CourseworkGroup[] = [
  {
    category: 'Programming & Software Engineering',
    courses: [
      'Introduction to Python',
      'Advanced Programming in Python',
      'Object Oriented Programming',
      'Data Structures & Advanced Algorithms',
      'Software Engineering Practices',
      'Software Testing',
      'Computational Thinking',
    ],
  },
  {
    category: 'Web & Enterprise Development',
    courses: [
      'Web Technologies',
      'Web Development using Python',
      'PHP',
      'Introduction to Java Enterprise Framework',
    ],
  },
  {
    category: 'Database & Analytics',
    courses: [
      'Relational Database Management System',
      'SQL Programming',
      'Data Analytics using MS-Excel',
      'Foundations of Data Warehousing & Data Mining',
      'Big Data Analytics',
    ],
  },
  {
    category: 'Systems, Cloud & Security',
    courses: [
      'Introduction to Operating System',
      'Linux Shell Scripting',
      'Network Essentials',
      'Network Security Essentials',
      'Introduction to Cloud Computing',
    ],
  },
];
