import React, { useState } from 'react';
import Home from './pages/Home'; 
import AboutUs from './pages/aboutus'; 
import Services from './pages/Services'; 
import heroBg from './assets/hero-bg.webp'; 
import logoJae from './assets/consultoresjae.png'; 

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [paginaActual, setPaginaActual] = useState('home'); 

  return (
    <div className="relative min-h-screen bg-[#090d16] antialiased text-slate-100 font-['Poppins']">
      
      <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-sm border-b border-white/10 bg-[#EDF0F0]/10 md:bg-transparent">
        <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center cursor-pointer" onClick={() => setPaginaActual('home')}>
            <img 
              src={logoJae} 
              alt="Logo Grupo Advmarc Consultores Jae" 
              className="h-12 w-auto object-contain" 
            />
          </div>
          
          <nav className="hidden md:flex space-x-10 items-center">
            <button 
              onClick={() => setPaginaActual('home')} 
              className={`text-sm font-medium transition-colors pb-1 cursor-pointer ${paginaActual === 'home' ? 'text-white border-b-2 border-[#F0BE0A]' : 'text-slate-300 hover:text-white'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setPaginaActual('about')} 
              className={`text-sm font-medium transition-colors pb-1 cursor-pointer ${paginaActual === 'about' ? 'text-white border-b-2 border-[#F0BE0A]' : 'text-slate-300 hover:text-white'}`}
            >
              Sobre Nosotros
            </button>
            <button 
              onClick={() => setPaginaActual('services')} 
              className={`text-sm font-medium transition-colors pb-1 cursor-pointer ${paginaActual === 'services' ? 'text-white border-b-2 border-[#F0BE0A]' : 'text-slate-300 hover:text-white'}`}
            >
               Servicios
            </button>
            <a href="https://consultoresjae.com/blog/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
               Blog
            </a>
            <a 
              href="/#contact" 
              onClick={() => setPaginaActual('home')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Contacto
            </a>
          </nav>

          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none cursor-pointer" 
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
            <button 
              onClick={() => { setPaginaActual('home'); setIsOpen(false); }}
              className="block text-base font-medium text-slate-900 border-b border-slate-200 pb-2 w-full text-left cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => { setPaginaActual('about'); setIsOpen(false); }}
              className="block text-base font-medium text-slate-700 hover:text-slate-900 transition-colors pb-2 border-b border-slate-200 w-full text-left cursor-pointer"
            >
              Sobre Nosotros
            </button>
            <button 
              onClick={() => { setPaginaActual('services'); setIsOpen(false); }}
              className="block text-base font-medium text-slate-700 hover:text-slate-900 transition-colors pb-2 border-b border-slate-200 w-full text-left cursor-pointer"
            >
              Servicios
            </button>
            <a 
              href="https://consultoresjae.com/blog/" 
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-slate-900 transition-colors pb-2 border-b border-slate-200 w-full text-left"
            >
              Blog
            </a>
            <a 
              href="/#contact" 
              onClick={() => { setPaginaActual('home'); setIsOpen(false); }}
              className="block text-base font-medium text-slate-700 hover:text-slate-900 transition-colors w-full text-left"
            >
              Contacto
            </a>
          </div>
        )}
      </header>

      {paginaActual === 'home' && (
        <div
          className="min-h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <Home />
        </div>
      )}

      {paginaActual === 'about' && <AboutUs />}

      {paginaActual === 'services' && <Services />}

    </div>
  );
}

export default App;