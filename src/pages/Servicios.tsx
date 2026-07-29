import crowd from "../assets/crowd.jpg";

const servicios = [
  {
    title: "Bodas",
    desc: "Animamos tu boda con un espectáculo único que hará vibrar a todos los invitados.",
  },
  {
    title: "Festivales",
    desc: "Llevamos energía y ritmo a escenarios y eventos multitudinarios.",
  },
  {
    title: "Empresas",
    desc: "Eventos corporativos con impacto, dinamismo y participación del público.",
  },
  {
    title: "Pasacalles",
    desc: "Recorridos llenos de ritmo, color y espectáculo en movimiento.",
  },
  {
    title: "Fiestas patronales",
    desc: "La mejor animación para llenar las calles de energía.",
  },
  {
    title: "Eventos privados",
    desc: "Cumpleaños, inauguraciones o cualquier celebración especial.",
  },
];

export default function Servicios() {
  return (
    <div className="bg-background text-foreground pt-28">

      {/* HERO */}
      <section className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Nuestros <span className="text-yellow-400">servicios</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Adaptamos nuestro show a cualquier tipo de evento para hacerlo inolvidable.
        </p>
      </section>

      {/* CARDS */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">

          {servicios.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-3xl border bg-[#111118] border-[#262626] shadow-lg p-8 hover:-translate-y-2 transition"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/20 blur-2xl rounded-full" />

              <h3 className="text-yellow-400 text-2xl font-bold">
                {s.title}
              </h3>

              <p className="mt-2 text-gray-400">
                {s.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* BLOQUE VISUAL */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="rounded-3xl overflow-hidden">
            <img src={crowd} className="w-full h-full object-cover" />
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              Un show que <span className="text-red-500">marca la diferencia</span>
            </h2>

            <p className="mt-4 text-gray-400">
              No solo tocamos: creamos una experiencia. Interacción con el público,
              coreografías y energía constante.
            </p>

            <ul className="mt-6 space-y-2">
              <li>✔ Adaptado a cada evento</li>
              <li>✔ Equipo profesional</li>
              <li>✔ Sonido y espectáculo asegurado</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROCESO */}
      <section className="container mx-auto px-6 py-20">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            ¿Cómo <span className="text-yellow-400">trabajamos</span>?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {[
            "Nos cuentas tu evento",
            "Diseñamos el show",
            "Hacemos vibrar al público",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center"
            >
              <span className="text-yellow-400 text-3xl font-bold">
                {i + 1}
              </span>
              <p className="mt-2 text-gray-300">{step}</p>
            </div>
          ))}

        </div>

      </section>

      {/* CTA FINAL */}
      <section className="container mx-auto px-6 pb-24">
        <div className="rounded-3xl bg-yellow-400 text-black p-10 text-center">

          <h2 className="text-4xl font-bold">
            ¿Listo para tu evento?
          </h2>

          <p className="mt-4">
            Te enviamos presupuesto sin compromiso.
          </p>

          <a href="/contacto" className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition">
            Solicitar presupuesto
          </a>

        </div>
      </section>

    </div>
  );
}