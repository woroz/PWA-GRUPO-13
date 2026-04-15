import Styles from "./select.module.css";
import React from 'react';

const Select = ({ opciones, onChange }) => {
    return (
        <select className={Styles.select} onChange={onChange}>
            {opciones.map((opcion, id) => (
                <option id={id} value={opcion.value}>
                    {opcion.label}
                </option>
            ))}
        </select>
    );
}

export default Select;