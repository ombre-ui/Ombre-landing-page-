import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import './styles/global.css'
import NotFound from './pages/NotFound.jsx'

// Entry for 404.html. Kept separate from main.jsx so the 404 page does not
// load the landing page code, and so the server can answer with a real 404.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotFound />
  </StrictMode>
)
