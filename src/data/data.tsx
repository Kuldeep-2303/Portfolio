import {AcademicCapIcon, ArrowDownTrayIcon, CalendarIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import profilepic from '../images/profilepic.jpg';
import {About, ContactSection, ContactType, Hero, HomepageMeta, PortfolioItem, SkillGroup, Social, TimelineItem} from './dataDef';

/* ================= META ================= */

export const homePageMeta: HomepageMeta = {
  title: 'Kuldeep Khalotiya - Software Engineer',
  description:
    'Aspiring Software Engineer specializing in ReactJS, Python, and Machine Learning',
};

/* ================= SECTION IDS ================= */

export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/* ================= HERO ================= */

export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Kuldeep Khalotiya.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Aspiring <strong className="text-stone-100">Software Engineer</strong> with hands-on experience in
        <strong className="text-stone-100"> Full-Stack Development</strong>,
        <strong className="text-stone-100"> React.js</strong>, and
        <strong className="text-stone-100"> Python with Machine Learning</strong>. Skilled in building scalable,
        responsive web applications and delivering efficient solutions to real-world problems through clean,
        optimized code.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I enjoy <strong className="text-stone-100">hiking</strong>,
        <strong className="text-stone-100"> extreme sports</strong>, and exploring new technologies.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/* ================= ABOUT ================= */

export const aboutData: About = {
  profileImageSrc: profilepic,
  description:
    'An enthusiastic and responsible individual with excellent interpersonal and communication skills, a strong work ethic, and a collaborative mindset. Adaptable to new challenges and fast-changing environments, with the ability to learn quickly and apply feedback effectively. Known for being self-motivated, disciplined, and detail-oriented, with a consistent focus on delivering quality outcomes. Committed to continuous personal and professional growth, while maintaining a positive attitude and reliability in team-oriented and independent roles.',
  aboutItems: [
    {label: 'Location', text: 'Vadodara, Gujarat', Icon: MapIcon},
    {label: 'Study', text: 'Parul University', Icon: AcademicCapIcon},
    {label: 'Interests', text: 'Hiking, Extreme Sports', Icon: SparklesIcon},
    {label: 'Phone', text: '+91 9373180932', Icon: CalendarIcon},
  ],
};

/* ================= SKILLS ================= */

export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'JavaScript', level: 9},
      {name: 'TypeScript', level: 8},
      {name: 'Python', level: 9},
      {name: 'Java', level: 7},
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {name: 'React.js', level: 9},
      {name: 'HTML / CSS', level: 9},
      {name: 'Tailwind CSS', level: 8},
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {name: 'Flask', level: 8},
      {name: 'Django', level: 8},
      {name: 'Node.js', level: 7},
    ],
  },
  {
    name: 'Tools & Technologies',
    skills: [
      {name: 'Git', level: 8},
      {name: 'Firebase', level: 8},
      {name: 'MySQL', level: 7},
      {name: 'OpenCV', level: 7},
      {name: 'TensorFlow', level: 7},
    ],
  },
];

/* ================= PORTFOLIO ================= */

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'KK Global University Website',
    description:
      'Fully responsive and scalable university website built with React.js, TypeScript, Tailwind CSS, and shadcn-ui.',
    url: 'https://react-college-revamp-project.vercel.app/',
    image: porfolioImage1,
  },
  {
    title: 'Smart Classroom Monitoring System',
    description:
      'AI-powered face recognition system for automated student attendance using Python, OpenCV, TensorFlow, and Flask.',
    url: 'https://github.com/Kuldeep-2303',
    image: porfolioImage2,
  },
  {
    title: 'AgroTech Platform',
    description:
      'Farming support platform with weather data, soil analysis, crop planning, and NDVI-based visualization.',
    url: 'https://github.com/Kuldeep-2303/AgroTech',
    image: porfolioImage3,
  },
];

/* ================= EDUCATION ================= */

export const education: TimelineItem[] = [
  {
    date: '2022 - 2026',
    location: 'Parul University, Vadodara',
    title: 'B.Tech in Computer Science and Engineering',
    content: <p>Focused on full-stack development, machine learning, and software engineering.</p>,
  },
  {
    date: '2021 - 2022',
    location: 'Makhanlal Chaturvedi University, Bhopal',
    title: 'Diploma in Computer Applications',
    content: <p>Learned programming fundamentals and computer applications.</p>,
  },
];

/* ================= EXPERIENCE ================= */

export const experience: TimelineItem[] = [
  {
    date: 'Feb 2025 - May 2025',
    location: 'Personal Project',
    title: 'Full Stack Developer – KK Global University Website',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Built a fully responsive and scalable university website using React.js and TypeScript.</li>
        <li>Integrated shadcn-ui for consistent UI and reusable components.</li>
        <li>Implemented modular architecture and hot-reloading.</li>
        <li>Optimized performance and cross-device compatibility.</li>
        <li><strong>Technologies:</strong> React.js, TypeScript, Tailwind CSS, Vite</li>
      </ul>
    ),
  },
  {
    date: 'Dec 2024 - Mar 2025',
    location: 'Personal Project',
    title: 'AI/ML Engineer – Smart Classroom Monitoring',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Designed an AI-based face recognition system for real-time attendance.</li>
        <li>Trained ML models using TensorFlow and OpenCV.</li>
        <li>Built Flask REST APIs and integrated Firebase Realtime Database.</li>
        <li>Reduced proxy attendance with accurate recognition.</li>
        <li><strong>Technologies:</strong> Python, OpenCV, TensorFlow, Flask, Firebase, MySQL</li>
      </ul>
    ),
  },
  {
    date: 'Jul 2024 - Sep 2024',
    location: 'Personal Project',
    title: 'Full Stack Developer – AgroTech Platform',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Developed a farming platform with weather data and soil analysis.</li>
        <li>Implemented crop planning and market pricing modules.</li>
        <li>Integrated NDVI satellite visualization for crop monitoring.</li>
        <li>Built secure login and personalized dashboards.</li>
        <li><strong>Technologies:</strong> Django, Python, HTML, CSS</li>
      </ul>
    ),
  },
];

/* ================= CONTACT ================= */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out for opportunities, collaborations, or just to connect.',
  items: [
    {
      type: ContactType.Email,
      text: 'kuldeepkhalotiya5@gmail.com',
      href: 'mailto:kuldeepkhalotiya5@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Parul University, Vadodara',
      href: 'https://www.google.com/maps/place/Vadodara,+Gujarat',
    },
    {
      type: ContactType.Github,
      text: 'Kuldeep-2303',
      href: 'https://github.com/Kuldeep-2303',
    },
  ],
};

/* ================= SOCIAL ================= */

export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Kuldeep-2303'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/kuldeep-khalotiya'},
];
