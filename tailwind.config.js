const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

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
        amber: colors.amber,
        teal: colors.teal,
        orange: colors.orange,
        rose: colors.rose,
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
        "wf-pink-bg": "url(../public/bgimg/pale-rose-background.png)",
        "wf-nft-bg": "url(../images/wf-nft-bg.png)",
        "wf-divider-bg": "url(../public/bgimg/plant-background.png)",
        "wf-lesspink": "url(../public/bgimg/pale-background.png)",
        "wf-lesspink-portrait":
          "url(../public/bgimg/pale-background-portrait.png)",
        "wf-desert": "url(../public/bgimg/wearables/desert.png)",
        "wf-header": "url(../public/bgimg/header-bg.png)",
        "wf-shop": "url(../public/bgimg/shop-background.png)",
        "wf-about": "url(../public/bgimg/about-background.png)",
        "wf-values": "url(../public/bgimg/Aboutpage/values.png)",
        "wf-purpose": "url(../public/bgimg/Aboutpage/purpose.png)",
        "wf-anya": "url(../public/bgimg/Aboutpage/our-founder.png)",
        "wf-phygicode": "url(../public/bgimg/phygicode.png)",
        "wf-tribe": "url(../public/bgimg/Aboutpage/wyld-tribe.png)",
      }),
    },
  },
  plugins: [],
};
