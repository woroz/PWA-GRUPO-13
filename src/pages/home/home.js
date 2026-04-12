import React, { useState, useEffect } from 'react';
import styles from './home.module.css';
import Titulo from '../../components/titulo/titulo'
import Boton from '../../components/boton/boton'
import Contador from '../../components/contador/contador';
import MovieCard from '../../components/movieCard/movieCard';
import Formulario from '../../components/formulario/formulario';
import Input from '../../components/input/input';
import Filtro from '../../components/filtro/filtro';
import Ordenador from '../../components/ordenador/Ordenador';

const Peliculas = [
  { id: 1, imagen: "", titulo: "Inception", genero: "Ciencia ficcion", tipo: "Pelicula", anio: 2010, estado: true, rating: 8.8 },
  { id: 2, imagen: "", titulo: "Titanic", genero: "Romance", tipo: "Pelicula", anio: 1997, estado: false, rating: 7.8 },
  { id: 3, imagen: "", titulo: "Cobra Kai", genero: "Accion", tipo: "Serie", anio: 2018, estado: true, rating: 8.2 },
  { id: 4, imagen: "", titulo: "The Dark Knight", genero: "Accion", tipo: "Pelicula", anio: 2008, estado: true, rating: 9.0 },
  { id: 5, imagen: "", titulo: "Stranger Things", genero: "Terror", tipo: "Serie", anio: 2016, estado: false, rating: 8.7 },
  { id: 6, imagen: "", titulo: "Interstellar", genero: "Ciencia ficcion", tipo: "Pelicula", anio: 2014, estado: true, rating: 8.6 },
  { id: 7, imagen: "", titulo: "Black Mirror", genero: "Ciencia ficcion", tipo: "Serie", anio: 2011, estado: false, rating: 8.0 },
  { id: 8, imagen: "", titulo: "Superbad", genero: "Comedia", tipo: "Pelicula", anio: 2007, estado: false, rating: 7.6 },
  { id: 9, imagen: "", titulo: "The Hangover", genero: "Comedia", tipo: "Pelicula", anio: 2009, estado: true, rating: 7.9 },
  { id: 10, imagen: "", titulo: "The Witcher", genero: "Fantasia", tipo: "Serie", anio: 2019, estado: true, rating: 8.3 }
];

const Home = () => {
  const [peliculas, setPeliculas] = useState(() => {
    const guardadas = localStorage.getItem("peliculas");
    return guardadas ? JSON.parse(guardadas) : Peliculas;
  });

  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const [busqueda, setBusqueda] = useState("");

  const [generoElegido, setGeneroElegido] = useState("todos");

  const [tipoElegido, setTipoElegido] = useState("todos");

  const [orden, setOrden] = useState ({ criterio: 'año', sentido: 'asc' });

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

  const peliculasOrdenadas = [...peliculasFiltradas].sort((a, b) => {
    const campo = orden.criterio === 'año' ? 'anio' : 'rating';
    if (orden.sentido === 'asc') {
      return a[campo] - b[campo];
    } else {
      return b[campo] - a[campo];
    }
  })

  const eliminarPelicula = (id) => {
    const nuevasPeliculas = peliculas.filter((peli) => peli.id !== id)
    
    setPeliculas(nuevasPeliculas)
  }

  const manejarOrden = (evento) => {
    const { name, value } = evento.target;
    setOrden({
      ...orden,
      [name]: value
    });
  }

  const generos = ["todos", ...new Set(peliculas.map(p => p.genero.toLowerCase()))];
  const tipos = ["todos", ...new Set(peliculas.map(p => p.tipo.toLowerCase()))];

  return (
    <div className={styles.container}>
      <Titulo texto="Gestor de peliculas" />

      <Input 
        label="Buscador" 
        type="text" 
        placeholder="Ingrese el titulo de la pelicula" 
        value={busqueda} 
        onChange={(e) => setBusqueda(e.target.value)} 
      />
      
      <br />
      <div className={styles.filtros}> 
        <Filtro 
        opciones={generos.map(g => ({ value: g, label: g }))} 
        onChange={(evento) => setGeneroElegido(evento.target.value)}
        titulo="Género"
        />

        <Filtro 
        opciones={tipos.map(t => ({ value: t, label: t }))} 
        onChange={(evento) => setTipoElegido(evento.target.value)} 
        titulo="Tipo"
        />
      </div>

      <div className={styles.seccionOrden}>
        <p>Ordenar por:</p>
        <Ordenador 
          criterio={orden.criterio} 
          sentido={orden.sentido} 
          onChange={manejarOrden} 
        />
      </div>
        
        <Boton texto="Agregar Pelicula" funcion="" />
        <Contador Peliculas={peliculas} />

      <br /><br /><br />

      <div className={styles.containerMovieCard}>
        {peliculasOrdenadas.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            id={pelicula.id}
            imagen={pelicula.imagen}
            titulo={pelicula.titulo}
            genero={pelicula.genero}
            tipo={pelicula.tipo}
            anio={pelicula.anio}
            estado={pelicula.estado}
            rating={pelicula.rating}
            clickEditar={editarPelicula}
            cambiarEstado={editarEstado}
            eliminarPelicula={eliminarPelicula}
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