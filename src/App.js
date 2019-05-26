import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import BeneficiariesIndex from './components/BeneficiariesIndex/BeneficiariesIndex'
import CreateEmployee from './components/CreateEmployee/CreateEmployee'
import CreateDependent from './components/CreateDependent/CreateDependent'

const baseURL = 'https://dagpay2.azurewebsites.net/api';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentView: "Beneficiaries",
			employees: [],
			employeeForm: {
				endpoint: "AddEmployee",
				employeeIdInput: "",
				firstNameInput: "",
				lastNameInput: "",
				departmentInput: "",
				experienceInput: 0
			},
			dependentForm: {
				endpoint: "AddDependent",
				employeeIdInput: "Select the dependent's employee",
				firstNameInput: "",
				lastNameInput: ""
			},
			employeeFormInputs: []
		}

		this.supportTabNavigator = this.supportTabNavigator.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.setCurrentView = this.setCurrentView.bind(this);
		this.displayCurrentView = this.displayCurrentView.bind(this);
		this.fetchEmployeesAndDependents = this.fetchEmployeesAndDependents.bind(this);
		this.displayDependents = this.displayDependents.bind(this);
		this.onFormElementChange = this.onFormElementChange.bind(this);
		this.setFormInputInState = this.setFormInputInState.bind(this);
		this.valdiateFormInputValue = this.valdiateFormInputValue.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.calculateTotalDeductions = this.calculateTotalDeductions.bind(this);
	}

	componentDidMount() {
		this.fetchEmployeesAndDependents();
	}

	supportTabNavigator(event) {
		// add focus ring style to support page navigation via tab
	  if (event.key === 'Tab') {
	    document.body.classList.add('tab-navigator');
	  }
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

	async setFormInputInState(formType, inputKey, inputValue) {
		const newState = this.state;

		newState[formType][inputKey] = inputValue;

		await this.setState(newState);
	}

	displayDependents(event) {
		if (!!event.key && event.key !== "Enter") {
			return;
		}

		if (event.target.classList.contains("employee") || event.target.parentElement.classList.contains('employee')) {
			const dependentsList = event.target.closest('li.employee').querySelector('ul');
			dependentsList.classList.contains("dependents-hidden") ? dependentsList.classList.remove("dependents-hidden") : dependentsList.classList.add("dependents-hidden"); // toggle dependents-hidden class, which will show or hide ul
		}
	}

	onFormElementChange(event) {
		const formType = event.target.dataset.formType;
		const inputKey = event.target.id;
		const inputValue = event.target.value;

		this.setFormInputInState(formType, inputKey, inputValue);
		document.querySelector(`p[data-owner=${event.target.id}]`).classList.add('inactive');
		document.querySelector(`p.success`).classList.add('inactive');
	}

	valdiateFormInputValue(input) {
		// input has a value and (there is no validation expression or value matches validation expression)
		const match = String(input.value).match(new RegExp(input.dataset.validation));
		return (!!input.value && (!input.dataset.validation || String(input.value).match(input.dataset.validation)))
	}

	onSuccessfulFormSubmit(event) {
		const form = event.target.dataset.form;
		document.querySelector(`p.success`).classList.remove('inactive');
		document.querySelector(`p.success`).innerHTML= `${this.state[form].firstNameInput} ${this.state[form].lastNameInput} was successfully added.`
		this.resetFormValues(form)
	}

	onFormSubmit(event) {
		event.preventDefault();
		event.persist();
		console.log(`Form submit triggered.` + event.target);

		const form = event.target.dataset.form;
		let body = "params=";
		const inputs = document.querySelectorAll(`*[data-form-type=${form}]`);

		for (let input of inputs) {
			if (this.valdiateFormInputValue(input)) {
				body += `&${input.dataset.parameter}=${this.state[form][input.id]}`;
			} else {
				console.log(`Input validation failed: ${input}`)
				document.querySelector(`p[data-owner=${input.id}`).classList.remove('inactive');
			}
		}

		fetch(`${baseURL}/${this.state[form].endpoint}`, 
			{ method: 'POST', 
				body: body, 
				headers: { 'Content-type': 'application/x-www-form-urlencoded' }
			}
		)
		.then(response => {
		  if (response.status === 200) {
		  	this.onSuccessfulFormSubmit(event);
		  	this.fetchEmployeesAndDependents();
		  	// display success message
		  } else {
		    // display failure message
		  }
		})
		.catch(function(error) {
		  console.log(`Something went wrong while submitting ${form}: ${error}`)
		});
	}

	async resetFormValues(formType) {
		const newState = this.state;

		const newFormState = () => {
			switch (formType) {
				case "employeeForm":
					return {
						endpoint: "AddEmployee",
						employeeIdInput: "",
						firstNameInput: "",
						lastNameInput: "",
						departmentInput: "",
						experienceInput: 0
					}
					break;
				case "dependentForm":
					return {
						endpoint: "AddDependent",
						employeeIdInput: "Select the dependent's employee",
						firstNameInput: "",
						lastNameInput: ""
					}
					break;
				default:
					break;
			}
		}

		newState[formType] = newFormState();

		await this.setState(newState);
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
				return <BeneficiariesIndex 
							employees={this.state.employees} 
							displayDependentsListener={this.displayDependents}
						/>
			case "CreateEmployee":
				return <CreateEmployee 
							onFormElementChange={this.onFormElementChange} 
							setFormInputInState={this.setFormInputInState}
							onFormSubmit={this.onFormSubmit}
							formValues={this.state.employeeForm}
						/>
			case "CreateDependent":
				return <CreateDependent 
							employeeSelectOptions={this.state.employees} 
							onFormElementChange={this.onFormElementChange}
							formValues={this.state.dependentForm}
							setFormInputInState={this.setFormInputInState}
							onFormSubmit={this.onFormSubmit}
						/>
			default:
				return <BeneficiariesIndex 
							employees={this.state.employees} 
							displayDependentsListener={this.displayDependents}
						/>
		}
	}

	calculateTotalDeductions() {
		// calculate deductions attributable to each employee, including dependents for each
		const employeeDeductions = this.state.employees.map(employee => {
			let dependentsDeductions = 0;

			if (!!employee.dependents) {
				employee.dependents.map(dependent => {
					dependentsDeductions += dependent.deduction;
				})
			}

			return employee.deduction + dependentsDeductions;
		})

		return Number.parseFloat(employeeDeductions.reduce((accumulator, currentDeduction) => {
			return accumulator + currentDeduction;
		}, 0)).toFixed(2);
	}

	render() {
		const navbarProps = {
			handleClick: this.handleClick
		}

		const totalDeductions = this.calculateTotalDeductions();

		return (
			<div className="App" onKeyDown={this.supportTabNavigator}>
				<Header navbar={navbarProps}/>
				<Main currentView={this.displayCurrentView} totalDeductions={totalDeductions}/>
				<Footer />
			</div>
		)
	}
}

export default App;
