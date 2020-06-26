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
    render() {
        console.log(this.props.cartCount);
        return (
            
            <>
                <div className='header'>
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
                    <div className="Sign" onClick={this.showDropdownMenu}varient="h9" noWrap>       
            <AccountCircleIcon style={{ color: 'white', marginLeft:'-40px'}} />
             Hello,Sign-in..</div>
          { this.state.displayMenu ? (
           <ul> 
         <li><a href="./Login" >Login</a></li> 
          <li><a href="/Account">Account Details</a></li> 
         <li><a href="/OrderSummary">Your orders</a></li> 
         <li><a href="/wishlist">Your wishlist</a></li> 

         </ul> 
        ):
        (
          null
        )
      }  
                    <div className='cart-wishlist-div'>
                        <div className='cart-div'>
                            <span className='icon-counter' id='lblCartCount'> {this.props.cartCount} </span>
                            <Button id='icon-btn' onClick={this.props.cartIconClickedHandler}  ><ShoppingCartIcon fontSize='medium'/></Button>
                        </div>
                        <div className='wishlist-div'>
                        <span className='icon-counter' id='lblWishListCount'> {this.props.wishlistCount} </span>
                           <Button id='icon-btn' onClick={this.props.wishListIconClickedHandler}> <FavoriteIcon fontSize='medium' /> </Button>
                        </div>
                    </div>
                    
                </div>
                
            </>
        )

    }
}
export default Header;