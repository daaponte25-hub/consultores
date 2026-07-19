import React from 'react';
import aboutImg from '../assets/about-legal.jpg';

export default function Home() {
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
      
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col max-w-2xl">
            <span className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-3">
              ABOGADOS ESPECIALISTAS EN DERECHO PÚBLICO Y AUDITORÍA LEGAL
            </span>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6 leading-tight">
              Consultoría Jurídica Estratégica: <br /> y <span className="text-[#F0BE0A]">Seguridad Regulatoria</span>
            </h1>
            
            <p className="text-base text-slate-300 mb-8 leading-relaxed">
              En Consultores JAE transformamos la complejidad regulatoria del Estado venezolano en seguridad jurídica para tu empresa o carrera funcionarial. Rompemos el modelo legal tradicional actuando como estrategas y auditores legales preventivos, blindando tu patrimonio y derechos frente a multas, procedimientos disciplinarios o vías de hecho.
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
              
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                Transformamos la complejidad regulatoria en seguridad jurídica
              </h2>
              
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                Fundada por un equipo de especialistas de larga trayectoria en Derecho Público, CONSULTORES JAE C.A. nace para dar cobertura a las complejas interacciones judiciales y administrativas que las empresas y funcionarios mantienen con los Órganos y Entes del Estado Venezolano. 
                </p>
                <p>
                Somos un equipo multidisciplinario de profesionales avalado por más de 20 años de experiencia acumulada en la Administración Pública y el ejercicio privado. Nuestra misión es garantizar un riguroso control de la legalidad institucional y corporativa, asegurando la tutela judicial efectiva y protegiendo los derechos y patrimonios de nuestros clientes frente a cualquier asimetría de poder.
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

    </main>
  );
}