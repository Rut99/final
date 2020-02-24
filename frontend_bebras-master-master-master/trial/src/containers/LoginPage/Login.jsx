	import React from "react";
	import './Login.css';
	import NewApp from '../NewApp/NewApp'
	import { userService } from '../../services/user.service';
	class Now extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				loginID: '',
				password: '',
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
			const { loginID, password } = this.state;
			console.log(this.state)
			if (!(loginID && password)) {
				return;
			}
			userService.login(loginID, password)
				.then(
					user => {

						if(user=="teacher"){
							const { from } = this.props.location.state || { from: { pathname: "/teachernew" } };
							this.props.history.push(from);
							}
							else
							{
								NewApp.calledFromLogin();
								const { from } = this.props.location.state || { from: { pathname: "/newapp" } };
								this.props.history.push(from);
							}
					},
					error => {
						const { from } = this.props.location.state || { from: { pathname: "/login" } };
					}
				);
		}
		render() {
			const { loginID, password,  } = this.state;
			return (
			<div className="Login">
					<title>Home </title>
					<meta charSet="UTF-8"></meta>
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
					<div className="containerTest" id="containerTest">
						<div class="form-container sign-in-container">
							<form action="#"  onSubmit={this.handleSubmit}  >
								<h1>Sign in</h1>
								<div class="social-container">
									<a href="#" class="social1"></a>
									<a href="#" class="social2"></a>
									<a href="#" class="social3"></a>
								</div>
								<div class="dist"></div>

								<div class="wrap-input100 validate-input" data-validate="Name is required">
									<input class="input100" type="text" value={loginID} name="loginID" required placeholder="Email" onChange={this.handleChange} />
									<span class="focus-input100-1"></span>
									<span class="focus-input100-2"></span>
								</div>
								<div class="wrap-input100 validate-input" data-validate="Name is required">
									<input class="input100" type="password" value={password} name="password" required  placeholder="Password" onChange={this.handleChange}/>
									<span class="focus-input100-1"></span>
									<span class="focus-input100-2"></span>
								</div>

								<br></br>
								<button class="buttonlogin">Sign In</button>
								<a href="#">Forgot your password?</a>
								<a href="/newapp/Home">Back To Home</a>
								<a href="/Register">Not a user? Register here!</a>
							</form>
						</div>
						<div class="overlay-container">
							<div class="overlay">

								<div class="overlay-panel overlay-right">
									<h1>Welcome Back!</h1>
									<p>To keep connected with us please login with your personal info</p>

								</div>
							</div>
						</div>

					</div>

				</div>
			);
		}

	}

	export default Now;
