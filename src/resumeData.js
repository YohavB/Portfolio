import gmail from "../src/icon/gmail.svg";
import github from "../src/icon/github.svg";
import linkedin from "../src/icon/linkedin.svg";
import react from "../src/icon/react.svg";
import css3 from "../src/icon/css3.svg";
import javascript from "../src/icon/javascript.svg";
import nodejs from "../src/icon/nodejs.svg";
import html5 from "../src/icon/html5.svg";

import rates from "../src/images/rates-ps.png";
import weather from "../src/images/weather-ps.png";
import todo from "../src/images/todo-ps.png";
import recipes from "../src/images/recipe-ps.png";

let resumeData = {
  imagebaseurl: "http://github.com/YohavB",
  name: "Yohav",
  lastname: "Benoliel",
  role: "Frontend Developer",
  roleDescription: "j'ai fait plein de truc dans ma vie et tout",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/yohav-benoliel-b0a696187/",
      icon: linkedin,
    },
    {
      name: "github",
      url: "http://github.com/YohavB",
      icon: github,
    },
    {
      name: "gmail",
      url: "mailto:yohavbenoliel@gmail.com",
      icon: gmail,
    },
  ],

  aboutme:
    "Self learner in Web Dev, thirsty to learn and live from my passion. I like to learn and create applications in various parts of software development and like to learn about new technologies.",
  country: "Israel",
  town: "Raanana",
  website: "ce site beikaron",
  education: [
    {
      UniversityName: "Ort Kfar Saba",
      specialization: "Engineer's degree - Practical civil engineering",
      MonthOfPassing: "Jun",
      YearOfPassing: "2019",
      Achievements: "Some Achievements",
    },
  ],
  work: [
    {
      CompanyName: "RADev",
      specialization:
        "Webapp for wedding with digital invit and gestion of the event, Development of the webapp from scratch under the team lead      Stack: react | redux | firebase ",
      MonthOfLeaving: "---",
      YearOfLeaving: "---",
      Achievements: "Some Achievements",
    },
    {
      CompanyName: "Rorajy",
      specialization: "Salesman ",
      MonthOfLeaving: "Oct",
      YearOfLeaving: "2019",
      Achievements: "Some Achievements",
    },
    {
      CompanyName: "Bleckman Breslev Painting Company ",
      specialization: "Construction Worker",
      MonthOfLeaving: "Oct",
      YearOfLeaving: "2019",
      Achievements: "Some Achievements",
    },
  ],
  skillsDescription:
    "I learned all the skills downthere by myself thanks to the INTERNET ans his infinity of Indians developpers ",
  skills: [
    {
      skillname: "HTML",
      icon: html5,
    },
    {
      skillname: "CSS",
      icon: css3,
    },
    {
      skillname: "Node.js",
      icon: nodejs,
    },
    {
      skillname: "JS",
      icon: javascript,
    },
    {
      skillname: "Reactjs",
      icon: react,
    },
  ],
  portfolio: [
    {
      name: "Lives Rates",
      description:
        "Live Rates of Foreign Exchange, refresh every second. Possibility of searching and ordering all of the data, working with array ans get data from Api",
      bg: rates,
    },
    {
      name: "Recipes",
      description:
        "Simple Web app, get some recipes by searching an ingredient, work with API",
      bg: recipes,
    },
    {
      name: "Todo List",
      description:
        "The obvious Todo List. Add and delete some tasks, order by completed or uncompleted.",
      bg: todo,
    },
    {
      name: "Weather Website",
      description: "mobileapp",
      bg: weather,
    },
    {
      name: "Next Project",
      description: "to be continued....",
      bg: weather,
    },
  ],
};
export default resumeData;
