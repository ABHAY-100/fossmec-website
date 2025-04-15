import React from 'react'

const Footer = () => {
  return (
    <footer className="relative w-full flex flex-col items-center justify-center text-white before:absolute before:inset-0 before:z-[-1] before:[background-image:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_100px),repeating-linear-gradient(to_right,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_100px)] before:[mask-image:linear-gradient(to_bottom,transparent_0%,black_40%,black_80%,transparent_100%)] before:content-[''] before:pointer-events-none">
      
      {/* Main Call-to-Action Section */}
      <div className="min-h-[calc(100vh-250px)] w-full flex flex-col items-center justify-center text-center pt-16">
        <h2 className="text-2xl md:text-4xl font-semibold italic leading-relaxed">
          Big ideas, cool projects, and<br /> great people. You in?
        </h2>

        <a
  href="https://t.me/joinchat/_wHtSpuMBQxhODhl"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative mt-10 w-[250px] h-[100px] bg-[#F2F7FC] hover:bg-[#0C2444] border-2 border-white rounded-[25px] flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out hover:w-[110px]"
>
  {/* Text */}
  <span className="absolute z-10 font-(family-name:--font-gamja) text-[#0C2444] text-5xl transition-opacity duration-300 ease-in-out group-hover:opacity-0">
    join foss
  </span>

  {/* GIF Wrapper */}
  <div className="absolute w-full h-full flex items-center justify-center pointer-events-none z-20">
  
    <div className="w-[100px] h-[90px] rounded-[20px] overflow-hidden opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">
      <img
        src="/join-hover.gif"
        alt="join gif"
        className="w-full h-full object-cover rounded-[10px]"
      />
    </div>
  </div>
</a>
      </div>

      {/* Bottom Footer Bar */}
      <div className="w-full h-[130px] relative z-10">
        <div className="absolute inset-0 backdrop-blur-lgs bg-white/2.5 border-t border-t-[#FFFFFF29]" />
        <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 text-sm text-gray-500 h-full px-6 py-6">
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