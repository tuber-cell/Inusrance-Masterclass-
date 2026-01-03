/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#007bff',
                    dark: '#0056b3',
                    light: '#eef7ff',
                },
                gold: '#fbbf24',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '3rem',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
        }
    },
    plugins: [],
}
