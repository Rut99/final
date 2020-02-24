import React from 'react';
import mycss from '../../App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "../../components/Home";
import Competition from "../../components/Competition";
import Teacher from "../../components/Teacher";
import Contact from "../../components/Contact";
import Practice_challenge from "../../components/Practice_challenge";
import Result from "../../components/Result";
import logoz from '../../images/Bebras_india_logo.png';


class NewApp extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="NewApp">
          <title>Bebras </title>
          <meta charset="UTF-8"></meta>

          <link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900%7CPacifico' rel='stylesheet' type='text/css' />
          <link rel="shortcut icon" src={require('../../images/favicon.ico')} />
          <link rel="stylesheet" src={require('../../css/bootstrap/css/bootstrap.min.css')} type="text/css" media="all" />
          <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
          <link rel="stylesheet" src={require('../../style.css')} type="text/css" media="all" />
          <link rel="stylesheet" src={require('../../js/prettyphoto/css/prettyPhoto.css')} type="text/css" media="all" />

          <header id="header-bar" class="wrap">

            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="clearfix">
                 <div id="logo"> <img class="img-responsive" className="logoimg" src={logoz} alt="" /></div>
                    <nav class="navbar navbar-custom" role="navigation">
                      <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapse-navigation"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                      </div>
                      <div class="collapse navbar-collapse" id="collapse-navigation">
                        <ul class="nav menu-nav">
                          <li ><NavLink to="/Home">Home</NavLink></li>
                          <li><NavLink to="/Teacher">Teacher</NavLink></li>
                          <li><NavLink to="/Practice_challenge">Practice Challenge</NavLink> </li>
                          <li><NavLink to="/Competition">Competition</NavLink></li>
                          <li><NavLink to="/Result">Result</NavLink></li>
                          <li><NavLink to="/Contact">Contact</NavLink></li>
                          {/* <li><NavLink to="/Contact1">Contact</NavLink></li> */}
                          <li><button type="button" class="btn btn-info btn-md ">
          <span class="glyphicon glyphicon-log-out"></span> Log out
        </button>
                          </li>
                        </ul>
                      </div>

                    </nav>

                  </div>

                </div>
              </div>
            </div>
          </header>

          <div className="content">
            <Route path="/Home" component={Home} />
            <Route path="/Competition" component={Competition} />
            <Route path="/Teacher" component={Teacher} />
            <Route path="/Practice_challenge" component={Practice_challenge} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Contact1" component={Contact} />
            <Route path="/Result" component={Result} />
           
          </div>
        </div>

        <div class="zz-top-foo wrap"></div>

        <div class="footer wrap">
          <div class="container wrap">
            <div class="row">

              <div class="col-md-4">
                <div class="foo-block">
                  <h4 class="widgettitle">About</h4>
                  <p>In justo risus, fermentum eget egestas eget, element vitae tortor. Maecenas lorem mi, interdum id commodo ac, tincidunt vitae magna. In hac habitasse platea dictumst. Pellentesque quam.    </p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="foo-block">
                  <h4 class="widgettitle">Schedule</h4>
                  <ul>
                    <li>Monday - Friday: 9.00 AM - 3.00 PM</li>
                    <li>Saturday- Sunday: Closed</li>
                  </ul>
                </div>
              </div>

              <div class="col-md-4">
                <div class="foo-block">
                  <h4 class="widgettitle">Contact Us</h4>
                  <ul>
                    <li>Address: 501 Boulevard, New York City, New York</li>
                    <li>Phone: 1-800-000-111</li>
                    <li>Fax: 1-800-000-111</li>
                    <li>Email: contact [at] kidsland [dot] com</li>
                  </ul>
                </div>
              </div>



            </div>

          </div>


          <div class="bkg-cover padding-72 copyright clearfix wrap">

            <div class="container">
              <div class="row">
                <div class="col-md-12">

                  <p>© 2014 Lawyers. All rights reserved. Theme by matchthemes.</p>

                  <ul>
                    <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-youtube"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fa fa-vimeo-square"></i></a></li>
                  </ul>

                </div>
              </div>
            </div>

          </div>
        </div>

      </HashRouter>
    );
  }
}

export default NewApp;
