//Formulario
import React from 'react';

const Formulario = ({ onChange, handleErrors }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { correo, password, passwordRepeat } = e.target.elements;

    if (!correo.value.includes('@')) {
      handleErrors('El correo electrónico no es válido');
      return;
    }

    if (password.value !== passwordRepeat.value) {
      handleErrors('Registro inválido');
      return;
    }

	if (password.value === passwordRepeat.value) {
		handleErrors('Registro exitoso');
		return;
	  }

  };

  return (
    <form onSubmit={handleSubmit}>
		<div className='divFormulario'>
			<div className='divInputs'>
				<h4>Nombre<input className='inputs' type="text" name="nombre" onChange={onChange} /></h4>
				<h4>Apellido <input className='inputs' type="text" name="apellido" onChange={onChange} /></h4>
				<h4>Correo <input className='inputs' type="email" name="correo" onChange={onChange} /></h4>
				<h4>Contraseña <input className='inputs' type="password" name="password" onChange={onChange} /></h4>
				<h4>Repite la contraseña<input className='inputs' type="password" name="passwordRepeat" onChange={onChange} /></h4>

			</div>

			<h5><button className='button' type="submit">Registrarse</button></h5>
		</div>


    </form>
  );
};

export default Formulario;
