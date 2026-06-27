/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // Palette MeetNoo extraite du design actuel (index.html)
        brand: {
          primary: "#2424DA",   // bleu/violet MeetNoo (CTA, liens)
          accent: "#5B4BD6",    // violet accent (hover, secondaire)
          soft: "#7C6BE8",      // violet soft (badges, illustrations)
          tint: "#E9E5FF",      // violet très clair (fonds de cards)
          ice: "#F4F1FF",       // violet ultra clair (fonds de sections)
        },
        ink: {
          DEFAULT: "#141B34",   // texte principal
          soft: "#3A3A3A",      // texte secondaire
          mute: "#6B6B6B",      // texte tertiaire / labels
        },
        line: "#E9EBF1",        // bordures, séparateurs
        // Couleurs sémantiques (success, warning, etc.)
        success: {
          DEFAULT: "#0D925F",
          soft: "#A6E5C8",
          tint: "#D9F5E8",
        },
        warning: {
          DEFAULT: "#FFA200",
          soft: "#FFC9A1",
          tint: "#FFE9D6",
        },
        danger: {
          DEFAULT: "#D80027",
        },
      },
      fontFamily: {
        // Hiérarchie typo : Sora pour display, Figtree pour body
        sans: ["Figtree", "Inter", "system-ui", "sans-serif"],
        display: ["Sora", "system-ui", "sans-serif"],
        mono: ["DM Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "1440px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        // Ombres signature MeetNoo (violet soft)
        "brand-sm": "0 4px 12px rgba(36, 36, 218, 0.08)",
        "brand": "0 10px 30px rgba(36, 36, 218, 0.12)",
        "brand-lg": "0 20px 50px rgba(36, 36, 218, 0.16)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
