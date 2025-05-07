import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contact from './../src/components/contact/contact';

createRoot(document.getElementById('contactroot')!).render(
  <StrictMode>
    <Contact />
  </StrictMode>,
)
