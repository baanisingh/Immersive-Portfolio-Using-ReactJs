import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpeg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpeg';
import Work6 from './assets/project-6.jpeg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Baani',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Singh',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Patiala, India',
  },

  // {
  //   id: 7,
  //   title: 'Phone : ',
  //   description: '+21621184010',
  // },

  {
    id: 8,
    title: 'Email : ',
    description: 'baani2003@gmail.com',
  },

  // {
  //   id: 9,
  //   title: 'Skype : ',
  //   description: 'steve.milner',
  // },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Hindi, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Learning Experience',
  },

  {
    id: 2,
    no: '25+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '10+',
    title: 'Known <br /> Frameworks',
  },

  {
    id: 4,
    no: '17+',
    title: 'Known Programming Languages and <br /> Technologies',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - present',
    title: 'Website Developer',
    desc: 'I develop Responsive Websites with utmost passion and skill. I learn and craft everyday. I specially develop using ReactJs.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - present',
    title: 'Data Analyst',
    desc: 'I am proficient in working on complex datasets using Machine Learning and Deep Learning.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - present',
    title: 'UI/UX Designer',
    desc: 'I am proficient in Canva and currently gaining hands-on experience in Figma. I am keen in bringing designs to life.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021- present (till 2025)',
    title: 'Engineering Degree <span> Thapar Institute of Engineering and Technology</span>',
    desc: 'I am currently pursuing Computer Engineering as a pre-final year student.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019-2021',
    title: ' High School <span> Motiram Senior Secondary School,Chandigarh </span>',
    desc: 'I have completed my high school in Non-Medical with a percentage of 95.4% in Grade 12.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2014-2018',
    title: 'Secondary Education <span> Bhavan Vidyalaya, Panchkula </span>',
    desc: 'I have completed my secondary and middle schooling with a percentage of 93.8% in Grade 10.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '75',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '85',
  },

  {
    id: 4,
    title: 'Machine Learning',
    percentage: '72',
  },

  {
    id: 5,
    title: 'C/C++',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Python/R',
    percentage: '60',
  },

  {
    id: 7,
    title: 'Database Systems',
    percentage: '90',
  },

  {
    id: 8,
    title: 'ReactJS',
    percentage: '75',
  },
  {
    id: 9,
    title: 'Bootstrap',
    percentage: '65',
  },
  {
    id: 10,
    title: 'ExpressJS',
    percentage: '40',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Exploratory Data Analysis',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: Iris Dataset',
        desc: '',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : Python ',
        desc: '',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: Spotify Clone',
        desc: '',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : Javascript, HTML, CSS',
        desc: '',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Website Development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: Blog Website',
        desc: '',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : NextJS',
        desc: '',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Wesbite Development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: E-Commerce Website',
        desc: '',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ReactJS, TailwindCSS, Bootstrap',
        desc: '',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Machine Learning',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: Plagirism Checker',
        desc: '',
      },
      // {
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : Python, ML Algorithms',
        desc: '',
      },
      // {
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Machine Learning',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: QR Generator',
        desc: '',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : Python, ML Algorithms',
        desc: '',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dibble.com',
      // },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
