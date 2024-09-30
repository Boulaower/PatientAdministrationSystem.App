/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Tells Tailwind to scan all relevant files for classes.
  ],
  theme: {
    extend: {
      // Add custom colors to the theme
      colors: {
        primary: {
          light: '#3B82F6', // Lighter shade of blue
          DEFAULT: '#1D4ED8', // Primary blue
          dark: '#1E3A8A', // Darker shade of blue
        },
        secondary: {
          light: '#A78BFA', // Light purple
          DEFAULT: '#9333EA', // Primary purple
          dark: '#6B21A8', // Dark purple
        },
        accent: {
          light: '#FDE68A', // Light yellow
          DEFAULT: '#F59E0B', // Amber
          dark: '#B45309', // Dark amber
        },
        gray: {
          light: '#F3F4F6', // Light gray (background)
          DEFAULT: '#6B7280', // Neutral gray
          dark: '#374151', // Dark gray
        },
      },
      // Add custom spacing
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      // Add custom font sizes
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      // Add custom shadows
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
