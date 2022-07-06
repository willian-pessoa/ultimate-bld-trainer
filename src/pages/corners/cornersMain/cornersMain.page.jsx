import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./cornersMain.styles.scss";

import Button from "../../../components/button/button.component"

const defaultLetterScheme = "ABCDEFGJKLMNOPQRSTUVWX";

function CornersMain() {
  let navigate = useNavigate();
  const [letterScheme, setLetterScheme] = useState(defaultLetterScheme);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="letter-scheme-container">
        <input
          disabled
          type="text"
          value={letterScheme}
          onChange={(e) => setLetterScheme(e.target.value)}
        />
        <h6>Letter Scheme</h6>
      </div>
      <div className="btn-corners-container">
        <Button onClick={() => handleNavigation("/corners/cornersToReview")}>
          Start Review
        </Button>
        <Button onClick={() => handleNavigation("/corners/cornersAtNight")} >Review Before Sleep</Button>
      </div>
    </>
  );
}

export default CornersMain;
