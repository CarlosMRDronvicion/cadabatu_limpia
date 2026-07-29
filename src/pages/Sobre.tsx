import hero from "../assets/hero-batucada.jpg";
import crowd from "../assets/crowd.jpg";
import { MusiciansGrid } from "../components/site/MusiciansGrid";

export default function Sobre() {
  return (
    <div className="bg-[#0B0B0F] text-white">

      {/* HERO */}
      <section className="relative py-32 text-center">
        <img src={hero} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-bold">
            Sobre <span className="text-yellow-400">Cadabatú</span>
          </h1>
          <p className="mt-4 text-gray-300">
            Ritmo, energía y pasión por la percusión
          </p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img src={crowd} className="rounded-3xl" />

          <div>
            <h2 className="text-4xl font-bold">
              Nuestra historia
            </h2>
            <p className="mt-4 text-gray-400">
              Cadabatú nace en Lugo con la idea de llevar la batucada a otro nivel.
              Mezclamos percusión brasileña con la energía gallega para crear
              un espectáculo único.
            </p>
          </div>

        </div>
      </section>

      {/* VALORES */}
          <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#111118] p-6 rounded-2xl border border-gray-800">
            <h3 className="text-yellow-400 font-bold text-xl">Energía</h3>
            <p className="text-gray-400 mt-2">
              Cada actuación es única, llena de ritmo y fuerza.
            </p>
          </div>

          <div className="bg-[#111118] p-6 rounded-2xl border border-gray-800">
            <h3 className="text-yellow-400 font-bold text-xl">Pasión</h3>
            <p className="text-gray-400 mt-2">
              Vivimos la percusión como forma de expresión.
            </p>
          </div>

          <div className="bg-[#111118] p-6 rounded-2xl border border-gray-800">
            <h3 className="text-yellow-400 font-bold text-xl">Experiencia</h3>
            <p className="text-gray-400 mt-2">
              Más de 100 eventos nos avalan.
            </p>
          </div>

        </div>
      </section>

<MusiciansGrid />

        {/* CTA FINAL */}
          <section className="container mx-auto px-6 pb-24">
            <div className="bg-red-500 p-10 rounded-3xl text-center">
              <h2 className="text-4xl font-bold text-white">
                ¿Quieres contar con nosotros?
              </h2>

              <a href="/contacto" className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition">
                Contactar
              </a>
            </div>
          </section>

    </div>
  );
}