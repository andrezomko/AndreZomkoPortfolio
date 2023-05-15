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
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaBootstrap className="display-4" />,
    name: "Bootstrap",
  },
  {
    id: 5,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <SiStyledcomponents className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <SiRedux className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <FaVuejs className="display-4" />,
    name: "Vue",
  },
  {
    id: 11,
    skill: <FaNodeJs className="display-4" />,
    name: "Node",
  },
  {
    id: 12,
    skill: <SiExpress className="display-4" />,
    name: "Express",
  },
  {
    id: 13,
    skill: <SiJest className="display-4" />,
    name: "Jest",
  },
  {
    id: 14,
    skill: <FaDocker className="display-4" />,
    name: "Docker",
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
];

// Contact Info (formspree endpoint)
export const formspreeUrl = "https://formspree.io/f/xoqzyegn";
