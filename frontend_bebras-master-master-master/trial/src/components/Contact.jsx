import React from 'react';
import '../App.css';
import { userService } from '../services/user.service';

    class Contact extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
				name: '',
                email: '',
                subject:'',
                message:'',
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(e) {
			const { name, value } = e.target;
			this.setState({ [name]: value });
		}
        handleSubmit(event) {
            event.preventDefault();
            console.log("hicon")
            const { name, email, subject, message  } = this.state;
            console.log(this.state)
            if (!(email && message && subject && name)) {
				return;
            }
            userService.contactUs(name, email, subject, message)
				.then(
					user => {
                        const { from } = this.props.location.state || { from: { pathname: "http://localhost:3000/newapp/Contact" } };
					},
					error => {
						const { from } = this.props.location.state || { from: { pathname: "http://localhost:3000/newapp/Contact" } };
					}
				);
            
            // document.getElementById("ip1").innerHTML = "Message sent"
            // document.getElementById("contact-form-holder").style.display = "none";
            // document.getElementById("ip3").innerHTML = "Thanks for contacting us! We will check your message within a few minutes."
            
        }
        render() {
            const { name, email, subject, message  } = this.state;
            return (
                <div className="App">
                    <title>Bebras </title>
                    <meta charSet="UTF-8"></meta>

                    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900%7CPacifico' rel='stylesheet' type='text/css' />
                    <link rel="shortcut icon" src={require('../images/favicon.ico')} />
                    <link rel="stylesheet" src={require('../css/bootstrap/css/bootstrap.min.css')} type="text/css" media="all" />
                    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
                    <link rel="stylesheet" src={require('../style.css')} type="text/css" media="all" />
                    <link rel="stylesheet" src={require('../js/prettyphoto/css/prettyPhoto.css')} type="text/css" media="all" />
                    <div id="main" className="wrap">

                        <section className="page-top wrap">
                            <h2 className="page-section-title">Get in Touch</h2>
                        </section>

                        <div className="zz-bottom"></div>
                        <section className="page-content wrap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div id="contact-form-holder">
                                            <form action="#" onSubmit={this.handleSubmit} id="contact-form" >
                                                <label className="contactlabel" >Name</label>
                                                <p><input type="text" name="name" value={name} className="comm-field" onChange={this.handleChange}/></p>
                                                <label className="contactlabel">Email</label>
                                                <p><input type="text" name="email" value={email} className="comm-field" onChange={this.handleChange}/></p>
                                                <label className="contactlabel">Subject</label>
                                                <p><input type="text" name="subject" value={subject} className="comm-field" onChange={this.handleChange}/></p>
                                                <label className="contactlabel">Message</label>
                                                <p> <textarea name="message" value={message} id="msg-contact" rows="7" onChange={this.handleChange}></textarea></p>
                                                <p class="contact-btn"><input type="submit" value="Send message" id="submit-contact" /></p>
                                            </form>
                                        </div>
                                        <p id="ip1"></p>
                                    <p id="ip3"></p>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="contact-right">
                                            <h5 className="widgettitle">Find us:</h5>
                                            <ul className="contact-social">
                                                <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="fa fa-youtube"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="fa fa-vimeo-square"></i></a></li>
                                            </ul>
                                            <p>Please feel free to contact us!</p>
                                            <ul className="contact-info">
                                                <li><i className="fa fa-map-marker"></i>Address: Soft Corner, Karve road, Pune</li>
                                                <li><i className="fa fa-mobile"></i>Phone: 000 - 111 - 222</li>
                                                <li><i className="fa fa-fax"></i>Fax: 000 - 111 - 222</li>
                                                <li><i className="fa fa-envelope"></i>Email: contact@soft-corner.com</li>
                                            </ul>

                                            <div className="video-widget">
                                                <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Soft%20Corner%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%2C%20India+(Your%20Business%20Name)&ie=UTF8&t=&z=21&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.mapsdirections.info/en/journey-planner.htm">www.mapsdirections.info</a></iframe>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </section>
                        <div className="zz-bottom"></div>

                        <section className="wrap margin-t72">

                            <div className="container">

                            </div>

                        </section>
                    </div>
                </div>
            );
        }
    }

    export default Contact;