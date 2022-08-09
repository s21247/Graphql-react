const colors = require('tailwindcss/colors')
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false,
    theme: {
            colors: {
                orange: colors.orange,
                transparent: 'transparent',
                current: 'currentColor',
                'myOrange': '#f59e0b',
        },
    },
    variants: ["responsive","hover","focus","active"],
    plugins: [],
};