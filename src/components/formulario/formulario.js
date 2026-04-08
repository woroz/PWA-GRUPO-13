import React, { useState, useEffect } from 'react';
import styles from './formulario.module.css';

const Formulario = ({ pelicula, clickGuardar }) => {
  const [formData, setFormData] = useState(pelicula);
  useEffect(() => {
    setFormData(pelicula);
  }, [pelicula]);
  if (!pelicula) return null;


    const cambiarValorInput = (e) => {
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
      <h2>Editar Película</h2>
      <label>Título:</label>
      <input
        type="text"
        name="titulo"
        value={formData.titulo}
        onChange={cambiarValorInput}
      />
      <label>Género:</label>
      <input
        type="text"
        name="genero"
        value={formData.genero}
        onChange={cambiarValorInput}
      />
      <label>Año:</label>
      <input
        type="number"
        name="anio"
        value={formData.anio}
        onChange={cambiarValorInput}
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
      <button className={styles.botclickGuardar} onClick={() => clickGuardar(formData)}>
        Guardar
        </button>
    </div>
    );
};

export default Formulario;