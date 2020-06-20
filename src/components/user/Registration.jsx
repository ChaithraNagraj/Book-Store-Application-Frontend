import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Card, Link } from '@material-ui/core';
import "./login.css";
import { controller } from '../../service/UserService.jsx';
// import { LoginRequestMethod} from '../../service/LoginServices';
class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      userName:"",
      email:"",
      mobileNumber:"",
      password: " ",
      role: "",
      formErrors: {}
    }
    this.initialState = this.state;    

  }
  handleFormValidation() {    
    const { name, userName, mobileNumber,email,password } = this.state;    
    let formErrors = {};    
    let formIsValid = true;    

    //Student name     
    if (!name) {    
        formIsValid = false;    
        formErrors["nameErr"] = "Name is required.";    
    }   
    //userName
    if (!userName) {    
        formIsValid = false;    
        formErrors["userNameErr"] = "userName is required.";    
    }   

    //Email    
    if (!email) {    
        formIsValid = false;    
        formErrors["emailErr"] = "Email id is required.";    
    }    
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {    

        formIsValid = false;    
        formErrors["emailErr"] = "Invalid email id.";    
    }    

       

      

    //Phone number    
    if (!mobileNumber) {    
        formIsValid = false;    
        formErrors["mobileNumberErr"] = "Phone number is required.";    
    }    
    else {    
        var mobPattern = / [789]{1}[0-9]{9}/;    
        if (!mobPattern.test(mobileNumber)) {    
            formIsValid = false;    
            formErrors["mobileNumberErr"] = "Invalid phone number.";    
        }    
    }    

       

    this.setState({ formErrors: formErrors });    
    return formIsValid;    
}    

handleChange = (e) => {    
    const { name, value } = e.target;    
    this.setState({ [name]: value });    
}    


 nameHandler = (event) => {
    const name = event.target.value;
    console.log("name", name);
    this.setState({
      name: name,
    })
  }
  passwordHandler = (event) => {
    const password = event.target.value;
    console.log('password', password)
    this.setState({
      password: password,
    })
  }
  roleHandler = (event) => {
    const role = event.target.value;
    console.log('role', role)
    this.setState({
      role: role
    })
  }
  emailHandler = (event) =>{
      const email =event.target.value;
      console.log('email',email)
      this.setState({
          email:email
      })
  }
  userNameHandler =(event) =>{
      const userName=event.target.value;
      console.log('userName',userName)
      this.setState({
          userName:userName
      })
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
        const valid= this.handleFormValidation(); 
        if(this.handleFormValidation){

        
    var registrationData = {
        name: this.state.name,
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

  render() {
    const { nameErr, emailErr, mobileNumberErr, userNameErr } = this.state.formErrors;    


    return (
      <>
              <Card className="logincard">

                <form className=" container p-5 bg-light text-primary mx-auto" id='form' onSubmit={this.submitHandler} >
                <div className="form-group" style={{background:'#A03037', marginLeft: '12px' }}>
            <h1 className='display-3 text-dark'>Sing Up Here for BookStore</h1>
          </div>
          <div className="form-group">
            <label for="name">name :</label>
            <input type="text" id="name" className="form-group"   value={this.state.name}  onChange={this.handleChange} 
            style={{marginRight:'70px'}}  className= {nameErr ? ' showError' : ''}  />
             {nameErr &&    <div style={{ color: "red" }}>{nameErr}</div>  }  
                             

          </div>
          <div className="form-group" style={{ marginTop: '15px', marginnRight:'100px' }}>
            <label for="password">Password :</label>
            <input type="password" id="password" className="form-control "  onChange={this.handleChange} style={{marginRight:'75px'}}
              />
                         {/* {passwrodErr &&    <div style={{ color: "red" }}>{passwordErr}</div>  }   */}

          </div>
          <div className="form-group" style={{ marginTop: '15px', marginnRight:'100px' }}>
            <label for="mobileNumber">mobileNumber:</label>
            <input type="mobileNumber" id="mobileNumber" className="form-control "  onChange={this.handleChange}style={{marginRight:'65px'}} 
            className= {mobileNumberErr ? ' showError' : ''}/>
                         {mobileNumberErr &&    <div style={{ color: "red" }}>{mobileNumberErr}</div>  }  

          </div>
          <div className="form-group" style={{ marginTop: '15px', marginnRight:'100px' }}>
            <label for="email">email :</label>
            <input type="text" id="eamil" className="form-control "  onChange={this.handleChange} style={{marginRight:'75px'}}
             className= {emailErr ? ' showError' : ''}/>
            {emailErr &&    <div style={{ color: "red" }}>{emailErr}</div>  }  

          </div>
          <div className="form-group" style={{ marginTop: '15px', marginnRight:'100px' }}>
            <label for="userName">userName :</label>
            <input type="text" id="userName" className="form-control " onChange={this.handleChange} style={{marginRight:'75px'}}
            className= {userNameErr ? ' showError' : ''}/>
            {emailErr &&    <div style={{ color: "red" }}>{userNameErr}</div>  }  
          </div>
{/* 
          {
            this.state.showError ? <div className="form-group text-danger" id="error">Email or Password is incorrect </div> : null
          }
          {
            this.state.showError ? <div className="form-group text-danger" id="userName">userName incorrect </div> : null
          } */}
          
          <button type="submit" className="btn btn-success" id="submitBtn"  style={{ background:' #A03037',margin:'center',color:'Balck' }}>Register</button>

                         

        </form>
        </Card>

      </>
    )
  }
}
export default Registration;