/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      animation: {
        slideinright: 'slideinright 1s forwards',
        slideinleft: 'slideinleft 1s forwards',
        slideinrighttitle: 'slideinright 2s forwards',
        slideinleftimage: 'slideinleft 2s forwards',
        fadeOut: 'fadeOut 2s ease-in-out',
        slideloopleft1: 'slideloopleft 10s linear infinite',
        slideloopleft2: 'slideloopleft 14s linear infinite',
        slideloopright1: 'slideloopright 12s linear infinite',
        slideloopright2: 'slideloopright 16s linear infinite',
      },
      keyframes: {
        slideinright: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideinleft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideloopleft: {
          '0%' : { transform: 'translateX(100%)' }, // start off the left edge
          '100%' : { transform: 'translateX(-100vw)' }, // slide off right edge
        },
        slideloopright: {
          '0%' : { transform: 'translateX(-100%)' }, // start off the right edge
          '100%' : { transform: 'translateX(100vw)' }, // slide off left edge
        }
      },
      height: {
        '1/8': '12.5%'
      },
    },
    colors: {
      'light-orange-10'       : '#ffd36b',
      'solid-orange-10'       : '#ffa530',
      'discord-gray'          : '#1a1a1a',
      'discord-lighter-gray'  : '#28292b',
      'lighter-ish-gray'      : '#424242',
      'off-white'             : '#e6e6e6',
      'cream'                 : '#f0e6cc',
      'white'                 : '#ffffff',
      'tan-brown'             : '#a86f51',
      'pinkish-red'           : '#d63c58',
      'mint-green'            : '#c0e6be',
      'dark-orange'           : '#b55e00',
      'rectangle-orange1'     : '#ffc06e',
      'rectangle-orange2'     : '#ffa530',
      'rectangle-orange3'     : '#fff7c7',
      'rectangle-orange4'     : '#ffd36b',
      'linkedin-blue'         : '#0077b5',
      'uw-purple'             : '#f2baff'
    }
  },
  plugins: []
}

