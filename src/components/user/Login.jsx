import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Card, Link } from '@material-ui/core';
import "./login.css";
import { LoginRequestMethod} from '../../service/LoginServices';
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      loginAuthentication: false,
      showError: false
    }
  }

  emailHandler = (event) => {
    const email = event.target.value;
    console.log("email", email);
    this.setState({
      email: email,
    })
  }
  passwordHandler = (event) => {
    const password = event.target.value;
    console.log('password', password)
    this.setState({
      password: password
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    var data = {
      Email: this.state.email,
      Password: this.state.password
    }
    sessionStorage.setItem("email",this.state.email);
    const response = LoginRequestMethod(data);
    response.then(res => {
      console.log(res.data);
      if (res.data === data.Email) {
        this.setState({
          loginAuthentication: true
        })
      }
      this.props.history.push('/homepage');
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

        <Typography variant='h3' id='welcome-text'>
                                <span style={{ color: "#2196f3" }}>B</span>
                                <span style={{ color: "#b71c1c" }}>o</span>
                                <span style={{ color: "#ffc107" }}>o</span>
                                <span style={{ color: "#1976d2" }}>k</span>
                                <span style={{ color: "#43a047" }}>S</span>
                                <span style={{ color: "#b71c1c" }}>t</span>
                                <span style={{ color: "#1976d2" }}>o</span>
                                <span style={{ color: "#ffc107" }}>r</span>
                                <span style={{ color: "#b71c1c" }}>e</span>

        
        </Typography>
        <form className=" container p-5 bg-light text-primary mx-auto" id='form' onSubmit={this.submitHandler} >
          <div className="form-group" style={{ marginLeft: '47px' }}>
            <h1 className='display-3 text-dark'>Login</h1>
          </div>
          <div className="form-group">
            <label for="email">Email :</label>
            <input type="text" id="email" className="form-control " onChange={this.emailHandler} />

          </div>
          <div className="form-group" style={{ marginTop: '15px', marginnRight:'100px' }}>
            <label for="password">Password :</label>
            <input type="password" id="password" className="form-control " onChange={this.passwordHandler} />
          </div>
          {
            this.state.showError ? <div className="form-group text-danger" id="error">Email or Password is incorrect </div> : null
          }
          <button type="submit" className="btn btn-success" id="submitBtn"  style={{ marginleft: '440px',color:'blue' }}>Login</button>

                         <small className="link"><Link href="../../Registration" >

                                Register-Here?

                        </Link></small>

        </form>
        </Card>

      </>
    )
  }
}
export default Login;