import React from 'react';
import Home from './pages/Home'; 
import heroBg from './assets/hero-bg.jpg'; 
import logoJae from './assets/consultoresjae.png'; 

function App() {
  return (
    <div 
      className="relative min-h-screen bg-center bg-no-repeat antialiased text-slate-100"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
        backgroundSize: '100vw 100vh',
        backgroundAttachment: 'fixed'
      }}
    >
      
      <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-sm border-b border-white/10">
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
              Sobre
            </a>
            <a href="#servicios" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Casos
            </a>
            <a href="#blog" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Contacto
            </a>
          </nav>

          <div className="md:hidden flex items-center">
            <button type="button" className="text-slate-300 hover:text-white" aria-label="Abrir menú móvil">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <Home />
    </div>
  );
}

export default App;