import React from 'react'

const FormSelect = (props) => {
	const options = props.options.map(option => {

	})

	options.push(
		// replace static options text with a dynamic message from props
		<option 
			value="" 
			disabled="" 
			selected=""
		>
			Select the dependent's employee
		</option>
	);

	return (
		<select 
			//type={props.type}
			//id={props.id}
			onChange={props.onChange}
			//className="formInput"
			name={props.name}
			//placeholder={props.placeholder}
			data-parameter={props.parameter}
		>
			{/* enter options here */}
		</select>
	)
}

export default FormSelect

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