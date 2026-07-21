import React, { useState } from 'react';
import servicesBg from '../assets/about-us.webp';
import personasBg from '../assets/personas.webp';

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleOpenModal = (serviceTitle) => {
    setFormData((prev) => ({ ...prev, subject: `Consulta Especializada: ${serviceTitle}` }));
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\nMensaje:\n${formData.message}`;
    window.location.href = `mailto:informacion@consultoresjae.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="min-h-screen pt-0 selection:bg-[#F0BE0A] selection:text-slate-900 bg-[#EDF0F0] text-slate-800 font-['Poppins']">
      
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center py-20 md:py-28 overflow-hidden border-b border-slate-300">
        <div className="absolute inset-0 z-0">
          <img 
            src={servicesBg} 
            alt="Consultores JAE C.A. - Servicios de Derecho Público, Auditoría y Control Fiscal en Venezuela" 
            className="w-full h-full object-cover object-center filter brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-slate-800/40" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="w-full lg:max-w-4xl text-left">
            <span className="inline-block bg-transparent px-0 py-1 text-xs font-semibold text-white tracking-widest uppercase mb-4 shadow-none">
              NUESTRA OFERTA DE VALOR INSTITUCIONAL
            </span>
            
            <h1 className="font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl mb-6 leading-tight text-left">
              Planes y Servicios Legales <span className="text-[#F0BE0A]">Segmentados</span>
            </h1>
            
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light text-left">
              Soluciones estratégicas en derecho administrativo, control fiscal y telecomunicaciones adaptadas rigurosamente a la normativa legal vigente de Venezuela.
            </p>
          </div>
        </div>
      </section>

      <article>

        <section className="py-20 bg-white border-b border-slate-200 transition-colors" aria-labelledby="heading-corporativo">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-xs font-bold text-[#b38905] tracking-widest uppercase block mb-2">ÁMBITO B2B</span>
              <h2 id="heading-corporativo" className="font-serif text-3xl font-bold text-slate-900 tracking-tight">
                Para Empresas y Sector Corporativo
              </h2>
              <div className="h-1 w-20 bg-[#F0BE0A] rounded mt-3" aria-hidden="true"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <article className="bg-[#EDF0F0] rounded-2xl p-8 border border-slate-300 shadow-md flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#F0BE0A]/50">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Derecho Administrativo y Contencioso Patrimonial
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Auditoría preventiva de actos administrativos, interposición de recursos bajo la LOPA, demandas de contenido patrimonial por responsabilidad y ejercicio de medidas cautelares ante vías de hecho de la Administración Pública.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenModal('Derecho Administrativo y Contencioso')}
                  className="inline-flex items-center justify-center rounded-md bg-[#F0BE0A] px-4 py-2.5 text-xs font-bold text-slate-950 shadow hover:bg-[#d4a708] transition-all cursor-pointer"
                >
                  Solicitar Asesoría Corporativa
                </button>
              </article>

              <article className="bg-[#EDF0F0] rounded-2xl p-8 border border-slate-300 shadow-md flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#F0BE0A]/50">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Derecho de las Telecomunicaciones y Economía Digital
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Acompañamiento integral en licitaciones de espectro radioeléctrico, habilitaciones, concesiones, interconexión y defensa regulatoria o antimonopolio frente a CONATEL y SUNDDE.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenModal('Telecomunicaciones y Economía Digital')}
                  className="inline-flex items-center justify-center rounded-md bg-[#F0BE0A] px-4 py-2.5 text-xs font-bold text-slate-950 shadow hover:bg-[#d4a708] transition-all cursor-pointer"
                >
                  Solicitar Asesoría Regulatoria
                </button>
              </article>

              <article className="bg-[#EDF0F0] rounded-2xl p-8 border border-slate-300 shadow-md flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#F0BE0A]/50">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Consultoría Inmobiliaria y Condominios Patrimoniales
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Gestión integral, auditoría legal y blindaje normativo de condominios. Manejo especializado de morosidad extrajudicial y judicial conforme a la Ley de Propiedad Horizontal.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenModal('Consultoría Inmobiliaria y Condominios')}
                  className="inline-flex items-center justify-center rounded-md bg-[#F0BE0A] px-4 py-2.5 text-xs font-bold text-slate-950 shadow hover:bg-[#d4a708] transition-all cursor-pointer"
                >
                  Blindaje de Condominios
                </button>
              </article>

            </div>
          </div>
        </section>

        <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900" aria-labelledby="heading-personas">
          <div className="absolute inset-0 z-0">
            <img 
              src={servicesBg} 
              alt="Consultores JAE C.A. - Defensa Individual" 
              className="w-full h-full object-cover object-center filter brightness-110"
            />
            <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-sm" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-xs font-bold text-[#F0BE0A] tracking-widest uppercase block mb-2">DEFENSA INDIVIDUAL</span>
              <h2 id="heading-personas" className="font-serif text-3xl font-bold text-white tracking-tight">
                Para Personas (Funcionarios Públicos y Particulares)
              </h2>
              <div className="h-1 w-20 bg-[#F0BE0A] rounded mt-3" aria-hidden="true"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              
              <article className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-8 border border-slate-800 shadow-xl space-y-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F0BE0A]/50">
                <h3 className="font-serif text-xl font-bold text-white">Régimen Funcionarial y Disciplinario (LEFP)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Defensa técnica rigurosa en procedimientos disciplinarios, control del debido proceso en expedientes administrativos, amparos por desmejoras y garantía absoluta de estabilidad en la función pública.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenModal('Régimen Funcionarial y Disciplinario')}
                  className="inline-flex items-center text-xs font-bold text-[#F0BE0A] hover:text-white transition-colors pt-2 cursor-pointer"
                >
                  Consultar casos de función pública &rarr;
                </button>
              </article>

              <article className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-8 border border-slate-800 shadow-xl space-y-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F0BE0A]/50">
                <h3 className="font-serif text-xl font-bold text-white">Seguridad Social, Laboral y Control Fiscal</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Asesoría experta en jubilaciones, pensiones, complementos y reclamaciones de pasivos laborales. Asistencia jurídica integral ante procesos de control fiscal preventivo y auditoría de Estado.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenModal('Seguridad Social y Control Fiscal')}
                  className="inline-flex items-center text-xs font-bold text-[#F0BE0A] hover:text-white transition-colors pt-2 cursor-pointer"
                >
                  Consultar defensa fiscal y laboral &rarr;
                </button>
              </article>

            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group max-h-[380px]">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent z-10" />
              <img 
                src={personasBg} 
                alt="Respaldo profesional y defensa jurídica especializada en Consultores JAE C.A." 
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105 opacity-60"
              />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 z-20 space-y-2">
                <span className="text-xs font-bold text-[#F0BE0A] tracking-widest uppercase block">TUTELA Y DEFENSA EFECTIVA</span>
                <p className="font-serif text-xl md:text-2xl font-bold text-white max-w-2xl">
                  Garantizamos protección jurídica sólida frente a cualquier asimetría de poder institucional.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className="py-20 bg-white border-b border-slate-200" aria-labelledby="heading-networking">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <aside className="max-w-4xl mx-auto bg-slate-900 text-slate-100 rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-300 hover:border-[#F0BE0A]/40">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#F0BE0A] tracking-widest uppercase block">NETWORKING JURÍDICO</span>
                <h2 id="heading-networking" className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Para Colegas Abogados
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Plataforma exclusiva de respaldo técnico para la redacción avanzada de demandas bajo la LOJCA y recursos administrativos bajo la LOPA. Actuamos como un back-office de alta eficiencia para potenciar sus litigios en Derecho Público.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleOpenModal('Networking Jurídico - Soporte Colegas')}
                className="whitespace-nowrap rounded-full bg-[#F0BE0A] px-6 py-3 text-xs font-bold text-slate-950 shadow hover:bg-[#d4a708] transition-all cursor-pointer hover:scale-105"
              >
                Conectar com Back-Office
              </button>
            </aside>
          </div>
        </section>

      </article>

      <section className="py-16 bg-[#EDF0F0]" aria-label="Información de contacto rápido">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-700">
            ¿Requiere una evaluación personalizada? Escríbanos directamente a <a href="mailto:consultoria@consultoresjae.com" className="text-[#a17a04] font-medium hover:underline">consultoria@consultoresjae.com</a> o agende su diagnóstico virtual.
          </p>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-2xl bg-[#111827] rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F0BE0A]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-xl font-bold text-white">
                Solicitar Información de Servicio
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white text-xl font-bold p-1 focus:outline-none cursor-pointer"
                aria-label="Cerrar modal"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="modal-name" className="text-xs font-semibold text-slate-400">Nombre *</label>
                  <input 
                    type="text" 
                    id="modal-name" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre" 
                    required
                    className="w-full bg-transparent border-b border-slate-700 pb-2 text-sm text-white focus:outline-none focus:border-[#F0BE0A] transition-colors placeholder-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="modal-email" className="text-xs font-semibold text-slate-400">Dirección de Email *</label>
                  <input 
                    type="email" 
                    id="modal-email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Tu correo electrónico" 
                    required
                    className="w-full bg-transparent border-b border-slate-700 pb-2 text-sm text-white focus:outline-none focus:border-[#F0BE0A] transition-colors placeholder-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="modal-subject" className="text-xs font-semibold text-slate-400">Asunto *</label>
                <input 
                  type="text" 
                  id="modal-subject" 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Asunto del mensaje" 
                  required
                  className="w-full bg-transparent border-b border-slate-700 pb-2 text-sm text-white focus:outline-none focus:border-[#F0BE0A] transition-colors placeholder-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="modal-message" className="text-xs font-semibold text-slate-400">Comentarios / Preguntas *</label>
                <textarea 
                  id="modal-message" 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detalles de su caso institucional o requerimiento" 
                  required
                  className="w-full bg-transparent border-b border-slate-700 pb-2 text-sm text-white focus:outline-none focus:border-[#F0BE0A] transition-colors placeholder-slate-600 resize-none"
                ></textarea>
              </div>

              <div className="pt-4 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full bg-transparent border border-slate-700 px-6 py-3 text-xs font-bold text-slate-300 hover:bg-slate-800 transition-all uppercase tracking-wider cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-[#F0BE0A] px-8 py-3 text-xs font-bold text-slate-950 shadow hover:bg-[#d4a708] transition-all uppercase tracking-wider cursor-pointer"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      <footer className="w-full bg-[#1b222d] text-slate-300 py-16 border-t border-slate-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-700">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="font-serif text-lg font-bold text-white tracking-tight block">
                CONSULTORES <span className="text-[#F0BE0A]">JAE</span> C.A.
              </span>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                Especialistas de vanguardia en la mitigación de riesgos institucionales, control fiscal y blindaje mercantil corporativo en Venezuela.
              </p>
              <div className="text-[11px] font-mono text-slate-400">
                R.I.F. J408101297
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-white">
                Canales Electrónicos Oficiales
              </h4>
              <ul className="space-y-3 m-0 p-0 list-none text-xs">
                <li>
                  <a href="mailto:consultoria@consultoresjae.com" className="text-slate-200 hover:text-[#F0BE0A] font-medium transition-colors block">
                    consultoria@consultoresjae.com
                  </a>
                  <span className="text-[11px] text-slate-400 block">Asesoría corporativa, auditorías, telecomunicaciones y condominios.</span>
                </li>
                <li>
                  <a href="mailto:litigios@consultoresjae.com" className="text-slate-200 hover:text-[#F0BE0A] font-medium transition-colors block">
                    litigios@consultoresjae.com
                  </a>
                  <span className="text-[11px] text-slate-400 block">Defensa contenciosa, vías de hecho, demandas patrimoniales y régimen funcionarial.</span>
                </li>
                <li>
                  <a href="mailto:networking@consultoresjae.com" className="text-slate-200 hover:text-[#F0BE0A] font-medium transition-colors block">
                    networking@consultoresjae.com
                  </a>
                  <span className="text-[11px] text-slate-400 block">Apoyo colaborativo institucional para colegas en redacción de recursos.</span>
                </li>
                <li>
                  <a href="mailto:informacion@consultoresjae.com" className="text-slate-200 hover:text-[#F0BE0A] font-medium transition-colors block">
                    informacion@consultoresjae.com
                  </a>
                  <span className="text-[11px] text-slate-400 block">Consultas e informaciones generales de la firma.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-white">
                Ecosistema Digital
              </h4>
              <ul className="space-y-2 m-0 p-0 list-none text-xs">
                <li>
                  <a 
                    href="https://www.linkedin.com/company/consultores-jae-ca" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-300 hover:text-white transition-colors flex flex-col"
                  >
                    <span className="font-medium text-slate-100">LinkedIn (Canal Principal)</span>
                    <span className="text-[11px] text-slate-400">Artículos técnicos, Boletines/Newsletters y casos B2B.</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/consultoresjae" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-300 hover:text-white transition-colors flex flex-col mt-2"
                  >
                    <span className="font-medium text-slate-100">Instagram</span>
                    <span className="text-[11px] text-slate-400">Consejos breves y "Minutos Regulatorios" (@consultoresjae).</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/juridicoAE" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-300 hover:text-white transition-colors flex justify-between items-center pt-1 border-t border-slate-700"
                  >
                    <span>X (Twitter)</span>
                    <span className="text-[11px] text-slate-400">@juridicoAE</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-[#F0BE0A] transition-colors flex justify-between items-center pt-1">
                    <span className="font-semibold text-slate-100">Blog de Actualidad Legal</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F0BE0A]" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-xs text-slate-400">
            <div>
              &copy; 2026 Consultores JAE C.A. Todos los derechos reservados.
            </div>
            <div className="flex gap-4">
              <span className="text-[11px]">Soporte institucional: <a href="mailto:consultoresjae@gmail.com" className="hover:text-white transition-colors">consultoresjae@gmail.com</a></span>
            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}