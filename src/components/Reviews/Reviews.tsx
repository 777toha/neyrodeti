import React from 'react';
import { TwoGisWidget } from '../TwoGisWidget/TwoGisWidget';

export const Reviews: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {/* Яндекс.Отзывы */}
      <div style={{ width: '560px', height: '800px', overflow: 'hidden', position: 'relative' }}>
        <iframe
          style={{
            width: '100%',
            height: '100%',
            border: '1px solid #e6e6e6',
            borderRadius: '8px',
            boxSizing: 'border-box',
          }}
          src="https://yandex.ru/maps-reviews-widget/108237410861?comments"
          title="Отзывы о Нейродети на Яндекс.Картах"
        />
        <a
          href="https://yandex.ru/maps/org/neyrodeti/108237410861/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#b3b3b3',
            fontSize: '10px',
            fontFamily: 'YS Text, sans-serif',
            position: 'absolute',
            bottom: '8px',
            width: '100%',
            textAlign: 'center',
            left: '0',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'block',
            maxHeight: '14px',
            whiteSpace: 'nowrap',
            padding: '0 16px',
            boxSizing: 'border-box',
          }}
        >
          Нейродети на карте Новосибирска — Яндекс Карты
        </a>
      </div>
      <TwoGisWidget />
    </div>
  );
};