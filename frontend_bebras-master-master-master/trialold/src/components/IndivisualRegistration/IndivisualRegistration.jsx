import React from "react";
import './IndivisualRegistration.css';
import Select from 'react-select';
const optionsgender = [
	{ value: 'male', label: 'Male' },
	{ value: 'female', label: 'Female' },
	{ value: 'other', label: 'Other' },
];
const optionsstd = [
	{ value: 'first', label: 'First' },
	{ value: 'second', label: 'Second' },
  { value: 'third', label: 'Third' },
  { value: 'fourth', label: 'Fourth' },
	{ value: 'fifth', label: 'Fifth' },
	{ value: 'sixth', label: 'Sixth' },
];
class IndivisualRegistration extends React.Component{
  state = {
		selectedOption: null,
	};
	handleChange = selectedOption => {
		this.setState({ selectedOption });
		console.log(`Option selected:`, selectedOption);
	};



    constructor(props){
        super(props);
        this.state={
          isOpen: false,
          dataLoaded: false,
          isFormInvalid: false,
          rows: null,
          cols: null
        }
        
      }
  
    render()
    {   const { selectedOption } = this.state;
        return(
            <div className="IndivisualRegistration">
            {/* <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/> */}
        <title>Home </title>
        <meta charSet="UTF-8"></meta>
        <div class="bluesection">
          <h1 class="bluecontent">Register a student</h1>
          <div class="zz-bottom"></div>
        </div>
                <div class=" sign-in-container_indi">
                    <form action="#"  >
                        <h1>Individual Registration Available here</h1>
                        <div class="wrap-input100 validate-input" data-validate="Name is required">
								<input class="input100" type="email" name="loginID" placeholder="First Name" />
								<span class="focus-input100-1"></span>
								<span class="focus-input100-2"></span>
							</div>
              <div class="wrap-input100 validate-input" data-validate="Name is required">
								<input class="input100" type="email" name="loginID" placeholder="Last Name" />
								<span class="focus-input100-1"></span>
								<span class="focus-input100-2"></span>
							</div>
              <Select
								value={selectedOption}
								onChange={this.handleChange}
								placeholder="Select gender"
								options={optionsgender}
							/>
                        <div class="wrap-input100 validate-input" data-validate="Name is required">
								<input class="input100" type="date" name="loginID" placeholder="Birthdate" />
								<span class="focus-input100-1"></span>
								<span class="focus-input100-2"></span>
							</div>
              <Select
								value={selectedOption}
								onChange={this.handleChange}
								placeholder="Select standard"
								options={optionsstd}
							/> 
                           <button>Register</button>
                    </form>
               
            </div>
    </div>

        );
        
    }
    
    
}

export default IndivisualRegistration;
