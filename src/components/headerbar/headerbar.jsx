import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import { getMethod } from '../../service/httpService.jsx';
import Icon from "@material-ui/core/Icon";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./headerbar.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import PermIdentityIcon from '@material-ui/icons/PermIdentity';
// import headerBar from '../../headerBar.scss';

export default class ToolBar extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleGoToHome = this.handleGoToHome.bind(this);
    this.handleGoToCart=this.handleGoToCart.bind(this);
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  }
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

  handleChange(value) {
    this.setState({ value: value.target.value });
    this.search()
  }

  handleGoToHome(event) {
    // this.props.history.push('/')
    window.location.reload(false);

  }
  
handleGoToCart(event)
{
  window.location.assign('../../cart');
}


  search() {
    let path = {
      path: 'searchBook?field=' + this.state.value
    }
    getMethod(path).then((res) => {
      this.props.function(res.data)
    })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.search();
  }

  render() {
    return (
      <div>
        <AppBar position="static" style={{ backgroundColor: '#A03037', position: 'fixed', top: '0' }}>
          <Toolbar>
            <Icon
              edge="start"
              color="inherit"
              aria-label="open drawer"
              style={{ marginLeft: '12%' }}
              onClick={() => this.handleGoToHome()}
            >
              <MenuBookTwoToneIcon />
            </Icon>
            <Typography onClick={() => this.handleGoToHome()}  style={{ marginLeft: '1%' }} variant="h6" noWrap>
              Bookstore
            </Typography>
          
            <div className="searchBar"> style
              <SearchIcon style={{ color: 'grey', margin: '1%' }} />
              <InputBase
                placeholder="Search…"
                style={{ width: '100%' }}
                value={this.state.value} onChange={(value) => this.handleChange(value)}
              />
            </div>
         <div className="dropdown" style = {{ color:' white', marginLeft: '12%',width:"180px"}} >
             
         <div className="Sign" onClick={this.showDropdownMenu}varient="h9" noWrap>       
            <AccountCircleIcon style={{ color: 'white', margin: '-1%' ,size:'large'}} />
             Hello,Sign-in..</div>

          { this.state.displayMenu ? (
           <ul> 
         <li><a href="../../Login">Login</a></li> 
          <li><a href="/Account">Account Details</a></li> 
         <li><a href="/orders">Your orders</a></li> 
         <li><a href="/wishlist">Your wishlist</a></li> 

         </ul> 
        ):
        (
          null
        )
      }  
             </div>
             
           <Typography onClick={() => this.handleGoToCart()}  style={{ marginLeft: '1%' }} variant="h9" noWrap>
             Cart
            </Typography>
            <div className="ShoppingCart">
              <ShoppingCartIcon  style={{ color: 'white', margin: '15%' }} />
              </div>

          </Toolbar>
        </AppBar>
      </div >
    );
  }
}
