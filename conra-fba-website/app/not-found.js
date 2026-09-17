export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-6 text-center">
      <div className="max-w-xl">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-500 font-semibold">404</p>
        <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">Página no encontrada</h1>
        <p className="mt-4 text-zinc-300">
          La página que buscas no existe o fue movida.
        </p>
        <a
          href="/"
          className="mt-8 inline-block rounded-md bg-brand-500 px-6 py-3 font-bold text-black transition hover:bg-brand-400"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
