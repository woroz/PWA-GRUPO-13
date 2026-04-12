import React, { useState, useEffect } from 'react';
import styles from './formulario.module.css';
import Titulo from '../titulo/titulo';
import Boton from '../boton/boton';
import Input from "../input/input";

const Formulario = ({ titulo, pelicula, onClick }) => {
  const [formData, setFormData] = useState({
  titulo: "",
  genero: "",
  anio: "",
  rating: "",
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
}};

  return (
    <div className={styles.form}>
      <Titulo texto={titulo} />
      <Input
      label="Titulo"
      name="titulo"
      type="text"
      placeholder="Ingrese el titulo"
      value={formData.titulo}
      onChange={valorInput}
      />
      
      <Input
      label="Género"
      name="genero"
      type="text"
      placeholder="Ej: Accion"
      value={formData.genero}
      onChange={valorInput}
      />

      <Input
      label="Año"
      name="anio"
      type="number"
      placeholder="Ingrese el año"
      value={formData.anio}
      onChange={valorInput}
      />

      <Input
      label="Rating"
      name="rating"
      type="number"
      placeholder="Ingrese el rating"
      value={formData.rating}
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

export default Formulario;