import { useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { allReposUrl } from '../apiUrls';
import RepoCard from './RepoCard';

function RepoContainer(){
    const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
    
    const { data, loading, error } = useFetch(allReposUrl,
        {
            headers: {
                Authorization: `Bearer ${githubToken}`
            }
        }
    );

    const [filteredCategory, setFilteredCategory] = useState(null);

    const handleFilter = (category) => {
        setFilteredCategory(category);
    };

    const openRepoInNewTab = (url) => {
        window.open(url, '_blank');
      };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    if (!data || data.length === 0) return <p>No data</p>;

    console.log(data);

    // Filter repositories based on the selected category
    const filteredRepos = filteredCategory
    ? data.filter((repo) => repo.topics && repo.topics.includes(filteredCategory))
    : data;


    return (
        <>
            <h2>Repos:</h2>
            <div>
                <button onClick={() => handleFilter('js')}>JavaScript</button>
                <button onClick={() => handleFilter('react')}>React</button>
                <button onClick={() => handleFilter('ui')}>UI</button>
                <button onClick={() => setFilteredCategory(null)}>Show All</button>
            </div>
            
            <div className="repo_container">
                
                {filteredRepos.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} openRepoInNewTab={openRepoInNewTab} />
                ))}
                
            </div>
            </>
      );
}

export default RepoContainer;