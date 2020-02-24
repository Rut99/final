import React from 'react';
import Select from 'react-select';
import './TeacherReg.css';
import PhoneInput from 'react-phone-number-input'
const options = {
  filterType: 'checkbox',
};
const optionsdd = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const optionsgender = [
	{ value: 'male', label: 'Male' },
	{ value: 'female', label: 'Female' },
	{ value: 'other', label: 'Other' },
];

class BulkRegistration extends React.Component {
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
      <div className="TeacherReg ">
       {/* <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/> */}
        <title>Home </title>
        <meta charSet="UTF-8"></meta>
        <div class="bluesection">
          <h1 class="bluecontent">Register a teacher</h1>
          <div class="zz-bottom"></div>
        </div>
		
		<div class=" sign-in-container_indi">
		<form action="#" >
		<h1>Teacher Registration</h1>
							
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


</div>
    );
  }


}

export default BulkRegistration;
