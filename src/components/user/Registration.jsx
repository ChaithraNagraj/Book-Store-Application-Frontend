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
import "./Registration.css";



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

    handleChangeRadio = (event) => {
        console.log("radiobutton****")
        
        this.setState({     
            role: event.target.value
        })
    }

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
          <>
                  <Card className="registrationCard">
    
                    <form className=" container p-5 bg-light text-primary mx-auto" id='form' onSubmit={this.submitHandler} >
                    <div className="form-group" style={{background:'#A03037', marginLeft: '20px' }}>
                <h1 className='display-3 text-dark'>Hello Sign up here</h1>
              </div>
              <div className="form-group">
                <label for="name">FirstName :</label>
                <input type="text" id="name" className="form-control " onChange={this.handlenamechange} style={{marginRight:'73px'}}/>
    
              </div>
              <div className="form-group" style={{marginTop:'20px',marginnRight:'100px' }}>
                <label for="userName">userName:</label>
                <input type="password" id="userName" className="form-control " onChange={this.handleuserNamechange} style={{marginRight:'74px'}}/>
              </div>
              <div className="form-group" style={{ marginTop: '20px', marginnRight:'100px' }}>
                <label for="email">Email:</label>
                <input type="email" id="email" className="form-control " onChange={this.handleemailchange} style={{marginRight:'65px'}} />
              </div>
              <div className="form-group" style={{ marginTop: '20px', marginnRight:'130px' }}>
                <label for="mobilenumber">MobilPassword:</label>
                <input type="mobilenumber" id="mobilnumber" className="form-control " onChange={this.handlemobilechange}style={{marginRight:'90px'}} />
              </div>
              <div className="form-group" style={{ marginTop: '20px', marginnRight:'100px' }}>
                <label for="password">Password:</label>
                <input type="password" id="password" className="form-control " onChange={this.handlepasswordchange}style={{marginRight:'80px'}} />
              </div>
              <div className="form-group" style={{ marginTop: '20px', marginnRight:'100px' }}>
                <label for="role">role:</label>
                <input type="int" id="role" className="form-control " onChange={this.handlerolechange}style={{marginRight:'68px'}} />
              </div>
            <div>
            <div style={{ width: '92%', marginLeft: '-300px', paddingBottom: '20px' }} className="typeRadio">Type of Registration</div>
                                <RadioGroup style ={{allign:"centre"}} aria-label="Type"  name="type" row >
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

                                    
                                </RadioGroup>
                            </div> 
                            <button type="submit" className="btn btn-success" id="submitBtn" onClick={this.handleSubmit} style={{ background:' #A03037',margin:'center',color:'Balck' }}>Register</button>

                        </form>
            </Card>
    
          </>
        )
      }
    }
export default Registration;