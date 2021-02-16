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
  name: "יואב",
  lastname: "בן-עוליאל",
  role: "מפתח פרונטאנד",
  roleDescription: "(וקצת באקטאנד)",

  home: "עמוד הבית",
  about: "קצת עליי",
  resume: "קורות חיים",
  works: "עבודות",
  contact: "צרו קשר",
  mycv: "קו''ח שלי",
  aboutmetext: "קצת עליי",
  contactdetails: "פרטים",
  educationtext: "לימודים",
  worktext: "עבודות",
  military: "שירות צבאי",
  skillstext: "כישורים",
  languagetext: "שפות",
  checkmyworks: "גלו חלק מעבודותיי",
  seecode: "בדקו את הקוד ",
  seelive: "תתנסו בגרסת לייב ",
  here: "פה",
  checktext: "אתם יכולים לראות את הקוד ולהתנסות בגרסת לייב בכל התאורים שלהם",
  fullname: "שם מלא",
  tel: "טל.",
  email: "אימייל",
  company: "חברה",
  dontbeashame: "אל תתביישו לכתוב פה משהו",
  submit: "שלח",
  messagesent: "תודה ! הודעתך נשלחה בהצלחה ",
  invalidmail: "סליחה אבל נראה שכתובת מייל זו שגויה",
  needmail: "כתובת מייל חובה",
  invalidphone: "סליחה, רק מספרים אפשריים בהקלדת מספר טלפון",
  invalidlengthphone: "סליחה אבל נראה שמספר זה שגוי",
  errorbeforesubmit: "אי אפשר לשלוח בינתים, נראה שיש כמה טעויות",
  emptyField: "שדה זה חובה",

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
    "אוטודידקט בתחום הפיתוח ווב, צמא להעמיק ולחיות מהתשוקה שלי. אני אוהב ללמוד וליצוחר יישומים בכל שלבי הפיתוח ואוהב לקרוא על טכנולוגיות חדשות ולהבין אותן ",
  country: "ישראל",
  city: "רעננה",
  mail: "yohavbenoliel@gmail.com",
  website: "ce site beikaron",
  education: [
    {
      UniversityName: "אורט כפר סבא",
      specialization: "הנדסאי בניין",
      MonthOfPassing: "יוני",
      YearOfPassing: "2019",
      Achievements: "Some Achievements",
    },
  ],

  army: [
    {
      grade: "סמל ראשון",
      corps: "חיל הנדסה קרבית",
      MonthOfLeaving: "יולי",
      YearOfLeaving: "2013",
    },
  ],

  work: [
    {
      CompanyName: "פרויקט עצמאי",
      specialization: "מתכנת פולסטאק פרילנס",
      MonthOfLeaving: "נובמבר",
      YearOfLeaving: "2020",
      Achievements:
        "אתר ראווה לשף קונדיטור. צד לקוח עם דף הבית, תפריטים שונים, גלריה וטופס ליצירת קשר. צד מנהל שמאפשר עדכון תוכן של התפריטים והגלריה. אפליקציית Firebase Crud מאפס",
    },
    {
      CompanyName: "RADev",
      specialization: "מתכנת פרונטאנד פרילנס",
      MonthOfLeaving: "עד עכשיו",
      YearOfLeaving: "",
      Achievements:
        "אפליקציית ווב לארגון חתונה עם הזמנות דיגיליות, קבלת נתונים של תשובות מהמוזמנים, אפשרות לנהל תקציב להוסיף ולמחוק בעלי מקצוע, נכתב מאפס תחת מנהל הצוות      Stack: react | redux | firebase ",
    },

    {
      CompanyName: "בלכמן ברסלב חברת צבעים ",
      specialization: "צבעי מקצועי",
      MonthOfLeaving: "אוקטובר",
      YearOfLeaving: "2019",
      Achievements: "צבע, גבס, שפכטל",
    },
    {
      CompanyName: "Hoch Markets",
      specialization: "מוכר",
      MonthOfLeaving: "יוני",
      YearOfLeaving: "2016",
      Achievements:
        "מוכר טלפוני בחברה המתעסקת בניהול חשבונות לקוחותיהם בשוק ההון",
    },
  ],
  skillsDescription:
    "למדתי בצורה אצמעית את כל הכישורים מטה בזכות אינטרנט ואין סוף מתכנתים הודים",
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
      langName: "אנגלית",
      icon: ukflag,
    },
    {
      langName: "צרפתית",
      icon: frflag,
    },
    {
      langName: "עברית",
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
