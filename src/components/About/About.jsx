import React from 'react';
import './About.css';
import logos from '../../logos.json';
import texts from '../../text.json';

const getColor = (name) => {
  const colorMap = {
    'React': '#62dafa',
    'React Native': '#01abdc',
    'HTML': '#e44e24',
    'JavaScript': '#f7e018',
    'Linux': '#ffffff',
    'Node.js': '#83cd29',
    'PowerShell': '#5198d4',
    'Git': '#f34f29',
    'TypeScript': '#2d79c7',
    'MongoDB': '#4faa41',
    'C#': '#9a4993',
    'CSS': '#379bd6',
    'Elixir': '#9a4993',
    'Python': '#ffc331',
    'Docker': '#129eda',
    'Sass': '#ce689b',
    'Tailwind': '#36bbf7',
    'Material UI': '#01b1ff',
    'Microsoft Azure': '#32bbef',
  };

  return colorMap[name] || 'inherit';
};

const About = () => {
  return (
    <article>
      <h1>{texts.about.header}</h1>
      <div className="logos-container">
        {Object.entries(logos.logoUrls).map(([key, { name, url, experience }]) => (
          <div key={key}>
            <img src={url} alt={name} />
            <h4 style={{ color: getColor(name) }}>{name}</h4>
            <p>{experience}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default About;