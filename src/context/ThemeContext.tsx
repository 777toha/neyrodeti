import { createContext, useContext, type ReactNode, type FC } from 'react';
import { useTheme } from '../hooks/useTheme';

// Тип для контекста
type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const themeData = useTheme();
  
  const contextValue: ThemeContextType = {
    theme: themeData.theme as 'light' | 'dark',
    toggleTheme: themeData.toggleTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};