  import React from 'react';
  import './App.css';
  import { BrowserRouter as Router } from 'react-router-dom';
  import {
    Route,
    Switch,
  } from "react-router-dom";
  import Page from "./components/PracticeChallenge/Page";
  import Register from "./containers/RegisterPage/Register";
  import PdfContainer from './components/Certificate/PdfContainer'
  import Now from "./containers/LoginPage/Login";
  import resetpassword from "./containers/LoginPage/resetPassword";
  import NewApp from "./containers/NewApp/NewApp";
  import TeacherNavbarNew from "./containers/TeacherNew/TeacherNavbarNew";
  class App extends React.Component {
    render() { 
      return (
            <Router>
              <Switch>
              <Route   path="/newapp" component={NewApp} />
              <Route   path="/Register" component={Register} />
              <Route   path="/Login" component={Now} />
              <Route   path="/teachernew" component={TeacherNavbarNew} />
              <Route   path="/certificate" component={PdfContainer} />
              <Route   path="/page" component={Page} />
              <Route   path="/resetpassword" component={resetpassword} />
              </Switch>
            </Router>
      );
    }
  }

  export default App;
