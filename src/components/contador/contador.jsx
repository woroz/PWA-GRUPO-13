import styles from "./contador.module.css";
import Titulo from "../titulo/titulo";
import React from 'react';

const Contador = ({ Peliculas }) => {

    let cantidadPeliculas = Peliculas.length;
    const contadorGeneros = {};

    Peliculas.forEach((pelicula) => {
        const genero = pelicula.genero;

        if (contadorGeneros[genero]) {
            contadorGeneros[genero]++;
        } else {
            contadorGeneros[genero] = 1;
        }
    });

    return (
        <div className={styles.contadorContainer}>
            <Titulo texto="Contador de Peliculas" />

            <p className={styles.total}>
                Cantidad de peliculas: {cantidadPeliculas}
            </p>

            <ul className={styles.lista}>
                {Object.entries(contadorGeneros).map(([genero, cantidad]) => (
                    <li className={styles.item}>
                        <span>{genero}</span>
                        <span>{cantidad}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contador;