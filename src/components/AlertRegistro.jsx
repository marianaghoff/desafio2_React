import React from 'react';

const AlertRegistro = ({ formErrors }) => {
  let alertClassName = 'alert';

  if (formErrors === 'Registro exitoso') {
    alertClassName += ' alert-success';
  } else if (formErrors === 'Registro inválido') {
    alertClassName += ' alert-danger';
  }

  return (
    <div className={alertClassName} role="alert">
      {formErrors}
    </div>
  );
};

export default AlertRegistro;

