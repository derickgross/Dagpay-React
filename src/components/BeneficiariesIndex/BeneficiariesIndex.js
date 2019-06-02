import React from 'react'
import Employee from '../Employee/Employee'

const BeneficiariesIndex = (props) => {
	const employees = props.employees.map(employee => {
		return (
			<Employee 
				key={employee.employeeid}
				employeeId={employee.employeeid}
				firstName={employee.firstName}
				lastName={employee.lastName}
				deduction={employee.deduction}
				dependents={!!employee.dependents ? employee.dependents : []}
			/>
		)
	});

	return (
		<section>
			<h2>Beneficiaries</h2>
			<ul className="employees" onClick={props.displayDependentsListener} onKeyDown={props.displayDependentsListener}>
				{employees}
			</ul>
		</section>
	)
}

export default BeneficiariesIndex