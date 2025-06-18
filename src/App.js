
import './App.css';
import Navigationbar from './components/Navigationbar';
import Intro from './components/Intro';
import Hero from './components/Hero';
import Lawas from './components/Lawas';
import './style/landingpage.css';
function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className='bg'>
      <Navigationbar/>
      <Intro />
      </div>
      {/* /* End Intro Section */}

      {/* Hero Section */}
      <div className='hero'>
        <Hero />
      </div>

      <div className='lawas'>
        <Lawas />
      </div>
    </div>
    // {/* End Hero Section */}
    
  );
}

export default App;
