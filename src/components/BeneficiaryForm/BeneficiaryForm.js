import React from 'react'
import FormElement from '../FormElement/FormElement'

const BeneficiaryForm = (props) => {
	console.log(`BeneficiaryForm onChange function: ${props.onFormElementChange}`)
	let inputValue;

	const inputs = props.inputs.map(input => {
		//inputValue = props.formValues[input.id]

		return (
			<FormElement 
				input={input} 
				onChange={props.onFormElementChange} 
				options={input.elementType === "select" ? props.options : "none" }
				value={inputValue}
			/>
		)
	})

	return (
		<div>
			{inputs}
			<button className="submitButton">Submit</button>
		</div>
	)
}

export default BeneficiaryForm