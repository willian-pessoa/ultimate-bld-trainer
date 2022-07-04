import React from 'react'

import "./menu.styles.scss"

import EdgesIcon from "../../assets/edges-icon.png"
import CornersIcon from "../../assets/corners-icon.png"
import { AiOutlinePlus } from "react-icons/ai"

function Menu() {
  return (
    <div className='menu-container'>
      <ul>
        <li className="edges-icon" ><img src={EdgesIcon} alt="edges icon" /></li>
        <li className='plus-icon'><AiOutlinePlus/></li>
        <li className='corners-icon'><img src={CornersIcon} alt="corners icon" /></li>
      </ul>
    </div>
  )
}

export default Menu