import React from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = () => {
  return (
    <div style={{padding:'20px'}}>
      <Link style={{ padding: '25px' }} to={`/`}>Главная</Link>
      <Link style={{ padding: '25px' }} to={`/login`}>Авторизация</Link>
      <Link style={{ padding: '25px' }} to={`/store`}>Магазин</Link>
    </div>

  )
}
