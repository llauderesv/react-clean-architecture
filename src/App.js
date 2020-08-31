import React, {useState, useCallback} from 'react';
import ThemeContext, {themes} from './ThemeContext';
import Button from './components/Button';
import './App.css';

const App = () => {
  const [theme, setToggleTheme] = useState(themes.light);

  const toggleTheme = useCallback(() => {
    setToggleTheme(theme === themes.light ? themes.dark : themes.light);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div style={{backgroundColor: theme.background, color: theme.foreground}}>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
