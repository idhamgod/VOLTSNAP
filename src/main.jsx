import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const path = window.location.pathname;
if (path !== '/' && path !== '/main' && !path.startsWith('/main/')) {
  window.location.replace('/main' + path);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/main">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
