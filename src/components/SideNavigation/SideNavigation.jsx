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
          <a>
              <i><FaHome /></i>
          </a>
          <a>
              <i><GrProjects /></i>
          </a>
          <a>
              <i><SiAboutdotme /></i>
          </a>
        </div>
          
      </div>
    </nav>
  )
}

export default SideNavigation