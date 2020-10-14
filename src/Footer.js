import React, { Component } from "react";

import './App.css';

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer className="app-footer">

<ul className="social">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={item.icon} alt={item.name} />
                      </a>
                    </li>
                  );
                })}
            </ul>
        <div className="copyright">
        © Copyright 2020 YohavB Designed by YohavB
        </div>
      </footer>
    );
  }
}
