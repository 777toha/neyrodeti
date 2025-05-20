import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import { ContactIcons } from '../ContactIcons/ContactIcons';

export const Footer: React.FC = () => {
  const services = [
    'Нейропсихолог',
    'Логопед',
    'Психолог',
    'Дефектолог',
    'Подготовка к школе'
  ];

  const infoLinks = [
    'О нас',
    'Специалисты',
    'Адрес и контакты',
    'Политика конфиденциальности'
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'var(--header-bg)',
        color: 'var(--text-color)',
        padding: { xs: '20px', md: '40px' },
        marginTop: 'auto'
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: '30px'
        }}
      >
        {/* Колонка 1: Услуги */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Услуги
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {services.map((service) => (
              <li key={service}>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ display: 'block', py: 1 }}
                >
                  {service}
                </Link>
              </li>
            ))}
          </Box>
        </Box>

        {/* Колонка 2: Информация */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Информация
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {infoLinks.map((link) => (
              <li key={link}>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ display: 'block', py: 1 }}
                >
                  {link}
                </Link>
              </li>
            ))}
          </Box>
        </Box>

        {/* Колонка 3: Контакты */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Контакты
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Детский центр "Нейродети"<br />
            Улица Вокзальная магистраль 6/1<br />
            Новосибирск, Россия
          </Typography>
          <ContactIcons
            phone="+79529339189"
            email="example@mail.ru"
            vkLink="https://vk.com/yourpage"
          // sx={{ justifyContent: 'flex-start' }}
          />
        </Box>

        {/* Колонка 4: Соцсети и лого */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Соцсети
          </Typography>
          <Box sx={{ mb: 3 }}>
            {/* Здесь можно добавить компонент с иконками соцсетей */}
            <Typography>Мы в социальных сетях:</Typography>
            {/* Пример иконок (замените на ваш компонент) */}
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <Link href="#" color="inherit">VK</Link>
              <Link href="#" color="inherit">Telegram</Link>
              <Link href="#" color="inherit">WhatsApp</Link>
            </Box>
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            НЕЙРОДЕТИ
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.12)' }} />

      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: 'text.secondary'
        }}
      >
        <Typography>
          © {new Date().getFullYear()} Детский центр "Нейродети". Все права защищены.
        </Typography>
        <Typography sx={{ mt: 1, fontSize: '0.75rem' }}>
          ОГРН: 323540018000171 | ИНН: 5400190017
        </Typography>
      </Box>
    </Box>
  );
};