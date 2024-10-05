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
export const theme = {
  extend: {
    colors: {
      primary: generateShades("--primary"),
      secondary: generateShades("--secondary"),
      accent: generateShades("--accent"),
      background: generateShades("--background"),

      textMain: generateShades("--textMain"),
      textContrast: generateShades("--textConstrat"),
    }
  },
};
export const plugins = [];

