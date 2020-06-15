import React, { Component } from 'react'
//  import './App.css';
// import "./card.scss"

import Card from '@material-ui/core/Card';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
// import OrderPlaced from './components/OrderPlaced'
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import controller from '../service/UserService';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';






export class Cart extends Component {

    
    constructor(props) {
        super(props)

        this.state = {
            cartItem: 1,
            quantity: 1,
            descrption:'abc',
            // i m taking this dummy data for checking purpose

            book: [],
           
            total:"1500",
            showCustomerDetails:false,
            showOrderSummery: false,
            showOrderPlacedPage: false,
            sameBook: 1,
            name: "",
            phoneNumber: 0,
            pincode: 0,
            locality: "",
            city: "",
            address: "",
            landmark: "",
            type: "",
            email: "",
            







        }
      
    
       
    }
      
         
    componentWillMount() {
        this.setState({
            book: [
                {
                    id: 1,
                    title: "Don't Make Me to think",
                    author: "Steven King",
                    price: 1500,
                    image:"C:\Users\Shilpa\Documents\React\Book-Store-Application-Frontend\src\assets\dontMakeMeThink.jpg",

                }
                //  {
                //     id: 2,
                //     title: "Java for Beginners",
                //     author: "kalpesh mali",
                //     price: 250,
                //     image:""
                // }
            ]
        });
        this.setState({
            total:this.state.book.price
        })
        
    }
    nameHandler = (event) => {
        const name = event.target.value;
        console.log("name", name);
        this.setState({
            name: name,
        })
    }
    phoneNumberHandler = (event) => {
        const phoneNumber = event.target.value;
        console.log('phoneNumber', phoneNumber)
        this.setState({
            phoneNumber: phoneNumber
        })
    }

    pincodeHandler = (event) => {
        const pincode = event.target.value;
        console.log("pincode", pincode);
        this.setState({
            pincode: pincode
        })
    }
    localityHandler = (event) => {
        const locality = event.target.value;
        console.log('locality', locality)
        this.setState({
            locality: locality
        })
    }
    cityHandler = (event) => {
        const city = event.target.value;
        console.log("city", city);
        this.setState({
            city: city,
        })
    }
    addressHandler = (event) => {
        const address = event.target.value;
        console.log('address', address)
        this.setState({
            address: address
        })
    }
    landmarkHandler = (event) => {
        const landmark = event.target.value;
        console.log("landmark", landmark);
        this.setState({
            landmark: landmark,
        })
    }
    typeHandler = (event) => {
        const type = event.target.value;
        console.log('type', type)
        this.setState({
            type: type
        })
    }
    addCustomerDetailsHandler = (event) => {
        event.preventDefault();
        //const email = window.sessionStorage.getItem('email');
        //console.log(`email is ${email}`);
        var data = {
            email: this.state.email,
            fullName: this.state.name,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            pincode: this.state.pincode,
            citytown: this.state.city,
            landmark: this.state.landmark,
            addressType: this.state.type
        }
        //need to write method to send data to db

    }

    

    addQuantity = event => {
        let count=this.state.quantity;
        let a=this.state.price;
        

        
        if(this.state.quantity<=5){
           

this.setState({
            quantity: count + 1


        });

        this.state.book.forEach(book=>{
           this.state.total = book.price*count;
        });
    }else{
        alert(" oops!!!! totol 5 items can be avaible in a cart ")
    }
    
        
    }



    substractQuantity = event => {
        let count=this.state.quantity;

        if(this.state.quantity>=2){

        
        this.setState({
            quantity: count - 1


        });

        this.state.book.forEach((book)=>{
            this.state.total = this.state.total-book.price;
         });
        }else{
            alert("quanity cannot be zero")
        }
    }
    placeorder = event => {
        this.setState({
            placeorder : true
        })
    }
   
    totalCost(){
        let total = 0;
        this.state.book.forEach((book)=>{
            total = book.price;
        });
        console.log("the total price is" + total)

    }
    
     
    customerDetailsShowHandler = (event) => {
        this.setState({
            showCustomerDetails:true
        })
    }
    orderSummeryShowHandler = async () => {
        let doesShowOrderSummery = this.state.showOrderSummery;
        await this.setState({
            showOrderSummery: !doesShowOrderSummery
        })
    }
    orderPlacedPageHandler = async () => {
        let doesShowOrderPlacedPage = this.state.showOrderPlacedPage;
        await this.setState({
            showOrderPlacedPage: !doesShowOrderPlacedPage
        })
    }

    removeFromCart = event => {
        //need to write wen service layer is ready**
        

    }

 

