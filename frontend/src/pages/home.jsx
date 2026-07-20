import React, { useState } from 'react';
import aboutImg from '../assets/about-legal.jpg';
import aboutImg2 from '../assets/about-legal2.jpg';
import aboutImg3 from '../assets/empresas.jpg';
import aboutImg4 from '../assets/personas.jpg';
import aboutImg5 from '../assets/networking.jpg';
import aboutImg6 from '../assets/testimonios.jpg';


export default function Home() {

  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const detallesServicios = {
    corporativo: {
      titulo: "Para Empresas y Sector Corporativo",
      subtitulo: "Seguridad Regulatoria e Institucional",
      descripcion: "Estructuramos soluciones precisas basadas en la normativa legal vigente para mitigar riesgos regulatorios corporativos antes de que se conviertan en litigios costosos. Blindamos tu actividad mercantil frente a las asimetrías de poder del Estado.",
      puntos: [
        "Derecho Administrativo y Contencioso Patrimonial: Auditoría preventiva de actos administrativos e interposición de recursos (LOPA).",
        "Demandas por Vías de Hecho contra actuaciones materiales ilegales de la Administración para garantizar la restitución inmediata.",
        "Licitaciones de espectro radioeléctrico, habilitaciones, concesiones y contratos de interconexión (CONATEL).",
        "Defensa regulatoria, antimonopolio y prevención de prácticas restrictivas ante la SUNDDE, OMC y UIT.",
        "Consultoría Inmobiliaria y Condominios Patrimoniales: Auditoría legal, blindaje y manejo de morosidad (Ley de Propiedad Horizontal)."
      ]
    },
    personas: {
      titulo: "Para Personas (Funcionarios Públicos y Particulares)",
      subtitulo: "Garantía de Derechos y Debido Proceso",
      descripcion: "Ofrecemos defensa técnica implacable y asesoría integral para proteger tu estabilidad laboral, previsional o funcionarial frente a procedimientos sancionatorios o decisiones arbitrarias.",
      puntos: [
        "Régimen Funcionarial (LEFP): Defensa técnica en procedimientos disciplinarios y control del debido proceso en expedientes administrativos.",
        "Interposición de querellas funcionariales y amparos constitucionales por desmejoras laborales.",
        "Seguridad Social y Laboral: Asesoría integral en el régimen de jubilaciones, pensiones, complementos y reclamos de salarios.",
        "Asistencia jurídica en Control Fiscal y Auditoría de Estado ante procedimientos de determinación de responsabilidades.",
        "Sustanciación de expedientes disciplinarios y estructuración de concursos públicos para mitigar riesgos de nulidad."
      ]
    },
    networking: {
      titulo: "Para Colegas Abogados (Networking Jurídico)",
      subtitulo: "Back-Office Técnico de Alta Eficiencia",
      descripcion: "Actuamos como aliados técnicos estratégicos ('Abogados de Abogados') a través de un canal exclusivo en línea para dar soporte a firmas y profesionales de otras especialidades que requieran redactores expertos en Derecho Público.",
      puntos: [
        "Plataforma de Redacción de Demandas y Recursos Técnicos bajo la LOJCA (vía judicial) y recursos bajo la LOPA (vía administrativa).",
        "Redacción experta de demandas complejas, recursos de abstención o carencia, y recursos de nulidad.",
        "Estrategias frente a deficiencias en servicios públicos y amparos constitucionales.",
        "Soporte técnico colaborativo especializado para potenciar el éxito de tus litigios en tribunales venezolanos."
      ]
    }
  };

  const servicios = [
    "Derecho Constitucional",
    "Derecho Administrativo",
    "Control Fiscal y la Auditoría de Estado",
    "Derecho Funcionarial y Laboral",
    "Derecho Mercantil",
    "Derecho de las Telecomunicaciones"
  ];

  return (
    <main className="min-h-screen pt-32 selection:bg-[#F0BE0A] selection:text-slate-900">
      
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col max-w-2xl">
            <span className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-3">
              ABOGADOS ESPECIALISTAS EN DERECHO PÚBLICO Y AUDITORÍA LEGAL
            </span>
            
            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-6 leading-tight">
              Consultoría Jurídica Estratégica <br /> y <span className="text-[#F0BE0A]">Seguridad Regulatoria</span>
            </h1>
            
            <p className="text-base text-slate-300 mb-8 leading-relaxed">
              En Consultores JAE transformamos la complejidad regulatoria del Estado venezolano en seguridad jurídica para tu empresa o carrera funcionarial.
            </p>
            
            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-[#F0BE0A] px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-md hover:bg-[#d4a708] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F0BE0A] focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Agendar Diagnóstico Inicial
              </a>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="w-full bg-[#F0BE0A] py-3 overflow-hidden select-none border-y border-[#d4a708] shadow-inner"
        aria-label="Especialidades jurídicas destacadas"
      >
        <div className="flex w-max gap-8 items-center carrusel-infinito">
          <ul className="flex gap-8 whitespace-nowrap text-xs sm:text-sm font-medium tracking-wide text-slate-950 list-none m-0 p-0">
            {servicios.map((servicio, idx) => (
              <li key={`orig-${idx}`} className="flex items-center gap-8">
                <span>{servicio}</span>
                <span className="opacity-40" aria-hidden="true">•</span>
              </li>
            ))}
          </ul>
          <ul className="flex gap-8 whitespace-nowrap text-xs sm:text-sm font-medium tracking-wide text-slate-950 list-none m-0 p-0" aria-hidden="true">
            {servicios.map((servicio, idx) => (
              <li key={`dup-${idx}`} className="flex items-center gap-8">
                <span>{servicio}</span>
                <span className="opacity-40" aria-hidden="true">•</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section 
        id="about-us" 
        className="py-24 md:py-32 overflow-hidden bg-[#FCFAE8]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="flex flex-col transition-all duration-1000 ease-out motion-safe:animate-[fadeInLeft_1s_ease-out]">
              <span className="text-xs font-bold text-amber-700 tracking-widest uppercase mb-3">
                SOBRE NOSOTROS
              </span>
              
              <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-6">
                Transformamos la complejidad regulatoria en seguridad jurídica
              </h2>
              
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Fundada por un equipo de especialistas de larga trayectoria en Derecho Público, CONSULTORES JAE C.A. nace para dar cobertura a las complejas interacciones judiciales y administrativas que las empresas y funcionarios mantienen con los Órganos y Entes del Estado Venezolano. 
                </p>
                <p>
                  Somos un equipo multidisciplinario de professionals avalado por más de 20 años de experiencia acumulada en la Administración Pública y el ejercicio privado. Nuestra misión es garantizar un riguroso control de la legalidad institucional y corporativa, asegurando la tutela judicial efectiva y protegiendo los derechos y patrimonios de nuestros clientes frente a cualquier asimetría de poder.
                </p>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end transition-all duration-1000 ease-out motion-safe:animate-[fadeInRight_1s_ease-out]">
              <div className="relative group max-w-md lg:max-w-none">
                <div className="absolute -inset-1 rounded-lg bg-[#F0BE0A] opacity-30 blur transition duration-1000 group-hover:opacity-40" />
                <img 
                  src={aboutImg} 
                  alt="Equipo de Consultores JAE analizando marcos regulatorios de Derecho Público" 
                  className="relative rounded-lg shadow-2xl border border-slate-200 object-cover w-full aspect-[4/3]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section 
      id="servicios" 
        className="w-full bg-white py-16 md:py-20 border-b border-slate-100"
        aria-labelledby="diferenciador-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-baseline">
            
            <div className="md:col-span-1">
              <span className="text-xs font-bold text-amber-700 tracking-wider uppercase block mb-2">
                NUESTRO GRAN DIFERENCIADOR
              </span>
              <div className="h-1 w-12 bg-[#F0BE0A] rounded" aria-hidden="true"></div>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <h2 
                id="diferenciador-title" 
                className="font-serif text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
              >
                Profesionalismo garantizado y La Auditoría del Acto: Intervención preventiva antes de juicios costosos
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                A diferencia de la abogacía tradicional, nosotros no somos solo litigantes; intervenimos preventivamente. Realizamos una auditoría de legalidad previa a cualquier acción para mitigar riesgos antes de que se conviertan en juicios costosos, evaluando la viabilidad del caso mediante un Mapa de Riesgos estructurado.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full bg-[#090d16] text-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6 transition-all duration-1000 ease-out motion-safe:animate-[fadeInUp_1s_ease-out]">
            <div className="max-w-xl">
              <span className="inline-block rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4">
                NUESTROS SERVICIOS
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Soluciones Legales con <br />
                <span className="text-[#F0BE0A]">Enfoque de Resultados</span>
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Ofrecemos servicios jurídicos especializados con una trayectoria comprobada en la prevención de riesgos regulatorios y la defense institucional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out delay-200 motion-safe:animate-[fadeInUp_1s_ease-out]">
            
            <div className="bg-white text-slate-900 rounded-2xl p-6 flex flex-col justify-between shadow-xl border border-slate-100 min-h-[420px] hover:scale-[1.02] transition-transform duration-300">
              <div className="space-y-5">
                <div>
                  <span className="inline-block rounded-md border border-slate-200 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    EMPRESAS
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-950 leading-snug">
                  Derecho Administrativo, Telecomunicaciones y Condominios
                </h3>
                <div className="relative overflow-hidden rounded-lg aspect-[16/10]">
                  <img src={aboutImg3} alt="Auditoría legal preventivo para empresas" className="object-cover w-full h-full grayscale-[20%]" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Contencioso Patrimonial, Recursos LOPA, Vías de Hecho, Concesiones CONATEL, Defensa SUNDDE, Propiedad Horizontal.
                </p>
              </div>
              <div className="flex justify-end pt-4">
                <button 
                  onClick={() => setServicioSeleccionado('corporativo')}
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#F0BE0A] hover:text-slate-950 hover:border-[#F0BE0A] transition-all duration-200"
                  aria-label="Ver detalles de Derecho Mercantil"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                </button>
              </div>
            </div>

            <div className="bg-[#121824] text-white rounded-2xl p-6 flex flex-col justify-between shadow-xl border border-slate-800/60 min-h-[420px] hover:scale-[1.02] transition-transform duration-300">
              <div className="space-y-5">
                <div>
                  <span className="inline-block rounded-md border border-slate-700 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    PERSONAS
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white leading-snug">
                  Derecho Público y Control Fiscal
                </h3>
                <div className="relative overflow-hidden rounded-lg aspect-[16/10]">
                  <img src={aboutImg4} alt="Defensa ante órganos del Estado" className="object-cover w-full h-full brightness-90 grayscale-[10%]" />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Asesoría especializada y Procedimientos Disciplinarios LEFP, Querellas, Jubilaciones, Pasivos Laborales, Determinación de Responsabilidades.
                </p>
              </div>
              <div className="flex justify-end pt-4">
                <button 
                  onClick={() => setServicioSeleccionado('personas')}
                  className="w-9 h-9 rounded-full border border-slate-700 bg-slate-800/40 flex items-center justify-center text-slate-300 hover:bg-[#F0BE0A] hover:text-slate-950 hover:border-[#F0BE0A] transition-all duration-200"
                  aria-label="Ver detalles de Derecho"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                </button>
              </div>
            </div>

            <div className="bg-white text-slate-900 rounded-2xl p-6 flex flex-col justify-between shadow-xl border border-slate-100 min-h-[420px] hover:scale-[1.02] transition-transform duration-300">
              <div className="space-y-5">
                <div>
                  <span className="inline-block rounded-md border border-slate-200 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    NETWORKING JURIDICO
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-950 leading-snug">
                  Plataforma de Redacción de Demandas y Recursos
                </h3>
                <div className="relative overflow-hidden rounded-lg aspect-[16/10]">
                  <img src={aboutImg5} alt="Defensa de derechos laborales y funcionariales" className="object-cover w-full h-full grayscale-[20%]" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Abogados de Abogados, Back-Office Técnico, Demandas LOJCA, Recursos LOPA, Nulidades, Abstención o Carencia.
                </p>
              </div>
              <div className="flex justify-end pt-4">
                <button 
                  onClick={() => setServicioSeleccionado('networking')}
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#F0BE0A] hover:text-slate-950 hover:border-[#F0BE0A] transition-all duration-200"
                  aria-label="Ver detalles de Networking Jurídico"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                </button>
              </div>
            </div>

          </div>
        </div>

        {servicioSeleccionado && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
            <div 
              className="bg-white text-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh] border border-slate-100 animate-[fadeInUp_0.3s_ease-out]"
              role="dialog" 
              aria-modal="true"
            >
              <div className="bg-[#090d16] text-white p-6 relative">
                <button 
                  onClick={() => setServicioSeleccionado(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1"
                  aria-label="Cerrar modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F0BE0A] block mb-1">
                  {detallesServicios[servicioSeleccionado].subtitulo}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold pr-8 leading-tight">
                  {detallesServicios[servicioSeleccionado].titulo}
                </h3>
              </div>

              <div className="p-6 overflow-y-auto space-y-6 text-sm leading-relaxed text-slate-600">
                <p>{detallesServicios[servicioSeleccionado].descripcion}</p>
                
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-slate-900 text-base">Áreas de Especialización:</h4>
                  <ul className="space-y-2.5 list-none p-0 m-0">
                    {detallesServicios[servicioSeleccionado].puntos.map((punto, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#F0BE0A] text-lg font-bold leading-none mt-0.5">•</span>
                        <span>{punto}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-100 p-4 bg-slate-50 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <button 
                  onClick={() => setServicioSeleccionado(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors order-2 sm:order-1 text-center"
                >
                  Volver
                </button>
                <a
                  href="#contact"
                  onClick={() => setServicioSeleccionado(null)}
                  className="inline-flex items-center justify-center rounded-md bg-[#F0BE0A] px-5 py-2.5 text-xs font-bold text-slate-950 shadow-md hover:bg-[#d4a708] transition-all duration-200 order-1 sm:order-2 text-center"
                >
                  Agendar un Diagnóstico Hoy
                </a>
              </div>
            </div>
          </div>
        )}
      </section>

    <section className="relative w-full overflow-hidden bg-white border-b border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        
        <div className="flex flex-col justify-center items-center text-center py-16 px-6 sm:px-12 lg:px-20 bg-white transition-all duration-1000 ease-out motion-safe:animate-[fadeInLeft_1s_ease-out]">
          <div className="max-w-md space-y-10">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#d4a708] leading-tight tracking-tight">
              Servicios avalados por docentes universitarios, aplicando jurisprudencia actualizada
            </h2>
            
            <div className="flex flex-col items-center group">
              <a
                href="#contact"
                className="text-base font-serif font-bold text-[#d4a708] hover:text-[#b08903] transition-colors duration-200 tracking-wide pb-2"
              >
                Agendar Diagnóstico Inicial
              </a>
              <div className="h-1 w-28 bg-[#d4a708] rounded transition-all duration-300 group-hover:w-36" aria-hidden="true"></div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[350px] lg:min-h-full transition-all duration-1000 ease-out motion-safe:animate-[fadeInRight_1s_ease-out]">
          <img 
            src={aboutImg6} 
            alt="Abogado especialista en administración pública" 
            className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-slate-950/25 z-10" />
          
          <div className="absolute inset-0 z-20 flex flex-col justify-start p-8 sm:p-12 lg:p-16 max-w-xl">
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-tight drop-shadow-md">
              +20 años de experiencia acumulada en la Administración Pública y ejercicio privado
            </p>
          </div>
        </div>

      </div>
    </section>



      <section className="relative w-full overflow-hidden bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[450px]">
          
          <div className="lg:col-span-6 bg-[#FCFAE8] text-white flex items-center py-16 px-6 sm:px-12 lg:px-20 relative z-10 clip-diagonal transition-all duration-1000 ease-out motion-safe:animate-[fadeInLeft_1s_ease-out]">
            <div className="max-w-md space-y-8">
              <div>
                <span className="text-xs font-bold text-[#090d16] tracking-wider uppercase block mb-2">
                  PROCESO DE AGENDAMIENTO
                </span>
                <h2 className="font-serif text-2xl font-bold tracking-tight text-[#F0BE0A] sm:text-3xl">
                  Eficacia Comprobada en el Ecosistema Legal Venezolano
                </h2>
                <p className="mt-3 text-sm text-[#090d16] leading-relaxed">
                  Evaluamos la viabilidad de tu caso de forma inmediata y estructurada para mitigar riesgos antes de que se conviertan en juicios costosos.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-[#090d16]/10 border border-[#090d16]/30 flex items-center justify-center text-[#F0BE0A]" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
                  </div>
                  <div>
                    <div className="font-serif text-lg font-bold text-[#090d16]">1. Diagnóstico Inicial</div>
                    <div className="text-xs text-[#090d16]">Contáctanos vía web para exponer tu situación.</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-[#090d16]/10 border border-[#090d16]/30 flex items-center justify-center text-[#F0BE0A]" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" /></svg>
                  </div>
                  <div>
                    <div className="font-serif text-lg font-bold text-[#090d16]">2. Entrevista Virtual</div>
                    <div className="text-xs text-[#090d16]">Videoconferencia inmediata vía Zoom, Meet o WhatsApp para analizar expedientes y evaluar el caso.</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-[#090d16]/10 border border-[#090d16]/30 flex items-center justify-center text-[#F0BE0A]" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <div className="font-serif text-lg font-bold text-[#090d16]">3. Mapa de Riesgo Inicial</div>
                    <div className="text-xs text-[#090d16]">Recibe un diagnóstico preliminar, una propuesta y información.</div>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#F0BE0A] px-5 py-2 text-xs font-semibold text-slate-950 shadow-md hover:bg-[#d4a708] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F0BE0A]"
                >
                  Agendar Diagnóstico Inicial
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full lg:-ml-32 lg:w-[calc(100%+8rem)] z-0 transition-all duration-1000 ease-out motion-safe:animate-[fadeInRight_1s_ease-out]">
            <img 
              src={aboutImg2} 
              alt="Consultores JAE brindando asesoría estratégica corporativa" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

        </div>
      </section>


      <section id="contact" className="w-full bg-[#090d16] text-white py-24 md:py-32 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-8 transition-all duration-1000 ease-out motion-safe:animate-[fadeInLeft_1s_ease-out]">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
                  Contáctanos 
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                  Comuníquese con nosotros para evaluar la viabilidad institucional de su caso a través de nuestra red de atención omnicanal.
                </p>
              </div>

              <div className="space-y-6">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F0BE0A]/10 border border-[#F0BE0A]/20 flex items-center justify-center text-[#F0BE0A] shrink-0" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#F0BE0A]">Sede Principal</h3>
                    <p className="text-xs text-slate-300">Urb. Santa Mónica. Ed. Aries, piso 2. Caracas, Venezuela.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F0BE0A]/10 border border-[#F0BE0A]/20 flex items-center justify-center text-[#F0BE0A] shrink-0" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#F0BE0A]">Atención Omnicanal</h3>
                    <p className="text-xs text-slate-300">Consultas virtuales vía Zoom, Google Meet, WhatsApp y Telegram.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F0BE0A]/10 border border-[#F0BE0A]/20 flex items-center justify-center text-[#F0BE0A] shrink-0" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#F0BE0A]">R.I.F. Corporativo</h3>
                    <p className="text-xs text-slate-300">J408101297</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="lg:col-span-7 transition-all duration-1000 ease-out delay-200 motion-safe:animate-[fadeInRight_1s_ease-out]">
              <div className="bg-[#111827] rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#F0BE0A]/5 rounded-full blur-3xl pointer-events-none" />
                
                <h3 className="font-serif text-xl font-bold text-white mb-8">
                  Tu detalle
                </h3>

                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const name = document.getElementById('name').value;
                    const subject = document.getElementById('subject').value;
                    const message = document.getElementById('message').value;
                    const body = `Nombre: ${name}\n\nMensaje:\n${message}`;
                    window.location.href = `mailto:informacion@consultoresjae.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  }} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-400">Nombre *</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="Tu nombre" 
                        required
                        className="w-full bg-transparent border-b border-slate-700 pb-2 text-sm text-white focus:outline-none focus:border-[#F0BE0A] transition-colors placeholder-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-400">Dirección de Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="Your Email" 
                        required
                        className="w-full bg-transparent border-b border-slate-700 pb-2 text-sm text-white focus:outline-none focus:border-[#F0BE0A] transition-colors placeholder-slate-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-semibold text-slate-400">Asunto *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      placeholder="Asunto del mensaje" 
                      required
                      className="w-full bg-transparent border-b border-slate-700 pb-2 text-sm text-white focus:outline-none focus:border-[#F0BE0A] transition-colors placeholder-slate-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-400">Comentarios / Preguntas *</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      placeholder="Tu mensaje" 
                      required
                      className="w-full bg-transparent border-b border-slate-700 pb-2 text-sm text-white focus:outline-none focus:border-[#F0BE0A] transition-colors placeholder-slate-600 resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-4">
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

          </div>
        </div>
      </section>

      <footer className="w-full bg-[#070a10] text-slate-400 py-16 border-t border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-900">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="font-serif text-lg font-bold text-white tracking-tight block">
                CONSULTORES <span className="text-[#F0BE0A]">JAE</span> C.A.
              </span>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                Especialistas de vanguardia en la mitigación de riesgos institucionales, control fiscal y blindaje mercantil corporativo en Venezuela.
              </p>
              <div className="text-[11px] font-mono text-slate-500">
                R.I.F. J408101297
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-white">
                Canales Electrónicos Oficiales
              </h4>
              <ul className="space-y-3 m-0 p-0 list-none text-xs">
                <li>
                  <a href="mailto:consultoria@consultoresjae.com" className="text-slate-300 hover:text-[#F0BE0A] font-medium transition-colors block">
                    consultoria@consultoresjae.com
                  </a>
                  <span className="text-[11px] text-slate-500 block">Asesoría corporativa, auditorías, telecomunicaciones y condominios.</span>
                </li>
                <li>
                  <a href="mailto:litigios@consultoresjae.com" className="text-slate-300 hover:text-[#F0BE0A] font-medium transition-colors block">
                    litigios@consultoresjae.com
                  </a>
                  <span className="text-[11px] text-slate-500 block">Defensa contenciosa, vías de hecho, demandas patrimoniales y régimen funcionarial.</span>
                </li>
                <li>
                  <a href="mailto:networking@consultoresjae.com" className="text-slate-300 hover:text-[#F0BE0A] font-medium transition-colors block">
                    networking@consultoresjae.com
                  </a>
                  <span className="text-[11px] text-slate-500 block">Apoyo colaborativo institucional para colegas en redacción de recursos.</span>
                </li>
                <li>
                  <a href="mailto:informacion@consultoresjae.com" className="text-slate-300 hover:text-[#F0BE0A] font-medium transition-colors block">
                    informacion@consultoresjae.com
                  </a>
                  <span className="text-[11px] text-slate-500 block">Consultas e informaciones generales de la firma.</span>
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
                    className="text-slate-400 hover:text-white transition-colors flex flex-col"
                  >
                    <span className="font-medium text-slate-300">LinkedIn (Canal Principal)</span>
                    <span className="text-[11px] text-slate-500">Artículos técnicos, Boletines/Newsletters y casos B2B.</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/consultoresjae" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-white transition-colors flex flex-col mt-2"
                  >
                    <span className="font-medium text-slate-300">Instagram</span>
                    <span className="text-[11px] text-slate-500">Consejos breves y "Minutos Regulatorios" (@consultoresjae).</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/juridicoAE" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-white transition-colors flex justify-between items-center pt-1 border-t border-slate-900"
                  >
                    <span>X (Twitter)</span>
                    <span className="text-[11px] text-slate-500">@juridicoAE</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-[#F0BE0A] transition-colors flex justify-between items-center pt-1">
                    <span className="font-semibold">Blog de Actualidad Legal</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F0BE0A]" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-xs text-slate-600">
            <div>
              &copy; 2026 Consultores JAE C.A. Todos los derechos reservados.
            </div>
            <div className="flex gap-4">
              <span className="text-[11px]">Soporte institucional: <a href="mailto:consultoresjae@gmail.com" className="hover:text-slate-400 transition-colors">consultoresjae@gmail.com</a></span>
            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}