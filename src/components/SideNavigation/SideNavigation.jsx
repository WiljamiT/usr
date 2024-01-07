import React from 'react'
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";
import './SideNavigation.css';

const SideNavigation = () => {
  return (
    <nav>
      <div className="side-nav">
        <div className="side-nav-links">
          <a href="#header-content">
              <i><FaHome /></i>
          </a>
          <a href="#repos">
              <i><GrProjects /></i>
          </a>
          <a href="#about"> 
              <i><SiAboutdotme /></i>
          </a>
        </div>
          
      </div>
    </nav>
  )
}

export default SideNavigation