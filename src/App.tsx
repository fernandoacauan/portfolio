import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/navbar/navbar'
import Corpo from './components/corpo/corpo';
import Creditos from './components/creditos/creditos';
import About from './components/about/about';
import Projects from './components/projetos/projetos';
import Contact from './components/contact/contact';

function App() {
  return (
    <Router>
      <div className="container">
 
        <Routes>
          <Route path="/index" element={
            <Navbar />
            <Corpo />
            <Creditos />
          } 
            
            />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Corpo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
