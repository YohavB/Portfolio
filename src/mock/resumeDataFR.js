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
import redux from "../icon/redux.svg";
import ukflag from "../icon/united-kingdom.svg";
import frflag from "../icon/france.svg";
import ilflag from "../icon/israel.svg";

let resumeData = {
  imagebaseurl: "http://github.com/YohavB",
  name: "Yohav",
  lastname: "Benoliel",
  role: "Frontend Développeur",
  roleDescription: "(et un peu de backend)",

  home: "Accueil",
  about: "A Propos",
  resume: "CV",
  works: "Travaux",
  contact: "Contact",
  mycv: "Mon CV",
  aboutmetext: "A Propos de Moi",
  contactdetails: "Détails",
  educationtext: "Éducation",
  worktext: "Travaux",
  military: "Service Militaire",
  skillstext: "Compétences",
  languagetext: "Langage",
  checkmyworks: "Découvrez certains de mes travaux",
  seecode: "Regardez le code ",
  seelive: "Testez la version live ",
  here: "Ici",
  checktext:
    "Vous pouvez vérifier chaque travail en direct et voir le code sur Github dans leur descriptions",
  fullname: "Nom et prénom",
  tel: "Tél.",
  email: "Email",
  company: "Compagnie",
  dontbeashame: "Ne soyez pas timide",
  submit: "Envoyer",
  messagesent: "Merci ! Votre message a bien été envoyé !",
  invalidmail: "Désolé… Cette adresse e-mail semble incorrecte",
  needmail: "Désolé… Une adresse e-mail est obligatoire",
  invalidphone: "Désolé, seuls des nombres sont autorisés",
  invalidlengthphone: "Désolé… Ce numéro semble incorrect",
  errorbeforesubmit:
    "Impossible d'envoyer pour l'instant, il manque des informations ou y avoir quelques erreurs",
  emptyField: "Ce champ est obligatoire",

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
    "Autoditacte en Web Dev, j'ai soif d'apprendre et de vivre de ma passion. J'aime étudier et créer des applications et prendre part dans les différentes parties du développement, j'aime lire sur les nouvelles technologies et les comprendre.",
  country: "Israel",
  city: "Raanana",
  mail: "yohavbenoliel@gmail.com",
  website: "ce site beikaron",
  education: [
    {
      UniversityName: "Ort Kfar Saba",
      specialization: "Diplôme d'ingénieur - Génie civil pratique",
      MonthOfPassing: "Juin",
      YearOfPassing: "2019",
      Achievements: "Some Achievements",
    },
  ],

  army: [
    {
      grade: "Sergent Chef",
      corps: "Corps du génie de combat",
      MonthOfLeaving: "Juillet",
      YearOfLeaving: "2013",
    },
  ],

  work: [
    {
      CompanyName: "Freelance Project",
      specialization: "Freelance Fullstack developer",
      MonthOfLeaving: "Novembre",
      YearOfLeaving: "2020",
      Achievements:
        "Un site vitrine pour un pâtissier. Côté client avec page d'accueil, menus, galerie et formulaire de contact. Un côté Admin qui permet de mettre à jour le contenu des menus et de la galerie. Application MERN CRUD.",
    },
    {
      CompanyName: "RADev",
      specialization: "Freelance Frontend developer",
      MonthOfLeaving: "Present",
      YearOfLeaving: "",
      Achievements:
        "Webapp pour mariage avec invitation numérique et gestion de l'événement, Développement de la webapp à partir de zéro sous la direction de l'équipe Stack: react | redux | firebase",
    },

    {
      CompanyName: "Bleckman Breslev Painting Company ",
      specialization: "Ouvrier du batiment",
      MonthOfLeaving: "Octobre",
      YearOfLeaving: "2019",
      Achievements: "Peinture, Cloison de plâtre, Enduis",
    },
    {
      CompanyName: "Hoch Markets",
      specialization: "Vendeur",
      MonthOfLeaving: "Juin",
      YearOfLeaving: "2016",
      Achievements: "Vendeur en entreprise spécialisé en marché des changes",
    },
  ],
  skillsDescription:
    "J'ai appris, et j'apprends encore, toutes les compétences ci-dessous par moi-même grâce à INTERNET et à son infinité de développeurs indiens",
  skills: [
    {
      skillname: "HTML5",
      icon: html5,
    },
    {
      skillname: "CSS3",
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
    { skillname: "Redux", icon: redux },
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
      langName: "Anglais",
      icon: ukflag,
    },
    {
      langName: "Français",
      icon: frflag,
    },
    {
      langName: "Hébreu",
      icon: ilflag,
    },
  ],
  portfolio: [
    {
      name: "Taux de Change en direct",
      description:
        "Taux de Change en direct, se rafraîchit toutes les secondes. Possibilité de rechercher et de classer toutes les données, mise en pratique des méthodes de travaille avec un tableau et d'obtention des données via un API.",
      gitlink: "https://github.com/YohavB/Live-Rates",
      live: "",
    },
    {
      name: "Recettes",
      description:
        "Application Web simple, obtenez des recettes en recherchant un ingrédient, obtention des données via un API.",
      gitlink: "https://github.com/YohavB/recipe-app",
      live: "https://recipesapp-yb.web.app/",
    },
    {
      name: "Todo List",
      description:
        "La fameuse Todo List. Ajoutez et supprimez certaines tâches, enregistrez la liste dans les données locales, triez par terminé ou non terminé.",
      gitlink: "https://github.com/YohavB/todolist",
      live: "https://todolist-yb.web.app/",
    },
    {
      name: "Site Météo",
      description:
        "Obtenez la météo en direct du monde entier simplement en recherchant le nom d'un pays ou d'une ville, obtention des données via Accu-Weather API. Fonction de favoris enregistrer localement, météo initiale selon position GPS, Celsius - Fahrenheit, React Redux pour gérer le state global",
      gitlink: "https://github.com/YohavB/Yohav-Benoliel-27-02-2021",
      live: "https://accu-weather-by-yb.web.app/",
    },
    {
      name: "Sweet Wonders",
      description:
        "Un site vitrine pour un pâtissier, une page d'accueil, des menus, une galerie et un formulaire de contact. De plus, il existe un côté administrateur qui permet de mettre à jour le contenu des menus. Application Firebase CRUD.",
      gitlink: "https://github.com/YohavB/Sweet-Wonders",
      live: "https://sweet-wonders.web.app/",
    },
  ],
};
export default resumeData;
