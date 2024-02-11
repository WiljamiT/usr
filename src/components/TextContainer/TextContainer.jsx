import React from 'react';
import './TextContainer.css';
import texts from '../../text.json';
import ParticlesContainer from '../Particles/ParticlesContainer';
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const TextContainer = () => {
  return (
    <section className="text-container">
      <div className="infos" id="header-content">
        <h1>{texts.infos.greeting}</h1>
        <p>{texts.infos.about}</p>

        <div className="badge-container">
          <div className="badge">
            <img src='./images/elements_of_cloud_and_cybersecurity.png' alt="cybersecurity-badge" />
            <a href="https://openbadgefactory.com/v1/assertion/ccc431a8b92e042ead4f6efac7906e2cfe56de71" target="_blank" rel="noopener noreferrer"><AiOutlineSafetyCertificate /> <i>Certificate | Elements of Cloud and Cybersecurity</i></a>
          </div>

          <div className="badge">
            <img src='./images/azure_fundementals.png' alt="azure-badge" />
            <a href="https://openbadgefactory.com/v1/assertion/2db7b8934d03aa07509d63a108309856bd590e61" target="_blank" rel="noopener noreferrer"><AiOutlineSafetyCertificate /> <i>Certificate | Azure Fundamentals</i></a>
          </div>
          <p>These badges has been granted by the course developers, namely Microsoft, Kajaani University of Applied Sciences, and mentor companies.
            #Azure #cloud #computing #cybersecurity
          </p>
        </div>

      </div>


      <ParticlesContainer />
    </section>
  )
}

export default TextContainer