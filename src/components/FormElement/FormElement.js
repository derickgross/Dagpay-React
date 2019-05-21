import React from 'react'
import FormInput from '../FormInput/FormInput'
import FormSelect from '../FormSelect/FormSelect'

const FormElement = (props) => {
	const determineElement = () => {
		switch (props.input.elementType) {
			case "input":
				return (
					<FormInput 
						type={props.input.type}
						id={props.input.id}
						onChange={props.input.onChange}
						className="formInput"
						name={props.input.name}
						placeholder={props.input.placeholder}
						data-parameter={props.input.parameter}
					/>
				)
				break;
			case "select":
				return (
					"test"
				)
				break;
			default:
				return (
					/*<input 
						type={props.input.type}
						id={props.input.id}
						onChange={props.input.onChange}
						className="formInput"
						name={props.input.name}
						placeholder={props.input.placeholder}
						data-parameter={props.input.parameter}
					/>*/
					"default case ran"
				)				
		}
	}

	return (
		<div>
			<label htmlFor={props.input.id}>{props.input.name}</label>
				{ determineElement() }	
			<p className="errorMessage inactive">{props.input.errorMessage}</p>
		</div>
	)
}

export default FormElement

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