import styles from "./contador.module.css";

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
            <h2 className={styles.titulo}>🎬 Contador</h2>

            <p className={styles.total}>
                Cantidad de películas: {cantidadPeliculas}
            </p>

            <ul className={styles.lista}>
                {Object.entries(contadorGeneros).map(([genero, cantidad]) => (
                    <li key={genero} className={styles.item}>
                        <span>{genero}</span>
                        <span>{cantidad}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contador;