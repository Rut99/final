import React from "react";
import './IndividualRegistration.css';
import Select from 'react-select';
import Swal from "sweetalert2";

import { userService } from '../../services/user.service';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
const optionsgender = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];
class IndividualRegistration extends React.Component{
  onChangeGender(optionSelected) {

    this.state.gender = optionSelected.value;
    // console.log(optionSelected.value)
  }

    constructor(props){
        super(props);
        this.state={
          firstName: '',
          lastName: '',
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
  
        const { firstName, lastName, gender, phone, birthdate, email,  } = this.state;
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
          localStorage.setItem('registerstudent', JSON.stringify(this.state));
          userService.registerStudent()
            .then(
              user => {
    
                const { from } = this.props.location.state || { from: { pathname: "/teachernew" } };
                this.props.history.push(from);
              },
              error => {
                const { from } = this.props.location.state || { from: { pathname: "/teachernew/IndividualReg" } };
              }
            );
        
        }
    
    

  handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        // console.log(value)
      }
    render()
    {   const { firstName,lastName,email,phone,gender,birthdate} = this.state;
        return(
            <div className="IndivisualRegistration">
            <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
        <title>Home </title>
        <meta charSet="UTF-8"></meta>
        <div class="bluesection">
          <h1 class="bluecontent">Register a student</h1>
          <div class="zz-bottom"></div>
        </div>
                <div class=" sign-in-container_indi">
                    <form action="#" onSubmit={this.handleSubmit} >
                        <h1>Individual Registration Available here</h1>
                        <div class="wrap-input100 validate-input" data-validate="Name is required">
                <input class="input100" type="text" value={firstName} onChange={this.handleChange} required name="firstName" placeholder="First Name" />
                <span class="focus-input100-1"></span>
                <span class="focus-input100-2"></span>
              </div>
              <div class="wrap-input100 validate-input" data-validate="Name is required">
                <input class="input100" type="text" value={lastName}  name="lastName" onChange={this.handleChange}  required placeholder="Last Name" />
                <span class="focus-input100-1"></span>
                <span class="focus-input100-2"></span>
              </div>
              <Select
                // value={gender}
                name="gender"
                onChange={this.onChangeGender}
                placeholder="Select gender"
                options={optionsgender}
              />
                        <div class="wrap-input100 validate-input" data-validate="Name is required">
                <input class="input100" type="date" name="birthdate" onChange={this.handleChange}   value={birthdate} required placeholder="Birthdate" />
                <span class="focus-input100-1"></span>
                <span class="focus-input100-2"></span>
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
              {/* <PhoneInput
                  placeholder="Phone number"
                  name="phone"
                
                  value={phone}
                  onChange={phone => this.setState({ phone })}
                /> */}
                <div className="wrap-input100 validate-input" data-validate="address is required">
                <input className="input100" type="email" onChange={this.handleChange} value={email}   name="email" placeholder="Email" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>
                          <button>Register</button>
                    </form>
              
            </div>
    </div>

        );
        
    }
    
    
}

export default IndividualRegistration;