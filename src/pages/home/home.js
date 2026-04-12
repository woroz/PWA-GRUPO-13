import React, { useState, useEffect } from 'react';
import styles from './home.module.css';
import Titulo from '../../components/titulo/titulo'
import Boton from '../../components/boton/boton'
import Contador from '../../components/contador/contador';
import MovieCard from '../../components/movieCard/movieCard';
import Formulario from '../../components/formulario/formulario';
import Input from '../../components/input/input';
import Filtro from '../../components/filtro/filtro';

const Peliculas = [ { id: 1, imagen: "", titulo: "Inception", genero: "Ciencia ficcion", tipo: "Pelicula", anio: 2010, estado: true }, 
  { id: 2, imagen: "", titulo: "Titanic", genero: "Romance", tipo: "Pelicula", anio: 1997, estado: false }, 
  { id: 3, imagen: "", titulo: "Cobra Kai", genero: "Accion", tipo: "Serie", anio: 2018, estado: true }, 
  { id: 4, imagen: "", titulo: "The Dark Knight", genero: "Accion", tipo: "Pelicula", anio: 2008, estado: true }, 
  { id: 5, imagen: "", titulo: "Stranger Things", genero: "Terror", tipo: "Serie", anio: 2016, estado: false }, 
  { id: 6, imagen: "", titulo: "Interstellar", genero: "Ciencia ficcion", tipo: "Pelicula", anio: 2014, estado: true }, 
  { id: 7, imagen: "", titulo: "Black Mirror", genero: "Ciencia ficcion", tipo: "Serie", anio: 2011, estado: false },
  { id: 8, imagen: "", titulo: "Superbad", genero: "Comedia", tipo: "Pelicula", anio: 2007, estado: false }, 
  { id: 9, imagen: "", titulo: "The Hangover", genero: "Comedia", tipo: "Pelicula", anio: 2009, estado: true }, 
  { id: 10, imagen: "", titulo: "The Witcher", genero: "Fantasia", tipo: "Serie", anio: 2019, estado: true } ];

const Home = () => {
  const [peliculas, setPeliculas] = useState(() => {
    const guardadas = localStorage.getItem("peliculas");
    return guardadas ? JSON.parse(guardadas) : Peliculas;
  });

  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [generoElegido, setGeneroElegido] = useState("todos");
  const [tipoElegido, setTipoElegido] = useState("todos");

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  const editarPelicula = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
  };

  const editarEstado = (id) => {
    const actPeli = peliculas.map((peli) =>
      peli.id === id ? { ...peli, estado: !peli.estado } : peli
    );
    setPeliculas(actPeli);
  };

  const onClickEditar = (peliculaEditada) => {
    const nuevaPelicula = peliculas.map((p) =>
      p.id === peliculaSeleccionada.id ? peliculaEditada : p
    );
    setPeliculas(nuevaPelicula);
    setPeliculaSeleccionada(null);
  };

  const peliculasFiltradas = peliculas.filter((peli) => {
    const coincideTitulo = peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideGenero = generoElegido === "todos" || peli.genero.toLowerCase() === generoElegido;
    const coincideTipo = tipoElegido === "todos" || peli.tipo.toLowerCase() === tipoElegido;
    return coincideTitulo && coincideGenero && coincideTipo;
  });

  const generos = ["todos", ...new Set(peliculas.map(p => p.genero.toLowerCase()))];
  const tipos = ["todos", ...new Set(peliculas.map(p => p.tipo.toLowerCase()))];

  return (
    <div className={styles.container}>
      <Titulo texto="Gestor de peliculas" />
      <p>Pagina principal</p>

      <Input 
        label="Buscador" 
        type="text" 
        placeholder="Ingrese el titulo de la pelicula" 
        value={busqueda} 
        onChange={(e) => setBusqueda(e.target.value)} 
      />
      
      <Boton texto="Agregar Pelicula" funcion="" />
      <Contador Peliculas={peliculas} />
      <br />
      <div className={styles.filtros}> 
        <Filtro 
        opciones={generos.map(g => ({ value: g, label: g }))} 
        onChange={(evento) => setGeneroElegido(evento.target.value)} titulo="Género" /> 
        <Filtro 
        opciones={tipos.map(t => ({ value: t, label: t }))} 
        onChange={(evento) => setTipoElegido(evento.target.value)} titulo="Tipo" /> 
        </div>

      <br /><br /><br />

      <div className={styles.containerMovieCard}>
        {peliculasFiltradas.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            id={pelicula.id}
            imagen={pelicula.imagen}
            titulo={pelicula.titulo}
            genero={pelicula.genero}
            tipo={pelicula.tipo}
            anio={pelicula.anio}
            estado={pelicula.estado}
            clickEditar={editarPelicula}
            cambiarEstado={editarEstado}
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
  );
}

export default Home;