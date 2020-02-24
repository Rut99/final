import React from 'react';
import '../App.css';

class Contact extends React.Component {
	render() {
		return (
			<div className="App">
				<title>Bebras </title>
				<meta charset="UTF-8"></meta>

				<link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900%7CPacifico' rel='stylesheet' type='text/css' />
				<link rel="shortcut icon" src={require('../images/favicon.ico')} />
				<link rel="stylesheet" src={require('../css/bootstrap/css/bootstrap.min.css')} type="text/css" media="all" />
				<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
				<link rel="stylesheet" src={require('../style.css')} type="text/css" media="all" />
				<link rel="stylesheet" src={require('../js/prettyphoto/css/prettyPhoto.css')} type="text/css" media="all" />
				<div id="main" class="wrap">

					<section class="page-top wrap">
						<h2 class="page-section-title">Get in Touch</h2>
					</section>

					<div class="zz-bottom"></div>
					<section class="page-content wrap">
						<div class="container">
							<div class="row">
								<div class="col-md-6">
									<div id="contact-form-holder">
										<form method="post" id="contact-form">
											<label class="contactlabel">Name</label>
											<p><input type="text" name="name" class="comm-field" /></p>
											<label class="contactlabel">Email</label>
											<p><input type="text" name="email" class="comm-field" /></p>
											<label class="contactlabel">Subject</label>
											<p><input type="text" name="subject" class="comm-field" /></p>
											<label class="contactlabel">Message</label>
											<p> <textarea name="message" id="msg-contact" rows="7"></textarea></p>
											<p class="contact-btn"><input type="submit" value="Send message" id="submit-contact" /></p>
										</form>
									</div>
								</div>

								<div class="col-md-6">
									<div class="contact-right">
										<h5 class="widgettitle">Find us:</h5>
										<ul class="contact-social">
											<li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
											<li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
											<li><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
											<li><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
											<li><a href="#" target="_blank"><i class="fa fa-pinterest"></i></a></li>
											<li><a href="#" target="_blank"><i class="fa fa-youtube"></i></a></li>
											<li><a href="#" target="_blank"><i class="fa fa-vimeo-square"></i></a></li>
										</ul>
										<p>Please feel free to contact us!</p>
										<ul class="contact-info">
											<li><i class="fa fa-map-marker"></i>Address: Soft Corner, Karve road, Pune</li>
											<li><i class="fa fa-mobile"></i>Phone: 000 - 111 - 222</li>
											<li><i class="fa fa-fax"></i>Fax: 000 - 111 - 222</li>
											<li><i class="fa fa-envelope"></i>Email: contact@soft-corner.com</li>
										</ul>

										<div class="video-widget">
											<iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Soft%20Corner%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%2C%20India+(Your%20Business%20Name)&ie=UTF8&t=&z=21&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.mapsdirections.info/en/journey-planner.htm">www.mapsdirections.info</a></iframe>
										</div>

									</div>

								</div>

							</div>

						</div>

					</section>
					<div class="zz-bottom"></div>

					<section class="wrap margin-t72">

						<div class="container">

						</div>

					</section>
				</div>
			</div>
		);
	}
}

export default Contact;
