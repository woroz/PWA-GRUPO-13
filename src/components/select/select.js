import Styles from "./select.module.css";

const Select = ({opciones}) => {
    return (
        <select className={Styles.select}>
            {opciones.map((opcion, id) => (
                <option id={id} value={opcion.value}>
                    {opcion.label}
                </option>
            ))}
        </select>
    );
}

export default Select;