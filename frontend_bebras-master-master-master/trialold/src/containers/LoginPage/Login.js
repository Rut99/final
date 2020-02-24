import React from "react";
import './Login.css';

class Now extends React.Component {
	render() {
		
		return (

			<div className="Login">
				<title>Home </title>
				<meta charSet="UTF-8"></meta>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
				<div className="containerTest" id="containerTest">
					<div class="form-container sign-in-container">
						<form action="#"  >
							<h1>Sign in</h1>
							<div class="social-container">
								<a href="#" class="social1"></a>
								<a href="#" class="social2"></a>
								<a href="#" class="social3"></a>
							</div>
							<div class="dist"></div>

							<div class="wrap-input100 validate-input" data-validate="Name is required">
								<input class="input100" type="email" name="loginID" placeholder="Email" />
								<span class="focus-input100-1"></span>
								<span class="focus-input100-2"></span>
							</div>
							<div class="wrap-input100 validate-input" data-validate="Name is required">
								<input class="input100" type="password" name="password" placeholder="Password" />
								<span class="focus-input100-1"></span>
								<span class="focus-input100-2"></span>
							</div>

							<br></br>
							<button class="buttonlogin">Sign In</button>
							<a href="#">Forgot your password?</a>
							<a href="/#/Home">Back To Home</a>
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
