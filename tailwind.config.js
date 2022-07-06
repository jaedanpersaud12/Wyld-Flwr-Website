/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rec: ["Recoleta W05 Regular"],
      },
      colors: {
        "wf-pink": "#F16278",
        "wf-peach": "#EFB8A8",
        "wf-black": "#341018",
        "wf-burg": "#73253E",
        "wf-brown": "#9C555B",
        "wf-white": "#e6d4d3",
        "wf-light-peach": "#efe5e2",
        "wf-print-bg": "#DFCCCB",
        "wf-print-bg-2": "#D6A59E",
        "wf-collection-bg": "#D89D94",
      },
      backgroundImage: (theme) => ({
        "wf-about": "url(/backgrounds/about-background.png)",
        "wf-plant-color": "url(/backgrounds/plant-color.png)",
        "wf-plant-light": "url(/backgrounds/plant-light.png)",
      }),
    },
  },
  plugins: [],
}
