import React, { Component } from 'react'
import { Card, Link } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import userService from '../service/userService';
import { IconButton, Snackbar } from '@material-ui/core';
// CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { withRouter } from "react-router-dom";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

            email: '',
            password: '',
            Error: false,
            message: ""
        }
    }


    snackBarClose = () => {
        this.setState({ Error: false });
    }

    onChangeEmail = (event) => {

        var email = event.target.value;
        this.setState({
            email: email
        })
        console.log(this.state.email);
    }

    onChangePassword = (event) => {

        var password = event.target.value;
        this.setState({
            password: password
        })
    }

    onSubmit = () => {
        if (this.state.email === "") {
            this.setState({
                Error: true,
                message: "Email cannot be empty"
            })
        }
        else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)) {
            this.setState({
                Error: true,
                message: 'Please provide a valid email address'
            })
        }
        else if (this.state.password === null || this.state.password.length < 4) {
            this.setState({
                Error: true,
                message: "Password should be min 4"
            })
        }
        else {
            var loginDetails = {
                "username": this.state.email,
                "password": this.state.password
            }
            console.log(loginDetails);
            //             service.userLogin(loginDetails).then((res) => {
            //     console.log('login res---', res.data.token);
            //     if (res.data.statuscode === 200) {

            //         localStorage.setItem('token', res.data.token);
            //         this.props.history.push("/dashboard")
            //     }
            // }).catch((err) => {
            //     console.log("in error");
            //     console.log("error", err.response.data);
            //     // var msg = err.response.data.message
            //     this.setState({ message: 'invalid credentials' })

            // })
            console.log('-----', this.state.message);
        }
        // })
    }
    render() {
        return (

            <div className="registerForm">
                <Card className="logincard">
                    <Snackbar
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        open={this.state.Error}
                        autoHideDuration={2000}
                        onClose={this.snackBarClose}
                        message={<span id="message-id">{this.state.message}</span>}
                        action={
                            <IconButton
                                onClick={this.snackBarClose}>
                                {/* <CloseOutlinedIcon /> */}
                            </IconButton>
                        } />
                    <div className="heading">
                        <div className='register-book-store'>
                            <h1 className='register-h1'>
                            <span style={{ color: "#2196f3" }}>B</span>
                                <span style={{ color: "#b71c1c" }}>o</span>
                                <span style={{ color: "#ffc107" }}>o</span>
                                <span style={{ color: "#1976d2" }}>k</span>
                                <span style={{ color: "#43a047" }}>S</span>
                                <span style={{ color: "#b71c1c" }}>t</span>
                                <span style={{ color: "#1976d2" }}>o</span>
                                <span style={{ color: "#ffc107" }}>r</span>
                                <span style={{ color: "#b71c1c" }}>e</span>
                                </h1>
                        </div>
                        <div className='register-h2'><h2>Login to BookStore Account</h2></div>
                    </div>

                    <div className='register-names'>

                        <div>
                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                name="email"

                                margin="normal"
                                variant="outlined"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                        </div>
                        <TextField
                            id="outlined-password-input"
                            label="Password"

                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            value={this.state.passwors}
                            onChange={this.onChangePassword}
                        />
                        <div>
                            <Button variant="contained" color="primary" className="loginSubmit"
                                onClick={this.onSubmit}   >
                                Submit
                            </Button>
                            <small className="link"><Link href="/forgotPassword" >
                                ForgotPassword?
                        </Link></small>
                        </div>
                        <div className="errorMessage">
                            <span style={{ color: "#b71c1c" }}>{this.state.message}</span>
                        </div>
                    </div>

                </Card>
            </div>
        )
    }
}
// export default Login;
