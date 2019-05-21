import React from 'react'

const BeneficiariesIndex = (props) => {
	const employees = props.employees.map(employee => {
		return (
			<h3 key={employee.employeeid}>{`${employee.firstname} ${employee.lastname}`}</h3>
		)
	});

	return (
		<div>
			<h2>Beneficiaries</h2>
			{employees}
		</div>
	)
}

export default BeneficiariesIndex