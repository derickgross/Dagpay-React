import React from 'react'
import FormElement from '../FormElement/FormElement'

const BeneficiaryForm = (props) => {
	const inputs = props.inputs.map(input => {
		return (
			<FormElement input={input} />
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