import styles from './input.module.css';
import React from 'react';

const Input = ({ label, name, type, placeholder, value, onChange }) => {
    return (
        <div className={styles.input}>
            <label className={styles.label}>{label}</label>
            <input 
                name={name}
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
            />
        </div>
    )
}

export default Input;