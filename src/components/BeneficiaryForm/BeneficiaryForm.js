import React from 'react'
import FormElement from '../FormElement/FormElement'

const BeneficiaryForm = (props) => {
	console.log(`BeneficiaryForm onChange function: ${props.onFormElementChange}`)
	let inputValue;

	// console.log(`Value of props.setFormInputInState in BeneficiaryForm: ${props.setFormInputInState}`)

	const inputs = props.inputs.map(input => {
		//inputValue = props.formValues[input.id]

		return (
			<FormElement 
				key={input.id}
				input={input} 
				onChange={props.onFormElementChange} 
				options={input.elementType === "select" ? props.options : "none" }
				value={inputValue}
				setFormInputInState={props.setFormInputInState}
				formType={props.formType}
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