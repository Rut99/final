import React from "react";
import Page from './Page';
import './Certificate.css';
const Certificate = ({id}) => (<Page singleMode={true} id={id}>
  <div className="Certificate">
                <title>Home </title>
                <meta charSet="UTF-8"></meta>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet"></link>
                <div className="containerCertificate" id="containerTest">
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      {/* <br></br>
                      <br></br> i commented this for alignment*/}
                          <span className='classh1'>Bebras Computing Challenge 2020</span>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <span className="classh2">Name of the Student:</span>
                          <br></br>
                          <span className="classh1">Yash Sharma</span>
                          <br></br>
                          <br></br>
                       
                          <span className="classh3"> has been awarded </span>
                              <span className="classh2"> 200 points</span>
                              <br></br>
                          <span className="classh3">in the group Aryabhatta(age 8-10)</span>
                          <br></br>
                          <span className="classh3">(with maximum of 200 points)</span>
                          
                </div>
            </div>           
</Page>);
export default Certificate;
