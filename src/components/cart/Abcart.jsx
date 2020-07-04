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
// import controller from '../service/UserService';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
// import  Toolbar  from '../components/headerbar/headerbar';
// import  Footer  from './Footer';
// import { Toolbar } from '../components/headerbar/headerbar';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import {
    getCartAddedCountRequestMethod, getCartValuesRequestMethod,
    deleteCartValueRequestMethod, getCustomerAddressRequestMethod, addCustomerDetailsRequestMethod,addQuantityRequestMethod,subQuantityRequestMethod
} from '../../services/CartServices';
import OrderPlaced from  './OrderPlaced'
import "./Abcart.css";
import OrderSummary from  './OrderSummary';

export class Abcart extends Component {

    
    constructor(props) {
        super(props)

        this.state = {
            orderID: 0,
            cartItem: 1,
            quantity: 1,
            descrption:'abc',
            // i m taking this dummy data for checking purpose

            
            cart:[],
           
            total:"",
            showCustomerDetails:false,

            showOrderSummery: false,

            showOrderPlacedPage: false,

            // showFilledAddress: false,

            showOrderSuccessful: false,


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
      
         
    componentDidMount() {
        //this method will bring the books which are in cart table and number of quantity
        
           Promise.all([getCartAddedCountRequestMethod(), getCartValuesRequestMethod()])
            .then(([cartAddedCountResult, getCartValues]) => {
                this.setState({
                    cartAddedCount: cartAddedCountResult.data,
                    cart: getCartValues.data.cartBooks
                })
                console.log("hello world")
             

            })
            console.log("hello")
 
            
        // Promise.all([getCartValuesRequestMethod()])
        //     .then(([ getCartValues]) => {
        //         console.log("printing display items")
        //         console.log(getCartValues)
        //         this.setState({
        //             cart: getCartValues.data
        //         })
        //     })
        //     Promise.all([getCartAddedCountRequestMethod()])
        //     .then(([ cartAddedCountResult]) => {
        //         this.setState({
        //             cartAddedCount: cartAddedCountResult.data
        //         })
        //     })
    
    
        // this.setState({
        //     cart: [
        //         {
        //             bookId: 1,
        //             bookName: "Don't Make Me to think",
        //             authorName: "Steven King",
        //             price: 1500,
        //             image:"",

        //         } ,
        //          {
        //             bookid: 2,
        //             bookName: "Java for Beginners",
        //             authorNAME: "kalpesh mali",
        //             price: 250,
        //             image:""
        //         }
        //     ]
        // });
        // this.setState({
        //     total:this.state.cart.price
        // })
        
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

    addQuantity =  async (bookId) => {
        let count=this.state.quantity;
        let a=this.state.price;
        let b=this.state.total;
        if(this.state.quantity<=5){   
this.setState({
            quantity: count + 1
        });
        this.state.cart.forEach((ele)=>{
           this.state.total = ele.price*count;
        });
    }else{
        alert(" oops!!!! totol 6 items can be avaible in a cart ")
    }  
    const response = addQuantityRequestMethod({ params: { id: bookId } });
    await response.then(res => {
        console.log(res.data)
        const cartCountRes = getCartAddedCountRequestMethod();
        cartCountRes.then(
            res => {
                this.setState({
                    cartAddedCount: res.data
                })
            }
        )
        const cartValuesRes = getCartValuesRequestMethod();
        cartValuesRes.then(
            res => {
                this.setState({
                    cart: res.data.data,
                })
            }
        )
    }) 
    }



    substractQuantity = async (bookId) => {
        let count=this.state.quantity;

        if(this.state.quantity>=2){

        
        this.setState({
            quantity: count - 1


        });

        this.state.cart.forEach((ele)=>{
           this.state.total = this.state.total-ele.price;
         });
        }else{
            alert("quanity cannot be zero")
        }

        const response = subQuantityRequestMethod({ params: { id: bookId } });
    await response.then(res => {
        console.log(res.data)
        const cartCountRes = getCartAddedCountRequestMethod();
        cartCountRes.then(
            res => {
                this.setState({
                    cartAddedCount: res.data
                })
            }
        )
        const cartValuesRes = getCartValuesRequestMethod();
        cartValuesRes.then(
            res => {
                this.setState({
                    cart: res.data.data,
                })
            }
        )
    }) 



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
        // showOrderSummery:true
        // this.setState({
        //     showOrderSummery:true
        // })
        // let doesShowOrderSummery = this.state.showOrderSummery;
        //  this.setState({
        //     showOrderSummery: !doesShowOrderSummery
        // })
//line 339-345 uncomented:->working fine now!!!

        let doesShowOrderSummary = this.state.showOrderSummery;
        let doesShowCustomerDetails = this.state.showCustomerDetails;
        this.setState({
            showOrderSummary: !doesShowOrderSummary,
            showCustomerDetails: !doesShowCustomerDetails
        })     
    }
    // orderSummeryShowHandler = async () => {
    //     let doesShowOrderSummery = this.state.showOrderSummery;
    //      this.setState({
    //         showOrderSummery: !doesShowOrderSummery
    //     })
    // }
    orderPlacedPageHandler = async () => {
        let doesShowOrderPlacedPage = this.state.showOrderPlacedPage;
        this.setState({
            showOrderPlacedPage: !doesShowOrderPlacedPage
        })
        this.props.history.push("/OrderSummary");

    }

    removeFromCart = async (bookId) => {
        //need to write wen service layer is ready**
        const response = deleteCartValueRequestMethod({ params: { id: bookId } });
        await response.then(res => {
            console.log(res.data)
            const cartCountRes = getCartAddedCountRequestMethod();
            cartCountRes.then(
                res => {
                    this.setState({
                        cartAddedCount: res.data
                    })
                }
            )
            const cartValuesRes = getCartValuesRequestMethod();
            cartValuesRes.then(
                res => {
                    this.setState({
                        cart: res.data.data,
                    })
                }
            )
        })
        

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
           
                   <Container maxWidth="lg">            

                <div >
                <Grid item xs={10}>
                        <div  className="Customer-address-div" style={{marginTop:'100px'}}>    
                        <Typography id='mycart-title'variant="h4">My cart ({this.state.quantity})</Typography>
       
                            {
                                this.state.cart.map((ele) => {
                                    return (
                                       
                                        <div >
                                        <div>
                                            <div >
                                                <div>
                                                <div className="book-details-divcart" >

                                                <div className="img-book">
                                                  <img src={""} className="order-logo" />
                                                </div>
                                                    
                                
                                             <div className="aligncontentbesidepic">
                                                <div >
                                                    <h4 className="h4-div">{ele.cartBook.book.bookName}</h4>

                                                </div>
                                                <div className="author-name-div">
                                                    <p>{ele.cartBook.book.authorName}</p>
                                                </div>
                                                <div className="book-price-div">
                                                    <p>Rs.{ele.cartBook.book.bookprice}</p>
                                                </div>
                                                <div className="book-price-div" >
                                                    <p>totalprice{this.state.quantity * ele.cartBook.bookPrice}</p>
                                                    {/* <p>this.state.total</p> */}
                                                </div>
     {/* -------------------------------------but---------------------------------------------------                                            */}
                                                <div className="quantity-div" >
                                                    {/* <button className="minus-btn" 
                                                       onClick={this.substractQuantity} >
                                                        <RemoveRoundedIcon className="icon" />
                                                    </button> */}
                                                     <Button
                                                                    onClick={() =>this.substractQuantity(ele.cartBook.cartBookId)}
                                                                >
                                                                    <RemoveCircleOutlineIcon />
                                                      </Button>

                                                    <div className="input-type" >
                                                        {this.state.quantity}
                                                    </div>
                                                    
                                                    {/* <div key={ele.cartId}>   */}
                                                    <div>

                                                     {/* <button   
                                                       onClick={this.addQuantity}
                                                        ><AddRoundedIcon
                                                         className="icon" />
                                                     </button> */}
                                                     <Button
                                                                    id={ele.cartId}
                                                                    onClick={() => this.addQuantity(ele.cartBook.cartBookId)}
                                                                >
                                                                    <AddCircleOutlineIcon />
                                                                </Button>
                    
                                                    </div>
                                                    <button
                                                     className="remove-btn" 
                                                     key ={ele.CartId}
                                                      onClick={() => this.removeFromCart(ele.cartBook.cartBookId)} 
                                                      >Remove</button>
                                                </div>
    {/* --------------------------but----------------------------------------------------------------------                                             */}
                                            </div>   
                                          </div> 
                                          </div>                 
                                            </div>
                                      </div>
                                      </div>
                             
                                    )
                                   
                                })
                               
                            }
                            {
                                this.state.quantity!=0 ? 
                                <div className="continue-cart-div">
                                    <button
                                    className="continue-shopping-cart-button"
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
                                                                <button type="submit" id="continue" className="address-button" onClick={this.addCustomerDetailsHandler}>CONTINUE</button>
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
                                                    this.state.cart.map((ele) => {
                                                        return (
                                                            <div className="order-details-div">
                                                                <div className="img-book">
                                                                    <img src={ele.image} className="order-logo" />
                                                                </div>
                                                                <div className= "aligncontentbesidepic">
                                                                    <div className="book-title-div">
                                                                        <h4 >{ele.titleName}</h4>
                                                                    </div>
                                                                    <div className="author-name-div">
                                                                        <p>{ele.authorName}</p>
                                                                    </div>
                                                                    <div className="book-price-div">
                                                                        <p>Rs.{ele.price}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }):null
                                                }
                                                <div className="checkout-div">
                                                    <button 
                                                    className="checkout-button"
                                                        onClick={this.orderPlacedPageHandler}
                                                    >CHECKOUT</button>
                                                </div>
                                            </div>
                                        </Grid>

                   
                </div>
                            </Container>

           
        )
    }
}

export default Abcart;
