import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


const savedDarkMode = localStorage.getItem('darkMode') === 'true'
if (savedDarkMode) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)