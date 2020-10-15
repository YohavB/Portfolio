import React, { Component } from "react";
import "./App.css";
import profile from "./images/profile.jpg";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section className="app-about" id="about">
        <img className="profile-pic" src={profile} alt="" />

        <div>
          <h2>About Me</h2>
          <div>{resumeData.aboutme}</div>
          <h2>Contact Details</h2>
          <div className="address">
    <div>{resumeData.name} {resumeData.lastname}</div>
            <div>
              {resumeData.city}, {resumeData.country}
            </div>
            <div><a href="mailto:yohavbenoliel@gmail.com">{resumeData.mail} </a></div>
          </div>
        </div>
      </section>
    );
  }
}
