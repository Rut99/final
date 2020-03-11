import React, { Component } from 'react';
import { render } from 'react-dom';
import Certificate from "./Certificate";
import PrintButton from "./PrintButton";
import "./Certificate.css";
import '../../../node_modules/bootstrap-css-only/css/bootstrap.min.css';

const PdfContainer = () => (

    
     /*   <div class="row">
            
            <div class="col-md-10 grayarea">
            <Certificate id={"singlePage"}/>
            </div>
            <div class="col-md-2">
            <PrintButton id={"singlePage"} label={"Download"}></PrintButton>
            <br></br>
            <h7>Please click the button to download the certificate</h7>
            </div> 
         </div> */
<div> 
  <PrintButton id={"singlePage"} label={"Click to Download Certificate"}></PrintButton>
  <Certificate id={"singlePage"}/>
 
</div>
);

render(<PdfContainer/>, document.getElementById('root'));
export default PdfContainer;