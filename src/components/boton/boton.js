import styles from './boton.module.css';

const Boton = ({ texto, funcion, className }) => {
    return (
        <button onClick={funcion} className={`${styles.botonModule} ${className || ''}`}>
            {texto}
        </button>
    );
}

export default Boton;