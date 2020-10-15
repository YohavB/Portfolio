import React, { Component } from "react";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;

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
          <nav id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </nav>
          <div className="title">
            <h1>I am {resumeData.name}</h1>
            <h3>
              I am a {resumeData.role} {resumeData.roleDescription}
            </h3>

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
          </div>
        </header>
      </React.Fragment>
    );
  }
}
