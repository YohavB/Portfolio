import gmail from "../src/icon/gmail.svg";
import github from "../src/icon/github.svg";
import linkedin from "../src/icon/linkedin.svg";
import react from "../src/icon/react.svg";
import css3 from "../src/icon/css3.svg";
import javascript from "../src/icon/javascript.svg";
import nodejs from "../src/icon/nodejs.svg";
import html5 from "../src/icon/html5.svg";

let resumeData = {
  imagebaseurl: "http://github.com/YohavB",
  name: "Yohav",
  lastname: "Benoliel",
  role: "Frontend Developer",
  roleDescription: "",
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
  city: "Raanana",
  mail: "yohavbenoliel@gmail.com",
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

  army: [
    {
      grade: "Sergent Chef",
      corps: "Combat Engineering Corps",
      MonthOfLeaving: "Jul",
      YearOfLeaving: "2013",
    },
  ],

  work: [
    {
      CompanyName: "RADev",
      specialization: "Junior Frontend developer",
      MonthOfLeaving: "Present",
      YearOfLeaving: "",
      Achievements:
        "Webapp for wedding with digital invit and gestion of the event, Development of the webapp from scratch under the team lead      Stack: react | redux | firebase ",
    },

    {
      CompanyName: "Bleckman Breslev Painting Company ",
      specialization: "Construction Worker",
      MonthOfLeaving: "Oct",
      YearOfLeaving: "2019",
      Achievements: "Paint, Drywall, Joint compound",
    },
    {
      CompanyName: "Hoch Markets",
      specialization: "Salesperson ",
      MonthOfLeaving: "Jun",
      YearOfLeaving: "2016",
      Achievements: "Salesman in Foreign exchange market company",
    },
  ],
  skillsDescription:
    "I learned all the skills downthere by myself thanks to the INTERNET ans his infinity of Indians developers ",
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
        "Live Rates of Foreign Exchange, refresh every second. Possibility of searching and ordering all of the data, working with array and get data from Api",
      gitlink: "https://github.com/YohavB/Live-Rates",
      live: "",
    },
    {
      name: "Recipes",
      description:
        "Simple Web app, get some recipes by searching an ingredient, work with API",
      gitlink: "https://github.com/YohavB/recipe-app",
      live: "",
    },
    {
      name: "Todo List",
      description:
        "The obvious Todo List. Add and delete some tasks, order by completed or uncompleted.",
      gitlink: "https://github.com/YohavB/todolist",
      live: "",
    },
    {
      name: "Weather Website",
      description: "Get some weather from all the world just by searching, the CSS change depends on the result and work with API",
      gitlink: "https://github.com/YohavB/weather-app",
      live: "",
    },
    {
      name: "Next Project",
      description: "to be continued....",
      gitlink: "",
      live: "",
    },
  ],
};
export default resumeData;
