// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLinkedinIn,  
  FaVuejs,
  FaNodeJs,
  FaDocker
} from "react-icons/fa";

import { 
  SiJavascript, 
  SiStyledcomponents,
  SiRedux,SiExpress,
  SiJest
} from "react-icons/si";


// Projects Images:
import foodExplorer from "./images/foodExplorer.png"
import movieNotes from "./images/movieNotes.png"
import mkburger from "./images/mkburger.png"
import pomodoro from "./images/pomodoro.png"
import jsLogo from "./images/JSlogo.png"
import bmi from "./images/BMIcalc.png"
import nodeJs from "./images/nodejs.png"
import MarioBros from "./images/MarioBros.png"
import Portfolio from "./images/portfolio.png"


// Hero BG images
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

export { HeroLight as Light };
export { HeroDark as Dark };

//Github username

export const githubUsername = "andrezomko";

// Blog link icon (imported above)
export const Blog = <FaLinkedinIn />;

//About Me
export const moreInfo =`I'm a curious, passionate, and lifelong learner based in Florianópolis, SC, Brasil. As a full-stack web developer, I specialize in building dynamic and responsive web applications using React and Node.js`;
export const moreInfo2= `When I'm not coding, you'll often find me engaging in sports, enjoying the beach, or playing "bossa-nova" tunes on my acoustic guitar.`

// Skills
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
    link: "https://developer.mozilla.org/docs/Web/HTML",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
    link:"https://developer.mozilla.org/pt-BR/docs/Web/CSS"
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
    link:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
  },
  {
    id: 4,
    skill: <FaReact className="display-4" />,
    name: "React",
    link:"https://react.dev/learn"
  },
  {
    id: 5,
    skill: <FaVuejs className="display-4" />,
    name: "Vue",
    link:"https://vuejs.org/guide/introduction.html"
  },
  {
    id: 6,
    skill: <FaBootstrap className="display-4" />,
    name: "Bootstrap",
    link:"https://getbootstrap.com/docs/5.3/getting-started/introduction/"
  },
  
  {
    id: 7,
    skill: <SiStyledcomponents className="display-4" />,
    name: "Styled Components",
    link:"https://styled-components.com/docs/basics"
  },
  {
    id: 8,
    skill: <SiRedux className="display-4" />,
    name: "Redux Toolkit",
    link:"https://redux-toolkit.js.org/tutorials/overview"
  },
  {
    id: 9,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
    link:"https://git-scm.com/book/en/v2"
  },
  {
    id: 10,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
    link:"https://docs.github.com/en"
  },
 
  {
    id: 11,
    skill: <FaNodeJs className="display-4" />,
    name: "Node",
    link:"https://nodejs.org/en/about"
  },
  {
    id: 12,
    skill: <SiExpress className="display-4" />,
    name: "Express",
    link:"https://expressjs.com/en/starter/installing.html"
  },
  {
    id: 13,
    skill: <SiJest className="display-4" />,
    name: "Jest",
    link:"https://jestjs.io/docs/getting-started"
  },
  {
    id: 14,
    skill: <FaDocker className="display-4" />,
    name: "Docker",
    link:"https://docs.docker.com/"
  },


];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

// Projects
export const filteredProjects = ["FoodExplorer-FrontEnd", "MovieNotes-frontend", "Hamburger-Vuejs"];

//Project card images (same name as in the Github repo)
export const projectCardImages = [
  {
    name: "FoodExplorer-FrontEnd",
    image: foodExplorer,
  },
  {
    name: "MovieNotes-frontend",
    image: movieNotes,
  },
  {
    name: "Hamburger-Vuejs",
    image: mkburger,
  },
  {
    name: "BMI-calculator",
    image: bmi,
  },
  {
    name: "JS-intro",
    image: jsLogo,
  },
  {
    name: "PomodoroTimer",
    image: pomodoro,
  },
  {
    name: "FoodExplorer-BackEnd",
    image: nodeJs,
  },
  {
    name: "MovieNotes-backend",
    image: nodeJs,
  },
  {
    name: "MarioBros",
    image: MarioBros,
  },
  {
    name: "Clock_Api",
    image: nodeJs,
  },
  {
    name: "AndreZomkoPortfolio",
    image: Portfolio,
  },
];

// Contact Info (formspree endpoint)
export const formspreeUrl = "https://formspree.io/f/xoqzyegn";
