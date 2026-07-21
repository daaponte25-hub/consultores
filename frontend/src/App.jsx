import React, { useState } from 'react';
import Home from './pages/Home'; 
import heroBg from './assets/hero-bg.webp'; 
import logoJae from './assets/consultoresjae.png'; 

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative min-h-screen bg-center bg-no-repeat antialiased text-slate-100 font-['Poppins']"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
        backgroundSize: '100vw 100vh',
        backgroundAttachment: 'fixed'
      }}
    >
      
      <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-sm border-b border-white/10 bg-[#EDF0F0]/10 md:bg-transparent">
        <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center">
            <img 
              src={logoJae} 
              alt="Logo Grupo Advmarc Consultores Jae" 
              className="h-12 w-auto object-contain" 
            />
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="/" className="text-sm font-medium text-white border-b-2 border-[#F0BE0A] pb-1">
              Home
            </a>
            <a href="#about-us" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Sobre Nosotros
            </a>
            <a href="#servicios" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
               Servicios
            </a>
            <a href="https://consultoresjae.com/blog/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                Blog
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Contacto
            </a>
          </nav>

          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none" 
              aria-label="Abrir menú móvil"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#EDF0F0] text-slate-900 border-b border-slate-300 px-4 pt-4 pb-6 space-y-3 shadow-xl">
            <a 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-900 border-b border-slate-200 pb-2"
            >
              Home
            </a>
            <a 
              href="#about-us" 
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-slate-900 transition-colors pb-2"
            >
              Sobre Nosotros
            </a>
            <a 
              href="#servicios" 
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-slate-900 transition-colors pb-2"
            >
              Servicios
            </a>
            <a 
              href="#blog" 
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-slate-900 transition-colors pb-2"
            >
              Blog
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Contacto
            </a>
          </div>
        )}
      </header>

      <Home />
    </div>
  );
}

export default App;