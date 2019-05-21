import React from 'react'
import BeneficiaryForm from '../BeneficiaryForm/BeneficiaryForm'
import { dependentFormInputs as formInputs } from '../../formInputs'

const CreateDependent = (props) => {
	return (
		<div>
			<h2>Create Dependent view</h2>
			<BeneficiaryForm onChange={props.handleFormChange} onSubmit={props.handleEmployeeFormSubmit} inputs={formInputs} />
		</div>
	)
}

export default CreateDependent