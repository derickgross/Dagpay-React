import React from 'react'
import FormElement from '../FormElement/FormElement'

const BeneficiaryForm = (props) => {
	const inputs = props.inputs.map(input => {
		return (
			<FormElement 
				key={input.id}
				input={input} 
				onFormElementChange={props.onFormElementChange} 
				options={input.elementType === "select" ? props.options : "none" }
				value={props.formValues[input.id]}
				setFormInputInState={props.setFormInputInState}
				formType={input.formType}
			/>
		)
	})

	return (
		<form action="" id={props.inputs[0].formType}>
			<p className="success inactive money"></p>
			{inputs}
			<button onClick={props.onFormSubmit} className="submitButton" data-form={props.inputs[0].formType} data-endpoint={props.inputs[0].endpoint}>Submit</button>
		</form>
	)
}

export default BeneficiaryForm