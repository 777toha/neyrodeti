import React from 'react';

export const Map: React.FC = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <a
        href="https://yandex.ru/maps/org/neyrodeti/108237410861/?utm_medium=mapframe&utm_source=maps"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
      >
        Нейродети
      </a>
      <a
        href="https://yandex.ru/maps/65/novosibirsk/category/speech_therapists/70647216620/?utm_medium=mapframe&utm_source=maps"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
      >
        Логопеды в Новосибирске
      </a>
      <a
        href="https://yandex.ru/maps/65/novosibirsk/category/psychological_center/198277497761/?utm_medium=mapframe&utm_source=maps"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '28px' }}
      >
        Психологический центр в Новосибирске
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/org/neyrodeti/108237410861/?ll=82.904538%2C55.033336&z=16"
        width="100%"
        height="400"
        frameBorder="1"
        allowFullScreen
        style={{ position: 'relative' }}
      />
    </div>
  )
};
