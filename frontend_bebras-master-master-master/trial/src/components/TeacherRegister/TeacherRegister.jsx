import React from 'react';
import Select from 'react-select';
import './TeacherRegister.css';
import { userService } from '../../services/user.service';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import Swal from "sweetalert2";
const optionsgender = [
	{ value: 'male', label: 'Male' },
	{ value: 'female', label: 'Female' },
	{ value: 'other', label: 'Other' },
];

class TeacherRegister extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			password: '',
			gender: '',
			phone: '',
			birthdate: '',
			email: '',
	};


		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	
		this.onChangeGender = this.onChangeGender.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const { userName, password, gender, phone, birthdate, email } = this.state;
		if (phone && !isValidPhoneNumber(phone) ) {
			Swal.fire({
				imageUrl: require('../../images/failure.gif'),
				imageAlt: 'Custom Image',
				title: "Enter Valid Phone Number ",
				showConfirmButton: true,
				timer: 1500000
			});
			return;
		}
			if(!gender)
			{
				Swal.fire({
					imageUrl: require('../../images/failure.gif'),
					imageAlt: 'Custom Image',
					title: "Enter Gender ",
					showConfirmButton: true,
					timer: 1500000
				});
				return;
			}
			console.log(this.state);
			localStorage.setItem('registerteacher', JSON.stringify(this.state));
			userService.registerTeacher()
				.then(
					user => {

						const { from } = this.props.location.state || { from: { pathname: "/teachernew" } };
						this.props.history.push(from);
					},
					error => {
						const { from } = this.props.location.state || { from: { pathname: "/teachernew/TeacherReg" } };
						this.props.history.push(from);
					}
				);
		
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
  render() {
	   const { userName,password,email,phone,gender,birthdate} = this.state;

    return (
      <div className="TeacherReg ">
       <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
        <title>Home </title>
        <meta charSet="UTF-8"></meta>
        <div class="bluesection">
          <h1 class="bluecontent">Register a teacher</h1>
          <div class="zz-bottom"></div>
        </div>
		<div class=" sign-in-container_indi">
		<form action="#" onSubmit={this.handleSubmit} >
		<h1>Teacher Registration</h1>
							
							<div class="dist"></div>
							<div class="wrap-input100 validate-input" data-validate="address is required">
							<input className="input100" type="text" value={userName} name="userName" required placeholder="Username" onChange={this.handleChange} />
								<span class="focus-input100-1"></span>
								<span class="focus-input100-2"></span>
							</div>
							<div class="wrap-input100 validate-input" data-validate="address is required">
							<input className="input100" type="password" value={password} name="password" required placeholder="Password" onChange={this.handleChange} />
								<span class="focus-input100-1"></span>
								<span class="focus-input100-2"></span>
							</div>
							<Select
								// value={gender}
								onChange={this.onChangeGender}
								placeholder="Select gender"
								options={optionsgender}
							/>
							<div class="wrap-input100 ">
							<input className="input100" type="date" name="birthdate" value={birthdate} required placeholder="Birthdate" onChange={this.handleChange} />
							</div>
							<div class="wrap-input100">
								<PhoneInput
									placeholder="Phone number"
									name="phone"
									required
									value={phone}
									onChange={phone => this.setState({ phone })} />
							</div>
							

							<div class="wrap-input100 validate-input" data-validate="address is required">
							<input className="input100" type="email" onChange={this.handleChange} value={email}  required name="email" placeholder="Email" />
								<span class="focus-input100-1"></span>
								<span class="focus-input100-2"></span>
							</div>
							<div class="dist"></div>
							<button>Sign Up</button>
						</form>
					

			</div>


</div>
    );
  }


}

export default TeacherRegister 	;