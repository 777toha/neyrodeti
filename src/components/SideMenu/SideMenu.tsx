import React, { useEffect, useRef } from 'react';
import './SideMenu.css';

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose, children }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Запускаем анимацию открытия
      setTimeout(() => {
        if (menuRef.current && overlayRef.current) {
          menuRef.current.style.transform = 'translateX(0)';
          overlayRef.current.style.opacity = '1';
        }
      }, 10);
    } else {
      // Анимация закрытия
      if (menuRef.current && overlayRef.current) {
        menuRef.current.style.transform = 'translateX(-100%)';
        overlayRef.current.style.opacity = '0';
      }
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 300); // Должно совпадать с duration анимации
    }
  }, [isOpen]);

  return (
    <>
      <div 
        ref={overlayRef}
        className="side-menu-overlay" 
        onClick={onClose} 
        style={{ opacity: 0 }}
      />
      <div 
        ref={menuRef}
        className="side-menu" 
        style={{ transform: 'translateX(-100%)' }}
      >
        {children}
      </div>
    </>
  );
};