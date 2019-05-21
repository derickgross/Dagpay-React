import React from 'react'
import Dependent from '../Dependent/Dependent'

const Employee = (props) => {
	const dependents = props.dependents.map(dependent => {
		return (
			<Dependent
				key={1}
				employeeId={props.employeeid}
				firstName={dependent.firstname}
				lastName={dependent.lastname}
				deduction={dependent.deduction}
			/>
		)
	})

	return (
		<li 
			key={props.employeeid}
			id={`employee-${props.employeeid}`}
			className="employee"
			tabIndex="0"
		>
			{`${props.firstName} ${props.lastName}: `}
			<span className="money">{`$${props.deduction}`}</span>
			<ul>
				{dependents}
			</ul>
		</li>
	)
}

export default Employee