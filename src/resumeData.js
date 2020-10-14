
import gmail from "../src/icon/gmail.svg";
import github from "../src/icon/github.svg";
import linkedin from "../src/icon/linkedin.svg";

let resumeData = {
  imagebaseurl: "http://github.com/YohavB",
  name: "Yohav",
  role: "Frontend Developer",
  linkedinId: "Your ID",
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
    "Self learner in Web Dev, thirsty to learn and live from my passion. I like to learn and create applications in various parts of software development and like to learn about new technologies." ,
  address: "Israel",
  website: "https://github.com/YohavB",
  education: [
    {
      UniversityName: "Ort Kfar Saba",
      specialization:
        "Machine Engineer's degreeField Of Study Practical civil engineering",
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
      CompanyName: "Bleckman Breslev Painting Company ",
      specialization: "Construction Worker",
      MonthOfLeaving: "Oct",
      YearOfLeaving: "2019",
      Achievements: "Some Achievements",
    },
  ],
  skillsDescription: "Your skills here",
  skills: [
    {
      skillname: "HTML5",
    },
    {
      skillname: "CSS",
    },
    {
      skillname: "Node.js",
    },

    {
      skillname: "JS",
    },
    {
      skillname: "Reactjs",
    },
  ],
  portfolio: [
    {
      name: "Lives Rates",
      description: "Live Rates from Api",
      imgurl: "public/images/cv-photo/rates-ps.png",
    },
    {
      name: "Recipes",
      description: "mobileapp",
      img: "public/images/cv-photo/recipe-ps.png",
    },
    {
      name: "project3",
      description: "mobileapp",
      imgurl: "images/portfolio/project2.png",
    },
    {
      name: "project4",
      description: "mobileapp",
      imgurl: "images/portfolio/phone.jpg",
    },
  ],
  testimonials: [
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
  ],
};
export default resumeData;
