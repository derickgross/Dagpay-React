import React from 'react'

const RegisterForm = (props) => {
	return (
		<form action="" id="register">
			<label htmlFor="registerUsername">Username</label>
			<input type="text" id="registerUsername" />

			<label htmlFor="registerPassword">Password</label>
			<input type="password" id="registerPassword" />

			<label htmlFor="registerPasswordConfirmation">Confirm Password</label>
			<input type="password" id="registerPasswordConfirmation" />

			<button onClick={props.handleRegister}>Register</button>
		</form>
	);
}

export default RegisterForm