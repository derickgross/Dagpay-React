import React from 'react'

const LoginForm = (props) => {
	return (
		<form action="" id="login">
			<label htmlFor="loginUsername">Username</label>
			<input type="text" id="loginUsername" />

			<label htmlFor="loginPassword">Password</label>
			<input type="password" id="loginPassword" />

			<button onClick={e => {
				e.preventDefault();
				props.handleLogin(document.getElementById('loginUsername').value, document.getElementById('loginPassword').value, props.currentView);
			}}>Log In</button>
		</form>
	);
}

export default LoginForm