import React from "react";
import './ImportFile.css'
import XLSX from 'xlsx';
import { make_cols } from './MakeColumns';
import { SheetJSFT } from './type';


class ImportFile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          file: {},
          data: [],
          cols: []
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
     
      handleChange(e) {
        const files = e.target.files;
        if (files && files[0]) this.setState({ file: files[0] });
      };
          
     
      handleFile() {
        /* Boilerplate to set up FileReader */
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
     
        reader.onload = (e) => {
          /* Parse data */
          const bstr = e.target.result;
          const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA : true });
          /* Get first worksheet */
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          /* Convert array of arrays */
          const data = XLSX.utils.sheet_to_json(ws);
          /* Update state */
          this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
            console.log(JSON.stringify(this.state.data, null, 2));
          });
     
        };
     
        if (rABS) {
          reader.readAsBinaryString(this.state.file);
        } else {
          reader.readAsArrayBuffer(this.state.file);
        };
      }
  
    render()
    {
        return(
        
            <div className="Login">
            <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
        <title>Home </title>
        <meta charSet="UTF-8"></meta>
            <div className="containerTest" id="containerTest">
                <div class="form-container sign-in-container">
                    <form action="#"  >
                    <h1>Individual Registration Available here</h1>
                    <br></br>
                    <input class="inputimport" type="text" placeholder="First Name" />
                        <input class="inputimport" type="text" placeholder="Last Name" />
                        <select class="selectimport">
                        <option value="" disabled selected >Gender</option>
                          <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        </select>
                        
                        <input class="inputimport" type="date" placeholder="Birth Date"/>
                        <select class="selectimport">
                          <option value="" disabled selected >Class Number</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                           </select>
                           <div class="dist"></div>  
                           <button class="buttonimport">Register</button>
                    </form>
                </div>
                <div class="overlay-container-import">
                    <div class="overlay-import">
                    
                        <div class="overlay-panel-import overlay-right-import">
                        <h1>Dear Teacher!</h1>
                            <p>Bulk Registration is also Available!</p>
                            
                             {/* <input type="file" class="upload_btn inputimport" name="MyFile" id="fileexcel" accept={SheetJSFT} onChange={this.handleChange}/> */}
                             {/* <button class="buttonimport" value="Upload"  onClick={this.handleFile} id="upload">Upload</button> */}
                        
                        </div>
                    </div>
                </div>

            </div>
        
    </div>

        );
        
    }
}
export default ImportFile;