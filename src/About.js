import React, { Component } from "react";
import "./App.css";
import profile from "./images/profile.jpg"

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section className="app-about" id="about">
        <img className="profile-pic" src={profile} alt="" />

        <div>
          <h2>About Me</h2>
          <p>{resumeData.aboutme}</p>
          <div >
            <div>
              <h2>Contact Details</h2>
              <p className="address">
                <span>{resumeData.name}</span>
                <br></br>
                <span>{resumeData.address}</span>
                <br></br>
                <span>{resumeData.website}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
