import gmail from "../src/icon/gmail.svg";
import github from "../src/icon/github.svg";
import linkedin from "../src/icon/linkedin.svg";
import react from "../src/icon/react.svg";
import css3 from "../src/icon/css3.svg";
import javascript from "../src/icon/javascript.svg";
import nodejs from "../src/icon/nodejs.svg";
import html5 from "../src/icon/html5.svg";
import whatsapp from "../src/icon/whatsapp.svg";
import phone from "../src/icon/phone.svg";
import mongodb from "../src/icon/mongodb.svg";
import firebase from "../src/icon/google-firebase.svg";

let resumeData = {
  imagebaseurl: "http://github.com/YohavB",
  name: "Yohav",
  lastname: "Benoliel",
  role: "Frontend Developer",
  roleDescription: "(and a bit of backend)",
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
    {
      name: "whatsapp",
      url: "https://api.whatsapp.com/send?phone=972543188628",
      icon: whatsapp,
    },
    {
      name: "phone",
      url: "tel:+972543188628",
      icon: phone,
    },
  ],

  aboutme:
    "Self learner in Web Dev, thirsty to learn and live from my passion. I like to study and create applications in various parts of software development and like to read about new technologies and understand them.",
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
    {
      skillname: "Firebase",
      icon: firebase,
    },
    {
      skillname: "MongoDB",
      icon: mongodb,
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
      live: "https://recipesapp-yb.web.app/",
    },
    {
      name: "Todo List",
      description:
        "The obvious Todo List. Add and delete some tasks, save the list in local data, ordering by completed or uncompleted.",
      gitlink: "https://github.com/YohavB/todolist",
      live: "https://todolist-yb.web.app/",
    },
    {
      name: "Weather Website",
      description:
        "Get live weather from all the world just by searching, the CSS change depends on the result and work with API",
      gitlink: "https://github.com/YohavB/weather-app",
      live: "https://weatherapp-yb.web.app/",
    },
    {
      name: "Sweet Wonders",
      description:
        "A showcase site for a pastry chef, Home page, Menus, Intagram gallery, and contact form. In addition there is an admin side which allows update the content of the menus. MERN CRUD app.",
      gitlink: "https://github.com/YohavB/Sweet-Wonders",
      live: "https://sweet-wonders.web.app/",
    },
  ],
};
export default resumeData;
