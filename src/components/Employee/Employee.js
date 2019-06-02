import React from 'react'
import Dependent from '../Dependent/Dependent'
import "./Employee.css"

const Employee = (props) => {
	let dependentsDeductions = 0;

	let dependents = [];

	if (props.dependents.length > 0) {
		dependents = props.dependents.map(dependent => {
			dependentsDeductions += Number.parseFloat(dependent.deduction.toFixed(2));

			return (
				<Dependent
					key={`${dependent.firstName}-${dependent.lastName}`}
					employeeId={props.employeeId}
					firstName={dependent.firstName}
					lastName={dependent.lastName}
					deduction={dependent.deduction}
				/>
			)
		})
	}

	return (
		<li 
			key={props.employeeId}
			id={`employee-${props.employeeId}`}
			className="employee"
			tabIndex="0"
		>
			{`${props.firstName} ${props.lastName}: `}
			<span className="money">{`$${props.deduction}`}</span>{dependentsDeductions > 0 ? <span className="money">{` (+$${dependentsDeductions.toFixed(2)})`}</span> : '' }
			<ul className="dependents dependents-hidden">
				{dependents}
			</ul>
		</li>
	)
}

export default Employee