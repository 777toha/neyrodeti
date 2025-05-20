import React from 'react';
import {
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Icon24LogoVk } from '@vkontakte/icons';

interface ContactIconsProps {
  variant?: 'header' | 'menu';
  phone: string;
  email: string;
  vkLink: string;
  onMenuClose?: () => void;
}

export const ContactIcons: React.FC<ContactIconsProps> = ({
  variant = 'header',
  phone,
  email,
  vkLink,
  onMenuClose
}) => {
  const whatsappLink = `https://wa.me/${phone.replace(/\D/g, '')}`;
  const telegramLink = `https://t.me/${phone.replace(/\D/g, '')}`;

  if (variant === 'header') {
    return (
      <Box sx={{ display: 'flex', gap: '10px', ml: 2 }}>
        <IconButton
          color="inherit"
          href={`tel:${phone}`}
          component="a"
          aria-label="Позвонить"
        >
          <PhoneIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href={`mailto:${email}?subject=Запрос с сайта`}
          component="a"
          aria-label="Написать на почту"
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href={whatsappLink}
          target="_blank"
          component="a"
          aria-label="Написать в WhatsApp"
        >
          <WhatsAppIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href={telegramLink}
          target="_blank"
          component="a"
          aria-label="Написать в Telegram"
        >
          <TelegramIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href={vkLink}
          target="_blank"
          component="a"
          aria-label="Мы ВКонтакте"
        >
          <Icon24LogoVk />
        </IconButton>
      </Box>
    );
  }

  return (
    <>
      <ListItemButton
        component="a"
        href={`tel:${phone}`}
        sx={{ color: 'inherit', textDecoration: 'none' }}
        onClick={onMenuClose}
      >
        <ListItemIcon sx={{ color: 'inherit' }}>
          <PhoneIcon />
        </ListItemIcon>
        <ListItemText primary={phone} />
      </ListItemButton >

      <ListItemButton
        component="a"
        href={`mailto:${email}?subject=Запрос с сайта`}
        sx={{ color: 'inherit', textDecoration: 'none' }}
        onClick={onMenuClose}
      >
        <ListItemIcon sx={{ color: 'inherit' }}>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Написать на почту" />
      </ListItemButton >

      <ListItemButton
        component="a"
        href={whatsappLink}
        target="_blank"
        sx={{ color: 'inherit', textDecoration: 'none' }}
        onClick={onMenuClose}
      >
        <ListItemIcon sx={{ color: 'inherit' }}>
          <WhatsAppIcon />
        </ListItemIcon>
        <ListItemText primary="WhatsApp" />
      </ListItemButton >

      <ListItemButton
        component="a"
        href={telegramLink}
        target="_blank"
        sx={{ color: 'inherit', textDecoration: 'none' }}
        onClick={onMenuClose}
      >
        <ListItemIcon sx={{ color: 'inherit' }}>
          <TelegramIcon />
        </ListItemIcon>
        <ListItemText primary="Telegram" />
      </ListItemButton >

      <ListItemButton
        component="a"
        href={vkLink}
        target="_blank"
        sx={{ color: 'inherit', textDecoration: 'none' }}
        onClick={onMenuClose}
      >
        <ListItemIcon sx={{ color: 'inherit' }}>
          <Icon24LogoVk />
        </ListItemIcon>
        <ListItemText primary="ВКонтакте" />
      </ListItemButton >
    </>
  );
};