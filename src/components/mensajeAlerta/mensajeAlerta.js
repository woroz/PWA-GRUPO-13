import Style from './mensajeAlerta.module.css';

const MensajeAlerta = ( { mensajeAlerta } ) => {
  return (
    <div className={Style.alert}>
      <span className={Style.mensaje}>{mensajeAlerta}</span>
    </div>
  );
}

export default MensajeAlerta;