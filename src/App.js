import './App.css';
import Navbar from './components/Navbar';
import ParticlesContainer from './components/ParticlesContainer';
import SideNavigation from './components/SideNavigation';
import TextContainer from './components/TextContainer';
// import RepoContainer from './components/RepoContainer';

function App() {
  return (
    <>
    <Navbar />
    <div className="main-content">
      <TextContainer />
      <ParticlesContainer />
    </div>
    <SideNavigation />


      {/* <RepoContainer /> */}
    </>
    
  );
}

export default App;
