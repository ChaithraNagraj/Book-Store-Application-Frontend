import React, { Component } from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import { Button, Popover } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {getCartAddedCountRequestMethod} from '../../services/CartServices';
import "./header.css";
import Login from '../user/Login';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    
        // this.handleGoToLogin=this.handleGoToLogin.bind(this);
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.handleGoToCart=this.handleGoToHome.bind(this);

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
      handleGoToHome(event) {
        // this.props.history.push('/')
        // window.location.assign('../Dashboard');
        window.location.reload(false);
    
      }
      handleGoToProfile(event){
  window.location.assign('./profile')
  // Popup('./profile')
}
   
    render() {
        console.log(this.props.cartCount);
        return (
            
            <>
                <div className='header'>
                    <div className='book-logo-search-div'>
                        <div className='book-logo-div' onClick={() => this.handleGoToHome()}>
                            <ImportContactsTwoToneIcon fontSize='large' />
                        </div>
                        <div className='book-title'onClick={() => this.handleGoToHome()}>
                            <h2 className='title'>BookStore</h2>
                        </div>

                        <div className='search-div' style={{marginTop:'8px'}}>
                            <TextField
                                className='search-textfield'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                id="outlined-basic"
                                placeholder='search'
                                variant="outlined" 
                                onChange={this.props.searchHandler}   
                                />
                        </div>
                    </div>
                    <div className='cart-wishlist-div'>
                        <div className='cart-div' style={{marginLeft:"150px"}}>
                            {/* <span className='icon-counter' id='lblCartCount'> {this.props.cartCount} </span> */}
                            <span className='Stack-over' id='lblCartCount'> {this.props.cartCount} </span>

                            <Button id='icon-btn' onClick={this.props.cartIconClickedHandler}  ><ShoppingCartIcon fontSize='large'/></Button>
                        </div>
                        <div className='wishlist-div'>
                        {/* <span className='icon-counter' id='lblWishListCount'> {this.props.wishlistCount} </span> */}
                        <span className='Stack-Over' id='lblWishListCount'> {this.props.wishlistCount} </span>

                           <Button id='icon-btn' onClick={this.props.wishListIconClickedHandler}> <FavoriteIcon fontSize='large' /> </Button>
                        </div>
                    </div>
                    <div className="Sign" onClick={this.handleGoToProfile}varient="h9" noWrap>  
    
            <AccountCircleIcon fontSize='large' style={{ color: 'white', marginLeft:'-150px', marginTop:"13px"}}/>
            {/* <button onMouseOver={MouseOver} onMouseOut={MouseOut}>Hover over me!</button> */}

            {/* localStorage.getItem("loginId") */}
            {/* {() => this.localStorage.getItem("loginId")} */}


            {/* <Popup
    trigger={open => (
      <button className="button">Trigger - {open ? "Opened" : "Closed"}</button>
    )}
    position="right center"
    closeOnDocumentClick
  >
    <span> Popup content </span>
  </Popup> */}

             </div>
                </div>
                
            </>
        )

    }
}
export default Header;