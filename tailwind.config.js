/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                fadeInUp: 'fadeInUp 1s ease-out forwards',
                'delay-1s': '1s', 
                'delay-2s': '2s',
                'delay-3s': '3s',
                'delay-4s': '4s',
            },
        },
    },
    plugins: [],
}