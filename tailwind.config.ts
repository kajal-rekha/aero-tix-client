import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                black: "rgb(33, 36, 43)",
                white: "rgb(250, 250, 250)",
                gray: "rgb(226, 224, 223)",
                red: "rgb(217, 17, 74)",
                slate: "rgb(1, 3, 20)",
                blue: "rgb(0, 145, 181)",
                purple: "rgb(92, 33, 241)",
                orange: "rgb(221, 188, 136)"
            }
        }
    },
    plugins: []
};
export default config;
