import React from "react";
import { useState } from "react";

import "./edges.styles.scss";

import Button from "../../components/button/button.component";

const defaultLetterScheme = "ABCDEFGJKLMNOPQRSTUVWX";

function EdgesPage() {
  const [letterScheme, setLetterScheme] = useState(defaultLetterScheme);

  return (
    <div className="edges-page-container">
      <h3>Edges</h3>
      <div className="letter-scheme-container">
        <input
          type="text"
          value={letterScheme}
          onChange={(e) => setLetterScheme(e.target.value)}
        />
        <h6>Letter Scheme</h6>
      </div>
      <div className="btn-edges-container">
        <Button>Start Review</Button>
        <Button>Review Before Sleep</Button>
      </div>
    </div>
  );
}

export default EdgesPage;
