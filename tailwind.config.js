/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark green accent
        brand: {
          50:  "#EAF4EF",
          100: "#D4E9DE",
          200: "#B9D5C7",
          300: "#8EBDA8",
          400: "#5F9E87",
          500: "#357B67",
          600: "#1E6651",
          700: "#15503F",
          800: "#0F3D2E", // primary accent
          900: "#0A2A20"
        },
        // Light cream background
        cream: {
          DEFAULT: "#FAF7F2",
          100: "#F5F0E9",
          200: "#EFE9E0"
        }
      },
      backgroundImage: {
        // subtle brand gradient for navbar / accents
        "brand-gradient": "linear-gradient(135deg, #0A2A20 0%, #0F3D2E 50%, #15503F 100%)"
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(10,42,32,0.05), 0 8px 24px rgba(10,42,32,0.06)"
      },
      borderRadius: {
        xl: "0.9rem"
      }
    }
  },
  plugins: [],
}
