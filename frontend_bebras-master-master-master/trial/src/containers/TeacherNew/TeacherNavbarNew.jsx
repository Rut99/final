import React from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    Switch 
} from "react-router-dom";
import './TeacherNavbarNew.css'
import BulkRegistration from "../../components/BulkRegistration/BulkRegistration";

import IndividualRegistration from "../../components/IndividualRegistration/IndividualRegistration";
import TeacherRegister from "../../components/TeacherRegister/TeacherRegister";
import logoz from '../../images/Bebras_india_logo.png';
import { userService } from '../../services/user.service';
import {
    BrowserRouter as Router,
    Redirect,
} from "react-router-dom";
class TeacherNavbarNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            };
        this.handlesubmit = this.handlesubmit.bind(this);
        this.loadID = this.loadID.bind(this);
    }
    loadID(){
        localStorage.getItem('user');
        this.userName='lol';
        console.log("aaaaaaaaaaaa"+localStorage.getItem('user'));
    }
    handlesubmit() {
        console.log("logging out");
        userService.logout().then(
            user => {
                const { from } = this.props.location.state || { from: { pathname: "/newapp/Home" } };
                this.props.history.push(from);
                localStorage.removeItem('user');
                localStorage.removeItem('tokennew');
                console.log("bye")
            
            },
            error => {

                const { from } = this.props.location.state || { from: { pathname: "/TeacherReg" } };
                this.props.history.push(from);
            }
        );
    }
    render() {
        const { userName  } = this.state;
        return (
            <Router>
                <div className="App">
                    <title>Bebras</title>
                    <meta charset="UTF-8"></meta>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
                    
                    {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">  </link> */}
                    <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet"></link>
                    <nav class="navbar navbar-expand-lg navattributes justify-content-end">
                        <div > <img className="  logo" src={logoz} alt="" /></div>
                        <ul class="nav justify-content-end">
                            <li class="nav-item ">
                                <NavLink to="/teachernew/IndividualReg" className="headings">Individual Registration</NavLink>
                            </li>
                            <li class="nav-item ">
                                <NavLink to="/teachernew/BulkReg" className="headings">Bulk Registration</NavLink>
                            </li>
                            <li class="nav-item ">
                                <NavLink to="/teachernew/TeacherReg" className="headings">Teacher Registration</NavLink>
                            </li>
                            <li class="nav-item ">
                                <NavLink to="/teachernew/Result" className="headings">Result</NavLink>
                            </li>
                            <li class="nav-item ">
                                <NavLink to="/teachernew/Analysis" className="headings">Analysis</NavLink>
                            </li>
                             {/* <li><button type="button" class="btn btn-info btn-md logoutbtn " onClick={this.handlesubmit}>
                                <i class="fa fa-sign-out" aria-hidden="true"></i> Log out
                                </button>
                            </li> */}
                            <li>
                            <div class="dropdown">
                            <button class=" dropbtn" onLoad={this.loadID}>{userName}<i class="fa fa-angle-down" aria-hidden="true"></i></button>
                            <div class="dropdown-content">
                                <button className="logoutbtn" onClick={this.handlesubmit}><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</button>
                            </div>
                            </div>
                            </li>

                        </ul>
                    </nav>

                    <div className="content">
                    <Switch>
                        <Route  path="/teachernew/IndividualReg" component={IndividualRegistration} />
                        <Route  path="/teachernew/BulkReg" component={BulkRegistration} />
                        <Route path="/teachernew/TeacherReg" component={TeacherRegister} />
                        <Route  path="/teachernew/Result" component={BulkRegistration} />
                        <Route  path="/teachernew/Analysis" component={BulkRegistration} />
                     </Switch>
                    </div>

                </div>
            </Router>
        );
    }
}

export default TeacherNavbarNew;