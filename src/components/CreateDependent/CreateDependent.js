import React from 'react'
import BeneficiaryForm from '../BeneficiaryForm/BeneficiaryForm'

const CreateDependent = (props) => {
	const formInputs = [
		{
			name: "EmployeeId",
			type: "number",
			id: "employeeIdInput",
			placeholder: "Enter an integer value",
			parameter: "employeeId",
			labelText: "Employee Id",
			errorMessage: "Please enter an integer value for the employee id"
		},
		{
			name: "First Name",
			type: "text",
			id: "firstNameInput",
			placeholder: "",
			parameter: "firstName",
			labelText: "First Name",
			errorMessage: "Please enter a first name"
		},
		{
			name: "Last Name",
			type: "text",
			id: "lastNameInput",
			placeholder: "",
			parameter: "lastName",
			labelText: "Last Name",
			errorMessage: "Please enter a last name"
		}
	];

	return (
		<div>
			<h2>Create Dependent view</h2>
			<BeneficiaryForm onChange={props.handleFormChange} onSubmit={props.handleEmployeeFormSubmit} inputs={formInputs} />
		</div>
	)
}

export default CreateDependent

/*
Dependent form input template

name
id
type
placeholder
parameter
labelText
errorMessage

<input type="text" id="employeeId" class="formInput" name="employeeId" placeholder="Enter an integer value">

employeeId
firstName
lastName

*/