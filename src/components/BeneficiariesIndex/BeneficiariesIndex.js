import React from 'react'

const BeneficiariesIndex = (props) => {
	const employees = props.employees.map(employee => {
		return (
			<li 
				key={employee.employeeid}
				id={`employee-${employee.employeeid}`}
				className="employee"
				tabIndex="0"
			>
				{`${employee.firstname} ${employee.lastname}`}
			</li>
		)
	});

	return (
		<div>
			<h2>Beneficiaries</h2>
			<ul>
				{employees}
			</ul>
		</div>
	)
}

export default BeneficiariesIndex