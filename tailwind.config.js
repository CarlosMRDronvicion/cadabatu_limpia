/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        background: "#0B0B0F",
        foreground: "#F5F5F5",

        sun: "#FACC15",
        carnival: "#EF4444",
        jungle: "#22C55E",

        card: "#111118",
        border: "#262626",
        muted: "#9CA3AF",
      },

      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 25px rgba(250, 204, 21, 0.35)",
        sun: "0 0 20px rgba(250, 204, 21, 0.25)",
        card: "0 10px 30px rgba(0,0,0,0.5)",
      },

      backgroundImage: {
        spotlight:
          "radial-gradient(circle at top, rgba(239,68,68,0.25), transparent 60%)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
          marquee: "marquee 20s linear infinite",
      },

      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-50%)" },
  },
      },
       

    },
  },

  plugins: [],

 
};

