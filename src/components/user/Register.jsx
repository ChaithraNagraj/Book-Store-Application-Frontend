import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Card, Link } from '@material-ui/core';
import "./login.css";
import { controller } from '../../service/UserService.jsx';
class Register extends Component {
    constructor() {
        super();
        this.state = {
            Firstname: "",
            userName: "",
            email: "",
            password: "",
            
            mobileNumber: "",
        
            fields: {},
            errors: {},

        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // First Name validation
        if (!fields["Firstname"]) {
            formIsValid = false;
            errors["Firstname"] = "* required fist name";
        }

        if (typeof fields["Firstname"] !== "undefined") {
            if (!fields["Firstname"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["Firstname"] = " enter only letters";
            }
        }
        //Last Name validation                      
        if (!fields["Last Name"]) {
            formIsValid = false;
            errors["Last Name"] = "* required last name";
        }

        if (typeof fields["Last Name"] !== "undefined") {
            if (!fields["Last Name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["Last Name"] = " enter only letters";
            }
        }
        //Email validation              
        if (!fields["Email Id"]) {
            formIsValid = false;
            errors["Email Id"] = "* required  valid mail id";
        }
        // Check if email_id contain @ symbol and .
        if (typeof fields["Email Id"] !== "undefined") {
            let lastAtPos = fields["Email Id"].lastIndexOf('@');
            let lastDotPos = fields["Email Id"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["Email Id"].indexOf('@@') === -1 && lastDotPos > 3 && (fields["Email Id"].length - lastDotPos) > 3)) {
                formIsValid = false;
                errors["Email Id"] = "Email is not valid";
            }
        }
        //Password validation                      
        if (!fields["Password"]) {
            formIsValid = false;
            errors["Password"] = "* required password";
        }


        //Confirm Password validation                      
        if (!fields["Confirm Password"]) {
            formIsValid = false;
            errors["Confirm Password"] = "* required password";
        }
        /**
         * Compare Password and Confirm Password are match or not
         */
        if (fields["Password"] !== fields["Confirm Password"]) {
            formIsValid = false;
            errors["Confirm Password"] = "password does not match";
        }
        //Contact Number validation
        if (!fields["Contact Number"]) {
            formIsValid = false;
            errors["Contact Number"] = "* required contact number";
        }
        /**
         * contact number start with 7 , 8 ,9 digit and length must be 10 digit
         */
        if (typeof fields["Contact Number"] !== "undefined") {
            if (!fields["Contact Number"].match(/[789]{1}[0-9]{9}/)) {
                formIsValid = false;
                errors["Contact Number"] = " enter valid contact number ";
            }
        }
        //set state for display error message
        this.setState({ errors: errors });
        console.log("validation", formIsValid);

        return formIsValid;
    }
    submitHandler = (event) => {
        // event.preventDefault();
        // var data = {
        //   LoginId: this.state.loginId,
        //   Password: this.state.password,
        //   Role: this.state.role
        // }
        // sessionStorage.setItem("loginId",this.state.loginId);
        // const response = LoginRequestMethod(data);
        // response.then(res => {
        //   console.log(res.data);
        //   if (res.data === data.LoginId) {
        //     this.setState({
        //       loginAuthentication: true
        //     })
        //   }
        //   this.props.history.push('../../homepage');
        // }).catch(() => {
        //   //alert("email or password is incorrect");
        //   this.setState({
        //     showError: true
        //   })
        // })
        // alert (`${this.state.firstName} ${this.state.userName} ${this.state.email}`);
        event.preventDefault();
        // const isValid = this.vallidate();
        // if (isValid) {
        //     console.log(this.state);
        //     console.log("hello world!!!");
        // }
        //else{
            const valid= this.handleValidation(); 
            if(this.handleValidation){
    
            
        var registrationData = {
            Firstname: this.state.Firstname,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            mobileNumber:this.state.mobileNumber
        };
    
        // commenting it for time being
    
        controller.userRegister(registrationData).then(res => {
            console.log("resp-----", res.data);
            console.log("this method called to service layer and took response from  there");
            if (res.status === 200) {
                alert('Registration succsefully done')
                this.props.history.push("/Login");
            } else {
                alert('Registration failed')
            }
    
        });
    
    
      }
    }
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }
    render() {
        // const { nameErr, emailErr, mobileNumberErr, userNameErr } = this.state.formErrors;    
    
    
        return (
          <>
                  <Card className="logincard">
    
                    <form className=" container p-5 bg-light text-primary mx-auto" id='form' onSubmit={this.submitHandler} >
                    <div className="form-group" style={{background:'#A03037', marginLeft: '12px' }}>
                <h1 className='display-3 text-dark'>Sing Up Here for BookStore</h1>
              </div>
              <div className="form-group">
                <label for="name">Firstname :</label>
                <input type="text" 
                id="name" className="form-group" 
                  value={this.state.FirstName} 
                //    onChange={this.handleChange} 
                onChange={this.handleChange.bind(this, "Firstname")}

                   error={this.state.errors["Firstname"]}
                   helperText={this.state.errors["Firstname"]}
                   

                 />
              
                                 
    
              </div>
              <div> ;
              </div>

             
              
             
             
    
              
              <button type="submit" className="btn btn-success" id="submitBtn"  style={{ background:' #A03037',margin:'center',color:'Balck' }}>Register</button>
    
                             
    
            </form>
            </Card>
    
          </>
        )
      }
    }
    export default Register;