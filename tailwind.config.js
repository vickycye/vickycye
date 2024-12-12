/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      animation: {
        slideinright: 'slideinright 1s forwards',
        slideinleft: 'slideinleft 1s forwards',
        fadeOut: 'fadeOut 2s ease-in-out',
      },
      keyframes: {
        slideinright: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideinleft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeOut: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
    colors: {
      'light-orange-10' : '#ffd36b',
      'solid-orange-10' : '#ffa530',
      'discord-gray' : '#1a1a1a',
      'discord-lighter-gray' : '#28292b',
      'lighter-ish-gray' : '#424242',
      'off-white' : '#e6e6e6',
      'cream' : '#f0e6cc',
      'white' : '#ffffff',
      'tan-brown' : '#a86f51',
      'pinkish-red' : '#d63c58',
      'mint-green' : '#c0e6be',
      'dark-orange' : '#b55e00'
    }
  },
  plugins: [],
}

