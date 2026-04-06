import styles from './movieCard.module.css';
import Boton from '../boton/boton';

const MovieCard = ({ imagen, titulo, genero, anio }) => {
  return (
    <div className={styles.card}>
      <img src={imagen} alt={titulo} className={styles.imagen} />
      
      <div className={styles.info}>
        <h3>{titulo}</h3>
        <p>{genero}</p>
        <p>{anio}</p>
        <br />
        <Boton texto="Editar" funcion={() => console.log("Editar")} />
        <Boton texto="Eliminar" funcion={() => console.log("Eliminar")} />
        <Boton texto="Visto" funcion={() => console.log("Visto")} />
      </div>
    </div>
  );
};

export default MovieCard;