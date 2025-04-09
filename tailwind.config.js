/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class', // or 'media' if you want to respect system preferences
    theme: {
      extend: {
        colors: {
          indigo: {
            50: '#f0f5ff',
            100: '#e5edff',
            200: '#cddbfe',
            300: '#b4c6fc',
            400: '#8da2fb',
            500: '#6875f5',
            600: '#5850ec',
            700: '#5145cd',
            800: '#42389d',
            900: '#362f78',
          },
          purple: {
            50: '#f6f5ff',
            100: '#edebfe',
            200: '#dcd7fe',
            300: '#cabffd',
            400: '#ac94fa',
            500: '#9061f9',
            600: '#7e3af2',
            700: '#6c2bd9',
            800: '#5521b5',
            900: '#4a1d96',
          },
        },
        fontFamily: {
          sans: ['Noto Sans JP', 'sans-serif'],
        },
        animation: {
          'spin-slow': 'spin 3s linear infinite',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }
      },
    },
    plugins: [],
  }