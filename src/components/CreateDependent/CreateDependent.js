import React from 'react'
import BeneficiaryForm from '../BeneficiaryForm/BeneficiaryForm'
import { dependentFormInputs as formInputs } from '../../formInputs'

const CreateDependent = (props) => {
	//console.log(`Value of props.setFormInputInState in CreateDependent: ${props.setFormInputInState}`)

	return (
		<div>
			<h2>Create Dependent view</h2>
			<BeneficiaryForm 
				onChange={props.onFormElementChange} 
				onSubmit={props.handleEmployeeFormSubmit} 
				inputs={formInputs} 
				options={props.employeeSelectOptions}
				formValues={props.formValues}
				formType="dependentForm"
				setFormInputInState={props.setFormInputInState}
			/>
		</div>
	)
}

export default CreateDependent