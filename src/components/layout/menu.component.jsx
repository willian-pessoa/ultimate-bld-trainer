import React from "react";
import { useNavigate } from "react-router-dom";

import "./menu.styles.scss";

// icons
import EdgesIcon from "../../assets/edges-icon.png";
import CornersIcon from "../../assets/corners-icon.png";
import { AiOutlinePlus } from "react-icons/ai";

function Menu() {
  let navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <div className="menu-container">
      <ul>
        <li onClick={()=>handleNavigation("/edges")} className="edges-icon">
          <img src={EdgesIcon} alt="edges icon" />
          <span className="icon-name">Edges</span>
        </li>
        <li onClick={()=>handleNavigation("/")} className="plus-icon">
          <AiOutlinePlus />
        </li>
        <li onClick={()=>handleNavigation("/corners")} className="corners-icon">
          <img src={CornersIcon} alt="corners icon" />
          <span className="icon-name">Corners</span>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
