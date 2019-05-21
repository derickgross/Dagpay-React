import React from 'react'
import BeneficiaryForm from '../BeneficiaryForm/BeneficiaryForm'
import { employeeFormInputs as formInputs } from '../../formInputs'

const CreateEmployee = (props) => {
	return (
		<section>
			<h2>Add Employee view</h2>
			<BeneficiaryForm onChange={props.handleFormChange} onSubmit={props.handleEmployeeFormSubmit} inputs={formInputs} />
		</section>
	)
}

export default CreateEmployee