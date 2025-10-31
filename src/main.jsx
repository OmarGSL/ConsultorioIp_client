import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ConsultorioApp from './ConsultorioApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ConsultorioApp />
    </BrowserRouter>
  </StrictMode>,
)
