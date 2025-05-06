import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './../src/components/about/about';

createRoot(document.getElementById('aboutroot')!).render(
  <StrictMode>
    <About />
  </StrictMode>,
)