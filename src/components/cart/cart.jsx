import React, { Component } from 'react'
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
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import  Footer  from '../Footer/Footer';
import Header from '../header/Header';
import bookImage from '../../assets/book.jpg';
import "./cart.css";

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import {
    getCartAddedCountRequestMethod, getCartValuesRequestMethod,
    deleteCartValueRequestMethod, getCustomerAddressRequestMethod, addCustomerDetailsRequestMethod
} from '../../services/CartServices';
import OrderSummary from  './OrderSummary';





export class Cart extends Component {

    
    constructor(props) {
        super(props)

        this.state = {
            orderID: 0,
            cartItem: 1,
            quantity: 1,
            descrption:'abc',
            // i m taking this dummy data for checking purpose

            book: [],
           
            total:"",
            showCustomerDetails:false,
            showOrderSummery: true,
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
            incrementDecrementCount: 1


        }
      
    
       
    }
      
         
    componentWillMount() {
        //this method will bring the books which are in cart table and number of quantity
        //
           Promise.all([getCartAddedCountRequestMethod(), getCartValuesRequestMethod()])
            .then(([cartAddedCountResult, getCartValues]) => {
                this.setState({
                    cartAddedCount: cartAddedCountResult.data,
                    cart: getCartValues.data
                })
            })
    
        this.setState({
            book: [
                {
                    id: 1,
                    title: "Don't Make Me to think",
                    author: "Steven King",
                    price: 1500,
                    image:"",

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
        console.log(data);
         addCustomerDetailsRequestMethod(data).then((response) => {
            console.log(response.data, "-----------------data---------------");
        })
        // let doesShowOrderSummary = this.state.showOrderSummery;
        // let doesShowCustomerDetails = this.state.showOrderPlacedPage;
        // this.setState({
        //     showOrderSummary: !doesShowOrderSummary,
        //     showOrderPlacedPage: !doesShowCustomerDetails
        // })

    }
//  ----------------------shryas--------------------------------------------------------   

sameBookAddHandler = (event,id) => {
    // event.preventDefault();
    // console.log(event+"+++"+id);
     let count = this.state.incrementDecrementCount;
     this.setState({
         incrementDecrementCount: count + 1
     })
 }
 sameBookRemoveHandler = (id) => {
     let count = this.state.incrementDecrementCount;
     this.setState({
         incrementDecrementCount: count - 1
     })
 }


// -------------------shryas------------------------------------------------------------

//  -------------------------add/sub--------vinod-----------------------   

    addQuantity =  async (id) => {
        let count=this.state.quantity;
        let a=this.state.price;
        let b=this.state.total;
        

        
        if(this.state.quantity<=5){
           

this.setState({
            quantity: count + 1


        });

        this.state.book.forEach(book=>{
           this.state.total = book.price*count;
        });
    }else{
        alert(" oops!!!! totol 6 items can be avaible in a cart ")
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
//  -------------------------------add/sub----------vinod----------------------   
    placeorder = event => {
        this.setState({
            placeorder : true
        })
    }
   
    totalCost=(id) =>{
        
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
         this.setState({
            showOrderSummery: !doesShowOrderSummery
        })
    }
    orderPlacedPageHandler = async () => {
        let doesShowOrderPlacedPage = this.state.showOrderPlacedPage;
        this.setState({
            showOrderPlacedPage: !doesShowOrderPlacedPage
        })
        this.props.history.push("/OrderSummary");

    }

    removeFromCart = event => {
        //need to write wen service layer is ready**
        

    }
    checkoutClickHandler = () => {
        const doesShowOrderSuccessful = this.state.showOrderSuccessful;
        let orderID = Math.floor(Math.random() * 90000) + 10000;
        this.setState({
            showOrderSuccessful: !doesShowOrderSuccessful,
            orderID: orderID
        })
    }

 

    render() {
        
          
   
        return (
            <div className="Customer-address-div">
                   <Container maxWidth="lg">            
                <div >
                <Grid item xs={10}>
                        <div  className="Customer-address-div" >    
                        <Typography id='mycart-title'variant="h4">My cart ({this.state.quantity})</Typography>
       
                            {
                                this.state.book.map(book => {
                                    return (
                                        <div key={book.id}>
                                            <div >
                                                <div className="book-details-div" >

                                                <div className="img-book">
                                
                                                  <img className="order-logo" id='img-ordersummary' src={bookImage}/>

                                                </div>
                                                    
                                
                                             <div className="aligncontentbesidepic ">
                                                <div >
                                                    <h4 className="h4-div">{book.title}</h4>
                                                </div>
                                                <div className="author-name-div">
                                                    <p>{book.author}</p>
                                                </div>
                                                <div className="book-price-div">
                                                    <p>Rs.{book.price}</p>
                                                </div>
                                                <div className="book-price-div" >
                                                    <p>totalprice{this.state.quantity * book.price}</p>
                                                    {/* <p>this.state.total</p> */}
                                                </div>
     {/* -------------------------------------but---------------------------------------------------                                            */}
                                                <div className="quantity-div" >
                                                    {/* <button className="minus-btn" 
                                                       onClick={this.substractQuantity} >
                                                        <RemoveRoundedIcon className="icon" />
                                                    </button> */}
                                                     <Button
                                                                    onClick={() =>this.substractQuantity()}
                                                                >
                                                                    <RemoveCircleOutlineIcon />
                                                      </Button>

                                                    <div className="input-type" >
                                                        {this.state.quantity}
                                                    </div>
                                                    
                                                    <div key={book.id}>  

                                                     {/* <button   
                                                       onClick={this.addQuantity}
                                                        ><AddRoundedIcon
                                                         className="icon" />
                                                     </button> */}
                                                     <Button
                                                                    id={book.iD}
                                                                    onClick={() => this.addQuantity()}
                                                                >
                                                                    <AddCircleOutlineIcon />
                                                                </Button>
                    
                                                    </div>
                                                    <button
                                                     className="" 
                                                     key ={book.id}
                                                      onClick={() => this.removeFromCart(book.cartId)} 
                                                      >Remove</button>
                                                </div>
    {/* --------------------------but----------------------------------------------------------------------                                             */}
                                            </div>   
                                          </div>                  
                                            </div>
                                      </div>
                                    );
                                   
                                })
                               
                            }
                            {
                                this.state.quantity!=0 ? 
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
                                                                    <img src={bookImage} id='img-ordersummary' className="order-logo" />
                                                                    {/* <img className='img' id='img-ordersummary' src={bookImage}/> */}

                                                                </div>
                                                                <div className= "aligncontentbesidepic">
                                                                    <div className="book-title-div">
                                                                        <h4 >{book.title}</h4>
                                                                    </div>
                                                                    <div className="author-name-div">
                                                                        <p>{book.author}</p>
                                                                    </div>
                                                                    <div className="book-price-div">
                                                                        <p>Rs.{book.price}</p>
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




