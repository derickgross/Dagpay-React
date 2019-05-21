const employeeFormInputs = [
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

const dependentFormInputs = [
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


module.exports = {
	employeeFormInputs,
	dependentFormInputs
}