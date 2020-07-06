import React, { Component } from 'react'
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import { withRouter } from 'react-router-dom'

import Card from '@material-ui/core/Card';
import './Logout.css';
 class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,


        }
    }
logout= event =>{
    console.log("log out component")
}
    // logout=() => {
    //     console.log("log out component")
    //     localStorage.removeItem('token')
    //     localStorage.removeItem('loginId')
    //     localStorage.clear()
    //     this.props.history.push("/login")
       
    // }

    handleClick = event => {
        console.log("logged out component")
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div>
                    <Card className="logoutCard">
                        <div className="logout" >
                            
                         <div style={{marginTop:"50px",marginLeft:'70px'}}>                      
                            <span style={{fontWeight:"bold"}}>
                                you want to Logout ?
           
                            </span>
                         </div>
                         <div className="logoutButton">
                            <Button variant="contained" color="white"
                            style={{backgroundColor:'#A03037', marginTop:'100px',marginLeft:'90px'}}
                            onClick={this.logout} >
                                Logout
                            </Button>
                        </div>


                        </div>
                    </Card>
            
            </div>


        )
    }
}
export default withRouter(Logout);