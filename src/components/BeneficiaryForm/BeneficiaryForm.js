import React from 'react'
import FormInput from '../FormInput/FormInput'

const BeneficiaryForm = (props) => {
	const inputs = props.inputs.map(input => {
		return (
			<FormInput input={input} />
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