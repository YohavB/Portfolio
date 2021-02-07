import React, { useEffect, useState } from "react";
import LangDown from "../dropdown/LangDown";
import ukflag from "../icon/united-kingdom.svg";
import frflag from "../icon/france.svg";
import ilflag from "../icon/israel.svg";

export default function LangSelector(props) {
  const [defaultflag, setDefaultflag] = useState(null);
  const navlang = navigator.language;

  useEffect(() => {
    setflag();
  }, []);

  useEffect(() => {
    setOptionFlag();
  }, [props.selectedLang]);

  const data = [
    { name: "English", code: "en-EN", flag: ukflag, func: props.toEn },
    { name: "French", code: "fr-FR", flag: frflag, func: props.toFr },
    { name: "Hebrew", code: "he", flag: ilflag, func: props.toHe },
  ];

  function setflag() {
    switch (navlang) {
      case "fr-FR":
        setDefaultflag(frflag);
        break;
      case "en-EN":
        setDefaultflag(ukflag);
        break;
      case "he":
        setDefaultflag(ilflag);
        break;
      default:
        setDefaultflag(ukflag);
    }
  }

  function setOptionFlag() {
    switch (props.selectedLang) {
      case "fr-FR":
        setDefaultflag(frflag);
        break;
      case "en-EN":
        setDefaultflag(ukflag);
        break;
      case "he":
        setDefaultflag(ilflag);
        break;
      default:
        setDefaultflag(ukflag);
    }
  }

  return (
    <div className={`langdrop ${props.selectedLang === "he" ? "rtl" : null}`}>
      <LangDown
        prompt={defaultflag}
        selectedLang={props.selectedLang}
        options={data}
        id="code"
        label="flag"
      />
    </div>
  );
}
