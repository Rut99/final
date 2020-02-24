
import React from "react";

import PhoneInput from 'react-phone-number-input'
import './Register.css';
import Select from 'react-select';
const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];
const optionsgender = [
	{ value: 'male', label: 'Male' },
	{ value: 'female', label: 'Female' },
	{ value: 'other', label: 'Other' },
];
const optionsschooltype = [
	{ value: 'public', label: 'Public' },
	{ value: 'private', label: 'Private' },
	{ value: 'other', label: 'Other' },
];
class Register extends React.Component {
	state = {
		selectedOption: null,
	};
	handleChange = selectedOption => {
		this.setState({ selectedOption });
		console.log(`Option selected:`, selectedOption);
	};



	render() {
		const { selectedOption } = this.state;
		return (
			<div className="Register">
				<title>Home </title>
				<meta charSet="UTF-8"></meta>

				<div className="containerTestReg" id="containerTest11">
					<div class="form-container sign-up-container">
						<form action="#" >
							<h1>Teacher Registration</h1>
							<div class="social-container">
								<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
								<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
								<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
							</div>
							<div class="dist"></div>
							<div class="wrap-input100 validate-input" data-validate="address is required">
								<input class="input100" type="text" name="address1" placeholder="Username" />
								<span class="focus-input100-1"></span>
								<span class="focus-input100-2"></span>
							</div>
							<div class="wrap-input100 validate-input" data-validate="address is required">
								<input class="input100" type="password" name="address1" placeholder="Password" />
								<span class="focus-input100-1"></span>
								<span class="focus-input100-2"></span>
							</div>
							<Select
								value={selectedOption}
								onChange={this.handleChange}
								placeholder="Select gender"
								options={optionsgender}
							/>
							<div class="wrap-input100 ">
								<input class="input100" type="date" name="birthdate" placeholder="Birthdate" />
							</div>
							<div class="wrap-input100">
								<PhoneInput
									placeholder="Phone number"
									value={this.state.phone}
									onChange={phone => this.setState({ phone })} />
							</div>

							<div class="wrap-input100 validate-input" data-validate="address is required">
								<input class="input100" type="email" name="address1" placeholder="Email" />
								<span class="focus-input100-1"></span>
								<span class="focus-input100-2"></span>
							</div>
							<div class="dist"></div>
							<button>Sign Up</button>
						</form>
					</div>
					<div class="form-container sign-in-container">
						<form action="#"  >
							<h1>School Register</h1>
							<div class="social-container">
								<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
								<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
								<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
							</div>

							<div class="ddside" style={{ "padding": "0px" }}>
								<Select
									value={selectedOption}
									onChange={this.handleChange}
									placeholder="Select country"
									options={options}
								/>
								<Select
									value={selectedOption}
									onChange={this.handleChange}
									placeholder="Select state"
									options={options}
								/>
								<Select
									value={selectedOption}
									onChange={this.handleChange}
									placeholder="Select district"
									options={options}
								/>

								<div class="wrap-input100 validate-input" data-validate="address is required">
									<input class="input100" type="text" name="address1" placeholder="Address Line 1" />
									<span class="focus-input100-1"></span>
									<span class="focus-input100-2"></span>
								</div>

								<div class="wrap-input100 validate-input" >
									<input class="input100" type="text" name="address2" placeholder="Address Line 2" />
									<span class="focus-input100-1"></span>
									<span class="focus-input100-2"></span>
								</div>

								<div class="wrap-input100 validate-input" data-validate="Name is required">
									<input class="input100" type="text" name="city" placeholder="City" />
									<span class="focus-input100-1"></span>
									<span class="focus-input100-2"></span>
								</div>

								<div class="wrap-input100 validate-input" data-validate="Name is required">
									<input class="input100" type="text" name="pincode" placeholder="Pincode" />
									<span class="focus-input100-1"></span>
									<span class="focus-input100-2"></span>
								</div>

								<div class="wrap-input100 validate-input" data-validate="Name is required">
									<input class="input100" type="text" name="schoolname" placeholder="School name" />
									<span class="focus-input100-1"></span>
									<span class="focus-input100-2"></span>
								</div>
								<Select
									value={selectedOption}
									onChange={this.handleChange}
									placeholder="Select school type"
									options={optionsschooltype}
								/>

								<div class="wrap-input100 validate-input" data-validate="Name is required">
									<input class="input100" type="text" name="udaise" placeholder="UDAISE code" />
									<span class="focus-input100-1"></span>
									<span class="focus-input100-2"></span>
								</div>

								<div class="wrap-input100">
									<PhoneInput
										placeholder="Phone number"
										value={this.state.phone}
										onChange={phone => this.setState({ phone })} />
								</div>
							</div>
							<div class="dist"> </div>
							<button>Register school</button>
							<div class="dist"> </div>
						</form>
					</div>
					<div class="overlay-container">
						<div class="overlay">
							<div class="overlay-panel overlay-left">
								<h1>Step 2</h1>
								<p>Enter your personal details and start journey with us</p>

								<button class="ghost" id="signIn" onClick={this.Signin}>Back</button>
							</div>
							<div class="overlay-panel overlay-right">
								<h1>Step 1</h1>
								<p>If School registered Click continue to proceed</p>
								<button class="ghost" id="signUp" onClick={this.Signup}>Continue</button>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}
	componentDidMount() {
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container111 = document.getElementById('containerTest11');

		signUpButton.addEventListener('click', () => {
			container111.classList.add("right-panel-active");
		});

		signInButton.addEventListener('click', () => {
			container111.classList.remove("right-panel-active");
		});
	}

}


export default Register;