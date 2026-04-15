import React, { useState, useEffect } from 'react';
import styles from './formularioEditar.module.css';
import Titulo from '../titulo/titulo';
import Boton from '../boton/boton';

const FormularioEditar = ({ titulo, pelicula, onClick, onClose }) => {
  const [nombreArchivo, setNombreArchivo] = useState("");
  const [errores, setErrores] = useState({});

  const [formData, setFormData] = useState({
    id: null,
    titulo: "",
    director: "",
    genero: "",
    tipo: "",
    anio: "",
    imagen: "",
    estado: false,
    rating: ""
  });

useEffect(() => {
  if (pelicula) {
    setFormData({
      id: pelicula.id ?? null,
      titulo: pelicula.titulo ?? "",
      director: pelicula.director ?? "",
      genero: pelicula.genero ?? "",
      tipo: pelicula.tipo ?? "",
      anio: pelicula.anio ?? "",
      imagen: pelicula.imagen ?? "",
      estado: pelicula.estado ?? false,
      rating: pelicula.rating ?? ""
    });
  }
}, [pelicula]);

  const valorInput = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const cambiarImagen = (e) => {
    const file = e.target.files[0];

    if (file) {
      setNombreArchivo(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          imagen: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

const validarForm = () => {
  const nuevosErrores = {};
  if (!formData.titulo.trim()) {
    nuevosErrores.titulo = "El título es obligatorio.";
  }
  if (!formData.director.trim()) {
    nuevosErrores.director = "El director es obligatorio.";
  }
  if (!formData.genero.trim()) {
    nuevosErrores.genero = "El género es obligatorio.";
  }
  if (!formData.tipo.trim()) {
    nuevosErrores.tipo = "El tipo es obligatorio.";
  }
  if (!formData.anio) {
    nuevosErrores.anio = "El año es obligatorio.";
  }
  if (formData.rating === "" || formData.rating < 0 || formData.rating > 10) {
    nuevosErrores.rating = "Debe estar entre 0 y 10.";
  }
  if (!formData.imagen) {
    nuevosErrores.imagen = "La imagen es obligatoria.";
  }
  setErrores(nuevosErrores);
  return Object.keys(nuevosErrores).length === 0;
};

  const enviar = () => {
    if (!validarForm()) {
      return;
    }
    onClick({
      ...formData,
      rating: Number(formData.rating) 
    });
  };

  return (
    <div className={styles.contenedor}>
    <div className={styles.form}>
      <Titulo texto={titulo} />

      <label>Titulo</label>
      <input 
        type="text"
        name="titulo"
        value={formData.titulo}
        onChange={valorInput}
      />
      {errores.titulo && <span className={styles.error}>{errores.titulo}</span>}

      <label>Director</label>
      <input
        type="text"
        name="director"
        value={formData.director}
        onChange={valorInput}
      />
      {errores.director && <span className={styles.error}>{errores.director}</span>}      

      <label>Género</label>
      <input
        type="text"
        name="genero"
        value={formData.genero}
        onChange={valorInput}
      />
      {errores.genero && <span className={styles.error}>{errores.genero}</span>}

      <label>Tipo</label>
      <input
        type="text"
        name="tipo"
        value={formData.tipo}
        onChange={valorInput}
      />
      {errores.tipo && <span className={styles.error}>{errores.tipo}</span>}

      <label>Año</label>
      <input
        type="number"
        name="anio"
        value={formData.anio}
        onChange={valorInput}
      />
      {errores.anio && <span className={styles.error}>{errores.anio}</span>}

      <label>Rating</label>
      <input
        type="number"
        name="rating"
        value={formData.rating}
        onChange={valorInput}
        min="0"
        max="10"
        step="0.1"
      />
      {errores.rating && <span className={styles.error}>{errores.rating}</span>}

      <label>Imagen</label>
      <input
        type="file"
        accept="image/*"
        onChange={cambiarImagen}
      />
      {errores.imagen && <span className={styles.error}>{errores.imagen}</span>}

      <span className={styles.nombreArchivo}>
        {nombreArchivo || ""}
        </span>

      <Boton texto="Guardar" funcion={enviar} />
      <Boton texto="Cancelar" funcion={onClose} variant="danger" />
      </div>
      
      {formData.imagen && (
        <div className={styles.previewContainer}>
          <img 
        src={formData.imagen} 
        alt="preview" 
        className={styles.preview}
        />
    </div>
)}
</div>
  );
};

export default FormularioEditar;