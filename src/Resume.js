import React, { Component } from "react";

import "./App.css";

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section className="app-resume" id="resume">
        <div className="education">
          <h1>Education</h1>
          <div>
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div>
                    <h3>{item.UniversityName}</h3>
                    <div>
                      {item.specialization} &bull;{" "}
                      <em>
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </div>
                    <div>{item.Achievements}</div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="work">
          <h1>Work</h1>
          <div>
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div>
                    <h3>{item.CompanyName}</h3>
                    <div className="info">
                      {item.specialization} &bull;{" "}
                      <em className="date">
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </div>
                    <div>{item.Achievements}</div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="army">
          <h1>Military Service</h1>
          <div>
            {resumeData.army &&
              resumeData.army.map((item) => {
                return (
                  <div>
                    <h3>{item.corps}</h3>
                    <div>
                      {item.grade} &bull;{" "}
                      <em>
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </div>
                    <div>{item.Achievements}</div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="skills">
          <h1>Skills</h1>
          <div>
            <div>{resumeData.skillsDescription} : </div>
            <ul>
              {resumeData.skills &&
                resumeData.skills.map((item) => {
                  return (
                    <li>
                      <img
                        className="icon"
                        src={item.icon}
                        alt={item.skillname}
                      />{" "}
                      <em className="skillname">{item.skillname}</em>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