    render() {
        
          
   
        return (
            <div className="Customer-address-div">
                   <Container maxWidth="lg">            
                <div >
                <Grid item xs={10}>
                        <div  className="Customer-address-div">    
                                      
                            {
                                this.state.book.map(book => {
                                    return (
                                        <div>
                                            <div>
                                                <div className="book-details-div" >

                                                <div className="img-book">
                                                                    <img src={"book.image"} className="order-logo" />
                                                  </div>
                                                    
                                
                                          <div className="aligncontentbesidepic">
                                             <div >
                                            
                                                    <h4 className="h4-div">{book.title}</h4>

                                                </div>
                                                <div className="author-name-div">
                                                    <p>{book.author}</p>

                                                </div>
                                                <div className="book-price-div">
                                                    <p>Rs.{book.price}</p>
                                                </div>
                                                
                                                <div className="book-price-div">
                                                    <p>totalprice{this.state.quantity * book.price}</p>
                                                </div>


                                                <div className="quantity-div">
                                                    <button className="minus-btn" 
                                                    onClick={this.substractQuantity} >
                                                        <RemoveRoundedIcon className="icon" />
                                                        </button>

                                                    <div className="input-type" >
                                                        {this.state.quantity}
                                                    </div>

                                                                                              

                                                    <div >
                                                           
                                                       <button   onClick={this.addQuantity} ><AddRoundedIcon className="icon" /></button>
                                                       

                                                           
                                                    </div>
                                                    <button className="" key ={book.id} onClick={() => this.removeFromCart(book.cartId)} >Remove</button>
                                                    
                                                
                                                </div>
                                            </div>   
                             </div>               
                         
                   
                                            </div>

                                        </div>
                                    );
                                   
                                })
                               
                            }
                           
                            
                            {
                                this.state.cartItem!=0 ? 
                                <div className="continue-cart-div">
                                    <button
                                   onClick={this.customerDetailsShowHandler}
                                    >PLACE ORDER</button>
                                </div> : null
                            }
                        </div>
                        </Grid>
                        <Grid item xs={10}>
                            <div className="Customer-address-div">
                                 <div className="address-title">
                                    <h3 className="my-cart-h4">Customer Details</h3>
                                </div>
                                {
                                                    this.state.showCustomerDetails ?
                                                        <form >
                                                            <div className="form-group">
                                                                <input type="text" 
                                                                placeholder='Name' 
                                                                id="name" 
                                                                className="form-control "
                                                                 onChange={this.nameHandler} />
                                                                 
                                                                <input type="text"
                                                                 placeholder='Phone number'
                                                                  id="phoneNumber" 
                                                                  className="form-control "
                                                                   onChange={this.phoneNumberHandler} />
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" 
                                                                placeholder='pincode'
                                                                 id="pincode" className="form-control " 
                                                                 onChange={this.pincodeHandler} />
                                                                <input type="text" 
                                                                placeholder='locality'
                                                                 id="locality" className="form-control "
                                                                  onChange={this.localityHandler} />
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" 
                                                                placeholder='city/town'
                                                                 id="city" 
                                                                 className="form-control "
                                                                  onChange={this.cityHandler} />

                                                                <input type="text" 
                                                                placeholder='landmark' 
                                                                id="landmark" 
                                                                className="form-control " 
                                                                onChange={this.landmarkHandler} />
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" 
                                                                placeholder='address'
                                                                 id="address" 
                                                                 className="address-group " 
                                                                 onChange={this.addressHandler} />
                                                            </div>
                                                            <div className="type-div">
                                                                <label >Type</label>
                                                                <div>
                                                                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                                                    <FormControlLabel value="home" control={<Radio color="primary" />} label="Home" onChange={this.typeHandler} />
                                                                    <FormControlLabel value="work" control={<Radio color="primary" />} label="Work" onChange={this.typeHandler} />
                                                                    <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" onChange={this.typeHandler} />
                                                                </RadioGroup>
                                                                </div>
                                                            </div>

                                                            <div className="continue-cart-div">
                                                                <button type="submit" id="continue"  onClick={this.orderSummeryShowHandler}>CONTINUE</button>
                                                            </div>
                                                        </form> : null
                                                }


                            </div>
                            
                        </Grid>
                        <Grid item xs={10}>
                                            <div className="order-sumary">
                                                <div className="cart-title-div">
                                                    <h3 className="my-cart-h4">Order Summary</h3>
                                                </div>
                                                {
                                                    this.state.showOrderSummery?
                                                    this.state.book.map(book => {
                                                        return (
                                                            <div className="order-details-div">
                                                                <div className="img-book">
                                                                    <img src={book.bookImage} className="order-logo" />
                                                                </div>
                                                                <div className="book-details-div">
                                                                    <div className="book-title-div">
                                                                        <h4 >{book.bookTitle}</h4>
                                                                    </div>
                                                                    <div className="author-name-div">
                                                                        <p>{book.authorName}</p>
                                                                    </div>
                                                                    <div className="book-price-div">
                                                                        <p>Rs.{book.bookPrice}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }):null
                                                }
                                                <div className="checkout-div">
                                                    <button 
                                                        onClick={this.orderPlacedPageHandler}
                                                    >CHECKOUT</button>
                                                </div>
                                            </div>
                                        </Grid>

                   
                </div>
                            </Container>

            </div>
        )
    }
}

export default Cart;




