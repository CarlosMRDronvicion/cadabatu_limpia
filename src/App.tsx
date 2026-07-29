import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Galeria from "./pages/Galeria";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import { Toaster } from "sonner";
import { Header } from "./components/site/Header";
import { Footer } from "./components/site/Footer";
import { WhatsAppButton } from "./components/site/WhatsAppFab";

export default function App() {
  return (
    <BrowserRouter>
          <Toaster position="top-right" richColors />

      <Header />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<Sobre />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}