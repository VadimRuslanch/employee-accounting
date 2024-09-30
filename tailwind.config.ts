/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.{vue,js}',
        './pages/**/*.{vue,js}',
        './composables/**/*.{js,ts}',
        './plugins/**/*.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Arial', 'sans-serif'],
            },
            colors: {
                'main-bg-color': '#FCFBFC',
                'main-color': '#17191C',
                'secondary-color': '#323C46',
                'tertiary-color': '#9CA1A5',
                'avatar-color': '#D9D9D9',
                'additional-popup-color': '#71787F',
                'custom-border': '#E1E6EC',
                'pagination-color-bg': '#FF3333',
            },
            screens: {
                'xl-max': {'max': '1320px'},
            },
        },
    },
    plugins: [],
}
