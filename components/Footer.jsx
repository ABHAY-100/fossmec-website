import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-grid flex flex-col items-center justify-center text-white relative overflow-hidden">
      
      {/* Main Call-to-Action Section */}
      <div className="min-h-[calc(100vh-250px)] w-full flex flex-col items-center justify-center text-center pt-16">
        <h2 className="text-2xl md:text-4xl font-semibold italic leading-relaxed">
          Big ideas, cool projects, and<br /> great people. You in?
        </h2>

        <button className="mt-10 w-[250px] h-[100px] bg-[#F2F7FC] rounded-[25px] flex items-center justify-center">
        <span className="font-(family-name:--font-odibee) text-[#0C2444] text-5xl">
            join foss
          </span>
        </button>
      </div>

      {/* Bottom Footer Bar */}
      <div className="w-full h-[130px] relative z-10">
        <div className="absolute inset-0 backdrop-blur-sm bg-white/2 border-t border-t-[#FFFFFF29]" />
        <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 h-full px-6">
          <p className="mb-4 md:mb-0 font-mono">FOSS MEC – We build. We share. We learn.</p>
          <div className="flex space-x-6 font-mono">
            <a href="https://instagram.com/foss_mec" target="_blank" className="hover:text-white transition">Instagram</a>
            <a href="https://linkedin.com/company/fossmec" target="_blank" className="hover:text-white transition">LinkedIn</a>
            <a href="https://t.me/joinchat/_wHtSpuMBQxhODhl" target="_blank" className="hover:text-white transition">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer