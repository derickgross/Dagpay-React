const employeeFormInputs = [
	{
		name: "EmployeeId",
		type: "number",
		id: "employeeIdInput",
		placeholder: "Enter an integer value",
		parameter: "employeeid",
		labelText: "Employee Id",
		errorMessage: "Please enter an integer value for the employee id",
		elementType: "input",
		formType: "employeeForm",
		defaultValue: "",
		validation: "^[0-9]*$"
	},
	{
		name: "First Name",
		type: "text",
		id: "firstNameInput",
		placeholder: "",
		parameter: "firstname",
		labelText: "First Name",
		errorMessage: "Please enter a first name",
		elementType: "input",
		formType: "employeeForm",
		defaultValue: "",
		validation: ""
	},
	{
		name: "Last Name",
		type: "text",
		id: "lastNameInput",
		placeholder: "",
		parameter: "lastname",
		labelText: "Last Name",
		errorMessage: "Please enter a last name",
		elementType: "input",
		formType: "employeeForm",
		defaultValue: "",
		validation: ""
	},
	{
		name: "Department",
		type: "text",
		id: "departmentInput",
		placeholder: "",
		parameter: "department",
		labelText: "Department",
		errorMessage: "Please enter a department",
		elementType: "input",
		formType: "employeeForm",
		defaultValue: "",
		validation: ""
	},
	{
		name: "Experience",
		type: "number",
		id: "experienceInput",
		placeholder: "Enter an integer value (years)",
		parameter: "experience",
		labelText: "Experience",
		errorMessage: "Please enter an integer value for experience",
		elementType: "input",
		formType: "employeeForm",
		defaultValue: "",
		validation: "^[0-9]*$"
	}
];

/*
Employee form input template

name
id
type
placeholder
parameter
labelText
errorMessage
elementType

<input type="text" id="employeeId" class="formInput" name="employeeId" placeholder="Enter an integer value">

employeeId
firstName
lastName
department
experience

*/

const dependentFormInputs = [
	{
		name: "EmployeeId",
		type: "number",
		id: "employeeIdInput",
		placeholder: "Enter an integer value",
		parameter: "employeeid",
		labelText: "Employee Id",
		errorMessage: "Please enter an integer value for the employee id",
		elementType: "select",
		formType: "dependentForm",
		defaultValue: "^[0-9]*$"
	},
	{
		name: "First Name",
		type: "text",
		id: "firstNameInput",
		placeholder: "",
		parameter: "firstname",
		labelText: "First Name",
		errorMessage: "Please enter a first name",
		elementType: "input",
		formType: "dependentForm",
		defaultValue: "",
		validation: ""
	},
	{
		name: "Last Name",
		type: "text",
		id: "lastNameInput",
		placeholder: "",
		parameter: "lastname",
		labelText: "Last Name",
		errorMessage: "Please enter a last name",
		elementType: "input",
		formType: "dependentForm",
		defaultValue: "",
		validation: ""
	}
];

/*
Dependent form input template

name
id
type
placeholder
parameter
labelText
errorMessage
elementType

<input type="text" id="employeeId" class="formInput" name="employeeId" placeholder="Enter an integer value">

employeeId
firstName
lastName

*/


module.exports = {
	employeeFormInputs,
	dependentFormInputs
}