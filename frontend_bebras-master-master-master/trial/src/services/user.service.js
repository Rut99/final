
      import { Login } from './constant';
      import { ContactUsMail, Register,ResetPasswordViewurl,ConfirmResetPasswordViewurl,BulkRegisterStudents,BulkRegister,getUsers,Cmp_Names,SchoolClasses,RegisterSchool, TeacherRegister,CountryNames, StateNames, DistrictNames, SchoolNames, RegisterStudent } from './constant';
      import { Logout } from './constant';
      import Axios from 'axios';
      import Swal from "sweetalert2";
     
      export const userService = {
        login,
        logout,
        logoutStudent,
        register,
        doBulkRegisterStudents,
        doBulkRegister,
        registerSchool,
        registerStudent,
        registerTeacher,
        getCountryNames,
        getCmp_Names,
        getStateNames,
        getDistrictNames,
        getSchoolNames,
        getNamesUsers,
        getSchoolClasses,
        ResetPasswordView,
        ConfirmResetPasswordView,
        contactUs,
      };
      function contactUs(name, email, subject, message){
        try{
          return Axios({
            url: `${ContactUsMail}`,
            method: 'post',
            data: {
              name:name,
              email:email,
              subject:subject,
              message:message
            },
          }).then(
     
            respons => {
              // alert(respons.data)
              console.log(respons.data);
              Swal.fire({
                imageUrl: require('../images/success.gif'),
                imageAlt: 'Custom Image',
                title: `${respons.data}`,
                showConfirmButton: true,
                timer: 1500000

              });
              return respons.data;
            })
            .catch(error => {
              console.log(error);
              console.log(error.message);
              console.log(error.response.data.reason);
              console.log(error.response.status);
              console.log(error.response.headers);
              Swal.fire({
                imageUrl: require('../images/failure.gif'),
                imageAlt: 'Custom Image',
                title: `${error.response.statusText}`,
                showConfirmButton: true,
                timer: 1500000
              });
              throw error;
            });
      } catch (error) {
        throw error;
      }
    }
      function ResetPasswordView(data){
        try{
          return Axios({
            url: `${ResetPasswordViewurl}`,
            method: 'post',
            data: {
              loginID: data,
            },
            loading: true,
          }).then(
     
            respons => {
              // alert(respons.data)
              console.log(respons.data);
              localStorage.setItem('uid', respons.data.uidb64);
              localStorage.setItem('token', respons.data.token);
              
              Swal.fire({
                imageUrl: require('../images/success.gif'),
                imageAlt: 'Custom Image',
                title: `${respons.data.response}`,
                showConfirmButton: true,
                timer: 1500000
                
              });
              return respons.data;
            })
            .catch(error => {
              console.log(error);
              console.log(error.message);
              console.log(error.response.data.reason);
              console.log(error.response.status);
              console.log(error.response.headers);
              Swal.fire({
                imageUrl: require('../images/failure.gif'),
                imageAlt: 'Custom Image',
                title: `${error.response.statusText}`,
                showConfirmButton: true,
                timer: 1500000
              });
              throw error;
            });
        } catch (error) {
          throw error;
        }
      }

      function ConfirmResetPasswordView(password,uidb64,token){
        if(localStorage.getItem('uid')==uidb64 && localStorage.getItem('token')==token){
          try{
            return Axios({
              url: `${ConfirmResetPasswordViewurl}`,
              method: 'post',
              data: {
                // loginID: loginID,
                password: password,
                uidb64:uidb64,
                token:token
              },
            }).then(
            
              respons => {
                // alert(respons.data)
                console.log(localStorage.getItem('uid')+"anandnd"+localStorage.getItem('token'))
                console.log(respons.data);
                Swal.fire({
                  imageUrl: require('../images/success.gif'),
                  imageAlt: 'Custom Image',
                  title: `${respons.data}`,
                  showConfirmButton: true,
                  timer: 1500000
                  
                });
                localStorage.clear();
                return respons.data;
              })
              .catch(error => {
                console.log(error);
                console.log(error.message);
                console.log(error.response.data.reason);
                console.log(error.response.status);
                console.log(error.response.headers);
                Swal.fire({
                  imageUrl: require('../images/failure.gif'),
                  imageAlt: 'Custom Image',
                  title: `${error.response.statusText}`,
                  showConfirmButton: true,
                  timer: 1500000
                });
                throw error;
              });
          } catch (error) {
            throw error;
          }
        }
        else{
          Swal.fire({
            imageUrl: require('../images/failure.gif'),
            imageAlt: 'Custom Image',
            title: "An error occoured!",
            showConfirmButton: true,
            timer: 1500000
          });
        }
      
      }

      function doBulkRegisterStudents(bulkdata){
        try{
          return Axios({
            url: `${BulkRegisterStudents}`,
            method: 'post',
            data: bulkdata,
            headers: {
               "Authorization": "Token " + localStorage.getItem('teachertoken'),
              "content-type": "application/json"
            }
          }).then(
            
            respons => {
              console.log(respons.data);
              Swal.fire({
                imageUrl: require('../images/success.gif'),
                imageAlt: 'Custom Image',
                title: `Bulk Student registration Succesful! `,
                showConfirmButton: true,
                timer: 1500000

              });
              return respons.data;
            })
            .catch(error => {
              console.log(error);
              console.log(error.message);
              console.log(error.response.data.reason);
              console.log(error.response.status);
              console.log(error.response.headers);
              Swal.fire({
                imageUrl: require('../images/failure.gif'),
                imageAlt: 'Custom Image',
                title: `${error.response.statusText}`,
                showConfirmButton: true,
                timer: 1500000
              });
              throw error;
            });
        } catch (error) {
          throw error;
        }
      }
      function doBulkRegister(){
        try{
          return Axios({
            url: `${BulkRegister}`,
            method: 'post',
            data: localStorage.getItem('bulkdata'),
            headers: {
              "Authorization": "Token " + localStorage.getItem('teachertoken'),
              "content-type": "application/json"
            }
          }).then(
            
            respons => {
              console.log(respons.data);
              Swal.fire({
                imageUrl: require('../images/success.gif'),
                imageAlt: 'Custom Image',
                title: `Student registration Succesful! `,
                showConfirmButton: true,
                timer: 1500000

              });
              return respons.data;
            })
            .catch(error => {
              console.log(error);
              console.log(error.message);
              console.log(error.response.data.reason);
              console.log(error.response.status);
              console.log(error.response.headers);
              Swal.fire({
                imageUrl: require('../images/failure.gif'),
                imageAlt: 'Custom Image',
                title: `${error.response.statusText}`,
                showConfirmButton: true,
                timer: 1500000
              });
              throw error;
            });
        } catch (error) {
          throw error;
        }
      }
      function getNamesUsers()
      {
        try{
          return Axios({
            url: `${getUsers}`,
            method: 'get',      
            headers: {
              "Authorization": "Token " + localStorage.getItem('teachertoken'),
              "content-type": "application/json"
            }
        
          }).then(respons => {
            console.log(respons.data.users);
            return respons.data.users;
        
          })
            .catch(err => {
              console.log("hello")
              console.log(err.response);
              console.log(err.response.statusText);
              Swal.fire({
                imageUrl: require('../images/failure.gif'),
                imageAlt: 'Custom Image',
                title: `${err.response.statusText} Request,Please login`,
                showConfirmButton: true,
                timer: 1500000
              });
              throw err;
            });
        } catch (error) {
          throw error;
        }
      }
      function getCmp_Names(schoolName,class_id)
      {
        try{
        return Axios({
          url: `${Cmp_Names}`,
          method: 'post',
          data: {
            
            class_id:class_id,
            },
          headers: {
            "Authorization": "Token " + localStorage.getItem('teachertoken'),
            "content-type": "application/json"
          }

        }).then(respons => {
          console.log(respons);
          return respons.data.cmp_names;

        })
          .catch(err => {
            console.log("hello")
            console.log(err);
            Swal.fire({
              imageUrl: require('../images/failure.gif'),
              imageAlt: 'Custom Image',
              title: 'Cannot Load Data, PLease Try Again!',
              showConfirmButton: true,
              timer: 1500000
            });
            throw err;
          });
      } catch (error) {
        throw error;
      }

      }
      function registerStudent() {
        try{
        return Axios({
          url: `${RegisterStudent}`,
          method: 'post',
          data: localStorage.getItem('registerstudent'),
          headers: {
            "Authorization": "Token " + localStorage.getItem('teachertoken'),
            "content-type": "application/json"
          }
        }).then(
          
          respons => {
            console.log(respons);
            Swal.fire({
              imageUrl: require('../images/success.gif'),
              imageAlt: 'Custom Image',
              title: `Student registration Succesful! loginID:${respons.data.loginID}\n password:${respons.data.password}`,
              showConfirmButton: true,
              timer: 1500000
            });
          })
          .catch(error => {
            console.log(error);
            console.log(error.message);
            console.log(error.response.data.reason);
            console.log(error.response.status);
            console.log(error.response.headers);
            Swal.fire({
              imageUrl: require('../images/failure.gif'),
              imageAlt: 'Custom Image',
              title: `${error.response.data.reason.email}`,
              showConfirmButton: true,
              timer: 1500000
            });
            throw error;
          });
      } catch (error) {
        throw error;
      }
        }
      function register() {
        try {
          return Axios({
            url: `${Register}`,
            method: 'post',
            data: localStorage.getItem('registeruser'),
            headers: {
                    "content-type": "application/json"
            }
        
          }).then(
            // function (error) {
            // if (error.response) {
            //   // The request was made and the server responded with a status code
            //   // that falls out of the range of 2xx
            //   console.log(error.response.data);
            //   console.log(error.response.status);
            //   console.log(error.response.headers);
            // } else if (error.request) {
            //   // The request was made but no response was received
            //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            //   // http.ClientRequest in node.js
            //   console.log(error.request);
            // } else {
            //   // Something happened in setting up the request that triggered an Error
            //   console.log('Error', error.message);
            // }
            // console.log(error.config);
            respons => {
              console.log(respons);
        
              Swal.fire({
                imageUrl: require('../images/success.gif'),
                imageAlt: 'Custom Image',
                title: 'User registration Succesfull!',
                showConfirmButton: true,
                timer: 1500000
              });
            })
            .catch(error => {
              console.log(error);
              console.log(error.message);
              console.log(error.response.data.reason);
              console.log(error.response.status);
              console.log(error.response.headers);
              Swal.fire({
                imageUrl: require('../images/failure.gif'),
                imageAlt: 'Custom Image',
                title: `${error.response.data.reason.email}`,
                showConfirmButton: true,
                timer: 1500000
              });
              throw error;
            });
        } catch (error) {
          throw error;
        }

      }
      function registerTeacher() {
        try{
        return Axios({
          url: `${TeacherRegister}`,
          method: 'post',
          data: localStorage.getItem('registerteacher'),
          headers: {
            "Authorization": "Token " + localStorage.getItem('teachertoken'),
            "content-type": "application/json"
          }

        }).then(
        
          respons => {
            console.log(respons);

            Swal.fire({
              imageUrl: require('../images/success.gif'),
              imageAlt: 'Custom Image',
              title: 'Teacher registration Succesful!',
              showConfirmButton: true,
              timer: 1500000
            });
          })
          .catch(error => {
            console.log(error);
            console.log(error.message);
            console.log(error.response.data.reason);
            console.log(error.response.status);
            console.log(error.response.headers);
            Swal.fire({
              imageUrl: require('../images/failure.gif'),
              imageAlt: 'Custom Image',
              title: `${error.response.data.reason.email}`,
              showConfirmButton: true,
              timer: 1500000
            });
            throw error;
          });
      } catch (error) {
        throw error;
      }

      }
      function getDistrictNames(states) {
        try{
        return Axios({
          url: `${DistrictNames}`,
          method: 'post',
          data: {
            state: states,
          },
          headers: {
            "content-type": "application/json"
          }

        }).then(respons => {
          console.log(respons);
          // console.log(respons.data.districts)
          return respons.data.districts;

        })
          .catch(err => {
            console.log("hello")
            console.log(err);
            Swal.fire({
              imageUrl: require('../images/failure.gif'),
              imageAlt: 'Custom Image',
              title: 'Cannot Load Data, PLease Try Again!',
              showConfirmButton: true,
              timer: 1500000
            });
            throw err;
          });
      } catch (error) {
        throw error;
      }

      }
      function getStateNames(country) {
        try{
        return Axios({
          url: `${StateNames}`,
          method: 'post',
          data: {
            country: country,
          },
          headers: {
            "content-type": "application/json"
          }

        }).then(respons => {
          console.log(respons);
          // console.log(respons.data.states)
          return respons.data.states;

        })
          .catch(err => {
            console.log("hello")
            console.log(err);
            Swal.fire({
              imageUrl: require('../images/failure.gif'),
              imageAlt: 'Custom Image',
              title: 'Cannot Load Data, PLease Try Again!',
              showConfirmButton: true,
              timer: 1500000
            });
            throw err;
          });
      } catch (error) {
        throw error;
      }

      }
      function getCountryNames() {
        try{
        return Axios({
          url: `${CountryNames}`,
          method: 'get',
          headers: {

            "content-type": "application/json"
          }

        }).then(respons => {
          console.log(respons);
          // console.log(respons.data.countries)
          return respons.data.countries
        })
          .catch(err => {
            console.log(err);
            Swal.fire({
              imageUrl: require('../images/failure.gif'),
              imageAlt: 'Custom Image',
              title: 'Cannot Load Data, PLease Try Again!',
              showConfirmButton: true,
              timer: 1500000
            });
            throw err;
          });
      } catch (error) {
        throw error;
      }

      }
      function getSchoolNames() {
        try{
        return Axios({
          url: `${SchoolNames}`,
          method: 'get',
          headers: {

            "content-type": "application/json"
          }

        }).then(respons => {
          console.log(respons);
          // console.log(respons.data.countries)
          return respons.data.schoolNames
        })
          .catch(err => {
            console.log(err);
            Swal.fire({
              imageUrl: require('../images/failure.gif'),
              imageAlt: 'Custom Image',
              title: 'Cannot Load Data, PLease Try Again!',
              showConfirmButton: true,
              timer: 1500000
            });
            throw err;
          });
      } catch (error) {
        throw error;
      }

      }
      function registerSchool() {
        try{
        return Axios({
          url: `${RegisterSchool}`,
          method: 'post',
          data: localStorage.getItem('registerschool'),
          headers: {

            "content-type": "application/json"
          }

        }).then(respons => {
          console.log(respons);

          Swal.fire({
            imageUrl: require('../images/success.gif'),
            imageAlt: 'Custom Image',
            title: 'School registration Succesful,Click Continue Register as Coordinator',
            showConfirmButton: true,
            timer: 1500000
          });
        })
          .catch(err => {
            console.log(err);

            Swal.fire({
              imageUrl: require('../images/failure.gif'),
              imageAlt: 'Custom Image',
              title: `${err.response.data.reason.schoolName}`,
              showConfirmButton: true,
              timer: 1500000
            });
            throw err;
          });
      } catch (error) {
        throw error;
      }

      }
      function login(userName, password) {
      try{
        return Axios({
          url: `${Login}`,
          method: 'post',
          data: {
            loginID: userName,
            password: password,

          },
          headers: {

            "content-type": "application/json"
          }

        }).then(respons => {
          console.log(respons);
          console.log(respons.data.token)
          const token = respons.data.token
          console.log("----" + token)
          
          localStorage.setItem('user', JSON.stringify(respons.data.user));
          console.log("hihihhhihi"+localStorage.getItem('user'))
          if(respons.data.userrole=="teacher")
          {
            localStorage.setItem('teachertoken', token);
          }
          else{
            localStorage.setItem('studenttoken', token);
          }
          Swal.fire({
            imageUrl: require('../images/success.gif'),
            imageAlt: 'Custom Image',
            title: 'User logged in succesfully',
            showConfirmButton: true,
            timer: 1500000
          });
          return respons.data.userrole;
        })
          .catch(err => {
            console.log("hello")
            console.log(err.response);
            Swal.fire({
              imageUrl: require('../images/failure.gif'),
              imageAlt: 'Custom Image',
              title: 'Your loginID or password is Incorrect, PLease Try Again!',
              showConfirmButton: true,
              timer: 1500000
            });
            throw err;
          });
      } catch (error) {
        throw error;
      }


      }
      function logout() {
        // remove user from local storage to log user out
      try{
        return Axios({
          url: `${Logout}`,
          method: 'post',
          //  data:localStorage.getItem('registeruser'),
          headers: {
            "Authorization": "Token " + localStorage.getItem('teachertoken'),

            "content-type": "application/json"
          }

        }).then(respons => {
          console.log(respons);
          Swal.fire({
            imageUrl: require('../images/success.gif'),
            imageAlt: 'Custom Image',
            title: 'User logged out succesfully',
            showConfirmButton: true,
            timer: 1500000
          });
        })
          .catch(err => {
            console.log(err);
            Swal.fire({
              imageUrl: require('../images/failure.gif'),
              imageAlt: 'Custom Image',
              title:   `${err.response.statusText} Request,Please login`,
              showConfirmButton: true,
              timer: 1500000
          
          });
          throw err;
        });
      } catch (error) {
      throw error;
      }
      }
      function logoutStudent() {
        // remove user from local storage to log user out
      try{
        return Axios({
          url: `${Logout}`,
          method: 'post',
          //  data:localStorage.getItem('registeruser'),
          headers: {
            "Authorization": "Token " + localStorage.getItem('studenttoken'),

            "content-type": "application/json"
          }

        }).then(respons => {
          console.log(respons);
          Swal.fire({
            imageUrl: require('../images/success.gif'),
            imageAlt: 'Custom Image',
            title: 'User logged out succesfully',
            showConfirmButton: true,
            timer: 1500000
          });
        })
          .catch(err => {
            console.log(err);
            Swal.fire({
              imageUrl: require('../images/failure.gif'),
              imageAlt: 'Custom Image',
              title:  `${err.response.statusText} Request,Please login`,
              showConfirmButton: true,
              timer: 1500000
          
          });
          throw err;
        });
      } catch (error) {
      throw error;
      }
      }
      function getSchoolClasses()
      {
        try{
        console.log("coming")
        return Axios({
          url: `${SchoolClasses}`,
          method: 'get',
        
          headers: {
            "Authorization": "Token " + localStorage.getItem('teachertoken'),
            "content-type": "application/json"
          }

        }).then(respons => {
          console.log(respons);
          // console.log(respons.data.states)
          return respons.data.schoolClasses;

        })
          .catch(err => {
            console.log("hello")
            console.log(err);
            Swal.fire({
              imageUrl: require('../images/failure.gif'),
              imageAlt: 'Custom Image',
              title: 'Cannot Load Data, PLease Try Again!',
              showConfirmButton: true,
              timer: 1500000
            });
            throw err;
          });
      } catch (error) {
        throw error;
      }
      }
      function handleResponse(response) {

        return response.text().then(text => {
          const data = text && JSON.parse(text);
          if (!response.ok) {
            if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
              //  location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }

          return data;
        });
      }
