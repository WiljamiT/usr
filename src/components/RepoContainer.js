import { useFetch } from '../hooks/useFetch';

function RepoContainer(){
    const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
    
    const { data, loading, error } = useFetch(
        `https://api.github.com/users/WiljamiT/repos`,
        {
            headers: {
                Authorization: `Bearer ${githubToken}`
            }
        }
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    if (!data || data.length === 0) return <p>No data</p>;

    console.log(data);


    return (
        <div>
            <h2>Repos:</h2>
            <ul>
                {data.map(repo => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default RepoContainer;