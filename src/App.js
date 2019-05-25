import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import BeneficiariesIndex from './components/BeneficiariesIndex/BeneficiariesIndex'
import CreateEmployee from './components/CreateEmployee/CreateEmployee'
import CreateDependent from './components/CreateDependent/CreateDependent'
// import { employeeFormInputs, dependentFormInputs } from './formInputs' 

const baseURL = 'https://dagpay2.azurewebsites.net/api';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentView: "Beneficiaries",
			employees: [],
			employeeForm: {

			},
			dependentForm: {
				employeeId: "Select the dependent's employee"
			},
			employeeFormInputs: []
		}

		this.handleClick = this.handleClick.bind(this);
		this.setCurrentView = this.setCurrentView.bind(this);
		this.displayCurrentView = this.displayCurrentView.bind(this);
		this.fetchEmployeesAndDependents = this.fetchEmployeesAndDependents.bind(this);
		this.addEmployee = this.addEmployee.bind(this);
		this.addDependent = this.addDependent.bind(this);
		this.displayDependents = this.displayDependents.bind(this);
		this.onFormElementChange = this.onFormElementChange.bind(this);
		this.setFormInputs = this.setFormInputs.bind(this);
	}

	componentDidMount() {
		this.fetchEmployeesAndDependents();

		// this.setEmployeeFormInputs()
		// console.log(`inputs from state: ${this.state.employeeFormInputs}`)
		// console.log(`employees from state: ${this.state.employees}`)
		// for (ninja of this.state.employeeFormInputs) {
		// 	employeeForm[ninja.id] = ninja.defaultValue
		// }

		// const employeeForm = {}
		

		// const dependentForm = {}
		// for (element)
	}

	fetchEmployeesAndDependents() {
		fetch(`${baseURL}/GetEmployeesAndDependents`, {
			method: 'GET'
		})
		.then(response => {
			response.json()
			.then(data => {
				this.setState(prevState => {
					return { employees: data }
				})
			})
			.catch(error => console.log('Processing JSON failed: ', error))
		})
		.catch(error => console.log('Something went wrong: ', error));
	}

	async setFormInput(formType, inputKey, inputValue) {
		const newState = {};
		newState[inputKey] = inputValue;

		await this.setState(newState);
	}

	addEmployee() {
		// const employee = {
		//   employeeid: document.getElementById('employeeId').value,
		//   firstname: document.getElementById('employeeFirstname').value,
		//   lastname: document.getElementById('employeeLastname').value,
		//   department: document.getElementById('employeeDepartment').value,
		//   experience: document.getElementById('employeeExperience').value
		// }

		// const body = `employeeid=${employee.employeeid}&firstname=${employee.firstname}&lastname=${employee.lastname}&department=${employee.department}&experience=${employee.experience}`;

		fetch(`${baseURL}/AddEmployee`, {
			method: 'POST',
			data: {}
		})
	}

	addDependent() {

	}

	displayDependents(event) {
		if (!!event.key && event.key != "Enter") {
			return;
		}

		if (event.target.classList.contains("employee") || event.target.parentElement.classList.contains('employee')) {
			const dependentsList = event.target.closest('li.employee').querySelector('ul');
			dependentsList.classList.contains("display") ? dependentsList.classList.remove("display") : dependentsList.classList.add("display"); // toggle display class, which will show or hide ul
		}
	}

	onFormElementChange(event) {
		console.log(`One of the form elements changed: ${event.target.id}`)
	}

	handleClick(event) {
		event.preventDefault();

		const newView = event.target.dataset.view;

		this.setCurrentView(newView);

		this.displayCurrentView();
	}

	async setCurrentView(view) {
		await this.setState(prevState => {
			return { currentView: view }
		});
	}

	displayCurrentView() {
		switch (this.state.currentView) {
			case "BeneficiariesIndex":
				return <BeneficiariesIndex employees={this.state.employees} displayDependentsListener={this.displayDependents}/>
			case "CreateEmployee":
				return <CreateEmployee 
							onFormElementChange={this.onFormElementChange} 
							setEmployeeFormInputs={this.setEmployeeFormInputs}
						/>
			case "CreateDependent":
				return <CreateDependent 
							employeeSelectOptions={this.state.employees} 
							onFormElementChange={this.onFormElementChange}
							formValues={this.state.dependentForm}
							setDependentFormInputs={this.setDependentFormInputs}
						/>
			default:
				return <BeneficiariesIndex employees={this.state.employees} displayDependentsListener={this.displayDependents}/>
		}
	}

	render() {
		const navbarProps = {
			handleClick: this.handleClick
		}

		return (
			<div className="App">
				<Header navbar={navbarProps}/>
				<Main currentView={this.displayCurrentView}/>
				<Footer />
			</div>
		)
	}
}

export default App;
