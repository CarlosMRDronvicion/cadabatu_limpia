
import { Marquee } from "../components/site/Marquee";
import { SponsorsSlider } from "../components/site/SponsorsSlider";

import hero from "../assets/hero-batucada.jpg";
import crowd from "../assets/crowd.jpg";


export default function Home() {
  return (
    <div className="bg-background text-foreground">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <img
          src={hero}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />

        <div className="relative container mx-auto px-6 py-32">
          <span className="text-sun font-bold uppercase tracking-widest">
            Batucada en vivo · Galicia
          </span>

          <h1 className="text-6xl md:text-8xl font-bold mt-4 leading-tight">
            Siente el <span className="text-carnival">ritmo</span> de{" "}
            <span className="text-gradient">Cadabatú</span>
          </h1>

          <p className="mt-6 max-w-2xl text-gray-300 text-lg">
            La batucada que hará vibrar tu evento con energía, percusión brasileña
            y espectáculo en directo.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/contacto"
              className="bg-sun text-sun px-6 py-3 rounded-full font-bold hover:text-yellow-400 transition"
            >
              Contratar ahora
            </a>

            <a
              href="/galeria"
              className="border border-sun text-sun px-6 py-3 rounded-full hover:bg-sun hover:text-yellow-400 transition"
            >
              Ver galería
            </a>
          </div>
        </div>
      </section>

      {/* Slider eventos */}
<Marquee
  items={[
    "Bodas",
    "Festivales",
    "Pasacalles",
    "Empresas",
    "Fiestas patronales",
    "Inauguraciones",
  ]}
/>

{/* Cards */}
<section className="container mx-auto px-6 py-24">
  <div className="grid gap-6 md:grid-cols-3">

    {/* CARD 1 */}
    <div className="group relative rounded-3xl border bg-[#111118] border-[#262626] shadow-lg p-8 hover:-translate-y-2 transition">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/20 blur-2xl rounded-full" />
      <h3 className="text-yellow-400 text-2xl font-bold">
        Espectáculo en directo
      </h3>
      <p className="mt-2 text-gray-400">
        Tambores, ritmo y coreografía que conquistan al público.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="group relative rounded-3xl border bg-[#111118] border-[#262626] shadow-lg p-8 hover:-translate-y-2 transition">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/20 blur-2xl rounded-full" />
      <h3 className="text-yellow-400 text-2xl font-bold">
        Ritmo y energía
      </h3>
      <p className="mt-2 text-gray-400">
        Samba, samba-reggae y percusión brasileña en estado puro.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="group relative rounded-3xl border bg-[#111118] border-[#262626] shadow-lg p-8 hover:-translate-y-2 transition">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 blur-2xl rounded-full" />
      <h3 className="text-yellow-400 text-2xl font-bold">
        Eventos a medida
      </h3>
      <p className="mt-2 text-gray-400">
        Adaptamos el show a bodas, festivales y empresas.
      </p>
    </div>

  </div>
</section>


{/* evento inolvidable */}
<section className="container mx-auto px-6 py-20">
  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* IMAGEN */}
    <div className="rounded-3xl overflow-hidden">
      <img src={crowd} className="w-full h-full object-cover" />
    </div>

    {/* TEXTO */}
    <div>
      <span className="text-yellow-400 uppercase text-sm">
        Cadabatú
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-2">
        TU EVENTO, <span className="text-gradient">INOLVIDABLE</span>
      </h2>

      <p className="mt-4 text-gray-400">
        Llevamos años haciendo vibrar plazas, bodas y festivales por toda Galicia.
      </p>

      <ul className="mt-6 space-y-2">
        <li>✔ Más de 100 actuaciones</li>
        <li>✔ Adaptable a cualquier evento</li>
        <li>✔ Disponibles en toda Galicia</li>
      </ul>

      <a href="/contacto" className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 hover:scale-105 transition rounded-full font-bold">
        Solicitar presupuesto
      </a>
    </div>

  </div>
</section>

{/* reviews */}
<section className="container mx-auto px-6 py-24">

  <div className="text-center max-w-2xl mx-auto">
    <h2 className="text-4xl font-bold">
      Lo que <span className="text-yellow-400">dicen</span> de nosotros
    </h2>
  </div>

  <div className="mt-12 grid gap-6 md:grid-cols-3">

    {[
      "Espectáculo brutal, repetiríamos sin duda.",
      "Animaron todo el evento de principio a fin.",
      "La mejor batucada que hemos visto."
    ].map((text, i) => (
      <div key={i} className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <p className="text-gray-300">"{text}"</p>
      </div>
    ))}

  </div>

</section>

{/* sponsers */}
<div className="text-center max-w-4xl mx-auto mt-20">
  <h2 className="text-4xl font-bold">
    Patrocinadores y <span className="text-yellow-400">Colaboradores</span>
  </h2>
</div>

<SponsorsSlider />


{/* CTA Final */}
<section className="container mx-auto px-6 pb-24">
  <div className="relative rounded-3xl bg-red-500 p-10 text-center overflow-hidden">

    <div className="absolute inset-0 bg-spotlight opacity-50" />

    <div className="relative">
      <h2 className="text-4xl md:text-6xl font-bold text-white">
        ¿Preparado para vibrar?
      </h2>

      <p className="mt-4 text-white/80">
        Te enviamos presupuesto en menos de 24h.
      </p>

      <a href="/contacto" className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition">
        Reservar ahora
      </a>
    </div>

  </div>
</section>



    </div>
  );
}