import React, { useState, useEffect } from 'react';
import styles from './formularioEditar.module.css';
import Titulo from '../titulo/titulo';
import Boton from '../boton/boton';

const FormularioEditar = ({ titulo, pelicula, onClick }) => {
  const [formData, setFormData] = useState({
  titulo: "",
  genero: "",
  anio: "",
  imagen: ""
});

  useEffect(() => {
    if (pelicula) {
    setFormData(pelicula);
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
  return (
    <div className={styles.form}>
      <Titulo texto={titulo} />
      <label>Titulo</label>
      <input
        type="text"
        name="titulo"
        value={formData.titulo}
        onChange={valorInput}
      />
      <label>Género:</label>
      <input
        type="text"
        name="genero"
        value={formData.genero}
        onChange={valorInput}
      />
      <label>Año:</label>
      <input
        type="number"
        name="anio"
        value={formData.anio}
        onChange={valorInput}
      />
      <label>Imagen:</label>
      <input
        type="file"
        accept="image/*"
        onChange={cambiarImagen}
      />
      {formData.imagen && (
        <img 
          src={formData.imagen} 
          alt="preview" 
          className={styles.preview}
        />
      )}
      <br />
      <Boton texto="Guardar" funcion={() => onClick(formData)} />
    </div>
    );
};

export default FormularioEditar;