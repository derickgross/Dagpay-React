import React from 'react'
import Navbar from '../Navbar/Navbar'

const Header = (props) => {
	return (
		<header>
			<h1>Dagpay React Payroll</h1>
			<Navbar handleClick={props.navbar.handleClick} />
		</header>
	)
}

export default Header