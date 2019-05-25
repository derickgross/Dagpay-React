import React from 'react'
import BeneficiaryForm from '../BeneficiaryForm/BeneficiaryForm'
import { dependentFormInputs as formInputs } from '../../formInputs'

const CreateDependent = (props) => {
	return (
		<div>
			<h2>Create Dependent view</h2>
			<BeneficiaryForm 
				onFormElementChange={props.onFormElementChange} 
				onSubmit={props.handleEmployeeFormSubmit} 
				inputs={formInputs} 
				options={props.employeeSelectOptions}
				formValues={props.formValues}
				setFormInputInState={props.setFormInputInState}
			/>
		</div>
	)
}

export default CreateDependent