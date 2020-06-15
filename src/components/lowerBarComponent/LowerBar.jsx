import React, { Component } from "react"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import { Dropdown } from 'react-native-material-dropdown';
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField';
import { getMethod } from '../../service/httpService.jsx';
// import { Dropdown } from "react-native-material-dropdown";
import './lowerbar.css';


export default class LowerBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayMenu: false,
          };
     
       this.showDropdownMenu = this.showDropdownMenu.bind(this);
       this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
     
     };
     
     showDropdownMenu(event) {
         event.preventDefault();
         this.setState({ displayMenu: true }, () => {
         document.addEventListener('click', this.hideDropdownMenu);
         });
       }
     
       hideDropdownMenu() {
         this.setState({ displayMenu: false }, () => {
           document.removeEventListener('click', this.hideDropdownMenu);
         });
     
       }
    
    render() {
        return (
            <p>
                <div >
                    <Toolbar>
                        <Typography edge="start" variant="h6">
                            Books <Typography variant="caption" style={{ color: 'grey' }} gutterBottom>({this.props.data} items)</Typography>
                        </Typography>
                        <div className="dropdown" style = {{ marginLeft: '60%',background:"white",width:"200px"}} >
         
         <div className="button" onClick={this.showDropdownMenu}> Sort by relevance </div>

          { this.state.displayMenu ? (
           <ul> 
         <li><a href="price">Price:High to Low</a></li> 
          <li><a href="price">Price:Low to High</a></li> 
         <li><a href="Arrivals">Newest Arrivals</a></li> 
         </ul> 
        ):
        (
          null
        )
        }

       </div>
             </Toolbar>
                </div>
            </p>
        )
    }

}