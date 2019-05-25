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

// vanilla JS version body and fetch call
// const body = `employeeid=${employee.employeeid}&firstname=${employee.firstname}&lastname=${employee.lastname}&department=${employee.department}&experience=${employee.experience}`;

// fetch(addEmployeeEndpoint, { method: 'POST', body: body, headers: { 'Content-type': 'application/x-www-form-urlencoded' } })
// .then(function(response) {
//   if (response.status === 200) {
//     const confirmationElement = document.getElementById('confirmEmployeeAdded');
//     displayConfirmationMessage(confirmationElement, employee);
//     clearForms();
//     populatePage();
//   } else {
//     displayErrorMessage(errorElement, employee);
//   }
// })
// .catch(function(error) {
//   displayErrorMessage(errorElement, employee);
// });