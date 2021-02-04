import React, { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import LangDown from "../dropdown/LangDown";
import languages from "./language.json";

export default function LangSelector() {
  const [value, setValue] = useState(null);

  return (
    <div style={{ width: 200 }}>
      <LangDown
        prompt="Select Language ..."
        options={languages}
        value={value}
        onChange={(val) => setValue(val)}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Dropdown
        prompt="Select Language ..."
        options={languages}
        id="code"
        label="name"
        value={value}
        onChange={(val) => setValue(val)}
      />
    </div>
  );
}

{
  /* <div>{props.selectedLang}</div>
<button onClick={props.toFr}>FR</button>
<button onClick={props.toEn}>EN</button>
<button onClick={props.toHe}>HE</button> */
}
