import React from 'react';

const Radio = ({ label, name, value, checked, onChange }) => {
  return (
    <div>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <label>{label}</label>
    </div>
  );
};

export default Radio;