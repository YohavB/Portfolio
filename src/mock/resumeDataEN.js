import gmail from "../icon/gmail.svg";
import github from "../icon/github.svg";
import linkedin from "../icon/linkedin.svg";
import react from "../icon/react.svg";
import css3 from "../icon/css3.svg";
import javascript from "../icon/javascript.svg";
import nodejs from "../icon/nodejs.svg";
import html5 from "../icon/html5.svg";
import whatsapp from "../icon/whatsapp.svg";
import phone from "../icon/phone.svg";
import mongodb from "../icon/mongodb.svg";
import firebase from "../icon/google-firebase.svg";
import ukflag from "../icon/united-kingdom.svg";
import frflag from "../icon/france.svg";
import ilflag from "../icon/israel.svg";

let resumeData = {
  imagebaseurl: "http://github.com/YohavB",
  name: "Yohav",
  lastname: "Benoliel",
  role: "Frontend Developer",
  roleDescription: "(and a bit of backend)",

  home: "Home",
  about: "About",
  resume: "Resume",
  works: "Works",
  contact: "Contact",
  mycv: "My CV",
  aboutmetext: "About Me",
  contactdetails: "Contact Details",
  educationtext: "Education",
  worktext: "Work",
  military: "Military Service",
  skillstext: "Skills",
  languagetext: "Language",
  checkmyworks: "Check Out Some of My Works",
  seecode: "Check the code ",
  seelive: "Test the live version ",
  here: "Here",
  checktext:
    "You can check every work in live and see the code on Github in their descriptions",
  fullname: "Full Name",
  tel: "Tel.",
  email: "Email",
  company: "Company",
  dontbeashame: "Don't be ashame",
  submit: "Submit",
  messagesent: "Thank You ! Your message has been submitted !",
  invalidmail: "Sorry, it's seems like this mail adress is not valid",
  needmail: "Sorry, an e-mail is required",
  invalidphone: "Sorry, but only numbers are allowed",
  invalidlengthphone: "Sorry, it's seems like this phone number is not valid",
  errorbeforesubmit:
    "You can't submit for now, It's seems like there are some mistakes",
  emptyField: "This field is required",

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
      CompanyName: "Freelance Project",
      specialization: "Freelance Fullstack developer",
      MonthOfLeaving: "Nov",
      YearOfLeaving: "2020",
      Achievements:
        "A showcase site for a pastry chef. Client side with Home page, Menus, Gallery, and Contact form. An Admin side which allows updating content of the menus and gallery. MERN CRUD app. ",
    },
    {
      CompanyName: "RADev",
      specialization: "Freelance Frontend developer",
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
    "I learned, and i'm learning, all the skills below by myself thanks to the INTERNET ans his infinity of Indians developers ",
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
  language: [
    {
      langName: "English",
      icon: ukflag,
    },
    {
      langName: "French",
      icon: frflag,
    },
    {
      langName: "Hebrew",
      icon: ilflag,
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
