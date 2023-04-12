import { createContext } from 'react';
import { Theme } from '../../types/types'


type ThemeContextType = {
    theme: Theme;
    setTheme: (Theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: Theme.Dark, setTheme: theme => {}});