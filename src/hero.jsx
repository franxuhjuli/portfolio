export function Hero() {
  return (
    <section
      id="hero"
      className="py-20 bg-gradient-to-r from-purple-950/40 to-indigo-950/40 shadow-md"
    >
      <div className="max-w-[900px] mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">
            Hola, soy Francisco J. Álvarez
          </h2>
          <p className="text-xl mb-6  text-orange-400">
            Desarrollador web apasionado por crear experiencias digitales
            increíbles.
          </p>

          <a
            className="2rem 1rem bg-white text-purple-800 px-4 py-2 rounded hover:bg-orange-400 hover:text-purple-950 transition duration-100 hover:scale-105 active:scale-100"
            href="/CV-francisco_j_alvarez.pdf"
            download="CV Francisco J. Alvarez"
          >
            Descargar CV
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="/retrato.jpeg"
            alt="Tu foto"
            width={330}
            height={330}
            className="rounded-full mx-auto drop-shadow-[0px_0px_24px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>
    </section>
  );
}
