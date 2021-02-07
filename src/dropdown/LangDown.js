import React, { useState, useEffect, useRef } from "react";

export default function LangDown({ options, prompt, label, id, selectedLang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    ["click", "touchend"].forEach((e) => {
      document.addEventListener(e, toggle);
    });
    return () =>
      ["click", "touchend"].forEach((e) => {
        document.removeEventListener(e, toggle);
      });
  }, []);

  function toggle(e) {
    setOpen(e && e.target === ref.current);
  }

  function selectOption() {
    setOpen(false);
  }

  return (
    <div>
      <div className="dropdown">
        <div className="control">
          <div
            className={`selected-value ${selectedLang === "he" ? "rtl" : null}`}
          >
            <img
              ref={ref}
              alt={label}
              src={prompt}
              onClick={toggle}
              onTouchEnd={toggle}
            />
          </div>
        </div>
        <div className={`${selectedLang=== "he" ? "rtl":null} options ${open ? "open" : null}`}>
          {options.map((option) => (
            <div
              key={option[id]}
              className="option"
              onClick={() => {
                selectOption(option);
              }}
              onTouchEnd={() => {
                selectOption(option);
              }}
            >
              <div
                className={`divoption ${selectedLang === "he" ? "rtl" : null}`}
                onClick={option.func}
              >
                <img alt={option[id]} src={option.flag} />
                <div>{option[id]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
