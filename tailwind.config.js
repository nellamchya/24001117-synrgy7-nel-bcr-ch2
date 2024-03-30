/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./index.html"],
    theme: {
        extend: {
            colors: {
                blue: {
                    900: "#091b6f",
                    700: "#0d28a6",
                    500: "#5e70c4",
                    300: "#aeb7e1",
                    100: "#cfd4ed",
                },
                green: {
                    900: "#3d7b3f",
                    700: "#5cb85f",
                    500: "#92d094",
                    300: "#c9e7ca",
                    100: "#def1df",
                },
            },
            fontFamily: {
                sans: ["Helvetica", "sans-serif"],
            },
        },
    },
    plugins: [],
};