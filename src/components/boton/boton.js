import styles from './boton.module.css';

const Boton = ({ texto, funcion }) => {
    return (
        <button onClick={funcion} className={styles.botonModule}>
            {texto}
        </button>
    );
}

export default Boton;