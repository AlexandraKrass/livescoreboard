import React, { useState, useEffect, ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from '../../types/types'

type ThemeContextWrapperProps = {
    children: ReactNode
}

const ThemeContextWrapper = ({ children }: ThemeContextWrapperProps ) => {
  const [theme, setTheme] = useState(Theme.Dark);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeContextWrapper;