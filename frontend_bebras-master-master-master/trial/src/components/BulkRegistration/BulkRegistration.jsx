import React from 'react';
import Select from 'react-select';
import './BulkRegistration.css';
import { userService } from '../../services/user.service';
import Swal from "sweetalert2";
import moment from 'moment';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider ,withStyles} from '@material-ui/core/styles';
import { make_cols } from './MakeColumns';
import { SheetJSFT } from './type';
import XLSX from 'xlsx';
const optionschool = [];
const optionschoolclass = [];
const optionschoolcmp = [];
const rowssselected=[];
const user=[];

const columns = [
  {
    field:"userName",
    name: "userName",
    label: "UserName",
    options: {
     filter: true,
     sort: false,
    }
   },
 {
  field:"loginID",
  name: "loginID",
  label: "loginID",
  options: {
   filter: true,
   sort: false,
  }
 },
//  {
//    field:"gender",
//   name: "gender",
//   label: "Gender",
//   options: {
//    filter: true,
//    sort: false,
//   }
//  },
 {
   field:"birthdate",
  name: "birthdate",
  label: "BirthDate",
  options: {
   filter: true,
   sort: false,
  }
 },

//  {
//    name: "Add",
//    options: {
//      filter: true,
//      sort: false,
//      customBodyRender: (value, tableMeta, updateValue) => {
//        return (
//          <button onClick={() => window.alert(`Clicked "Add" for row ${tableMeta.rowIndex}`)}>
//            Add
//          </button>
//        );
//      }
//    }
//  },
];
// var data = [];
//   {"userName":"Joe James","loginID": "Test Corp", "gender":"Yonkers", "birthdate":"NY"},
//   {"userName":"John Walsh","loginID": "Test Corp", "gender": "Hartford", "birthdate": "CT"},
//   {"userName":"Bob Herm","loginID": "Test Corp", "gender": "Tampa", "birthdate": "FL"},
//   {"userName":"James Houston","loginID":"Test Corp", "gender": "Dallas", "birthdate": "TX"},
//   {"userName":"Joe James","loginID": "Test Corp", "gender": "Yonkers", "birthdate": "NY"},
  // {"John Walsh", "Test Corp", "Hartford", "CT"},
  // {"Bob Herm", "Test Corp", "Tampa", "FL"},
  // {"James Houston", "Test Corp", "Dallas", "TX"},
  // {"Joe James", "Test Corp", "Yonkers", "NY"},
  // {"John Walsh", "Test Corp", "Hartford", "CT"},
  // {"Bob Herm", "Test Corp", "Tampa", "FL"},
  // {"James Houston", "Test Corp", "Dallas", "TX"},
  // {"Joe James", "Test Corp", "Yonkers", "NY"},
  // {"John Walsh", "Test Corp", "Hartford", "CT"},
  // {"Bob Herm", "Test Corp", "Tampa", "FL"},
  // {"James Houston", "Test Corp", "Dallas", "TX"},


const options = {
  // filterType: 'checkbox',
  selectableRows: true,
  //  selectableRowsOnClick: true,
   onRowsSelect:(currentRowsSelected, allRowsSelected) => { 
    rowssselected.push(currentRowsSelected[0].index);
    console.log(currentRowsSelected[0])
    console.log(allRowsSelected);
    console.log(currentRowsSelected);
  },

  onRowClick: (rowData, rowState) => {

    //What can I add here?
    user.push(rowData);
    console.log(rowData, rowState);
  },
};
const optionslanguage = [
  { value: 'english', label: 'English' },
  { value: 'hindi', label: 'Hindi' },
  { value: 'marathi', label: 'Marathi' },
];

