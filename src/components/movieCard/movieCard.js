import styles from './movieCard.module.css';
import Boton from '../boton/boton';

const MovieCard = ({ id, imagen, titulo, genero, anio, estado, clickEditar, cambiarEstado }) => {
  return (
    <div className={styles.card}>
      <img src={imagen} alt={titulo} className={styles.imagen} />

      <div className={styles.info}>
        <h3>{titulo}</h3>
        <p>{genero}</p>
        <p>{anio}</p>
        <p>{estado ? "vista" : "por ver"}</p>

        <br />
        <Boton
          texto="Editar"
          funcion={() => clickEditar({ id, imagen, titulo, genero, anio, estado })}
        />

        <Boton
          texto="Eliminar"
          funcion={() => console.log("Eliminar")}
        />

        <Boton
          texto="Visto"
          funcion={() => cambiarEstado(id)}
        />
      </div>
    </div>
  );
};

export default MovieCard;