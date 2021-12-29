module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Raleway'],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      rotate: {
        '360': '360deg',
      },
      boxShadow: {
        '3xl': ' rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
