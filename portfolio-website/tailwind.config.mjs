/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              color: 'var(--cream)',
              h1: {
                fontWeight: '700',
                fontSize: '2.25em',
                marginTop: '0',
                marginBottom: '0.8888889em',
                lineHeight: '1.1111111',
                color: 'var(--cream)',
              },
              h2: {
                fontWeight: '600',
                fontSize: '1.75em',
                marginTop: '1.6em',
                marginBottom: '0.8em',
                lineHeight: '1.3',
                color: 'var(--cream)',
              },
              h3: {
                fontWeight: '600',
                fontSize: '1.5em',
                marginTop: '1.5em',
                marginBottom: '0.6em',
                lineHeight: '1.3',
                color: 'var(--cream)',
              },
              p: {
                color: 'var(--cream)',
              },
              strong: {
                color: 'var(--cream)',
                fontWeight: '600',
              },
              a: {
                color: 'var(--solid-orange-10)',
                '&:hover': {
                  color: 'var(--dark-orange)',
                },
              },
              blockquote: {
                borderLeftColor: 'var(--solid-orange-10)',
                color: 'var(--cream)',
              },
              code: {
                color: 'var(--cream)',
                backgroundColor: 'var(--discord-lighter-gray)',
                padding: '0.25rem',
                borderRadius: '0.25rem',
              },
              pre: {
                backgroundColor: 'var(--discord-lighter-gray)',
                code: {
                  backgroundColor: 'transparent',
                }
              },
              // List styling
              ul: {
                color: 'var(--cream)',
                listStyleType: 'disc',
                paddingLeft: '1.625em',
              },
              ol: {
                color: 'var(--cream)',
                listStyleType: 'decimal',
                paddingLeft: '1.625em',
              },
              li: {
                color: 'var(--cream)',
                marginTop: '0.5em',
                marginBottom: '0.5em',
                '&::marker': {
                  color: 'var(--solid-orange-10)',
                },
              },
              'ul > li::marker': {
                color: 'var(--solid-orange-10)',
              },
              'ol > li::marker': {
                color: 'var(--solid-orange-10)',
              },
              '.katex-html': {
                display: 'none', // Hide the fallback HTML version
              },
            },
          },
        },
        height: {
            '1/8': '12.5vh', // 1/8 of 100vh
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
}