import React from 'react'

const FormInput = (props) => {
	return (
		<input 
			type={props.type}
			id={props.id}
			onChange={props.onFormElementChange}
			className="formInput"
			name={props.name}
			placeholder={props.placeholder}
			data-parameter={props.parameter}
			data-form-type={props.formType}
		/>
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
elementType

<input type="text" id="employeeId" class="formInput" name="employeeId" placeholder="Enter an integer value">
*/