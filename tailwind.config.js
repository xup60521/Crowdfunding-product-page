/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Moderate_cyan: "hsl(176, 50%, 47%)",
                c_Dark_cyan: "hsl(176, 72%, 28%)",
                c_Dark_gray: "hsl(0, 0%, 48%)",
            },
            fontFamily: {
                commissioner: ["Commissioner", "sans-serif"]
            }
        },
    },
    plugins: [],
}

