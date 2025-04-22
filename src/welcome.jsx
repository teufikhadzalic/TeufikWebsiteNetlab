export default function Welcome({ isDarkMode }) {
    return (
      <div className={`min-h-screen flex flex-col justify-center items-center p-8 ${isDarkMode ? 'bg-customBlack text-white' : 'bg-gray-200 text-black'}`}>
        {/* Teks Sambutan */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Selamat Datang di Website <span className="text-blue-500">NETLAB</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Platform pembelajaran interaktif untuk memahami konsep database, jaringan, dan sistem operasi.
          </p>
        </div>
  
        {/* Kontak */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Kontak Kami</h2>
          <p className="text-md md:text-lg">
            <strong>Nomor:</strong> 81234567890
          </p>
          <p className="text-md md:text-lg mt-2">
            <strong>Email:</strong> random@gmail.com
          </p>
        </div>
      </div>
    )
  }