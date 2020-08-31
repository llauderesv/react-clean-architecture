import {createContext} from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

export default ThemeContext;
