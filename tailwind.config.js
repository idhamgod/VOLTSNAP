/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'shine': 'shine 0.6s ease-in-out infinite', // Ini durasi kilatannya
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' }, // Mulai dari kiri luar
          '100%': { transform: 'translateX(100%)' }, // Berakhir di kanan luar
        },
      },
    },
  },
  plugins: [],
}
