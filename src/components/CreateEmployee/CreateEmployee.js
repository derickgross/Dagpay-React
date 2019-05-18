import React from 'react'
import BeneficiaryForm from '../BeneficiaryForm/BeneficiaryForm'

const CreateEmployee = (props) => {
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
		},
		{
			name: "Department",
			type: "text",
			id: "departmentInput",
			placeholder: "",
			parameter: "department",
			labelText: "Department",
			errorMessage: "Please enter a department"
		},
		{
			name: "Experience",
			type: "number",
			id: "experienceInput",
			placeholder: "Enter an integer value (years)",
			parameter: "experience",
			labelText: "Experience",
			errorMessage: "Please enter an integer value for experience"
		}
	];

	return (
		<section>
			<h2>Add Employee view</h2>
			<BeneficiaryForm onChange={props.handleFormChange} onSubmit={props.handleEmployeeFormSubmit} inputs={formInputs} />
		</section>
	)
}

export default CreateEmployee


/*
Employee form input template

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
department
experience

*/