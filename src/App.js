import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigationbar from './components/Navigationbar';
import Intro from './components/Intro';
import Discovery from './components/Discovery';
import Lawas from './components/Lawas';
import Moviedetails from './components/Moviedetails';
import Upcoming from './components/Upcoming';
import Foot from './components/Foot'
import './App.css';
import './style/landingpage.css';

function AppContent() {
  const location = useLocation();
  const isLawasDetail = location.pathname === "/moviedetails" && location.state?.from === "lawas";

  return (
    <>
      {!isLawasDetail && (
        <>
          <div className='bg'>
            <Navigationbar />
            <Intro />
          </div>

          <div>
            <Upcoming />
          </div>

          <div className='hero'>
            <Routes>
              <Route path="/" element={<Discovery />} />
              <Route path="/moviedetails" element={<Moviedetails />} />
            </Routes>
          </div>


          {location.pathname === "/" && (
            <div className='lawas'>
              <Lawas />
            </div>
          )}

          <div >
            <Foot />
          </div>
        </>
      )}
      {isLawasDetail && (
        <Moviedetails />
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;