import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Card, Link } from '@material-ui/core';
import "./login.css";
import { LoginRequestMethod} from '../../services/LoginServices';
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginId: "",
      password: "",
      role: "",
      loginAuthentication: false,
      showError: false
    }
  }

  loginIdHandler = (event) => {
    const loginId = event.target.value;
    console.log("loginId", loginId);
    this.setState({
      loginId: loginId,
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

  submitHandler = (event) => {
    event.preventDefault();
    var data = {
      loginId: this.state.loginId,
      password: this.state.password,
      role: this.state.role
    }
    sessionStorage.setItem("loginId",this.state.loginId);
    const response = LoginRequestMethod(data);
    response.then(res => {
      console.log(res.data);
      console.log("printing res values");
      console.log(res);
      console.log("now printing the token value**********************************");
      console.log(res.data.token);
      sessionStorage.setItem("token",res.data.token);
      console.log("PRINTING THE GETSTORAGE TOKEN@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
      console.log(sessionStorage.getItem("token"));
      var token=sessionStorage.getItem("token")
      localStorage.setItem('token', res.data.token);


      console.log("printing var token $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
      console.log(token);
      if (res.data === data.LoginId) {
        // sessionStorage.setItem("token",data.token);
        console("trying to print token")
        console(res.token)

        this.setState({
          loginAuthentication: true
        })
      }
      this.props.history.push('../../bookstoreApplication');
    }).catch(() => {
      //alert("email or password is incorrect");
      this.setState({
        showError: true
      })
    })
  }

  render() {

    return (
      <>
              <Card className="logincard">

                <form className=" container p-5 bg-light text-primary mx-auto" id='form' onSubmit={this.submitHandler} >
                <div className="form-group" style={{width:'100%'}}>
            <h1 className='display-3 text-dark' style={{backgroundColor:'#A03037',width:'100%'}}> Login Here</h1>
          </div>
          <div className="form-group" style={{marginTop:'15px',fontWeight:'bold', marginnRight:'100px'}}>
            <label for="loginId" style={{marginTop:'5px'}}>LoginId  </label>
            <input type="text" id="loginId" className="form-control " onChange={this.loginIdHandler} style={{ marginRight:'100px'}}/>

          </div>
          <div className="form-group" style={{ marginTop: '15px',fontWeight:'bold', marginnRight:'100px' }}>
            <label for="password" style={{marginTop:'15px'}}>Password </label>
            <input type="password" id="password" className="form-control " onChange={this.passwordHandler} style={{marginTop:'10px', marginRight:'105px'}} />
          </div>
          <div className="form-group" style={{ marginTop: '15px',fontWeight:'bold', marginnRight:'100px' }}>
            <label for="role" style={{marginTop:'15px'}}>Role </label>
            <input type="role" id="role" className="form-control " onChange={this.roleHandler} style={{marginTop:'10px', marginRight:'95px'}} />
          </div>

          {
            this.state.showError ? <div className="form-group text-danger" id="error">Email or Password is incorrect </div> : null
          }
          <button type="submit" className="btn btn-success" id="submitBtn"  style={{ background:' #A03037',fontWeight:'bold',color:'Balck',marginTop:'20px',height:'30px',width:'100px'}}>Login</button> 
                         <small className="link" ><Link href="../Registration" >

                                Register-Here?

                        </Link></small>

        </form>
        </Card>

      </>
    )
  }
}
export default Login;