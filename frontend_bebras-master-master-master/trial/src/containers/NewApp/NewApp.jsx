import React from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Home from "../../components/Home";
import { userService } from '../../services/user.service';
import Competition from "../../components/Competition";
import Teacher from "../../components/Teacher";
import Contact from "../../components/Contact";
import MainPage from "../../components/PracticeChallenge/MainPage";
import Practice_challenge from "../../components/Practice_challenge";
import Result from "../../components/Result";
import logoz from '../../images/Bebras_india_logo.png';
class NewApp extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
    
      isAuthenticated: false,
    };
    this.handlesubmit = this.handlesubmit.bind(this);
   console.log("in const")
}
static calledFromLogin()
{
  console.log("chalooooo")
  localStorage.setItem("Authenticated",true);
 

}

handlesubmit() {
    console.log("logging out");
    userService.logoutStudent().then(
        user => {
            localStorage.setItem("Authenticated",false);
            
            localStorage.removeItem('user');
            localStorage.removeItem('studentoken');
            localStorage.clear();
            window.location.reload();
            console.log("bye")
        
        },
        error => {

            const { from } = this.props.location.state || { from: { pathname: "/newapp" } };
            this.props.history.push(from);
        }
    );
}
  render() {
    return (
      <Router>
        <div className="NewApp">
          <title>Bebras </title>
          <meta charSet="UTF-8"></meta>
          <link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900%7CPacifico' rel='stylesheet' type='text/css' />
          <link rel="shortcut icon" src={require('../../images/favicon.ico')} />
          <link rel="stylesheet" src={require('../../css/bootstrap/css/bootstrap.min.css')} type="text/css" media="all" />
          <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
          <link rel="stylesheet" src={require('../../style.css')} type="text/css" media="all" />
          <link rel="stylesheet" src={require('../../js/prettyphoto/css/prettyPhoto.css')} type="text/css" media="all" />
          <header id="header-bar" className="wrap">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="clearfix">
                  <div id="logo"> <img className="img-responsive" className="logoimg" src={logoz} alt="" /></div>
                    <nav className="navbar navbar-custom" role="navigation">
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle"  data-toggle="collapse" data-target="#collapse-navigation"> <span className="sr-only"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                      </div>
                      <div className="collapse navbar-collapse" id="collapse-navigation">
                        <ul className="nav menu-nav">
                          <li><NavLink to="/newapp/Home">Home</NavLink></li>
                          <li><NavLink to="/newapp/Teacher">Teacher</NavLink></li>
                          <li><NavLink to="/newapp/Practice_challenge">Practice Challenge</NavLink> </li>
                          <li><NavLink to="/newapp/Competition">Competition</NavLink></li>
                          <li><NavLink to="/newapp/Result">Result</NavLink></li>
                          <li><NavLink to="/newapp/Contact">Contact</NavLink></li>
                          
                          <li><button type="button" className="btn btn-info btn-md logoutbtn "   id="Logoutbutton" onClick={this.handlesubmit}>
                                <span className="glyphicon glyphicon-log-out"></span> Log out
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
            <Switch>
            <Route   path="/newapp/Home" component={Home} />
            <Route   path="/newapp/Competition" component={Competition} />
            <Route   path="/newapp/Teacher" component={Teacher} />
            <Route   path="/newapp/Practice_challenge" component={MainPage} />
            <Route   path="/newapp/Contact" component={Contact} />
            <Route   path="/newapp/Contact1" component={Contact} />
            <Route   path="/newapp/Result" component={Result} />
            </Switch>
          </div>
        </div>

        <div className="zz-top-foo wrap"></div>

        <div className="footer wrap">
          <div className="container wrap">
            <div className="row">
              <div className="col-md-4">
                <div className="foo-block">
                  <h4 className="widgettitle">About</h4>
                  <p>In justo risus, fermentum eget egestas eget, element vitae tortor. Maecenas lorem mi, interdum id commodo ac, tincidunt vitae magna. In hac habitasse platea dictumst. Pellentesque quam.    </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="foo-block">
                  <h4 className="widgettitle">Schedule</h4>
                  <ul>
                    <li>Monday - Friday: 9.00 AM - 3.00 PM</li>
                    <li>Saturday- Sunday: Closed</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="foo-block">
                  <h4 className="widgettitle">Contact Us</h4>
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


          <div className="bkg-cover padding-72 copyright clearfix wrap">

            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>©  All rights reserved. Theme by matchthemes.</p>
                  <ul>
                    <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-vimeo-square"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
  componentDidMount()
  {
   
    if(localStorage.getItem("Authenticated"))
    {
      console.log("show button")
      document.getElementById("Logoutbutton").style.display = "block";
    }
    else{
    document.getElementById("Logoutbutton").style.display = "none";
  }
}
}

export default NewApp;
