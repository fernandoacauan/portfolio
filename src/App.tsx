import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Corpo from './components/corpo/corpo';
import Creditos from './components/creditos/creditos';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="container">
      <Navbar></Navbar>
      <Corpo></Corpo>
      <Creditos></Creditos>
    </div>
  );
}

export default App
