import React from "react";
import { userService } from '../../services/user.service';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import './Register.css';
import {
	BrowserRouter as Router,
	Redirect,
} from "react-router-dom";

import Swal from "sweetalert2";
import Select from 'react-select';
const options = [
	'1', '2', '3', '4', '5', '6', '7', '8'
];
const optionsCountry = [];
const optionschool = [];
const optionsClasses = [];
const optionsState = [];
const optionsDistrict = [];
const optionsgender = [
	{ value: 'male', label: 'Male' },
	{ value: 'female', label: 'Female' },
	{ value: 'other', label: 'Other' },
];
const optionsschooltype = [
	{ value: 'government', label: 'Government' },
	{ value: 'private', label: 'Private' },
	{ value: 'other', label: 'Other' },
];
class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			password: '',
			gender: '',
			phone: '',
			birthdate: '',
			email: '',
			country: '',
			state: '',
			district: '',
			line1: '', line2: '', city: '', pincode: '',
			schoolName: '', schoolType: '', UDISEcode: '', contact: '',
			classes: [],

		};


		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChangeCountry = this.onChangeCountry.bind(this);
		this.onChangeDistrict = this.onChangeDistrict.bind(this);
		this.onChangeSchoolType = this.onChangeSchoolType.bind(this);
		this.onChangeState = this.onChangeState.bind(this);
		this.onChangeGender = this.onChangeGender.bind(this);
		this.onChangeClasses = this.onChangeClasses.bind(this);
		this.onChangeSchool = this.onChangeSchool.bind(this);
		options.forEach(function (element) { //options in for standards
			optionsClasses.push({ label: element, value: element })
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		const { userName, password, gender, phone, birthdate, email, country, state, district, line1, line2, city, pincode, schoolName, schoolType, UDISEcode, contact, classes } = this.state;
		if (phone && !isValidPhoneNumber(phone) || contact && !isValidPhoneNumber(contact)) {
			Swal.fire({
				imageUrl: require('../../images/failure.gif'),
				imageAlt: 'Custom Image',
				title: "Enter Valid Phone Number ",
				showConfirmButton: true,
				timer: 1500000
			});
			return;
		}
		if (userName && password) {
			if (!schoolName) {
				Swal.fire({
					imageUrl: require('../../images/failure.gif'),
					imageAlt: 'Custom Image',
					title: "Enter SchoolName ",
					showConfirmButton: true,
					timer: 1500000
				});
				return;
			}
			if (!gender) {
				Swal.fire({
					imageUrl: require('../../images/failure.gif'),
					imageAlt: 'Custom Image',
					title: "Enter Gender ",
					showConfirmButton: true,
					timer: 1500000
				});
				return;
			}
			const user = { userName: this.state.userName, password: this.state.password, gender: this.state.gender, phone: this.state.phone, birthdate: this.state.birthdate, email: this.state.email, school: this.state.schoolName };
			console.log(user);
			localStorage.setItem('registeruser', JSON.stringify(user));
			userService.register()
				.then(
					user => {

						console.log(user)



						const { from } = this.props.location.state || { from: { pathname: "/Login" } };
						this.props.history.push(from);

					}
				).catch(
					error => {
						return <Redirect to='http://localhost:3000/Register' />;
					});
		} else {
			console.log(this.state)
			if (!country || !state || !district || !schoolType || classes.length == 0) {
				Swal.fire({
					imageUrl: require('../../images/failure.gif'),
					imageAlt: 'Custom Image',
					title: "Please select something from dropdowns ",
					showConfirmButton: true,
					timer: 1500000
				});
				return;
			}
			var classarr = []
			this.state.classes.map(o => {
				classarr.push(Number(o.value));
			});
			this.state.classes = classarr;
			// console.log("ok", this.state.classes)
			this.state.UDISEcode = Number(this.state.UDISEcode);
			const address = { line1: this.state.line1, line2: this.state.line2, city: this.state.city, pincode: this.state.pincode };
			const school = { schoolName: this.state.schoolName, schoolType: this.state.schoolType, UDISEcode: this.state.UDISEcode, phone: this.state.contact };
			const sttate = { country: this.state.country, state: this.state.state, district: this.state.district, school: school, address: address, classes: this.state.classes };
			// console.log(school, address, sttate)
			localStorage.setItem('registerschool', JSON.stringify(sttate));
			userService.registerSchool()
				.then(
					school => {
						console.log("submitted")
						this.state = null;
						window.location.reload();

					},
					error => {
						console.log(error);
						this.props.history.push('/Register');
						;
					}
				);
		}




	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
		// console.log(value)
	}
	onChangeGender(optionSelected) {
		this.state.gender = optionSelected.value;
		// console.log(optionSelected.value)
	}
	onChangeClasses(option) {
		// console.log(option.value)
		this.setState(state => {
			return {
				"classes": option
			};
		});
		// console.log(this.state.classes)

	}
	onChangeCountry(optionSelected) {

		this.state.country = optionSelected.value;
		// console.log(optionSelected.value)
		var arry;
		userService.getStateNames(this.state.country).then(
			array2 => {
				arry = array2;
				// console.log(arry);
				arry.forEach(function (element) {
					optionsState.push({ label: element, value: element })
				});
			},
			error => {
				console.log(error);
			}
		);
	}
	onChangeState(optionSelected) {

		this.state.state = optionSelected.value;
		// console.log(optionSelected.value);
		var arry;
		userService.getDistrictNames(this.state.state).then(
			array2 => {
				arry = array2;
				// console.log(arry);
				arry.forEach(function (element) {
					optionsDistrict.push({ label: element, value: element })
				});
			},
			error => {
				console.log(error);

			}
		);
	}
	onChangeSchool(optionSelected) {
		this.state.schoolName = optionSelected.value;
		// console.log(optionSelected.value)
	}
	onChangeDistrict(optionSelected) {

		this.state.district = optionSelected.value;
		// console.log(optionSelected.value)
	}
	onChangeSchoolType(optionSelected) {

		this.state.schoolType = optionSelected.value;
		// console.log(optionSelected.value)
	}
	render() {
		const { userName, password, gender, phone, birthdate, email, country, state, district, line1, line2, city, pincode, schoolName, schoolType, UDISEcode, contact, classes } = this.state;
		return (
			<div className="Register">
				<title>Home </title>
				<meta charSet="UTF-8"></meta>

				<div className="containerTestReg" id="containerTest11">
					<div className="form-container sign-up-container">
						<form action="#" onSubmit={this.handleSubmit}  >
							<h1>Teacher Registration</h1>
							<div className="social-container">
								<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
								<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
								<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
							</div>
							<div className="dist"></div>
							<Select
								name="schoolName"
								required as="select"
								onChange={this.onChangeSchool}
								placeholder="Select school"
								options={optionschool}
							/>
							<div className="wrap-input100 validate-input" data-validate="address is required">
								<input className="input100" type="text" value={userName} name="userName" required placeholder="Username" onChange={this.handleChange} />
								<span className="focus-input100-1"></span>
								<span className="focus-input100-2"></span>
							</div>
							<div className="wrap-input100 validate-input" data-validate="address is required">
								<input className="input100" type="password" value={password} name="password" required placeholder="Password" onChange={this.handleChange} />
								<span className="focus-input100-1"></span>
								<span className="focus-input100-2"></span>
							</div>
							<Select
								name="school"
								required as="select"
								onChange={this.onChangeGender}
								placeholder="Select gender"
								options={optionsgender}
							/>
							<div className="wrap-input100 ">
								<input className="input100" type="date" name="birthdate" value={birthdate} required placeholder="Birthdate" onChange={this.handleChange} />
							</div>
							<div className="wrap-input100">
								<PhoneInput
									placeholder="Phone number"
									name="phone"
									required
									value={phone}
									onChange={phone => this.setState({ phone })}
								/>
							</div>

							<div className="wrap-input100 validate-input" data-validate="address is required">
								<input className="input100" type="email" onChange={this.handleChange} value={email} required name="email" placeholder="Email" />
								<span className="focus-input100-1"></span>
								<span className="focus-input100-2"></span>
							</div>
							<div className="dist"></div>
							<button>Sign Up</button>
						</form>
					</div>
					<div className="form-container sign-in-container">
						<form action="#" onSubmit={this.handleSubmit}>
							<h1>School Register</h1>
							<div className="social-container">
								<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
								<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
								<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
							</div>

							{/* <div className="ddside" style={{ "padding": "0px" }}> */}
							<Select
								name="country"
								// value={country}
								onChange={this.onChangeCountry}
								placeholder="Select country"
								required as="select"
								options={optionsCountry}
							/>
							<Select
								// value={state}
								onChange={this.onChangeState}
								required as="select"
								name="state"
								placeholder="Select state"
								options={optionsState}
							/>
							<Select
								name="district"
								required as="select"
								// value={district}
								onChange={this.onChangeDistrict}
								placeholder="Select district"
								options={optionsDistrict}
							/>

							<div className="wrap-input100 validate-input" data-validate="address is required">
								<input className="input100" type="text" value={line1} name="line1" required placeholder="Address Line 1" onChange={this.handleChange} />
								<span className="focus-input100-1"></span>
								<span className="focus-input100-2"></span>
							</div>

							<div className="wrap-input100 validate-input" >
								<input className="input100" type="text" value={line2} name="line2" placeholder="Address Line 2" onChange={this.handleChange} />
								<span className="focus-input100-1"></span>
								<span className="focus-input100-2"></span>
							</div>

							<div className="wrap-input100 validate-input" data-validate="Name is required">
								<input className="input100" type="text" value={city} name="city" required placeholder="City" onChange={this.handleChange} />
								<span className="focus-input100-1"></span>
								<span className="focus-input100-2"></span>
							</div>

							<div className="wrap-input100 validate-input" data-validate="Name is required">
								<input className="input100" type="text" value={pincode} name="pincode" required placeholder="Pincode" onChange={this.handleChange} />
								<span className="focus-input100-1"></span>
								<span className="focus-input100-2"></span>
							</div>

							<div className="wrap-input100 validate-input" data-validate="Name is required">
								<input className="input100" type="text" value={schoolName} name="schoolName" required placeholder="School name" onChange={this.handleChange} />
								<span className="focus-input100-1"></span>
								<span className="focus-input100-2"></span>
							</div>
							<Select

								// value={schoolType} 
								name="schoolType" required as="select"
								onChange={this.onChangeSchoolType}
								placeholder="Select school type"
								options={optionsschooltype}
							/>

							<div className="wrap-input100 validate-input" data-validate="Name is required">
								<input className="input100" type="text" value={UDISEcode} name="UDISEcode" placeholder="UDISE code" onChange={this.handleChange} />
								<span className="focus-input100-1"></span>
								<span className="focus-input100-2"></span>
							</div>

							<div className="wrap-input100">
								<PhoneInput
									name="contact"
									required
									placeholder="Phone number"
									value={contact}
									onChange={contact => this.setState({ contact })}
									error={contact && isValidPhoneNumber(contact) ? 'true' : 'false'} />

							</div>
							<Select
								isMulti
								value={classes}
								placeholder=" Classes Available in School"
								onChange={this.onChangeClasses}
								options={optionsClasses}
							/>

							{/* </div> */}

							<div className="dist"> </div>
							<button>Register school</button>
							<a href="/newapp/Home">Back To Home</a>
							<div className="dist"> </div>
						</form>
					</div>
					<div className="overlay-container">
						<div className="overlay">
							<div className="overlay-panel overlay-left">
								<h1>Step 2</h1>
								<p>Enter your personal details and start journey with us</p>

								<button className="ghost" id="signIn" onClick={this.Signin}>Back</button>
							</div>
							<div className="overlay-panel overlay-right">
								<h1>Step 1</h1>
								<p > If School is already registered, {/*style={{fontSize:"20px"}}*/}
									Click continue to proceed</p>
								<button className="ghost" id="signUp" onClick={this.Signup}>Continue</button>

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
		var array1 = ['a', 'b', 'c'];
		var arry = ["India"];
		userService.getCountryNames().then(
			array2 => {
				arry = array2;
				// console.log(arry)
				arry.forEach(function (element) {
					optionsCountry.push({ label: element, value: element })
				});
			},
			error => {
				console.log(error);
				const { from } = this.props.location.state || { from: { pathname: "/Register" } };
			}
		); userService.getSchoolNames().then(
			array2 => {
				arry = array2;

				arry.forEach(function (element) {
					optionschool.push({ label: element, value: element })
				});
			},
			error => {
				console.log(error);
				const { from } = this.props.location.state || { from: { pathname: "/Register" } };
			}
		);


	}

}


export default Register;


