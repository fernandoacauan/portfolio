import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Projeto from './../src/components/projetos/projetos';

createRoot(document.getElementById('projetosroot')!).render(
  <StrictMode>
    <Projeto />
  </StrictMode>,
)
