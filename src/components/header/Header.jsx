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
import Popup from "reactjs-popup";
 import book from '../../assets/education.svg';

import {getCartAddedCountRequestMethod} from '../../services/CartServices';
import "./header.css";
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' ,
        loginId: localStorage.getItem('loginId'),
        // abc:localStorage.getItem("loginId"),
        login:false,

        loginValue:''};
        
    
        // this.handleGoToLogin=this.handleGoToLogin.bind(this);
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.handleGoToCart=this.handleGoToHome.bind(this);
        // var abc =localStorage.getItem("loginId");

      }
      
  //     componentDidMount(){
  //       console.log(this.state)
  // if(this.state.loginId=== localStorage.getItem('loginId')){
  //   this.setState({
  //     login:true
  //   })
  // }
  //   else{
  //     this.setState({
  //       login:false
  //     })
    
  // }
  
  //     }
      
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
        window.location.reload(false);
    
      }


  handleGoToLogin(event){
    window.location.assign('./Login')    
  }

  
  handleGoToLogout(event){
    window.location.assign('./Logout')

  }
  EditHandler(even){
window.location.assign('./editProfile')
  }
    render() {
        console.log(this.props.cartCount);
        console.log(this.state.loginId);
        const abc =(this.state.loginId);
        console.log(abc);
        return (

            
            <>
                <div className='header'>
                    <div className='book-logo-search-div' style={{marginLeft:'-10px'}}>
                        <div className='book-logo-div' onClick={() => this.handleGoToHome()}>
                            {/* <MenuBookIcon fontSize='large' /> */}
                            <img className='img' id='book' src={book}/>
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
     <div className="Sign">  
        <Popup
        trigger={open => (
         <AccountCircleIcon fontSize='large' style={{ color: 'white', marginLeft:'-150px', marginTop:"10px"}}/>
        )}
        position="left center"
        closeOnDocumentClick
      >
            <div className="modal" style={{width:"20",height:"200px"}}>
                  <AccountCircleIcon fontSize='large' style={{ color: 'black',marginTop:"60px",marginLeft:"60px"}}/>
                  
               <If condition={abc==null}  >
          <Then>
           <Button
           style={{backgroundColor:'#A03037',marginLeft:"5px",marginTop:"20px"}}
           onClick={this.handleGoToLogin}> Login/SignUp </Button>
           
          
         </Then>
        <Else>
          <Then>
            
            <div  onClick={this.EditHandler} style={{color:'black',marginTop:'20px'}}>

               {abc}
            </div>
        <Button
        style={{backgroundColor:'#A03037',marginLeft:"50px",marginTop:"20px"}}
               onClick={this.handleGoToLogout}> Logout  </Button>
                        </Then>  
        </Else>
</If>
          
          </div>

      </Popup>
    
             </div>
                </div>
                
            </>
        )

    }
}
export default Header;