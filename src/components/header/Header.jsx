import React, { Component } from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {getCartAddedCountRequestMethod} from '../../services/CartServices';
import "./header.css";
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
      handleGoToLogin(event) {
        // this.props.history.push('./Login')
        window.location.assign('./Login');
        // window.location.reload(false);
    
      }
 
    render() {
        console.log(this.props.cartCount);
        return (
            
            <>
                <div className='header'style={{position:"initial", windth:'100%'}}>
                    <div className='book-logo-search-div'>
                        <div className='book-logo-div' onClick={() => this.handleGoToHome()}>
                            <MenuBookIcon fontSize='large' />
                        </div>
                        <div className='book-title'onClick={() => this.handleGoToHome()}>
                            <h2 className='title'>BookStore</h2>
                        </div>

                        <div className='search-div'>
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
                    <div className="Sign" onClick={() => this.handleGoToLogin()}varient="h9" noWrap>       
            <AccountCircleIcon fontSize='large' style={{ color: 'white', marginLeft:'-150px', marginTop:"13px"}} />
             </div>
          {/* { this.state.displayMenu ? (
           <ul> 
         <li><a href="./Login">Login</a></li> 
          <li><a href="/Account">Account Details</a></li> 
         <li><a href="/OrderSummary">Your orders</a></li> 
         <li><a href="/wishlist">Your wishlist</a></li> 

         </ul> 
        ):
        (
          null
        )
      }   */}
                </div>
                
            </>
        )

    }
}
export default Header;