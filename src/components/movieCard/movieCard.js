import styles from './movieCard.module.css';
import Boton from '../boton/boton';

const MovieCard = ({ id, imagen, titulo, genero, tipo, anio, estado, clickEditar, cambiarEstado }) => { 
  return ( 
    <div className={styles.card}>

      {imagen && (
        <img src={imagen} alt={titulo} className={styles.imagen} />
      )}

      <div className={styles.contenido}>
        <h3 className={styles.titulo}>{titulo}</h3>

        <div className={styles.tags}>
          <span className={styles.tag}>{genero}</span>
          <span className={styles.tag}>{tipo}</span>
        </div>

        <div className={styles.fila}>
          <span>{anio}</span>
          <span className={estado ? styles.vista : styles.noVista}>
            {estado ? "vista" : "por ver"}
          </span>
        </div>

        <div className={styles.botones}>
          <Boton
            texto="Editar"
            funcion={() => clickEditar({ id, imagen, titulo, genero, tipo, anio, estado })}
          />

          <Boton texto="Eliminar" funcion={() => console.log("Eliminar")} />

          <Boton texto="Visto" funcion={() => cambiarEstado(id)} />
        </div>
      </div>

    </div>
  );
}; 

export default MovieCard;