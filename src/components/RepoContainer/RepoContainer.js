import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFetch } from '../../hooks/useFetch';
import { allReposUrl } from '../../apiUrls';
import RepoCard from '../RepoCard/RepoCard';
import texts from '../../text.json';

import './RepoContainer.css';

function RepoContainer() {
  const githubToken = process.env.REACT_APP_GITHUB_TOKEN;

  const { data, loading, error } = useFetch(allReposUrl, {
    headers: {
      Authorization: `Bearer ${githubToken}`
    }
  });

  const [filteredCategory, setFilteredCategory] = useState(null);

  const handleFilter = (category) => {
    setFilteredCategory(category);
  };

  const openRepoInNewTab = (url) => {
    window.open(url, '_blank');
  };

  const AnimatedButton = ({ className, onClick, color, text }) => (
    <motion.button
      className={`btn-${className} ${color}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (!data || data.length === 0) return <p>No data</p>;

  const filteredRepos = filteredCategory
    ? data.filter((repo) => repo.topics && repo.topics.includes(filteredCategory))
    : data;


  return (
    <>
      <section className="repos">
      <h2>{texts.repos.header}</h2>
      <motion.div>
        <AnimatedButton
          className="js"
          color="yellow"
          onClick={() => handleFilter('js')}
          text={texts.repos.buttons.btn1}
        />
        <AnimatedButton
          className="react"
          color="cyan"
          onClick={() => handleFilter('react')}
          text={texts.repos.buttons.btn2}
        />
        <AnimatedButton
          className="ui"
          onClick={() => handleFilter('ui')}
          text={texts.repos.buttons.btn3}
        />
        <AnimatedButton
          className="all"
          onClick={() => setFilteredCategory(null)}
          text={texts.repos.buttons.btn4}
        />
      </motion.div>
    </section>

      <div className="repo_container">
          {filteredRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} openRepoInNewTab={openRepoInNewTab} />
          ))}
      </div>
    </>
  );
}

export default RepoContainer;
