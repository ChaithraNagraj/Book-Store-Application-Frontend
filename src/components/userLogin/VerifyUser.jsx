import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";


export default class VerifyUser extends Component {
    constructor(props){
        super(props);
        this.state = {

            newPassword: '',
            confirmPassword: '',
            Error: false,
            message: ""
        }
    }
    onsubmit = () => {
        let token = this.props.metch.params.token;
        // controller.verify(token).then((res) => {
        //     this.props.history.push("/login")
        // }).catch((err) => {
        //     console.log("in error");
        //     console.log("error", err.response)
        // })
    }

    render(){
        return(
            <div className="verifyPage">
                <h1 style={{color:"#7FFF00"}}>
                    Click On Verify Button</h1>
                <Button variant="contained" color="#8B0000" onClick={this.onsubmit}>
                    Verify</Button>
            </div> 
        )
    }
}