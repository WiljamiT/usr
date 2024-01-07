import React from 'react';
import './TextContainer.css';
import texts from '../../text.json';
import ParticlesContainer from '../Particles/ParticlesContainer';

const TextContainer = () => {
  return (
    <section className="text-container">
      <div className="infos">
        <h1>{texts.infos.greeting}</h1>
        <p>{texts.infos.about}</p>
      </div>
      
      <ParticlesContainer />
    </section>
  )
}

export default TextContainer