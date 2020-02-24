import React from "react";
// import './Student.css';
import '../LoginPage/Login.css';
 import * as XLSX from 'xlsx';
//import ExportJsonExcel from 'js-export-excel';
 import excel from 'xlsx';
//import axios, {post} from 'axios';
import {ExcelRenderer,OutTable} from 'react-excel-renderer';
//import 'bootstrap/dist/css/bootstrap.css';
//import {  Jumbotron, Col, Input, InputGroup, InputGroupAddon, FormGroup, Label, Button, Fade, FormFeedback, Container, Card } from 'reactstrap';

class StudentReg extends React.Component{

	constructor(props){
		super(props);
		this.state={
		  isOpen: false,
		  dataLoaded: false,
		  isFormInvalid: false,
		  rows: null,
		  cols: null
		}
		this.fileHandler = this.fileHandler.bind(this);
		this.toggle = this.toggle.bind(this);
		this.openFileBrowser = this.openFileBrowser.bind(this);
		this.renderFile = this.renderFile.bind(this);
		//this.openNewPage = this.openNewPage.bind(this);
		this.fileInput = React.createRef();
	  }
  
	renderFile = (fileObj) => {
		//just pass the fileObj as parameter
		ExcelRenderer(fileObj, (err, resp) => {
		  if(err){
			console.log(err);            
		  }
		  else{
			this.setState({
			  dataLoaded: true,
			  cols: resp.cols,
			  rows: resp.rows
			});
		  }
		}); 
	}
  
	fileHandler = (event) => {    
	  if(event.target.files.length){
		let fileObj = event.target.files[0];
		let fileName = fileObj.name;

		// var arraybuffer = 
  
		
		//check for file extension and pass only if it is .xlsx and display error message otherwise
		if(fileName.slice(fileName.lastIndexOf('.')+1) === "xlsx"){
		  this.setState({
			uploadedFileName: fileName,
			isFormInvalid: false
		  });
		  this.renderFile(fileObj)
		}    
		else{
		  this.setState({
			isFormInvalid: true,
			uploadedFileName: ""
		  })
		}
	  }               
	}
 
	toggle() {
		this.setState({
		  isOpen: !this.state.isOpen
		});
	  }
	
	  openFileBrowser = () => {
		this.fileInput.current.click();
	  }
				

    render()
    {

		
		return(
		
			<div className="Login">
			<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
			<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
		<title>Home </title>
		<meta charSet="UTF-8"></meta>
			<div className="containerTest" id="containerTest">
				<div class="form-container sign-in-container">
					<form action="#"  >
						<h1>Individual Registration Available here</h1>
						<input type="text" placeholder="First Name" />
						<input type="text" placeholder="Last Name" />
						<select>
						<option value="" disabled selected >Gender</option>
                          <option value="Male">Male</option>
                        <option value="Female">Female</option>
						</select>
						
						<input type="date" placeholder="Birth Date"/>
						<select>
                          <option value="" disabled selected >Class Number</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
                           </select>  
						   <button>Register</button>
					</form>
				</div>
				<div class="overlay-container">
					<div class="overlay">
						<div class="overlay-panel overlay-right">
						<h1>Dear Teacher!</h1>
							<p>Bulk Registration is also Available!</p>
							{/* <Container> */}
        <form>
          {/* <FormGroup row>
            <Label for="exampleFile" xs={6} sm={4} lg={2} size="lg">Upload</Label>          
            <Col xs={4} sm={8} lg={10}>                                                     
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <Button color="info" style={{color: "white", zIndex: 0}} onClick={this.openFileBrowser.bind(this)}><i className="cui-file"></i> Browse&hellip;</Button>
                  <Input type="file" hidden onChange={this.fileHandler.bind(this)} ref={this.fileInput} onClick={(event)=> { event.target.value = null }} style={{"padding":"10px"}} />                                
                </InputGroupAddon>
                <Input type="text" className="form-control" value={this.state.uploadedFileName} readOnly invalid={this.state.isFormInvalid} />                                              
                <FormFeedback>    
                  <Fade in={this.state.isFormInvalid} tag="h6" style={{fontStyle: "italic"}}>
                    Please select a .xlsx file only !
                  </Fade>                                                                
                </FormFeedback>
              </InputGroup>     
            </Col>                                                   
          </FormGroup>    */}
        </form>

        {this.state.dataLoaded && 
        <div>
          {/* <Card body outline color="secondary" className="restrict-card">
            
              <OutTable data={this.state.rows} columns={this.state.cols} />
            
          </Card>   */}
        </div>}
        </Container>
                          
							
						</div>
					</div>
				</div>

			</div>

	{
	// this.state.dataLoaded && 
	// <div>
	//    <Card body outline color="primary" className="restrict-card"> 
		
	// 	  <OutTable data={this.state.rows} columns={this.state.cols}  />
	//   </Card>   
	// </div>
}
		
	</div>



		);
		
	}
	
	
}

export default StudentReg;

// class JSONtoExcel extends React.Component {
// 	render(){
// 	  return <h1>Hello World Today!</h1>;
// 	}
//   }
//   export default JSONtoExcel;