
//import "../App.css";
import React from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
  import logoz from '../../images/Bebras_india_logo.png';
import Pagination from './Pagination';
import Practice_challenge1 from "./Practice_challenge1";
import Practice_challenge2 from "./Practice_challenge2";
import Practice_challenge3 from "./Practice_challenge3";
import Practice_challenge4 from "./Practice_challenge4";
import Practice_challenge5 from "./Practice_challenge5";
// import BulkRegistration from "./BulkRegistration/BulkRegistration";
  const componentsarr=[<Practice_challenge1/>,<Practice_challenge2/>,<Practice_challenge3/>,<Practice_challenge4/>,<Practice_challenge5/>];

class Page extends React.Component {
    constructor() {
        super();

        // an example array of items to be paged
        var exampleItems = [...Array(10).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
exampleItems=[{id:1,name: componentsarr[0]},{id:2,name: componentsarr[1]},{id:3,name: componentsarr[2]},{id:4,name: componentsarr[3]},{id:5,name: componentsarr[4]}]
        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        return (
        <div className="App">
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
                            <li><NavLink to="/newapp/Home">Home</NavLink></li>
                            <li><NavLink to="/newapp/Teacher">Teacher</NavLink></li>
                            <li><NavLink to="/newapp/Practice_challenge">Practice Challenge</NavLink> </li>
                            <li><NavLink to="/newapp/Competition">Competition</NavLink></li>
                            <li><NavLink to="/newapp/Result">Result</NavLink></li>
                            <li><NavLink to="/newapp/Contact">Contact</NavLink></li>
                           
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </header>
        <div id="main" class="wrap">
          <section class="page-top wrap">
          </section>
          {/* <div class="zz-bottom"></div> */}
          <div >
                    <div className="text-center">
                        {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.name}
                                <div>
                                    {componentsarr.map(block => block.component)}
                                </div>
                            </div> )}
                        
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                        <div>{this.sayHello}</div>
                    </div>
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
                    <p>©  All rights reserved. Theme by matchthemes.</p>
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
      </div>
      
        );
    }
        
    
}

export default Page;
