import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import './styles/global.css'
import App from './App.jsx'
import Legal from './pages/Legal.jsx'

// Two simple pages besides the landing page: /privacy and /terms.
const path = window.location.pathname.replace(/\/+$/, '').toLowerCase()
const legalDoc =
  path === '/privacy' ? 'privacy' : path === '/terms' ? 'terms' : null

createRoot(document.getElementById('root')).render(
  <StrictMode>{legalDoc ? <Legal doc={legalDoc} /> : <App />}</StrictMode>
)
