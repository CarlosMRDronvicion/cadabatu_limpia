import g1 from "../assets/gallery-1.jpg";
import g2 from "../assets/gallery-2.jpg";
import g3 from "../assets/gallery-3.jpg";
import g4 from "../assets/gallery-4.jpg";
import g5 from "../assets/gallery-5.jpg";
import g6 from "../assets/gallery-6.jpg";
import g7 from "../assets/gallery-7.jpg";
import g8 from "../assets/gallery-9.jpg";
import g9 from "../assets/gallery-10.jpg";

const images = [
  { src: g1, alt: "Batucada Cadabatú en fiesta de la Tortilla O Santo", className: "md:col-span-1 md:row-span-2" },
  { src: g2, alt: "Batucada Cadabatú en fiesta de la Tortilla O Santo", className: "md:col-span-1 md:row-span-2" },
  { src: g3, alt: "Batucada Cadabatú en fiesta de la Tortilla O Santo", className: "md:col-span-1 md:row-span-2" },
  { src: g4, alt: "Batucada Cadabatú en fiesta de la trucha en Puebla de San Julián", className: "md:col-span-2 md:row-span-1" },
  { src: g5, alt: "Batucada Cadabatú en Olimpiadas Rurais Friol", className: "md:col-span-1 md:row-span-1" },
  { src: g6, alt: "Batucada Cadabatú en Olimpiadas Rurais Friol", className: "md:col-span-1 md:row-span-2" },
  { src: g7, alt: "Batucada Cadabatú en Olimpiadas Rurais Friol", className: "md:col-span-2 md:row-span-2" },
  { src: g8, alt: "Batucada Cadabatú en fiesta de la Tortilla O Santo", className: "md:col-span-2 md:row-span-2" },
  { src: g9, alt: "Batucada Cadabatú en Olimpiadas Rurais Friol", className: "md:col-span-1 md:row-span-2" },
];

export default function Galeria() {
  return (
    <div className="bg-background text-foreground pt-28">

      {/* HEADER */}
      <section className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Nuestra <span className="text-yellow-400">galería</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Ritmo, energía y espectáculo en imágenes reales.
        </p>
      </section>

      {/* GRID */}
      <section className="container mx-auto px-6 py-20">

        <div className="
            grid gap-4
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            auto-rows-[220px]
            md:auto-rows-[250px]
          ">

            {images.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl group ${img.className}`}
              >
                <img src={img.src}
                alt={img.alt}
                loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 md:group-hover:opacity-100 transition" />
              </div>
            ))}

          </div>

      </section>

    </div>
  );
}