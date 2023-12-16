const RepoCard = ({ repo, openRepoInNewTab }) => {
  return (
    <div key={repo.id} className="repo_card">
      <h2>{repo.name}</h2>
      <button onClick={() => openRepoInNewTab(repo.html_url)}>Open Repo</button>
    </div>
  );
};

export default RepoCard;