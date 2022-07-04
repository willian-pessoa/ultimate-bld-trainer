import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./edgesMain.styles.scss";

import Button from "../../../components/button/button.component"

const defaultLetterScheme = "ABCDEFGJKLMNOPQRSTUVWX";

function EdgesMain() {
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
      <div className="btn-edges-container">
        <Button onClick={() => handleNavigation("/edges/edgesToReview")}>
          Start Review
        </Button>
        <Button>Review Before Sleep</Button>
      </div>
    </>
  );
}

export default EdgesMain;
