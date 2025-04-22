import OSLogo from "./assets/OSLogo.svg"

export default function OS({ isDarkMode }) {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-customBlack text-white' : 'bg-gray-200 text-black'} flex flex-col justify-center items-center p-8`}>
      <div className="flex flex-col md:flex-row items-center">
        <img src={OSLogo} alt="OS Logo" className="h-64 w-64" />
        <h1 className="text-2xl md:text-4xl font-bold text-left ml-4">
          NETLAB OS
        </h1>
      </div>

      
      <div className={`rounded-lg p-4 mt-6 max-w-4xl text-center ${isDarkMode ? 'bg-customWhite text-black' : 'bg-black text-white'}`}>
        <p className="text-md md:text-lg">
          Mata kuliah yang mempelajari tentang perangkat lunak sistem yang mengelola 
          sumber daya komputer dan menyediakan layanan umum untuk aplikasi perangkat lunak.
        </p>
        <a
          href="https://learn.netlabdte.com/docs/category/os"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4 block"
        >
          Link Materi
        </a>
      </div>
    </div>
  )
}