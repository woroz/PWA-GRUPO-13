import React from 'react';
import styles from './home.module.css';
import Titulo from '../../components/titulo/titulo'

const home = () => {
    return (
        <div className={styles.container}>
            <Titulo texto="Gestor de peliculas" /> 
            <p>Pagina principal</p>
        </div>
    )
}

export default home
