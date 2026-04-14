import React, { useState } from 'react';
import Titulo from '../titulo/titulo';
import Boton from '../boton/boton';
import styles from './formularioAgregar.module.css';

const FormularioAgregar = ({ onAgregar }) => {

    const [formData, setFormData] = useState({
        imagen: "",
        titulo: "",
        genero: "",
        anio: "",
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
        onAgregar(formData);
    };

    return (
        <div className={styles.container} >
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

            <label>Año</label>
            <input
                type="number"
                name="anio"
                value={formData.anio}
                onChange={valorInput}
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
        </div>
    );
};

export default FormularioAgregar;