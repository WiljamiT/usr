import React, { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import { IoMdMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";
import texts from '../../text.json';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 450);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav>
      <h3>
        <b>{texts.navbar.firstname}</b>{" "}{texts.navbar.lastname}
      </h3>
  
      <div className="dropdown-wrapper">
        {isMobile ? (
          <button onClick={toggleDropdown}><IoMdMenu /></button>
        ) : (
          <a href="linkedin.com">
            <i>
              <FaLinkedin />
            </i>
          </a>
        )}
  
        <AnimatePresence>
          {isMobile && showDropdown && (
            <motion.div
              className="dropdown"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <a>
                <i><FaHome style={{ fontSize: "1.5rem"}} />Home</i>
              </a>
              <a>
                  <i><GrProjects style={{ fontSize: "1.5rem"}} />Projektit</i>
              </a>
              <a>
                  <i><SiAboutdotme style={{ fontSize: "1.5rem"}} />About</i>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;