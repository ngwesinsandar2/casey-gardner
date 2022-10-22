import React from 'react';
import { createContext } from 'react';
import useLocalStorage from 'use-local-storage';
import './index.css';
import View from './views/View';

type ValueProps = { theme: string; switchTheme: () => void; };

export const ThemeContext = createContext<ValueProps | null>(null);

function App() {
  const [theme, setTheme] = useLocalStorage<string>('theme', 'dark' ? 'light' : 'dark');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <div className='light' data-theme={theme}>
      <View />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
