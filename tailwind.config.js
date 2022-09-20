const colors = require('tailwindcss/colors')
module.exports = {
    mode: 'jit',
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
    ],
    darkMode: false,
    theme: {
            colors: {
                orange: colors.orange,
                transparent: 'transparent',
                current: 'currentColor',
                'myOrange': '#f59e0b',
        },
        maxHeight: {
            '128': '60rem',
        },
        maxWidth: {
          '128': '125rem'
        }
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ],
};
