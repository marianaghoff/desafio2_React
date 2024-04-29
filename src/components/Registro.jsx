import React from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import AlertRegistro from './AlertRegistro';

const Registro = ({ onChange, handleErrors, formErrors }) => {
    const iconos = [
		'fa-brands fa-github',
		'fa-brands fa-linkedin',
		'fa-brands fa-twitter',
	]; 

  return (
    <div>
      <h1>Registro</h1>
      <SocialButton icons={iconos} />
      <Formulario onChange={onChange} handleErrors={handleErrors}/>
      <AlertRegistro formErrors={formErrors}/>
    </div>
  );
};

export default Registro;