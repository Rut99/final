	import React from "react";
	import './Login.css';
	import NewApp from '../NewApp/NewApp'
	import Swal from "sweetalert2";
	import { userService } from '../../services/user.service';
	import queryString from 'query-string'
	class resetpassword extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				confirmpassword: '',
				password: '',
				uidb64:'',
				token:''
			};
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}

		handleChange(e) {
			const { name, value } = e.target;
			this.setState({ [name]: value });
		}


		handleSubmit(e) {
			e.preventDefault();
			const values = queryString.parse(this.props.location.search)
			console.log(values.uidb64) 
			console.log(values.token)
			console.log("hohihihihi")
			const uidb64=values.uidb64;
			const token=values.token;
			const { confirmpassword, password } = this.state;
			console.log(this.state)
			console.log(this.props)
			if (!(confirmpassword && password)) {
				return;
			}
			if(confirmpassword!=password){
				Swal.fire({
					imageUrl: require('../../images/failure.gif'),
					imageAlt: 'Custom Image',
					title: 'Your passwords dont match',
					showConfirmButton: true,
					timer: 1500000
				  });
				return;
			}
			userService.ConfirmResetPasswordView(password,uidb64,token)
				.then(
					user => {
						console.log('hihandle')
						const { from } = this.props.location.state || { from: { pathname: "http://localhost:3000/Login" } };
					
					},
					error => {
						Swal.fire({
							imageUrl: require('../../images/failure.gif'),
							imageAlt: 'Custom Image',
							title: 'Please try again',
							showConfirmButton: true,
							timer: 1500000
						  });
						const { from } = this.props.location.state || { from: { pathname: "http://localhost:3000/Login" } };
					}
				);
		}
		render() {
			const { confirmpassword, password,  } = this.state;
			return (
			<div className="Login">
					<title>Home </title>
					<meta charSet="UTF-8"></meta>
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
					<div className="containerTest" id="containerTest">
						<div class="form-container sign-in-container">
							<form action="#"  onSubmit={this.handleSubmit}  >
								<h1>Reset Password</h1>
								<div class="social-container">
									<a href="#" class="social1"></a>
									<a href="#" class="social2"></a>
									<a href="#" class="social3"></a>
								</div>
								<div class="dist"></div>

								<div class="wrap-input100 validate-input" data-validate="Name is required">
									<input class="input100" type="password" value={password} name="password" required placeholder="New password" onChange={this.handleChange} />
									<span class="focus-input100-1"></span>
									<span class="focus-input100-2"></span>
								</div>
								<div class="wrap-input100 validate-input" data-validate="Name is required">
									<input class="input100" type="password" value={confirmpassword} name="confirmpassword" required  placeholder="Confirm Password" onChange={this.handleChange}/>
									<span class="focus-input100-1"></span>
									<span class="focus-input100-2"></span>
								</div>

								<br></br>
								<button class="buttonlogin">Change Password</button>
								
								<a href="/Login">Back To Login</a>
							
							</form>
						</div>
						<div class="overlay-container">
							<div class="overlay">

								<div class="overlay-panel overlay-right">
									<h1>Welcome Back!</h1>
									<p>To change password please fill in the details.</p>

								</div>
							</div>
						</div>

					</div>

				</div>
			);
		}

	}

	export default resetpassword;
