import './App.css';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Rooms from './pages/Rooms';
import Services from './pages/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
