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
              <li>
                <div className="content">
                  <h2>What is lorem ipsum?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at volutpat nibh. Nullam vel velit nec neque
                    pellentesque bibendum. Quisque nec suscipit leo. Vestibulum
                    mollis pulvinar urna, a iaculis urna mollis at. Mauris
                    tristique lobortis porta. Nunc suscipit sagittis tempus.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Integer feugiat, massa et
                    ullamcorper molestie, eros quam vestibulum urna, quis
                  </p>
                </div>
              </li>
              <li>
                <div className="content">
                  <h2>What is lorem ipsum?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at volutpat nibh. Nullam vel velit nec neque
                    pellentesque bibendum. Quisque nec suscipit leo. Vestibulum
                    mollis pulvinar urna, a iaculis urna mollis at. Mauris
                    tristique lobortis porta. Nunc suscipit sagittis tempus.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Integer feugiat, massa et
                    ullamcorper molestie, eros quam vestibulum urna, quis
                  </p>
                </div>
              </li>
              <li>
                <div className="content">
                  <h2>What is lorem ipsum?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at volutpat nibh. Nullam vel velit nec neque
                    pellentesque bibendum. Quisque nec suscipit leo. Vestibulum
                    mollis pulvinar urna, a iaculis urna mollis at. Mauris
                    tristique lobortis porta. Nunc suscipit sagittis tempus.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Integer feugiat, massa et
                    ullamcorper molestie, eros quam vestibulum urna, quis
                  </p>
                </div>
              </li>
              <li>
                <div className="content">
                  <h2>What is lorem ipsum?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at volutpat nibh. Nullam vel velit nec neque
                    pellentesque bibendum. Quisque nec suscipit leo. Vestibulum
                    mollis pulvinar urna, a iaculis urna mollis at. Mauris
                    tristique lobortis porta. Nunc suscipit sagittis tempus.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Integer feugiat, massa et
                    ullamcorper molestie, eros quam vestibulum urna, quis
                  </p>
                </div>
              </li>
              <li>
                <div className="content">
                  <h2>What is lorem ipsum?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at volutpat nibh. Nullam vel velit nec neque
                    pellentesque bibendum. Quisque nec suscipit leo. Vestibulum
                    mollis pulvinar urna, a iaculis urna mollis at. Mauris
                    tristique lobortis porta. Nunc suscipit sagittis tempus.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Integer feugiat, massa et
                    ullamcorper molestie, eros quam vestibulum urna, quis
                  </p>
                </div>
              </li>
            </ul>

            {/* <div
              id="portfolio-wrapper"
               alt=""
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="#modal-01">
                          <img src={`${item.imgurl}`} className="item-img" alt='' />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div> */}
          </div>

        </div>

        <div className="footer"> You can check every work via Github in the description of each work  </div>

      </section>
    );
  }
}
