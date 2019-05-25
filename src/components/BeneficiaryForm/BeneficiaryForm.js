import React from 'react'
import FormElement from '../FormElement/FormElement'

const BeneficiaryForm = (props) => {
	let inputValue;

	// console.log(`Value of props.setFormInputInState in BeneficiaryForm: ${props.setFormInputInState}`)

	const inputs = props.inputs.map(input => {
		//inputValue = props.formValues[input.id]

		return (
			<FormElement 
				key={input.id}
				input={input} 
				onFormElementChange={props.onFormElementChange} 
				options={input.elementType === "select" ? props.options : "none" }
				value={inputValue}
				setFormInputInState={props.setFormInputInState}
				formType={input.formType}
			/>
		)
	})

	return (
		<form action="" data-form-type={inputs[0].formType}>
			{inputs}
			<button onClick={props.onFormSubmit} className="submitButton">Submit</button>
		</form>
	)
}

export default BeneficiaryForm