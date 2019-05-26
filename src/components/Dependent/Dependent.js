import React from 'react'

const Dependent = (props) => {
	return (
		<li 
			key={props.employeeid}
			id={`employee-${props.employeeId}`}
			className="dependent"
			tabIndex="0"
		>
			{`${props.firstName} ${props.lastName}: `}
			<span className="money">{`$${props.deduction}`}</span>
		</li>
	)
}

export default Dependent