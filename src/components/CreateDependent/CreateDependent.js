import React from 'react'
import BeneficiaryForm from '../BeneficiaryForm/BeneficiaryForm'
import { dependentFormInputs as formInputs } from '../../formInputs'

const CreateDependent = (props) => {
	return (
		<section>
			<h2>Add Dependent</h2>
			<BeneficiaryForm 
				onFormElementChange={props.onFormElementChange} 
				onFormSubmit={props.onFormSubmit}
				inputs={formInputs} 
				options={props.employeeSelectOptions}
				formValues={props.formValues}
				setFormInputInState={props.setFormInputInState}
			/>
		</section>
	)
}

export default CreateDependent