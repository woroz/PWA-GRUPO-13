import styles from './boton.module.css';
import React from 'react';

const Boton = ({ texto, funcion, variant }) => {
  return (
    <button
      onClick={funcion}
      className={`${styles.botonModule} 
      ${variant === 'danger' ? styles.danger : ''} 
      ${variant === 'primary' ? styles.primary : ''}`}
    >
      {texto}
    </button>
  );
};

export default Boton;