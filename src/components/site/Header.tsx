import { useState } from "react";
import logo from "../../assets/logo.png";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-gray-800">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">

        {/* LOGO */}
        <a href="/">
          <img src={logo} alt="Cadabatu" className="h-20" />
        </a>

        {/* NAV DESKTOP (NO TOCAR) */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="/" className="hover:text-yellow-400">Inicio</a>
          <a href="/sobre-nosotros" className="hover:text-yellow-400">Sobre Nosotros</a>
          <a href="/servicios" className="hover:text-yellow-400">Servicios</a>
          <a href="/galeria" className="hover:text-yellow-400">Galería</a>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* CTA */}
          <a
            href="/contacto"
            className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition"
          >
            Contacto
          </a>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 flex flex-col gap-4 text-lg">
          <a href="/" onClick={() => setOpen(false)}>Inicio</a>
          <a href="/sobre-nosotros" onClick={() => setOpen(false)}>Sobre Nosotros</a>
          <a href="/servicios" onClick={() => setOpen(false)}>Servicios</a>
          <a href="/galeria" onClick={() => setOpen(false)}>Galería</a>

          <a
            href="/contacto"
            onClick={() => setOpen(false)}
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-center mt-4"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}