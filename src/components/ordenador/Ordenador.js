import styles from './ordenador.module.css';

function Ordenador({ criterio, sentido, onChange }) {
  return (
    <div className={styles.seccionOrden}> 
      
      <div className={styles.controlesOrden}> 
        <select name="criterio" value={criterio} onChange={onChange}>
          <option value="año">Año</option>
          <option value="rating">Rating</option>
        </select>

        <select name="sentido" value={sentido} onChange={onChange}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    </div>
  );
}

export default Ordenador;