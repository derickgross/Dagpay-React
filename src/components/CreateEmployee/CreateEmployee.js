import React from 'react'
import BeneficiaryForm from '../BeneficiaryForm/BeneficiaryForm'
import { employeeFormInputs as formInputs } from '../../formInputs'

const CreateEmployee = (props) => {

	return (
		<section>
			<h2>Add Employee view</h2>
			<BeneficiaryForm 
				onFormElementChange={props.onFormElementChange} 
				onFormSubmit={props.onFormSubmit} 
				inputs={formInputs}
			/>
		</section>
	)
}

export default CreateEmployee