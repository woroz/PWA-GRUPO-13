import styles from './titulo.module.css';

const Titulo = ( { texto }) => {
    return (
        <div className={styles.titulo}>
            <h1 className={styles.mainTitulo}>{texto}</h1>
        </div>
    )
}
export default Titulo