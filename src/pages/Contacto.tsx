import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Contacto() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

const validate = (data: FormData) => {
  const newErrors: any = {};

  const name = data.get("user_name")?.toString().trim();
  const email = data.get("user_email")?.toString().trim();
  const event = data.get("event_type")?.toString().trim();
  const message = data.get("message")?.toString().trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) newErrors.user_name = "El nombre es obligatorio";
  if (!email) newErrors.user_email = "El email es obligatorio";
  else if (!emailRegex.test(email)) newErrors.user_email = "Email inválido";

  if (!event) newErrors.event_type = "El evento es obligatorio";
  if (!message) newErrors.message = "El mensaje es obligatorio";

  return newErrors;
};

 const sendEmail = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.current || loading) return;

  const formData = new FormData(form.current);
  const validationErrors = validate(formData);

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});
  setLoading(true);

  const toastId = toast.loading("Enviando...");

  try {
    await emailjs.sendForm(
      "service_xn45i8s",
      "template_u1wo20m",
      form.current,
      "NkBouKvRrPlfL2dqI"
    );

    form.current.reset();

    toast.success("Mensaje enviado 🎉", {
      id: toastId,
    });

  } catch (error) {
    console.error(error);

    toast.error("Error al enviar ❌", {
      id: toastId,
    });

  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-black text-white min-h-screen pt-32">

      {/* HEADER */}
      <section className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Contacta con <span className="text-yellow-400">Cadabatú</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Cuéntanos tu evento y te responderemos en menos de 24h
        </p>
      </section>

      {/* GRID */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        {/* FORMULARIO */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-b from-[#111118] to-black border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-yellow-400/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-red-500/10 blur-3xl rounded-full" />
          <h2 className="text-2xl font-bold mb-6">Solicitar presupuesto</h2>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">

            <input
              type="text"
              name="user_name"
              placeholder="Nombre"
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition"
            />
            {errors.user_name && (
              <p className="text-red-400 text-xs mt-1">{errors.user_name}</p>
            )}

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition"
            />
            {errors.user_email && (
              <p className="text-red-400 text-xs mt-1">{errors.user_email}</p>
            )}


            <input
              type="text"
              name="event_type"
              placeholder="Tipo de evento"
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition"
            />
            {errors.event_type && (
              <p className="text-red-400 text-xs mt-1">{errors.event_type}</p>
            )}
            <textarea
              name="message"
              placeholder="Cuéntanos tu evento..."
              rows={5}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition"
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
            )}

            <button
                disabled={loading}
                className={`bg-yellow-400 text-black py-3 rounded-full font-bold transition ${
                  loading ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
                }`}
              >
                {loading ? "Enviando..." : "Enviar solicitud"}
              </button>
              
          </form>
        
        </motion.div>

        {/* INFO + WHATSAPP */}
        <div className="flex flex-col justify-center">

          <h2 className="text-3xl font-bold">
            También puedes escribirnos directamente
          </h2>

          <p className="text-gray-400 mt-4">
            Respuesta rápida por WhatsApp para presupuestos y disponibilidad.
          </p>

          {/* BOTÓN WHATSAPP */}
          <a
            href="https://wa.me/34687061681"
            target="_blank"
            className="mt-6 inline-block bg-green-500 text-black px-6 py-4 rounded-full font-bold text-center hover:scale-105 transition"
          >
            Hablar por WhatsApp
          </a>

          {/* INFO EXTRA */}
          <div className="mt-10 space-y-2 text-gray-400">
            <p>📍 Galicia</p>
            <p>🎵 Eventos, bodas, festivales</p>
            <p>⚡ Respuesta en menos de 24h</p>
          </div>

        </div>

      </section>
    </div>
  );
}