class BulkRegistration extends React.Component {
 


  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
       udata : [
  {"userName":"Joe James","loginID": "Test Corp", "gender":"Yonkers", "birthdate":"NY"},
  {"userName":"John Walsh","loginID": "Test Corp", "gender": "Hartford", "birthdate": "CT"},
  {"userName":"Bob Herm","loginID": "Test Corp", "gender": "Tampa", "birthdate": "FL"},
  {"userName":"James Houston","loginID":"Test Corp", "gender": "Dallas", "birthdate": "TX"},
  {"userName":"Joe James","loginID": "Test Corp", "gender": "Yonkers", "birthdate": "NY"},],
      userdata:[ {"userName":"Joe James","loginID": "Test Corp", "gender":"Yonkers", "birthdate":"NY"},],
      cols: [],
      showHideSidenav:'hidden',
      showstep2:'hidden',
      showstep3:'hidden',
      user: [],
      fileName: '',
      school: '',
      schoolclass: '',
      competition: '',
      language: '',
    }
    console.log("in constructor ",this.userdata)
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.onChangeSchool = this.onChangeSchool.bind(this);
    this.generate_loginid_password=this.generate_loginid_password.bind(this);
    this.onChangeSchoolClass = this.onChangeSchoolClass.bind(this);
    this.onChangeCmp = this.onChangeCmp.bind(this);
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
    this.getUserdata = this.getUserdata.bind(this);
    this.replacer=this.replacer.bind(this);
    this.registerstudent=this.registerstudent.bind(this);
  }
  getMuiTheme = () =>
  createMuiTheme({
    overrides: {
      MUIDataTable: {
        root: {
          fontWeight: 'lighter',
          // fontSize: '1.9rem'
        },
        paper: {
          boxShadow: "none"
        }
      },
      MUIDataTableHeadCell: {
        root: {
          backgroundColor: 'inherit',
          fontSize: '1.4rem',
          fontWeight: 'bold'
        }
      }, 
      MUIDataTableBodyCell: {
        root: {
          
        }
      }
    }
  });

  download() {
    var wb = XLSX.utils.book_new();
    wb.Props = {
      Title: "SheetJS",
      Subject: "Test",
    };
    wb.SheetNames.push("Test Sheet");
    var ws_data = [['firstName', 'lastName', 'gender', 'birthdate','phone','email']];
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets["Test Sheet"] = ws;
    var wbout = XLSX.write(wb, { bookType: 'xlsx',type: 'binary', cellDates: true, dateNF: 'yyyy/mm/dd;@'});
    function s2ab(s) {
      var buf = new ArrayBuffer(s.length);
      var view = new Uint8Array(buf);
      for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
      return buf;
    }
    var save = document.getElementById("download").value;

    var FileSaver = require('file-saver');
    var blob = new Blob([save], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'BebrasChallenge.xlsx');

  }

  handleChange(e) {

    const files = e.target.files;
    console.log(files, files[0])
    this.state.fileName = files[0];
    if (files && files[0]) this.setState({ file: files[0] });
    var name = document.getElementById('fileexcel');
    window.confirm("Do you want to upload this file\n\n" + name.files.item(0).name);
  };


  handleFile() {
    console.log(this.state.fileName)
    if (this.state.fileName) {
      /* Boilerplate to set up FileReader */
      const reader = new FileReader();
      const rABS = !!reader.readAsBinaryString;
      if (rABS) {
        reader.readAsBinaryString(this.state.file);
      } else {
        reader.readAsArrayBuffer(this.state.file);
      };

      reader.onload = (e) => {

        /* Parse data */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true , cellDates: true, dateNF: 'yyyy/mm/dd;@'});

        // const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true });
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws,{defval:""});
        /* Update state */
        this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
          JSON.stringify(this.state.data, this.replacer, 2);
          console.log(JSON.stringify(this.state.data,null,2))
        });
        localStorage.setItem('bulkdata', JSON.stringify(this.state.data, null, 2));
        userService.doBulkRegister().then(
          user => {

            console.log(user);
            this.generate_loginid_password(user)

          },
          error => {
            console.log(error);

          }
        );

        Swal.fire({
          imageUrl: require('../../images/success.gif'),
          imageAlt: 'Custom Image',
          title: "Succesfully Uploaded ",
          showConfirmButton: true,
          timer: 1500000
        });
      };
    } else {
      Swal.fire({
        imageUrl: require('../../images/failure.gif'),
        imageAlt: 'Custom Image',
        title: "Please choose a File ",
        showConfirmButton: true,
        timer: 1500000
      });
    }

  }
  generate_loginid_password(data)
  {
    
      var ws = XLSX.utils.json_to_sheet(data);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "People");
        //var buf = XLSX.write(wb, {bookType:'xlsx', type:'buffer'}); // generate a nodejs buffer
        var str = XLSX.write(wb, {bookType:'xlsx', type:'binary'}); // generate a binary string in web browser
        console.log("hi");
        function s2ab(s) {
          var buf = new ArrayBuffer(s.length);
          var view = new Uint8Array(buf);
          for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
          return buf;
  }
  var FileSaver=require('file-saver');
  FileSaver.saveAs(new Blob([s2ab(str)],{type:"application/octet-stream"}),'login_password.xlsx');
}
  replacer()
  {   
      for(var i in this.state.data)
      {
          var val = this.state.data[i];
          for(var j in val)
          {
              var sub_key = j;
              var sub_val =val[j];
              if(sub_key=="birthdate")
              {
                  var dateformat1 = val[j]
                  sub_val= moment(dateformat1).format('YYYY-MM-DD')
                  val[j]=sub_val
              }           
           }
       }
      }



  onChangeLanguage(optionSelected) {

    this.state.language = optionSelected.value;
    // console.log(optionSelected.value);
  }
  onChangeCmp(optionSelected) {

    this.state.competition = optionSelected.value;
    // console.log(optionSelected.value);
  }
  onChangeSchoolClass(optionSelected) {

    this.state.schoolclass = optionSelected.value;
    // console.log(optionSelected.value);
    var arry;
    userService.getCmp_Names(this.state.school, this.state.schoolclass).then(
      array2 => {
        arry = array2;
        console.log(arry);
        arry.forEach(function (element) {
          optionschoolcmp.push({ label: element, value: element })
        });
      },
      error => {
        console.log(error);

      }
    );
  }
  getUserdata() {



    userService.getNamesUsers().then(
      user => {
        this.userdata=user;
        console.log("yahooo", this.userdata)
        const c=user[0].userName;
        document.getElementById("users").innerHTML = { c  };
        // console.log(user[0].userName);
        for(var i in user)
        {
          console.log("ans",user[i]);
        }
      },
      error => {
        console.log(error);

      }
    );
  }
  toggleSidenav() {
    //alert('hi')
    var css = (this.state.showHideSidenav === "hidden") ? "show" : "hidden";
    this.setState({ "showHideSidenav": css });
  }
  togglestep2() {
    //alert('hi')
    var css = (this.state.showstep2 === "hidden") ? "show" : "hidden";
    this.setState({ "showstep2": css });
  }
  registerstudent()
  {
    // console.log(user);
    console.log(rowssselected);
    var c=rowssselected[0]
    console.log(c)
    console.log(this.state.userdata[c]);
    const {  school, user,language,schoolclass,competition } = this.state;
    const datauser=[]
    for ( var i in rowssselected)
    {
      datauser.push(this.state.userdata[i]);
    }
    const bulkuserdata = { schoolName: this.state.school, classNumber: this.state.schoolclass, competitionName: this.state.competition, language: this.state.language, user: datauser};
    console.log(bulkuserdata);
    userService.doBulkRegisterStudents(bulkuserdata).then(
      user => {
        
        console.log("yahooo", this.user)
        

      },
      error => {
        console.log(error);

      }
    );
  }
  togglestep3() {
    //alert('hi')
    var css = (this.state.showstep3 === "hidden") ? "show" : "hidden";
    this.setState({ "showstep3": css });
  }
  render() {
    console.log("oooo",this.userdata)
 const { selectedOption, school, user } = this.state;
 
    return (

      <div className="BulkRegistration ">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="bluesection">
          <h1 className="bluecontent">Students</h1>
          <div className="zz-bottom"></div>
        </div>


        <div className="containerbulkreg">
    
          <div className="dist"></div>
       
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-sm-2"><label className="label1">Select className:</label></div>
            <div className="col-md-6">
              <Select

                onChange={this.onChangeSchoolClass}
                placeholder="Select class "
                options={optionschoolclass}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-sm-2"><label className="label1">Select competition:</label></div>
            <div className="col-md-6">
              <Select

                onChange={this.onChangeCmp}
                placeholder="Select competition "
                options={optionschoolcmp}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-sm-2"><label className="label1">Select Language:</label></div>
            <div className="col-md-6">
              <Select

                onChange={this.onChangeLanguage}
                placeholder="Select Language "
                options={optionslanguage}
              />
            </div>
          </div>
          <p>{this.userdata}</p>

          <div className="dist"></div>

          <div className="containerreg1">
            <div className="rowdata">
            <MuiThemeProvider theme={this.getMuiTheme()}>
              <MUIDataTable
                title={"STUDENT LIST"}
                data={this.state.userdata}
                columns={columns}
                options={options}
              />
             </MuiThemeProvider>

            </div>

          </div>
          <div className="dist"></div>
          <div className='row' >
          <b style={{marginLeft:"30%"}}>CLICK REGISTER BUTTON TO REGISTER ABOVE STUDENTS</b>
          <button className ="registerbutton" style={{marginLeft:"3%"}} onClick={this.registerstudent} id="showbulk" >REGISTER</button>
          <b style={{marginLeft:"30%"}}>DO YOU WANT TO REGISTER MORE STUDENTS?</b>
          <button className ="registerbutton" style={{marginLeft:"3%"}} onClick={this.toggleSidenav.bind(this)} id="showbulk" >YES</button>
         
        </div>
        
        </div>
      
      <div className={this.state.showHideSidenav} >
        <div className="bluesection1">
          <h1 className="bluecontent">Dear Teacher!</h1>
          <h3 className="bluecontent">Bulk Registration is also Available!</h3>
           <div className="containerupload">
          <div className="uploadbuttons">
          <a style={{fontSize:"20px"}}> <b>STEP 1:</b><i className="fa fa-arrow-circle-down"></i></a>
              <div  className={this.state.showstep}>
                <label><b>Click on the button to download the excel sheet, fill it with student data:</b> </label>
                <button value="Download" onClick={this.download} id="download">Download</button>
                <p><b>Now Click on Step 2</b></p>
              </div><br></br>
             
              <a onClick={this.togglestep2.bind(this)} style={{fontSize:"20px"}}><b>STEP 2:</b> <i className="fa fa-arrow-circle-down"></i></a>
              <div  className={this.state.showstep2}>
                <label><b>After filling Choose the same excel file which you have downloaded: </b></label>
                <input type="file" name="MyFile" id="fileexcel" accept={SheetJSFT} onChange={this.handleChange} multiple />
                <p><b>Now Click on Step 3</b></p>
              </div><br></br>
            
              <a onClick={this.togglestep3.bind(this)} style={{fontSize:"20px"}}><b>STEP 3:</b> <i className="fa fa-arrow-circle-down"></i></a>
              <div  className={this.state.showstep3}>
                <label><b>Click upload, a sheet will be downloaded containing student login credentials:</b></label>
                <button value="Upload" onClick={this.handleFile} id="upload">Upload</button>
              </div>
            </div>
          
      
         
            {/* <marquee behavior="scroll" direction="left"><b>NOTE: Please download the template excel file, fill in all columns for the student and upload THE SAME file</b></marquee> */}

            
            
          </div>
          <div className="zz-bottom"></div>
          </div>
          
        </div>
      </div>

    );
  }
  // componentDidUpdate()
  // {
  //   userService.getNamesUsers().then(
  //     user => {
  //       this.userdata=user;
  //       data.push({"userName":"Joe James","loginID": "Test Corp", "gender":"Yonkers", "birthdate":"NY"});
  //       console.log("yahooo", this.userdata)
  //       const c=user[0].userName;
  //       // document.getElementById("users").innerHTML = { c  };
  //       // console.log(user[0].userName);
  //       // for(var i in user)
  //       // {
  //       //   console.log("ans",user[i]);
  //       // }
  //     },
  //     error => {
  //       console.log(error);

  //     }
  //   );
  // }
  componentDidMount() {
//alert("ok",this.state.showHideSidenav);

    var arry = ["India"];
    // this.getUserdata();
   
    userService.getNamesUsers().then(
      user => {
        this.setState({userdata:user})
        // this.userdata.push({"userName":"Joe James","loginID": "Test Corp", "gender":"Yonkers", "birthdate":"NY"});
        // user.forEach(function (element) {
        //   this.userdata.push(element)
        // });
        console.log("yahooo", this.userdata)
        

      },
      error => {
        console.log(error);

      }
    );
    var arry;
    userService.getSchoolClasses().then(
      array2 => {
        arry = array2;
        console.log(arry);
       
        arry.forEach(function (element) {
          optionschoolclass.push({ label: element, value: element })
        });
      },
      error => {
        console.log(error);

      }
    );

  this.state.showHideSidenav="hidden" ;


  }

}

export default BulkRegistration;