import Logo from "./assets/Logo.svg"

export default function Navbar({ setPage }) {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          
          <a href="https://learn.netlabdte.com/" target="_blank" rel="noopener noreferrer">
            <img src={Logo} alt="Logo Netlab" className="h-12 w-12 cursor-pointer" />
          </a>
          <h1 className="text-sm md:text-lg font-bold">Network Laboratory</h1>
        </div>
        <ul className="flex space-x-2 md:space-x-4 text-sm md:text-lg lg:text-xl font-semibold">
          <li className="hover:text-gray-400 cursor-pointer" onClick={() => setPage('welcome')}>
            Welcome
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={() => setPage('home')}>
            SBD
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={() => setPage('dmj')}>
            DMJ
          </li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={() => setPage('os')}>
            OS
          </li>
        </ul>
      </div>
    </nav>
  )
}