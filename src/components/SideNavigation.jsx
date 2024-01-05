import React from 'react'
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";

const SideNavigation = () => {
  return (
    <div className="side-nav">
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
  )
}

export default SideNavigation