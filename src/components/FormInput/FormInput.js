import React from 'react'

const FormInput = (props) => {
	return (
		<div>
			<label htmlFor={props.input.id}>{props.input.name}</label>
			<input 
				type={props.input.type}
				id={props.input.id}
				onChange={props.input.onChange}
				className="formInput"
				name={props.input.name}
				placeholder={props.input.placeholder}
				data-parameter={props.input.parameter}
			/>
			<p className="errorMessage inactive">{props.input.errorMessage}</p>
		</div>
	)
}

export default FormInput

// Form inputs dynamically built from configuration file
/*
Employee form input template

name
id
type
placeholder
parameter
labelText
errorMessage

<input type="text" id="employeeId" class="formInput" name="employeeId" placeholder="Enter an integer value">
*/