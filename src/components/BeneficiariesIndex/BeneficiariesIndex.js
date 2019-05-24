import React from 'react'
import Employee from '../Employee/Employee'

const BeneficiariesIndex = (props) => {
	const employees = props.employees.map(employee => {
		return (
			<Employee 
				key={employee.employeeid}
				employeeId={employee.employeeid}
				firstName={employee.firstname}
				lastName={employee.lastname}
				deduction={employee.deduction}
				dependents={!!employee.dependents ? employee.dependents : []}
			/>
		)
	});

	return (
		<div>
			<h2>Beneficiaries</h2>
			<ul onClick={props.displayDependentsListener} onKeyDown={props.displayDependentsListener}>
				{employees}
			</ul>
		</div>
	)
}

export default BeneficiariesIndex