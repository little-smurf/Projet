module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        "05": "0.5px",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      divideWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      fontFamily: {
        mon: ["Montserrat", "sans-serif"],
        rob: ["Roboto", "sans-serif"],
        med: ["Roboto-Medium", "sans-serif"],
        sog: ["Segoe UI", "sans-serif"],
      },
      fontWeight: {
        hairline: 100,
        "extra-light": 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 550,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      
      colors: {
        transparent: {
          DEFAULT: "transparent",
        },
        mainColor: {
          DEFAULT: "#242558",
          100: "#3C3E95",
        },
        white: {
          DEFAULT: "#fff",
          100: "#FAFBFD",
        },
        black: {
          DEFAULT: "#262626",
        },
        gray: {
          DEFAULT: "#9CA3AF",
          100: "#F3F4F6",
          200: "E5E7EB",
          300: "#EDEDF0",
          400: "#808080",
          500: "#6B7280",
          600: "#1F2937",
        },
        green: {
          DEFAULT: "#10B981",
        },
        red: {
          DEFAULT: "#F55C4E",
          500: "#D85232",
          400: "#EB0E0E",
        },
        yellowOrange: {
          DEFAULT: "#F0C105",
        },
        blue: {
          DEFAULT: "#5254E3",
        },
      },
      extend: {},
    },
  
    variants: {
      extend: {},
    },
    plugins: [
      require("@tailwindcss/forms")({
        strategy: "class",
      }),
    ],
  };
  