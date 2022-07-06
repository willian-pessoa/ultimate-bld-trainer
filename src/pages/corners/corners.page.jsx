import React from "react";
import {Outlet} from "react-router-dom"

import "./corners.styles.scss";

function CornersPage() {
  return (
    <div className="corners-page-container">
      <h3>Corners</h3>
      <Outlet />
    </div>
  );
}

export default CornersPage;