import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import './TeacherNavbarNew.css'
import BulkRegistration from "../../components/BulkRegistration/BulkRegistration";
import IndivisualRegistration from "../../components/IndivisualRegistration/IndivisualRegistration";
import TeacherReg from "../../components/TeacherReg/TeacherReg";
import logoz from '../../images/Bebras_india_logo.png';


class TeacherNavbarNew extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="TeacherNavbarNew">
                    <title>Bebras </title>
                    <meta charset="UTF-8"></meta>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
                    <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet"></link>
                    <nav class="navbar navbar-expand-lg navattributes justify-content-end">
                    <div > <img className="  logo" src={logoz} alt="" /></div>
<ul class="nav justify-content-end">
  {/* <li class="nav-item ">
  <NavLink to="/teachernew/home" className="headings">Home</NavLink>
  </li> */}
  <li class="nav-item ">
  <NavLink to="/teachernew/IndivisualReg" className="headings">Indivisual Registration</NavLink>
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
  {/* <li class="nav-item ">
  <NavLink to="/teachernew/Contact" className="headings">Contact</NavLink>
  </li> */}
  <li><button type="button" class="btn btn-info btn-md logoutbtn ">
       <span class="glyphicon glyphicon-log-out"></span> Log out
        </button>
                                                    </li>
 
</ul>
 </nav>                   

 <div className="content">
                        {/* <Route path="/teachernew/home" component={Home} /> */}
                        <Route exact path="/teachernew/IndivisualReg" component={IndivisualRegistration} />
                        <Route exact path="/teachernew/BulkReg" component={BulkRegistration} />
                        <Route path="/teachernew/TeacherReg" component={TeacherReg} />
                        <Route exact path="/teachernew/Result" component={BulkRegistration} />
                        <Route exact path="/teachernew/Analysis" component={BulkRegistration} />
                        {/* <Route path="/teachernew/Contact" component={Contact} /> */}
                    </div>
                    
          </div>
          </HashRouter>
        );
    }
}

export default TeacherNavbarNew;
