import React from 'react';
import styles from './home.module.css';
import Titulo from '../../components/titulo/titulo'
import Boton from '../../components/boton/boton'
import Contador from '../../components/contador/contador';
import MovieCard from '../../components/movieCard/movieCard';

const Peliculas = [
  { titulo: "Inception", genero: "ciencia ficcion", anio: 2010 },
  { titulo: "Titanic", genero: "romance", anio: 1997 },
  { titulo: "The Dark Knight", genero: "accion", anio: 2008 },
  { titulo: "Interstellar", genero: "ciencia ficcion", anio: 2014 },
  { titulo: "Superbad", genero: "comedia", anio: 2007 },
  { titulo: "The Hangover", genero: "comedia", anio: 2009 }
];

const home = () => {
    return (
        <div className={styles.container}>
            <Titulo texto="Gestor de peliculas" /> 
            <p>Pagina principal</p>
            <Boton texto="boton" funcion=""/>
            <Contador Peliculas={Peliculas}/>
            <br />
            <div className={styles.containerMovieCard}>
                {Peliculas.map((pelicula, index) => (
                  <MovieCard 
                  key={index}
                  imagen=""
                  titulo={pelicula.titulo}
                  genero={pelicula.genero}
                  anio={pelicula.anio}
                  />
                  ))}
                  </div>
        </div>
    )
    
}

export default home
