import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import './styles/global.css'
import ServerError from './pages/ServerError.jsx'

// Entry for 500.html. Kept separate from main.jsx so this page does not load
// the landing page code, and so it keeps working if the landing page breaks.
//
// Opened directly, there is no failing page to reload. So "Try Again" goes back
// to the page the visitor came from, if it was on this site, and otherwise
// reloads.
function retry() {
  try {
    if (document.referrer) {
      const from = new URL(document.referrer)
      const isThisSite = from.origin === window.location.origin
      const isThisPage = /^\/500(\.html)?\/?$/.test(from.pathname)
      if (isThisSite && !isThisPage) {
        window.location.assign(from.href)
        return
      }
    }
  } catch {
    // fall through to a plain reload
  }
  window.location.reload()
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ServerError onRetry={retry} />
  </StrictMode>
)
