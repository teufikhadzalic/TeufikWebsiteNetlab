import DMJLogo from './assets/DMJLogo.svg'

export default function DMJ({ isDarkMode }) {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-customBlack text-white' : 'bg-gray-200 text-black'} flex flex-col justify-center items-center p-8`}>
      <div className="flex flex-col md:flex-row items-center">
        <img src={DMJLogo} alt="DMJ Logo" className="h-64 w-64" />
        <h1 className="text-2xl md:text-4xl font-bold text-left ml-4">
          NETLAB DMJ
        </h1>
      </div>

     
      <div className={`rounded-lg p-4 mt-6 max-w-4xl text-center ${isDarkMode ? 'bg-customWhite text-black' : 'bg-black text-white'}`}>
        <p className="text-md md:text-xl font-semibold">
          DMJ sangat keren tapi tugasnya banyak 😅
        </p>
        <p className="text-md md:text-lg mt-4">
          Mata kuliah yang mempelajari tentang jaringan network dengan Cisco, 
          yang berfungsi sebagai simulasi jaringan network asli.
        </p>
        <a
          href="https://learn.netlabdte.com/docs/category/dmj"
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