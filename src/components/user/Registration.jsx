import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Card, Snackbar, IconButton } from "@material-ui/core";
//import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import controller from '../service/UserService'
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
            firstName: '',
            userName: '',
            email: '',
            password: '',
            mobileNumber: '',
            role: 'user',
            firstNameError: '',
            userNameError: '',
            emailError: '',
            passwordError: '',
            error: false,
            message: " "
        }


    }

    handlefirstNamechange = (event) => {
        this.setState({
            firstName: event.target.value
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

    vallidate = () => {
        let firstNameError = "";
        let userNameError = "";
        let emailError = "";
        let passwordError = ""
        if (!this.state.firstName) {
            firstNameError = 'name cannot be blank';

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
        if (emailError || firstNameError || userNameError || passwordError) {
            this.setState({ emailError, firstNameError, userNameError, passwordError });
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
            firstName: this.state.firstName,
            userName: this.state.userName,
            email: this.state.email,
            passwordError: this.state.password
        };

        // controller.userRegister(registrationData).then(res => {
        //     console.log("resp-----", res.data);
        //     console.log("this method called to service layer and took response from  there");
        //     if (res.status === 201) {
        //         alert('Registration succsefully done')
        //         this.props.history.push("/Login");
        //     } else {
        //         alert('Registration failed')
        //     }

        // });


    }
    snackBarClose = () => {
        this.setState({ Error: false });
    };

    handleChangeRadio = (e) => {
        console.log("radiobutton****")
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className>
                {/* <div className="registerForm"> */}

                <Card className>
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
                        <div className="registerNames">
                            <TextField
                                id="outlined-name-input"
                                label="FirstName"
                                name="name"
                                autoComplete="name"
                                margin="dense"
                                variant="filled"
                                value={this.state.firstName}
                                onChange={this.handlefirstNamechange}
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
                        <div>



                            <div style={{ width: '92%', marginLeft: '390px', paddingBottom: '20px' }} >
                                <div style={{ width: '92%', marginLeft: '-300px', paddingBottom: '20px' }} className="typeRadio">Type of Registration</div>
                                <RadioGroup style ={{allign:"centre"}} aria-label="Type"  name="type" row >
                                    <FormControlLabel value="user"
                                     control={<Radio />} 
                                     onChange={this.handleChangeRadio}
                                    // checked={!this.state.role === "user"}
                                     label="User" />

                                    <FormControlLabel value="seller" 
                                    control={<Radio />} 
                                    onChange={this.handleChangeRadio}
                                    // checked={!this.state.role === "user"}
                                    label="Seller" />

                                    
                                </RadioGroup>
                            </div>

                        </div>
                        <div>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={this.handleSubmit}
                            >
                                Submit
                </Button>
                        </div>

                    </div>

                </Card>


            </div>


        )
    }
}


export default Registration
