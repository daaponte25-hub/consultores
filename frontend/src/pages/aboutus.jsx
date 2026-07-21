import React, { useState } from 'react';
import aboutImg from '../assets/about-us.webp';
import aboutImg2 from '../assets/about-legal2.webp';
import aboutImg6 from '../assets/testimonios.webp';

export default function AboutUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

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
            src={aboutImg} 
            alt="Consultores JAE C.A. - Historia y Trayectoria" 
            className="w-full h-full object-cover object-center filter brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-slate-800/40" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="w-full lg:max-w-4xl text-left">
            <span className="inline-block bg-transparent px-0 py-1 text-xs font-semibold text-white tracking-widest uppercase mb-4 shadow-none">
              SOBRE NOSOTROS
            </span>
            
            <h1 className="font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl mb-6 leading-tight text-left">
              Nuestra Historia y <span className="text-[#F0BE0A]">Trayectoria</span>
            </h1>
            
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light text-left">
              CONSULTORES JAE C.A. fue fundada por un equipo de especialistas de larga data en Derecho Público. Nacemos para dar cobertura a las complejas interacciones judiciales y administrativas que las empresas y funcionarios mantienen con los Órganos y Entes del Estado Venezolano.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-b border-slate-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Rompiendo el modelo legal tradicional reactivo
              </h2>
              <div className="h-1 w-16 bg-[#F0BE0A] rounded" aria-hidden="true"></div>
              
              <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                <p>
                  Somos un equipo multidisciplinario de profesionales del derecho con una sólida trayectoria en diversas áreas del <strong className="text-slate-900">Derecho Constitucional, Derecho Administrativo, Control Fiscal y la Auditoría de Estado, Derecho Funcionarial y Laboral, Derecho Mercantil y Derecho de las Telecomunicaciones</strong>.
                </p>
                <p>
                  Nos posicionamos como estrategas y <em className="text-slate-900">"Auditores Legales"</em>. Nuestra misión es transformar la complejidad regulatoria en seguridad jurídica, ofreciendo un control de la legalidad institucional y corporativa, garantizando la tutela judicial efectiva y protegiendo los derechos y patrimonios de nuestros clientes frente a cualquier asimetría de poder con el Estado.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-8 bg-[#EDF0F0] border border-slate-300 shadow-xl space-y-6">
                <div className="absolute -top-3 -right-3 bg-[#F0BE0A] text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  R.I.F. J408101297
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">Pilares de Excelencia</h3>
                <ul className="space-y-3 text-sm text-slate-700 list-none p-0 m-0">
                  <li className="flex items-start gap-3">
                    <span className="text-[#a17a04] font-bold">✓</span>
                    <span>Control estricto de la legalidad institucional.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a17a04] font-bold">✓</span>
                    <span>Defensa implacable ante la Administración Pública.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a17a04] font-bold">✓</span>
                    <span>Estrategias preventivas basadas en mapas de riesgo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a17a04] font-bold">✓</span>
                    <span>Respaldo académico con docentes universitarios.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-100">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutImg6} 
            alt="Experiencia y Respaldo Académico Consultores JAE" 
            className="w-full h-full object-cover filter brightness-110"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-slate-300 shadow-xl space-y-4">
              <span className="text-xs font-bold text-[#b38905] tracking-wider uppercase block">TRAYECTORIA COMPROBADA</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">+20 años de experiencia acumulada</h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                Trayectoria acumulada en la Administración Pública y el ejercicio privado, consolidando un prestigio de capacidad técnica, probidad y honradez profesional.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-slate-300 shadow-xl space-y-4">
              <span className="text-xs font-bold text-[#b38905] tracking-wider uppercase block">RESPALDO ACADÉMICO</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Doctrina y Jurisprudencia Actualizada</h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                Nuestros servicios están avalados por abogados especialistas y docentes universitarios que aplican la doctrina y la jurisprudencia más actualizada a cada caso.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold text-[#b38905] tracking-widest uppercase block">
              NUESTRO GRAN DIFERENCIADOR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              La Auditoría del Acto
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              A diferencia de la abogacía tradicional, nosotros no somos solo litigantes; intervenimos preventivamente. Realizamos una <strong className="text-slate-900">auditoría de legalidad previa</strong> a cualquier acción para mitigar riesgos antes de que se conviertan en juicios costosos.
            </p>
            
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setFormData((prev) => ({ ...prev, subject: 'Solicitud de Diagnóstico Preventivo' }));
                  setIsModalOpen(true);
                }}
                className="inline-flex items-center justify-center rounded-md bg-[#F0BE0A] px-6 py-3 text-sm font-bold text-slate-950 shadow-md hover:bg-[#d4a708] transition-all duration-200 cursor-pointer"
              >
                Solicitar un Diagnóstico Preventivo
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EDF0F0] border-t border-slate-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-700">
            Sede Principal: <span className="text-slate-900 font-medium">Urb. Santa Mónica. Ed. Aries, piso 2. Caracas, Venezuela</span> | 
            Correo Institucional: <span className="text-[#a17a04] font-medium">informacion@consultoresjae.com</span>
          </p>
        </div>
      </section>

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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#111827] rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F0BE0A]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-xl font-bold text-white">
                Solicitar Diagnóstico Preventivo
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white text-xl font-bold p-1 focus:outline-none"
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
                  placeholder="Tu mensaje o detalles de su caso institucional" 
                  required
                  className="w-full bg-transparent border-b border-slate-700 pb-2 text-sm text-white focus:outline-none focus:border-[#F0BE0A] transition-colors placeholder-slate-600 resize-none"
                ></textarea>
              </div>

              <div className="pt-4 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full bg-transparent border border-slate-700 px-6 py-3 text-xs font-bold text-slate-300 hover:bg-slate-800 transition-all duration-200 uppercase tracking-wider"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-[#F0BE0A] px-8 py-3 text-xs font-bold text-slate-950 shadow-md hover:bg-[#d4a708] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F0BE0A] tracking-wider uppercase"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}