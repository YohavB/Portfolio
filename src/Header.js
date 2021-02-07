import React from "react";
import Resume from "./Yohav's Resume.pdf";
import "font-awesome/css/font-awesome.min.css";
import LangSelector from "./mock/LangSelector";

export default function Header(props) {
  const resumeData = props.resumeData;

  window.addEventListener("scroll", function () {
    hideNav();
    changeNavBg();
  });

  // When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
  var prevScrollpos = window.pageYOffset;
  function hideNav() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
    } else {
      document.getElementById("nav").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  }

  // When the user scrolls down 300px from the top of the document, the navbar's background color will be change
  function changeNavBg() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      document.getElementById("nav").style.backgroundColor = "#333";
    } else {
      document.getElementById("nav").style.backgroundColor = "transparent";
    }
  }

  return (
    <React.Fragment>
      <header id="home" className="app-header">
        <nav
          id="nav"
          className={props.selectedLang === "he" ? "navrtl" : "nav"}
        >
          <li className="current">
            <a className="smoothscroll" href="#home">
              {resumeData.home}
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              {resumeData.about}
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              {resumeData.resume}
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              {resumeData.works}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              {resumeData.contact}
            </a>
          </li>

          <LangSelector
            selectedLang={props.selectedLang}
            toFr={props.toFr}
            toEn={props.toEn}
            toHe={props.toHe}
          />
        </nav>
        <div className="title">
          <h1>{resumeData.name}</h1>
          <h3>{resumeData.role} </h3>
          <h5>{resumeData.roleDescription}</h5>

          <ul className="social">
            {resumeData.socialLinks &&
              resumeData.socialLinks.map((item) => {
                return (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="icon" src={item.icon} alt={item.name} />
                    </a>
                  </li>
                );
              })}
          </ul>
          <a href={Resume} download="Yohav's Resume">
            {" "}
            <button className="downloadbtn">
              <i className="fa fa-download"></i> {resumeData.mycv}{" "}
            </button>
          </a>
        </div>
      </header>
    </React.Fragment>
  );
}
