import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <IconButton 
      onClick={toggleTheme}
      aria-label="Toggle theme"
      color="inherit"
      sx={{
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
          backgroundColor: 'transparent',
        }
      }}
    >
      {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};