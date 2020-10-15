import React, { Component } from "react";

import './App.css';

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section className="app-resume" id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div >
          <div >
            <h1>
              Work
            </h1>
          </div>
          <div >
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  
                    <div>
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  
                );
              })}
          </div>
        </div>
        <div >
          <div >
            <h1>
              Skills
            </h1>
          </div>
          <div >
            <p>{resumeData.skillsDescription}</p>
            <div >
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}
                        <img className="icon" src={item.icon} alt={item.skillname} /> </em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
