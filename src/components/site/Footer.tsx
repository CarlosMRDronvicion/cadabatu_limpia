import logo from "../../assets/logo.png";
import { MapPin, Mail, Phone } from "lucide-react";


export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black/80 text-white">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">

        {/* LOGO + TEXTO */}
        <div>
          <img src={logo} alt="Cadabatu logo" className="h-20 mb-4" />
          <p className="text-sm text-gray-400">
            Batucada en directo desde Lugo, Galicia. Ritmo, energía y espectáculo para tu evento.
          </p>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <h4 className="text-yellow-400 text-lg mb-3">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Inicio</a></li>
            <li><a href="/sobre-nosotros" className="hover:text-yellow-400">Sobre nosotros</a></li>
            <li><a href="/servicios" className="hover:text-yellow-400">Servicios</a></li>
            <li><a href="/galeria" className="hover:text-yellow-400">Galería</a></li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="text-yellow-400 text-lg mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2"><MapPin size={16} /> Lugo, Galicia</li>
            <li><a href="tel:+34687061681" className="hover:text-yellow-400 flex items-center gap-2"><Phone size={16} /> +34 687 06 16 81</a></li>
            <li><a href="mailto:info@batucadacadabatu.com" className="hover:text-yellow-400 flex items-center gap-2"><Mail size={16} /> info@batucadacadabatu.es</a></li>
          </ul>
        </div>

        {/* REDES */}
        <div>
          <h4 className="text-yellow-400 text-lg mb-3">Síguenos</h4>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/batucadacadabatu/"
              target="_blank"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm4.8-3.3a1.3 1.3 0 1 0 1.3 1.3 1.3 1.3 0 0 0-1.3-1.3z"/>
              </svg>
            </a>
            <a
                href="https://www.tiktok.com/@batucada_cadabatu"
                target="_blank"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 3c.3 1.6 1.6 3 3 3.4v3c-1.4-.1-2.7-.6-3.8-1.5v6.4c0 3.3-2.7 6-6 6S3 17.6 3 14.3s2.7-6 6-6c.4 0 .8 0 1.2.1v3.1c-.4-.1-.8-.2-1.2-.2-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V3h3z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/p/Batucada-Cadabat%C3%BA-61558373278535/"
                target="_blank"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.5v-2.9h3V9.8c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.4l-.5 2.9h-2.9v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Batucada Cadabatu
      </div>
    </footer>
  );
}