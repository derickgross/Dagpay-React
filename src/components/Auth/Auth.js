import React from 'react'
import RegisterForm from '../RegisterForm/RegisterForm'
import LoginForm from '../LoginForm/LoginForm'


const Auth = (props) => {

	return (
		<section>
			<h2><a href="" data-form="Register" onClick={props.handleAuthClick}>Register</a> | <a href="" data-form="Login" onClick={props.handleAuthClick}>Log In</a></h2>
			{ props.displayCurrentAuthForm() }
		</section>
	)
}

export default Auth