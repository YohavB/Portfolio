import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

import "./App.css";
import resumeDataEN from "./mock/resumeDataEN";
import resumeDataFR from "./mock/resumeDataFR";
import resumeDataHE from "./mock/resumeDataHE";
import LangSelector from "./mock/LangSelector";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: navigator.language,
      resumeData: resumeDataEN,
    };
  }

  toFr = (e) => {
    e.preventDefault();
    this.setState({ selectedLang: "fr-FR", resumeData: resumeDataFR });
  };

  toEn = (e) => {
    e.preventDefault();
    this.setState({ selectedLang: "en-EN", resumeData: resumeDataEN });
  };

  toHe = (e) => {
    e.preventDefault();
    this.setState({ selectedLang: "he", resumeData: resumeDataHE });
  };

  setSelectedLang = () => {
    switch (this.state.selectedLang) {
      case "en-EN":
        return resumeDataEN;
      case "fr-FR":
        return resumeDataFR;
      case "he":
        return resumeDataHE;
      default:
        return resumeDataEN;
    }
  };

  render() {
    return (
      <div className="app">
        <LangSelector/>
        {/* <Header
          resumeData={this.state.resumeData}
          selectedLang={this.state.selectedLang}
          toFr={this.toFr}
          toEn={this.toEn}
          toHe={this.toHe}
        />
      
        <About resumeData={this.state.resumeData} />
        <Resume resumeData={this.state.resumeData} />
        <Portfolio resumeData={this.state.resumeData} />
        <Contact resumeData={this.state.resumeData} selectedLang={this.state.selectedLang} />
        <Footer resumeData={this.state.resumeData} /> */}
      </div>
    );
  }
}
export default App;
