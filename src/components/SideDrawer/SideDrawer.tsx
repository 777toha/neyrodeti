import React from 'react';
import { Drawer } from '@mui/material';
import { useThemeContext } from '../../context/ThemeContext';

interface SideDrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({ open, onClose, children }) => {
  const { theme } = useThemeContext();

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
        sx: {
          zIndex: 1200,
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }}
      sx={{
        '& .MuiDrawer-paper': {
          width: '80%',
          maxWidth: 300,
          backgroundColor: 'var(--menu-bg)',
          color: 'var(--text-color)',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
      }}
    >
      {children}
    </Drawer>
  );
};