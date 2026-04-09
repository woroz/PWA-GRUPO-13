import React, {useState, useEffect} from 'react';
import styles from './home.module.css';
import Titulo from '../../components/titulo/titulo'
import Boton from '../../components/boton/boton'
import Contador from '../../components/contador/contador';
import MovieCard from '../../components/movieCard/movieCard';
import Formulario from '../../components/formulario/formulario';
import Select from '../../components/select/select';

const Peliculas = [
  { imagen: "", titulo: "Inception", genero: "ciencia ficcion", anio: 2010 },
  { imagen: "", titulo: "Titanic", genero: "romance", anio: 1997 },
  { imagen: "", titulo: "The Dark Knight", genero: "accion", anio: 2008 },
  { imagen: "", titulo: "Interstellar", genero: "ciencia ficcion", anio: 2014 },
  { imagen: "", titulo: "Superbad", genero: "comedia", anio: 2007 },
  { imagen: "", titulo: "The Hangover", genero: "comedia", anio: 2009 }
];

const Home = () => {
    const [peliculas, setPeliculas] = useState(() => {
      const guardadas = localStorage.getItem("peliculas");
      return guardadas ? JSON.parse(guardadas) : Peliculas;
});
    const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
    useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, 
  [peliculas]);


    const editarPelicula = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
};
    const onClickEditar = (peliculaEditada) => {
    const nuevaPelicula = peliculas.map((p) =>
    p.titulo === peliculaSeleccionada.titulo ? peliculaEditada : p);
    setPeliculas(nuevaPelicula);
    setPeliculaSeleccionada(null);
};

const generos = [...new Set(peliculas.map(p => p.genero))];

    return (
        <div className={styles.container}>
            <Titulo texto="Gestor de peliculas" /> 
            <p>Pagina principal</p>
            <Boton texto="boton" funcion=""/>
            <Contador Peliculas={peliculas}/>
            <br />
            <Select opciones={generos.map(g => ({ value: g, label: g }))}/>
            <br /><br /><br />
            <div className={styles.containerMovieCard}>
                {peliculas.map((pelicula, index) => (
                  <MovieCard 
                  key={index}
                  imagen={pelicula.imagen}
                  titulo={pelicula.titulo}
                  genero={pelicula.genero}
                  anio={pelicula.anio}
                  clickEditar={editarPelicula}
                  />
                  ))}
            </div>
            {peliculaSeleccionada && ( 
              <div className={styles.containerForm}>
                <Formulario
                titulo="Editar Película"
                pelicula={peliculaSeleccionada}
                onClick={onClickEditar}
                />
                </div>
                )}
        </div>
    )
}

export default Home
