import React, { Component } from "react";




import "./App.css";

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section className="app-port" id="portfolio">
        <div>
          <div>
            <h1 className="title">Check Out Some of My Works.</h1>

            <ul className="port">
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <li>
                      <div className="content">
                        <h2>{item.name}</h2>
                        <p>{item.description} </p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="footer">
          You can check every work via Github in the description of each work{" "}
        </div>
      </section>
    );
  }
}
