import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import RepoContainer from './components/RepoContainer/RepoContainer';
import SideNavigation from './components/SideNavigation/SideNavigation';
import TextContainer from './components/TextContainer/TextContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="header-content">
          <TextContainer />
          
          <SideNavigation />
        </div>
      <RepoContainer />
      <About />
      <Footer />
    </div>
  );
}

export default App;
