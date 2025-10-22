
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import About from './pages/About';
import ArVr from './pages/Ar-Vr';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Cooking from './pages/cooking';
import CreatorPreneur from './pages/CreatorPreneur';
import CreatorsHub from './pages/CreatorsHub';
import DroneEngineering from './pages/DroneEngineering';
import Email from './pages/email';
import Home from './pages/Home';
import Login from './pages/login';
import Otp from './pages/otp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import RobotEngineering from './pages/RobotEngineering';
import StartupStack from './pages/StartupStack';
import TermsAndConditions from './pages/t & c';
import TechCore from './pages/TechCore';
//import Forget from './pages/forget';


import Dashboard from './components/dashboard/Dashboard';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/t & c" element={<TermsAndConditions />} />
        <Route path="/Drone-Engineering" element={<DroneEngineering />} />
        <Route path="/Robot-Engineering" element={<RobotEngineering />} />
        <Route path="/ar-vr" element={<ArVr />} />
        <Route path="/Startup-Stack" element={<StartupStack />} />
        <Route path="/Core-Tech" element={<TechCore />} />
        <Route path="/creators-hub" element={<CreatorsHub />} />
        <Route path="/creatorpreneur" element={<CreatorPreneur />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/email" element={<Email />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/Dashboard" element={<Dashboard />} />


      </Routes>

      
    </Router>
  );
}

export default App;
