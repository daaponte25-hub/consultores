function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-16 text-slate-800">
      <section className="mx-auto flex max-w-4xl flex-col items-start gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
          Tailwind funcionando
        </span>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Bienvenido a la app frontend
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Este bloque usa clases de Tailwind para verificar que el sistema de estilos está bien integrado.
        </p>
        <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
          Probar estilos
        </button>
      </section>
    </main>
  )
}

export default App
