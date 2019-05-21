import React from 'react'

const BeneficiariesIndex = (props) => {
	const employees = props.employees.map(employee => {
		console.log(employee);
		return (
			<h3>{`${employee.firstname} ${employee.lastname}`}</h3>
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