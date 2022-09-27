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
                'panelBackground': '#333333',
                'panelButton': '#111111',
                'buttonHover': '#4e4e4e'
        },
        maxHeight: {
            '128': '60rem',
        },
        maxWidth: {
          '128': '125rem'
        },
        height: {
           '128': '60rem',

        }
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ],
};
