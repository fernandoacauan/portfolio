import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Corpo from './components/corpo/corpo';
import About from './components/about/about';
import Projects from './components/projetos/projetos';
import Contact from './components/contact/contact';

function App() {
  return (
    <Router>
      <div className="container">
 
        <Routes>
          <Route path="/index" element={ <Corpo /> } />
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
