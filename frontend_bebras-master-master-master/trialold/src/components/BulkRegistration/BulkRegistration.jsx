import React from 'react';
import Select from 'react-select';
import './BulkRegistration.css';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { make_cols } from './MakeColumns';
import { SheetJSFT } from './type';
import XLSX from 'xlsx';
const optionsstd = [
  { value: 'first', label: 'First' },
  { value: 'second', label: 'Second' },
  { value: 'third', label: 'Third' },
  { value: 'fourth', label: 'Fourth' },
  { value: 'fifth', label: 'Fifth' },
  { value: 'sixth', label: 'Sixth' },
];
const columns = [
  {
   name: "name",
   label: "Name",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "company",
   label: "Company",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "city",
   label: "City",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "state",
   label: "State",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
    name: "Add",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <button onClick={() => window.alert(`Clicked "Add" for row ${tableMeta.rowIndex}`)}>
            Add
          </button>
        );
      }
    }
  },
  
 ];


const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: 'checkbox',
};
const optionsdd = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


class BulkRegistration extends React.Component {
  getMuiTheme = () => createMuiTheme({
    overrides: {
      MuiTableLabel: {
        root: {
          fontWeight: 'darker',
          fontSize: '5'
        }
      },
      MUIDataTable: {
        root: {
          fontSize: "5rem"
        }

      },
      MUIDataTableHeadCell: {
        root: {
          fontSize: "5rem"
        }

      },

      MUIDataTableBodyCell: {
        root: {
          fontSize: "1.3rem"
        }

      },
      MuiTablePagination: {
        toolbar: {
          fontSize: "2rem"
        }
      },
    }
  })

  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
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
 
  download() {
    var wb = XLSX.utils.book_new();
    wb.Props = {
      Title: "SheetJS",
      Subject: "Test",
    };
    wb.SheetNames.push("Test Sheet");
    var ws_data = [['First Name', 'Last Name', 'Gender', 'BirthDate', 'Class No.']];
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets["Test Sheet"] = ws;
    var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    function s2ab(s) {
      var buf = new ArrayBuffer(s.length);
      var view = new Uint8Array(buf);
      for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
      return buf;
    }
    var save = document.getElementById("download").value;
    var Standard = document.getElementById("Std").value;
    var Division = document.getElementById("Division").value;
    var FileSaver = require('file-saver');
    var blob = new Blob([save], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'Standard:' + Standard + 'Div:' + Division + '.xlsx');

  }

  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
    var name = document.getElementById('fileexcel');
    window.confirm("Do you want to upload this file\n\n" + name.files.item(0).name);
  };


  handleFile() {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {

      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true });
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
    alert("File Uploaded")
  }



  render() {
    const { selectedOption } = this.state;

    return (

      <div className="BulkRegistration ">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>


        <div class="bluesection">
          <h1 class="bluecontent">Students</h1>
          <div class="zz-bottom"></div>
        </div>
        
        <div class="containerbulkreg">
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-sm-2"><label class="label1">Select school:</label></div>
            <div class="col-md-6">
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                placeholder="Select school"
                options={optionsdd}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-sm-2"><label class="label1">Select competition:</label></div>
            <div class="col-md-6">
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                placeholder="Select competition "
                options={optionsdd}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-sm-2"><label class="label1">Select competition:</label></div>
            <div class="col-md-6">
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                placeholder="Select competition "
                options={optionsdd}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-sm-2"><label class="label1">Select competition:</label></div>
            <div class="col-md-6">
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                placeholder="Select competition "
                options={optionsdd}
              />
            </div>
          </div>


          <div class="dist"></div>

          <div class="containerreg1">
            <div class="rowdata">
              <MUIDataTable
                title={"STUDENT LIST"}
                data={data}
                columns={columns}
                options={options}

              />
            </div>

          </div>
          
        </div>
        {/* <div class="zz-top-foo"></div> */}
        <div class="bluesection1">
        
        <h1 class="bluecontent">Dear Teacher!</h1>
            <h3 class="bluecontent">Bulk Registration is also Available!</h3>
            <button onclick='myFunction()' id="showbulk" style={{"margin-left":"45%"}}>Try it</button>
        <div class="zz-bottom"></div>
        </div>
          <div class="containerupload" id="hideshowdiv">
          <marquee behavior="scroll" direction="left"><b>NOTE: Please download the template excel file, fill in all columns for the student and upload THE SAME file</b></marquee>

            <div class="uploadbuttons">
            <div class="row">
              <label>Download the excel template: </label>
            <button value="Download" onClick={this.download} id="download">Submit</button>
            </div>
            <div class="row">
            <label>Choose your excel file: </label>
              <input type="file" name="MyFile" id="fileexcel" accept={SheetJSFT} onChange={this.handleChange} multiple />
              </div>
              <div class="row">
              <label>Click upload to register:</label>
            <button value="Upload" onClick={this.handleFile} id="upload">Upload</button>
            </div>
            </div>
          </div>
        </div>
     
    );
  }
   myFunction() {
     alert('hi')
    var toggle = document.getElementsByClassName('containerupload')[0];
    toggle.style.display = toggle.style.display == "none" ? "block" : "none";
  }
   hideshow(){
    alert('hi') ;
    const hideshowdiv = document.getElementById('hideshowdiv');
  hideshowdiv.addEventListener('click', () => {
    if (hideshowdiv.style.display === "none") {
      hideshowdiv.style.display = "block";
    } else {
      hideshowdiv.style.display = "none";
    }
    
  });
}
  
}

export default BulkRegistration;
