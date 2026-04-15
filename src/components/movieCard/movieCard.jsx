import styles from './movieCard.module.css';
import Boton from '../boton/boton';
import React from 'react';

const MovieCard = ({ id, imagen, titulo, director, genero, tipo, anio, estado, rating, clickEditar, cambiarEstado, eliminarPelicula }) => { 
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

          <span className={styles.rating}>{rating}</span>

          <span className={estado ? styles.vista : styles.noVista}>
            {estado ? "vista" : "por ver"}
          </span>
        </div>

        <div>
          <span className={styles.director}>
            Director: <span>{director}</span>
          </span>
        </div>

        <div className={styles.botones}>
          <Boton
            texto="Editar"
            variant="primary"
            funcion={() => clickEditar({ id, imagen, titulo, genero, tipo, anio, estado, rating })}
          />

          <Boton 
            texto="Eliminar" 
            variant="danger"
            funcion={() => eliminarPelicula(id)} 
          />

          <Boton 
            texto="Visto" 
            funcion={() => cambiarEstado(id)} 
          />
        </div>
      </div>

    </div>
  );
}; 

export default MovieCard;