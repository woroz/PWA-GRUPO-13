
import Select from '../select/select';
import styles from './filtro.module.css';


const Filtro = ({opciones, onChange, titulo}) => {
    return (
        <div className={styles.contenedor}>
          {titulo && <span className={styles.titulo}>{titulo}</span>}
          <Select 
            opciones={opciones}
            onChange={onChange}
          />
        </div>
    );
}
export default Filtro;