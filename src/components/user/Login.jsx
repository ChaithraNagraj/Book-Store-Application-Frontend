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
      if (res.data === data.LoginId) {
        this.setState({
          loginAuthentication: true
        })
      }
      this.props.history.push('../../homepage');
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
                <div className="form-group">
            <h1 className='display-3 text-dark' style={{backgroundColor:'#A03037'}}>Login to BookStore</h1>
          </div>
          <div className="form-group" style={{marginTop:'15px',fontWeight:'bold', marginnRight:'100px'}}>
            <label for="loginId">LoginId :</label>
            <input type="text" id="loginId" className="form-control " onChange={this.loginIdHandler} style={{marginTop:'20px', marginRight:'60px'}}/>

          </div>
          <div className="form-group" style={{ marginTop: '15px',fontWeight:'bold', marginnRight:'100px' }}>
            <label for="password">Password :</label>
            <input type="password" id="password" className="form-control " onChange={this.passwordHandler} style={{marginTop:'20px', marginRight:'60px'}} />
          </div>
          <div className="form-group" style={{ marginTop: '15px',fontWeight:'bold', marginnRight:'100px' }}>
            <label for="role">Role:</label>
            <input type="role" id="role" className="form-control " onChange={this.roleHandler} style={{marginTop:'20px', marginRight:'65px'}} />
          </div>

          {
            this.state.showError ? <div className="form-group text-danger" id="error">Email or Password is incorrect </div> : null
          }
          <button type="submit" className="btn btn-success" id="submitBtn"  style={{ background:' #A03037',margin:'center',color:'Balck',marginTop:'20px' }}>Login</button> 
                         <small className="link"><Link href="../Registration" >

                                Register-Here?

                        </Link></small>

        </form>
        </Card>

      </>
    )
  }
}
export default Login;