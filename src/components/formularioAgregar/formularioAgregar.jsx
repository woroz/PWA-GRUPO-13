import React, { useState } from 'react';
import Titulo from '../titulo/titulo';
import Boton from '../boton/boton';
import styles from './formularioAgregar.module.css';

const FormularioAgregar = ({ onAgregar, onClose }) => {

  const [formData, setFormData] = useState({
    imagen: "",
    titulo: "",
    genero: "",
    tipo: "",
    anio: "",
    rating: "",
    estado: false
  });

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
      const url = URL.createObjectURL(file);

      setFormData({
        ...formData,
        imagen: url
      });
    }
  };

  const enviar = () => {
    onAgregar({
      ...formData,
      rating: Number(formData.rating),
      anio: Number(formData.anio)
    });
  };

  return (
    <div className={styles.container}>
      <Titulo texto="Agregar Película" />

      <label>Titulo</label>
      <input
        type="text"
        name="titulo"
        value={formData.titulo}
        onChange={valorInput}
      />

      <label>Género</label>
      <input
        type="text"
        name="genero"
        value={formData.genero}
        onChange={valorInput}
      />

      <label>Tipo</label>
      <select
        name="tipo"
        value={formData.tipo}
        onChange={valorInput}
      >
        <option value=""></option>
        <option value="pelicula">Pelicula</option>
        <option value="serie">Serie</option>
      </select>

      <label>Año</label>
      <input
        type="number"
        name="anio"
        value={formData.anio}
        onChange={valorInput}
      />

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

      <label>Imagen</label>
      <input
        type="file"
        accept="image/*"
        onChange={cambiarImagen}
      />

      {formData.imagen && (
        <img
          src={formData.imagen}
          alt="preview"
          width="100"
        />
      )}

      <br />

      <Boton texto="Guardar" funcion={enviar} />
     <Boton texto="Cancelar" funcion={onClose} variant="danger" />
    </div>
  );
};

export default FormularioAgregar;