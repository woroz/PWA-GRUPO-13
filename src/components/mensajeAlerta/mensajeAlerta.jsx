import Style from './mensajeAlerta.module.css';
import React from 'react';

const MensajeAlerta = ( { mensajeAlerta } ) => {
  return (
    <div className={Style.alert}>
      <span className={Style.mensaje}>{mensajeAlerta}</span>
    </div>
  );
}

export default MensajeAlerta;