import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";



export default {
  content: ["./src/**/*.tsx"],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  
  plugins: [
    require('daisyui'),
  ],

} satisfies Config;

