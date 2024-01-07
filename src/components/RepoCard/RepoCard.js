import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './RepoContainer.css';
import logos from '../../logos.json';

const RepoCard = ({ repo, openRepoInNewTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  const topicImageMap = {
    react: logos.imageUrls.react.url,
    js: logos.imageUrls.js.url,
    ui: logos.imageUrls.ui.url
    // Add more mappings for other topics as needed
  };

  const topicImage = repo.topics && (repo.topics.includes("react") || repo.topics.includes("js") || repo.topics.includes("ui"))
    ? topicImageMap[repo.topics.find(topic => ["react", "js", "ui"].includes(topic)).toLowerCase()]
    : logos.imageUrls.misc.url;

  // console.log(repo.topics);

  const customStyle = {
    borderRadius: "7px"
  }

  

  if (repo.topics && repo.topics.includes("js")) {
    customStyle.border = "1px solid rgb(230, 230, 8)";
    customStyle.color = "#ffffff";
  }

  if (repo.topics && repo.topics.includes("react")) {
    customStyle.border = "1px solid rgb(8, 230, 230)";
    customStyle.color = "#ffffff";
  }

  return (
    <motion.div
  key={repo.id}
  layout
  className="repo_card"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  style={customStyle}
>
  <img
    src={topicImage ? topicImage : null}
    alt="pic-of-topic"
    
  />

  <motion.h3
    layout="position"
    style={{
      display: "flex",
      flexDirection: "column",
      marginLeft: "2rem",
    }}
  >
    {repo.name}
    <button className="read_more_btn" onClick={handleToggle}>
    {isOpen ? 'Sulje' : 'Lue lisää'}
  </button>
  </motion.h3>
  

  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="expand"
    >
      <p>{repo.description}</p>
      <button onClick={() => openRepoInNewTab(repo.html_url)}>Open Repo</button>
    </motion.div>
  )}
</motion.div>
  );
};

export default RepoCard;