/** @type {import('tailwindcss').Config} */

function generateShades(variable) {
  var shadeObject = {
    DEFAULT: `var(${variable})`,
    50:  `color-mix(in srgb, var(${variable}) 5%, white)`,
    100: `color-mix(in srgb, var(${variable}) 10%, white)`,
    200: `color-mix(in srgb, var(${variable}) 30%, white)`,
    300: `color-mix(in srgb, var(${variable}) 50%, white)`,
    400: `color-mix(in srgb, var(${variable}) 70%, white)`,
    500: `var(${variable})`,
    600: `color-mix(in srgb, var(${variable}), black 10%)`,
    700: `color-mix(in srgb, var(${variable}), black 30%)`,
    800: `color-mix(in srgb, var(${variable}), black 50%)`,
    900: `color-mix(in srgb, var(${variable}), black 70%)`,
  };

  return shadeObject
}

export const content = [
  "./src/**/*.{html,ts}"
];

export const safelist = [ 'row-span-1','row-span-2','row-span-3']

export const theme = {
  extend: {
    colors: {
      primary: {
        DEFAULT: 'var(--primary-500)',
        50: 'var(--primary-50)',
        100: 'var(--primary-100)',
        200: 'var(--primary-200)',
        300: 'var(--primary-300)',
        400: 'var(--primary-400)',
        500: 'var(--primary-500)',
        600: 'var(--primary-600)',
        700: 'var(--primary-700)',
        800: 'var(--primary-800)',
        900: 'var(--primary-900)',
        950: 'var(--primary-950)',
      },
      secondary: {
        DEFAULT: 'var(--secondary-500)',
        50: 'var(--secondary-50)',
        100: 'var(--secondary-100)',
        200: 'var(--secondary-200)',
        300: 'var(--secondary-300)',
        400: 'var(--secondary-400)',
        500: 'var(--secondary-500)',
        600: 'var(--secondary-600)',
        700: 'var(--secondary-700)',
        800: 'var(--secondary-800)',
        900: 'var(--secondary-900)',
        950: 'var(--secondary-950)',
      },
      accent: {
        DEFAULT: 'var(--accent-500)',
        50: 'var(--accent-50)',
        100: 'var(--accent-100)',
        200: 'var(--accent-200)',
        300: 'var(--accent-300)',
        400: 'var(--accent-400)',
        500: 'var(--accent-500)',
        600: 'var(--accent-600)',
        700: 'var(--accent-700)',
        800: 'var(--accent-800)',
        900: 'var(--accent-900)',
        950: 'var(--accent-950)',
      },
      background: {
        DEFAULT: 'var(--background-500)',
        50: 'var(--background-50)',
        100: 'var(--background-100)',
        200: 'var(--background-200)',
        300: 'var(--background-300)',
        400: 'var(--background-400)',
        500: 'var(--background-500)',
        600: 'var(--background-600)',
        700: 'var(--background-700)',
        800: 'var(--background-800)',
        900: 'var(--background-900)',
        950: 'var(--background-950)',
      },
      textMain: {
        DEFAULT: 'var(--textMain)',
        100: 'var(--textMain)',
        900: 'var(--textContrast)',
      },

    },
    fontFamily : {
      sans: ["Exo", "sans-serif"]
    }
  },
  
};
export const plugins = [];

