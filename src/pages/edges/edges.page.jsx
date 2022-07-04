import React from "react";
import {Outlet} from "react-router-dom"

import "./edges.styles.scss";

function EdgesPage() {
  return (
    <div className="edges-page-container">
      <h3>Edges</h3>
      <Outlet />
    </div>
  );
}

export default EdgesPage;
