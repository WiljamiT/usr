import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
        <h3><b>Wiljami</b> Takkinen</h3>
        <a href="linkedin.com"><i><FaLinkedin /></i></a>
    </div>
  )
}

export default Navbar