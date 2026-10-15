/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"], // Esto le dice que lea tu index.html y scripts.js
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}