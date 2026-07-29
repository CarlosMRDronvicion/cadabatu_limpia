import cm from "../../assets/carlos-m.png";
import lf from "../../assets/lore-f.png";
import ag from "../../assets/andres-g.png";
import cf from "../../assets/carla-f.png";
import ff from "../../assets/fran-f.png";
import lm from "../../assets/laura-m.png";
import pm from "../../assets/proximamente.png";

type Musician = {
  name: string;
  role: string;
  instrument: string;
  bio: string;
  img: string;
};

const musicians: Musician[] = [
  {
    name: "Carlos Méndez",
    role: "Director musical",
    instrument: "Repique",
    bio: "Fundador de Cadabatú. Marca el pulso del grupo con su repique y dirige cada actuación con el silbato. Cuenta con estudios musicales profesionales de percusión y trompeta además de otros instrumentos como el Bajo eléctrico, ukelele, piano,…Cuenta con más de 20 años de experiencia en el mundo del artista ya que desde sus juventud, a los 6 años aproximadamente empezó en bandas populares y ya no paró formando parte de charangas, orquestas de pachanga, grupos de rock, batucadas…el es desarrollador web, técnico de sonido y un gran amante de la música.",
    img: cm,
  },
  {
    name: "Lore Ferreira",
    role: "Percusionista y coreógrafa",
    instrument: "Surdo 3ª",
    bio: "Lore Ferreira, lleva la música en las venas desde los 9 años, donde comenzó a tocar el bombardino. Es técnica de laboratorio y actualmente estudia ingeniería quimica, pero también tiene otra gran pasión: la música. Brasileña de nacimiento, su alegría y ritmo contagian a todo CADABATÚ, donde aporta su toque especial como percusionista en la dobra y se encarga de las coreografías del grupo. Su energía y estilo único hacen que cada presentación sea inolvidable. ¡Un orgullo tenerla con nosotros!",
    img: lf,
  },
  {
    name: "Andrés Graña",
    role: "Percusionista",
    instrument: "Surdos",
    bio: "Andrés es ingeniero agrónomo y máster en ingeniería ambiental, desde muy pequeño ha realizado sus pinitos entre bambalinas haciendo algún papel secundario en alguna obra de teatro y ha participado en algún que otro programa de TVG, tal es su espontaneidad y desparpajo que siempre es necesario realizar cortes en sus participaciones, desde el 2023 y tras haber superado sus conflictos con la flauta dulce ha formado parte de diversas agrupaciones lúdico-músico-festivas como percusionista en charangas, bandas y batucadas.",
    img: ag,
  },
  {
    name: "Carla Fernández",
    role: "Percusionista",
    instrument: "Caja",
    bio: "Marca entradas y cambios. La chispa del ritmo.",
    img: cf,
  },
  {
    name: "Fran Fernández",
    role: "Percusionista",
    instrument: "Surdo 1ª",
    bio: "Base rítmica constante. Energía en cada golpe.",
    img: ff,
  },
  {
    name: "Laura Montenegro",
    role: "Staff",
    instrument: "Staff",
    bio: "Laura, originaria de Colombia, técnica de laboratorio y actual estudiante de enfermería. Aunque su experiencia no está directamente vinculada al mundo musical, Laura ha demostrado una gran pasión por la música y un fuerte interés en adentrarse en este fascinante universo como Staff de esta batucada. Le encanta escuchar música, lo que la ha llevado a descubrir en la batucada un espacio perfecto para disfrutarla desde una perspectiva nueva y emocionante. Su energía y entusiasmo son un gran aporte para el equipo, haciendo de cada ensayo y presentación una experiencia inolvidable.",
    img: lm,
  },
   {
    name: "J.",
    role: "Percusionista",
    instrument: "Surdo 3ª",
    bio: "Base rítmica constante. Energía en cada golpe.",
    img: pm,
  },
  {
    name: "S.",
    role: "Percusionista",
    instrument: "Surdo 3ª",
    bio: "Marca entradas y cambios. La chispa del ritmo.",
    img: pm,
  },
   {
    name: "J.",
    role: "Percusionista",
    instrument: "Surdo 1ª",
    bio: "Base rítmica constante. Energía en cada golpe.",
    img: pm,
  },
  {
    name: "M.",
    role: "Percusionista",
    instrument: "Agogó",
    bio: "Marca entradas y cambios. La chispa del ritmo.",
    img: pm,
  },
  {
    name: "V.",
    role: "Percusionista",
    instrument: "Agogó",
    bio: "Marca entradas y cambios. La chispa del ritmo.",
    img: pm,
  },
  {
    name: "L.",
    role: "Percusionista",
    instrument: "Caja",
    bio: "Marca entradas y cambios. La chispa del ritmo.",
    img: pm,
  },
];

export function MusiciansGrid() {
  return (
    <section className="container mx-auto px-6 py-24">
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          El equipo de <span className="text-yellow-400">Cadabatú</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Ritmo, energía y pasión sobre el escenario
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {musicians.map((m) => (
          <div
            key={m.name}
            className="group bg-[#111118] border border-[#262626] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
          >
            {/* Imagen */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Instrumento */}
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                {m.instrument}
              </span>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold">{m.name}</h3>
              <p className="text-yellow-400 text-sm uppercase mt-1">
                {m.role}
              </p>
              <p className="text-gray-400 text-sm mt-3">
                {m.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}