
import Select from '../select/select';
import styles from './filtro.module.css';


const Filtro = ({opciones, onChange}) => {
    return (
        <div className={styles.contenedor}>
          <div className={styles.ordenSelect}>
          <Select 
            opciones={opciones}
            onChange={onChange}
          />
          </div>
        </div>
    );
}
export default Filtro;