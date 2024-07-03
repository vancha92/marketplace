/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "15/100": "15%",
        "navbar-top": "64px",
        "navbar-bottom": "80px",
        "screen-dynamic": "100dvh",
        "screen-small": "100svh",
        mobileMenu: "calc(100svh - 64px)",
        "30screenh": "calc(100vh * 0.3)",
        "25screenh": "calc(100vh * 0.25)",
        "20screenh": "calc(100vh * 0.20)",
      },
      minHeight: {
        "container-mobile": "calc(100svh - 64px)",
        "container-desktop": "calc(100svh - 64px)",
        mobileMenu: "calc(100svh - 64px)",
      },
      maxHeight: {
        scrollTable: "calc(100svh - 250px)",
      },
      width: {
        992: "992px",
        "9/10": "90%",
      },
      minWidth: {
        32: "8rem",
      },
      maxWidth: {
        96: "24rem",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#793ef9",
          "primary-focus": "#570df8",
          "primary-content": "#ffffff",
          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          accent: "#000033",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#2a2e37",
          "neutral-focus": "#16181d",
          "neutral-content": "#ffffff",
          "base-100": "#f4f3f2",
          "base-200": "#e6e6e6",
          "base-300": "#dadada",
          "base-content": "#ebecf0",
          info: "#66c6ff",
          success: "#87d039",
          warning: "#e2d562",
          error: "#ff6f6f",
        },
      },
    ],
  },
};
