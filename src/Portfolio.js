import React, { Component } from "react";

import "./App.css";

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section className="app-port" id="portfolio">
        <div>
          <div>
            <h1 className="title">{resumeData.checkmyworks}</h1>

            <ul className="port">
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <li>
                      <div className="content">
                        <h2>{item.name}</h2>
                        <p>{item.description} </p>
                        <p>
                          {resumeData.seecode}
                          <a
                            href={item.gitlink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {resumeData.here}
                          </a>
                        </p>
                        <p>
                          {resumeData.seelive}
                          <a
                            href={item.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {resumeData.here}
                          </a>
                        </p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="footer">
        {resumeData.checktext}
        </div>
      </section>
    );
  }
}
