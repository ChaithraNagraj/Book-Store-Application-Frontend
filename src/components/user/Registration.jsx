import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Card, Snackbar, IconButton } from "@material-ui/core";
//import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import controller from '../service/UserService';
import { controller } from '../../service/UserService.jsx';

import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';




class Registration extends Component {
    constructor(props) {
        super(props)


        this.state = {
            name: '',
            userName: '',
            email: '',
            password: '',
            mobileNumber: '',
            role: ''
            // firstNameError: '',
            // userNameError: '',
            // emailError: '',
            // passwordError: '',
            // error: false,
            // message: " "
        }


    }

    handlenamechange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleuserNamechange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    handleemailchange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handlepasswordchange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    

    handlemobilechange = (event) => {
        this.setState({
            mobileNumber: event.target.value
        })
    }
    handlerolechange = (event) =>{
        this.setState({
            role : event.target.value
        })
    }

    // handleChangeRadio = (event) => {
    //     console.log("radiobutton****")
        
    //     this.setState({     
    //         role: event.target.value
    //     })
    // }

    vallidate = () => {
        let nameError = "";
        let userNameError = "";
        let emailError = "";
        let passwordError = ""
        if (!this.state.name) {
            nameError = 'name cannot be blank';

        }
        if (!this.state.userName) {
            userNameError = 'userName cannot be blank';

        }
        if (!this.state.email.includes('@')) {
            emailError = 'invalid email';

        }
        if (!this.state.password) {
            passwordError = 'password cannot be blank';
        }
        if (emailError || nameError || userNameError || passwordError) {
            this.setState({ emailError, nameError, userNameError, passwordError });
            return false;
        }
        return true
    }
    handleSubmit = event => {
        // alert (`${this.state.firstName} ${this.state.userName} ${this.state.email}`);
        event.preventDefault();
        const isValid = this.vallidate();
        if (isValid) {
            console.log(this.state);
            console.log("hello world!!!");
        }
        //else{
        var registrationData = {
            name: this.state.name,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            role:this.state.role
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
    snackBarClose = () => {
        this.setState({ Error: false });
    };

   
    render() {
        return (
            
             <div className="registration-container"> 
                {/* <div className="registerForm"> */}

                <Card className="registration-card">
                    {/* <Card className="formCard"> */}

                    {/* <h1>This is from card div</h1> */}
                    <Snackbar
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center"
                        }}
                        autoHideDuration={1000}
                        onClose={this.snackBarClose}
                        message={<span id="message-id">this.state.firstNameError</span>}
                        action={
                            <IconButton onClick={this.snackBarClose}>
                                {/* <CloseOutlinedIcon /> */}
                            </IconButton>
                        }
                    />
                    <div className="heading">
                        <div className="register-fundo">


                        </div>
                        <div className="register-h2">
                            <h3 style={{ color: "#ffb300" }}> Sign up here for BookStore!!!</h3>
                        </div>
                        <div className="registerNames ">
                            <TextField
                                id="outlined-name-input"
                                label="FirstName"
                                name="name"
                                autoComplete="name"
                                margin="dense"
                                variant="filled"
                                value={this.state.name}
                                onChange={this.handlenamechange}
                            />
                        </div>
                        <div>{this.state.firstNameError}</div>
                        <div className="registerNames">
                            <TextField
                                id="outlined-name-input"
                                label="UserName"
                                name="Usename"
                                autoComplete="name"
                                margin="dense"
                                variant="filled"
                                value={this.state.userName}
                                onChange={this.handleuserNamechange}
                            />
                        </div>
                        <div>{this.state.userNameError}</div>
                        <div className="registerNames">
                            <TextField
                                id="outlined-name-input"
                                label="email"
                                name="email"
                                autoComplete="name"
                                margin="dense"
                                variant="filled"
                                value={this.state.email}
                                onChange={this.handleemailchange}
                            />
                        </div>
                        <div>{this.state.emailError}</div>
                        <div className="registerNames">
                            <TextField
                                id="outlined-name-input"
                                label="mobileNumber"
                                name="mobileNumber"
                                autoComplete="name"
                                margin="dense"
                                variant="filled"
                                value={this.state.mobileNumber}
                                onChange={this.handlemobilechange}
                            />
                        </div>
                        <div className="registerNames">
                            <TextField
                                id="outlined-name-input"
                                label="password"
                                name="password"
                                autoComplete="name"
                                margin="dense"
                                variant="filled"
                                value={this.state.password}
                                onChange={this.handlepasswordchange}
                            />
                        </div>
                        <div>{this.state.passwordError}</div>
                        <div className="registerNames">
                            <TextField
                                id="outlined-name-input"
                                label="role"
                                name="role"
                                autoComplete="name"
                                margin="dense"
                                variant="filled"
                                value={this.state.role}
                                onChange={this.handlerolechange}
                            />
                        <div>



                                {/* <div className="regFName"> 
                            {/* <div style={{ width: '92%', marginLeft: '390px', paddingBottom: '20px' }} >
                                <div style={{ width: '92%', marginLeft: '-300px', paddingBottom: '20px' }} className="typeRadio">Type of Registration</div> */}
                                {/* <RadioGroup style ={{allign:"centre"}} aria-label="Type"  name="type" row >
                                    <FormControlLabel value="1"
                                     control={<Radio />} 
                                     onChange={this.handleChangeRadio}
                                    // checked={!this.state.role === "user"}
                                     label="User" />

                                    <FormControlLabel value="2" 
                                    control={<Radio />} 
                                    onChange={this.handleChangeRadio}
                                    // checked={!this.state.role === "user"}
                                    label="Seller" />

                                    
                                </RadioGroup> */}
                            </div> 

                        </div>
                        <div buttonAngular>
                            <Button
                                // variant="outlined"
                                // color="secondary"
                                onClick={this.handleSubmit}
                            >
                                Register
                </Button>
                        </div>

                    </div>

                </Card>


            </div>


        )
    }
}


export default Registration;