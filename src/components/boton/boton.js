import styles from './boton.module.css';

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