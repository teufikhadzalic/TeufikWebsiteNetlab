import { useState, useEffect } from 'react'
import SBDLogo from './assets/SBDLogo.svg'
import Navbar from './navbar'
import DMJ from './DMJ'
import OS from './os'

export default function App() {
  const [page, setPage] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' 
  )

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', isDarkMode) // Simpan preferensi ke localStorage
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? 'bg-customBlack text-white' : 'bg-trueBlue text-black'}>
      <Navbar setPage={setPage} />
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {page === 'home' && (
        <div className="min-h-screen flex flex-col justify-center items-center p-8">
          <div className="flex flex-col md:flex-row items-center">
            <img src={SBDLogo} alt="SBD Logo" className="h-64 w-64" />
            <h1 className="text-2xl md:text-4xl font-bold text-left ml-4">
              NETLAB SBD
            </h1>
          </div>

          
          <div className={`rounded-lg p-4 mt-4 max-w-4xl text-center ${isDarkMode ? 'bg-customWhite text-black' : 'bg-black text-white'}`}>
            <p className="text-md md:text-xl">
              SBD sangat keren.
            </p>
            <p className="text-md md:text-xl mt-2">
              Mata kuliah yang mempelajari database, frontend, backend, dll..
            </p>
          </div>
        </div>
      )}
      {page === 'dmj' && <DMJ isDarkMode={isDarkMode} />}
      {page === 'os' && <OS isDarkMode={isDarkMode} />}
    </div>
  )
}