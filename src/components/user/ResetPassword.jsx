import React from 'react';
import { Card, TextField, Snackbar, IconButton, Button } from '@material-ui/core'
import { withRouter } from "react-router-dom";

// import UserService from './service/UserService';
//import UserService from '../service/UserService'

export default class Resetpassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            password2:'',
            snackBarMsg: '',
            openSnackBar: false,
        }
        // this.handleemail=this.handleemail.bind(this)
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    handlePassword2 = (event) => {
        this.setState({
            password2: event.target.value            
        })
    }


    handleSubmit = () => {

        if (this.state.password === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "Password cannot be empty"
            })
        }
        else if(this.state.password !== this.state.password2){
            this.setState({
                openSnackBar: true,
                snackBarMsg: "Password did not match"
            })
        }

        else {
            let data = {
                "password": this.state.password
            }
            console.log("Reset Password Component data", data)
            // service.resetPassword(data).then(res => {
            //     console.log("Response after hitting reset password api >> ", data);
            //     this.props.history.push('/')

            // }).catch(error => {
            //     console.log("Error after hitting reset password api  ", error);
            // })
        }
    }
    handleClose = () => {
        this.setState({
            openSnackBar: false
        })
    }
    render() {
        return (
            <div className="resetPassword-container">
                <Card className="resetPassword-card">
                    <div>
                        <h1 style={{ color: "#ffb300" }}>
                            Reset Password
                    </h1>
                    <div className="resetPassword1">
                        <TextField
                        type="password"
                            id="password"
                            placeholder="New Password"
                            variant="outlined"
                            value={this.state.password}
                            onChange={this.handlePassword}
                        /></div>
                        
                    <div className="resetPassword2">
                        <TextField
                        type="password"
                            id="password2"
                            placeholder="Confirm Password"
                            variant="outlined"
                            value={this.state.password2}
                            onChange={this.handlePassword2}
                        /></div>
                        <div className="resetButton">
                        <Button variant="contained" color="primary"  onClick={this.handleSubmit}>Submit</Button>
                    </div></div>
                </Card>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.openSnackBar}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    message={<span id="message-id">{this.state.snackBarMsg}</span>}
                    action={[
                        <IconButton
                            onClick={this.handleClose}
                        >
                        </IconButton>
                    ]}
                />
            </div>
        )
    }
}