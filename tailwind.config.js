const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [],
    }
  },
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        // lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        lg: '0 0 20px rgba(8, 21, 66, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
    },
    colors: {
      // Utility Colours
      black: '#000',
      white: '#FFF',
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        '50': '#f9f9f9',
        '100': '#f2f2f3',
        '200': '#dfdfe1',
        '300': '#cbcccf',
        '400': '#a5a6aa',
        '500': '#7E8086',
        '600': '#717379',
        '700': '#5f6065',
        '800': '#4c4d50',
        '900': '#3e3f42',
        'gradient': '#cbcccf'
    },
      // Theme Colours
      // Each color has 10 variants, along with a gradient color which is used with the colour
      primary: {
        '50': '#f8f7ff',
        '100': '#f1f0ff',
        '200': '#dcd9ff',
        '300': '#c7c2ff',
        '400': '#9d94ff',
        '500': '#7366FF',
        '600': '#685ce6',
        '700': '#564dbf',
        '800': '#453d99',
        '900': '#38327d',
        'gradient': '#B266FF',

      },
      secondary: {
        '50': '#fff5f7',
        '100': '#feeaf0',
        '200': '#fdccd8',
        '300': '#fcadc1',
        '400': '#f96f93',
        '500': '#F73164',
        '600': '#de2c5a',
        '700': '#b9254b',
        '800': '#941d3c',
        '900': '#791831',
        'gradient': '#F75531'
      },
      success: {
        '50': '#f6fcf4',
        '100': '#eef8e9',
        '200': '#d4eec9',
        '300': '#b9e4a8',
        '400': '#85cf66',
        '500': '#51BB25',
        '600': '#49a821',
        '700': '#3d8c1c',
        '800': '#317016',
        '900': '#285c12',
        'gradient': '#CCCF27'
      },
      danger: {
        '50': '#fdf5f6',
        '100': '#fcebec',
        '200': '#f6cdd1',
        '300': '#f1aeb5',
        '400': '#e7727d',
        '500': '#DC3545',
        '600': '#c6303e',
        '700': '#a52834',
        '800': '#842029',
        '900': '#6c1a22',
        'gradient': '#C01A6A'
      },
      warning: {
        '50': '#fffdf4',
        '100': '#fefbea',
        '200': '#fdf5ca',
        '300': '#fcefaa',
        '400': '#fae26b',
        '500': '#F8D62B',
        '600': '#dfc127',
        '700': '#baa120',
        '800': '#95801a',
        '900': '#7a6915',
        'gradient': '#F8E72B'
      },
      info: {
        '50': '#f2f8ff',
        '100': '#e6f2ff',
        '200': '#bfdeff',
        '300': '#99caff',
        '400': '#4da2ff',
        '500': '#007AFF',
        '600': '#006ee6',
        '700': '#005cbf',
        '800': '#004999',
        '900': '#003c7d',
        'gradient': '#00C5E0'
      }
    },
    extend: {
      transitionProperty: {
        'width': 'width',
        'height': 'height',
       },
      keyframes: {
        grow: {
          '0%': {
              'width': '4rem',
          },
          '100%': {
            'width': '12rem',
          }
      },
      shrink: {
        '0%': {
            'width': '12rem',
        },
        '100%': {
          'width': '4rem',
        }
    },
        scroll: {
          '0%': {
              'background-size':'200% 100%',
              'background-position': '200% center'
          },
          '50%': {
              'background-size':'200% 100%',
              'background-position': '0% center'
          },
          '100%': {
            'background-size':'200% 100%',
            'background-position': '-200% center'
          }
      },
       },
       animation: {
        scrollRight: 'scroll 5s ease-in-out infinite',
        grow: 'grow 500ms',
        shrink: 'shrink 500ms',
       }
    },
  },
  variants: {
    extend: {
      margin: ['first'],
      width: ['hover'],
    },
  },
  plugins: [],
};
