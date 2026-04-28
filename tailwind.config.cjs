module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#011825",
        secondary: "#F0EFEB",
        tertiary: "#0D3056",
        quaternary: "#1689C8",
      },
      screens: {
        'xs': "450px",
        '3xl': "2160px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpeg')",
      },
      keyframes: {
        textRotate1: {
          '0%, 26%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
          '33%, 100%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)' },
        },
        textRotate2: {
          '0%, 26%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
          '33%, 60%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
          '66%, 100%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)' },
        },
        textRotate3: {
          '0%, 60%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
          '66%, 100%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
        },
      },
      animation: {
        textRotate1: 'textRotate1 6s infinite both',
        textRotate2: 'textRotate2 6s infinite both',
        textRotate3: 'textRotate3 6s infinite both',
      },
      fontSize: {
        title: '2rem',
        subtitle: '1.5rem',
      },
    },
  },
  plugins: [],
};
