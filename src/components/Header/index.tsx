import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { ThemeToggle } from '../ThemeToggle';
import { ContactIcons } from '../ContactIcons/ContactIcons';
import { SideMenu } from '../SideMenu/SideMenu';


import './index.css';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const contactInfo = {
    phone: '+79529339189',
    email: 'example@mail.ru',
    vkLink: 'https://vk.com/yourpage'
  };

  const navItems = [
    { label: 'Услуги', href: '#' },
    { label: 'О нас', href: '#' },
    { label: 'Случай из практики', href: '#' },
    { label: 'Контакты', href: '#' },
    { label: '+7 952 933 91 89', href: '#', className: 'phone' }
  ];

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px',
      }}
      onClick={handleDrawerToggle}
    >
      <Box>
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.label}
              component="a"
              href={item.href}
              className={item.className}
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
        <ContactIcons
          phone={contactInfo.phone}
          email={contactInfo.email}
          vkLink={contactInfo.vkLink}
          onMenuClose={handleDrawerToggle}
        />
      </Box>
      <ThemeToggle />
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
        height:'130px',
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'var(--header-bg)',
          color: 'var(--text-color)',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              fontFamily: 'inherit'
            }}
          >
            "НЕЙРОДЕТИ"
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link ${item.className || ''}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {item.label}
                </a>
              ))}
              <ContactIcons
                phone={contactInfo.phone}
                email={contactInfo.email}
                vkLink={contactInfo.vkLink}
                onMenuClose={handleDrawerToggle}
              />
              <ThemeToggle />
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* <SideDrawer open={mobileOpen} onClose={handleDrawerToggle}>
        {drawerContent}
      </SideDrawer> */}

      <SideMenu isOpen={mobileOpen} onClose={handleDrawerToggle}>
        {drawerContent}
      </SideMenu>
    </Box>
  );
};

export default React.memo(Header);