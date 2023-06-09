import LandingPage from './LandingPage';
import About from './About';
import CaseOne from './CaseOne';
import CaseTwo from './CaseTwo';
import CaseThree from './CaseThree';
import Navbar from './Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App-grid">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/case1" element={<CaseOne />} />
        <Route path="/case2" element={<CaseTwo />} />
        <Route path="/case3" element={<CaseThree />} />
      </Routes>
    </div>
  );
}

export default App;
