import React, { useState } from "react";
import "./Style.css";

const ThemeToggle = () => {
  const [themeLabel, setThemeLabel] = useState("DARK");
  const [glowLabel, setGlowLabel] = useState("Glow: OFF");
  const body = document.body;
  let BodyClass = body.classList;
  return (
    <div className="theme-toggle">
      {(BodyClass.contains("dark")) && <button
      onClick={() => {
        let UpdatedGlowLabel = document.body.classList.contains("glow") ? "Glow: OFF" : "Glow: ON";
        if (BodyClass.contains("glow")){
          BodyClass.remove("glow");
        } else {
          BodyClass.add("glow");
        }
        setGlowLabel(UpdatedGlowLabel);
      }}
      className="primary glow">
        {glowLabel}
      </button>}
      <button
      onClick={() => {
        let UpdatedThemeLabel = document.body.classList.contains("light") ? "LIGHT" : "DARK";
        if (BodyClass.contains("light")){
          BodyClass.add("dark");
          BodyClass.remove("light");
        } else if (BodyClass.contains("dark")){
          BodyClass.add("light");
          BodyClass.remove("dark");
          BodyClass.remove("glow");
        }
        setThemeLabel(UpdatedThemeLabel);
      }}
      className="primary theme">
        {themeLabel}
      </button>
    </div>
  );
};

export default ThemeToggle;
