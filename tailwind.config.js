/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavenderblush: "#fae3f3",
        darkslateblue: {
          "100": "#004d93",
          "200": "rgba(0, 77, 147, 0.87)",
        },
        cornflowerblue: "#acaaff",
        plum: {
          "100": "#fecaff",
          "200": "#d3b1ff",
        },
        gray: {
          "100": "#feffff",
          "200": "#111",
          "300": "rgba(0, 0, 0, 0.9)",
        },
        lavender: "#fadef2",
        gainsboro: "#d9d9d9",
        white: "#fff",
        deeppink: "#ff4383",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "17xl-1": "36.1px",
        "5xs-1": "7.1px",
        "base-7": "16.7px",
        "10xl-8": "29.8px",
        "15xl-3": "34.3px",
        "base-1": "15.1px",
        "4xs-6": "8.6px",
        "4xs-5": "8.5px",
        "base-5": "16.5px",
      },
    },
    fontSize: {
      "xs-3": "11.3px",
      "smi-2": "12.2px",
      "2xs-5": "10.5px",
      "4xs-3": "8.3px",
      "mini-5": "14.5px",
      "3xs-6": "9.6px",
      "smi-4": "12.4px",
      "sm-1": "13.1px",
      "mid-4": "17.4px",
      "2xl-8": "21.8px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
