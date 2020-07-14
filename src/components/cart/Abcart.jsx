import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
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
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import {
    getCartAddedCountRequestMethod, getCartValuesRequestMethod,
    deleteCartValueRequestMethod, getCustomerAddressRequestMethod, addCustomerDetailsRequestMethod,addQuantityRequestMethod,subQuantityRequestMethod
,checkoutRequestMethod} from '../../services/CartServices';
import OrderPlaced from  './OrderPlaced'
import "./Abcart.css";
import OrderSummary from  './OrderSummary';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';


export class Abcart extends Component {
        constructor(props) {
        super(props)
        this.state = {
            orderID: 0,
            cartItem: 0,
            quantity: 1,
            descrption:'abc',
            // i m taking this dummy data for checking purpose
            cart:[],
            total:"",
            showCustomerDetails:false,
            showOrderSummery: false,
            showOrderPlacedPage: false,
            showOrderSuccessful: false,
            sameBook: 1,
            name: "",
            phoneNumber: 0,
            pincode: 0,
            city: "",
            address: "",
            landmark: "",
            addressType: "",
            email: "",
            locality:"",
            incrementDecrementCount: 1,
            ABC:localStorage.getItem('token')
        }
    } 
    
    componentDidMount() {
        this.getCartValuesRequestMethod();
        }
        getCartValuesRequestMethod = () => {
           let path = {
               path: "cart"
           }

           if (localStorage.getItem('token') === null &&
           localStorage.getItem('local1') != null)
                      {
                        const abc = localStorage.getItem('local1');
                        const xyz =JSON.parse(abc);
             console.log(xyz)
               this.setState({
                //    cart:JSON.parse(localStorage.getItem('cart'))
                //    cart:localStorage.getItem('cart')
               ...this.state.cart=xyz

               })
               console.log(this.state.cart)
           }else{
           getCartValuesRequestMethod(path).then((res) => {
             localStorage.setItem('cartCount',res.data.data.totalBooksInCart)
             const abc=localStorage.getItem('cartCount',res.data.data.totalBooksInCart)

               this.setState({ cart: res.data.data.cartBooks });
               this.setState({
                   cartItem: res.data.data.totalBooksInCart
               })
               console.log(this.state.cart)
           }).catch((err) => {
               console.log(err);
           });
        }
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
        const customer_locality = event.target.value;
        console.log('locality', customer_locality)
        this.setState({
            customer_locality: customer_locality
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
            // email: this.state.email,
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            pincode: this.state.pincode,
            city: this.state.city,
            landmark: this.state.landmark,
            addressType: this.state.addressType,
            locality: this.state.locality
        }
        //need to write method to send data to db
        console.log(data);
         addCustomerDetailsRequestMethod(data).then((response) => {
            console.log(response.data, "-----------------data---------------");
        })
        // let doesShowOrderSummary = this.state.showOrderSummery;
        // let doesShowCustomerDetails = this.state.showOrderPlacedPage;
        this.setState({
            showCustomerDetails:false,
            showOrderSummery: true

        })
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

    addQuantity =  async (data) => {
        // let count=this.state.quantity;
        let count=this.state.cartItem;
        let a=this.state.price;
        let b=this.state.total;
        if(this.state.cartItem<=5){   
this.setState({
            // quantity: count + 1
            countItems: count+1
        });
        this.state.cart.forEach((ele)=>{
           this.state.total = ele.price*count;
        });
    }else{
        alert(" oops!!!! totol 5 items can be avaible in a cart ")
    }  
    const response = addQuantityRequestMethod(data);
        const cartValuesRes = getCartValuesRequestMethod();
        cartValuesRes.then(
            res => {
                this.setState({
                    cart: res.data.data.cartBooks,
                    cartItem: res.data.data.totalBooksInCart

                })
                
            }
        )
    }



    substractQuantity = async (data) => {
        let count=this.state.quantity;

        if(this.state.quantity>=1){

        
        this.setState({
            quantity: count - 1


        });

        this.state.cart.forEach((ele)=>{
           this.state.total = this.state.total-ele.price;
         });
        }else{
            alert("quanity cannot be zero")
        }

  const response = subQuantityRequestMethod( data);
            const cartValuesRes = getCartValuesRequestMethod();
        cartValuesRes.then(
            res => {
                this.setState({
                    cart: res.data.data.cartBooks,
                    cartItem: res.data.data.totalBooksInCart

                })
                
            }
        )
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
        let doesShowOrderSummary = this.state.showOrderSummery;
        let doesShowCustomerDetails = this.state.showCustomerDetails;
        this.setState({
            showOrderSummary: !doesShowOrderSummary,
            showCustomerDetails: !doesShowCustomerDetails
        })     
    }
    orderSummeryShowHandler = async () => {
        let doesShowOrderSummery = this.state.showOrderSummery;
         this.setState({
            showOrderSummery: !doesShowOrderSummery
        })
    }
        
    
    orderPlacedPageHandler (event){

        checkoutRequestMethod().then((response) => {
            console.log(response.data, "-----------------data---------------");
        })

            localStorage.removeItem('cartCount')
        window.location.assign('./OrderSummary')

    }
   
    removeFromCart = async (data) => {
        //need to write wen service layer is ready**
        const response = deleteCartValueRequestMethod(data);
        await response.then(res => {
            console.log(res.data)
            const cartCountRes = getCartAddedCountRequestMethod();
            cartCountRes.then(
                res => {
                    this.setState({
                        cartAddedCount: res.data.data.cartBooks
                    }) 
                }
            )
            const cartValuesRes = getCartValuesRequestMethod();
            cartValuesRes.then(

                res => {
                    this.setState({
                      
                        cart: res.data.data.cartBooks,

                    })
                }
            )
        })
        

    }

    checkoutClickHandler = () => {
        const doesShowOrderSuccessful = this.state.showOrderSuccessful;
        // const response = checkoutRequestMethod();
        // checkoutRequestMethod().then((response) => {
        //     console.log(response.data, "-----------------data---------------");
        // })
        let orderID = Math.floor(Math.random() * 90000) + 10000;
        this.setState({
            showOrderSuccessful: !doesShowOrderSuccessful,
            orderID: orderID
        })
    }


    render() {
        const ABC =localStorage.getItem('token');
        console.log(ABC);
      const npm =localStorage.getItem('local1');
      console.log(npm)
        return (
           
                   <Container maxWidth="lg">            

                <div >
                <Grid item xs={10}>
                        <div  className="Customer-address-div" style={{marginTop:'78px'}}>    
                        <Typography id='mycart-title'variant="h4">My cart ({this.state.cartItem})</Typography>
     
                      <If condition={ABC==''} >
                        <Then>
                                  {npm}    
                               </Then>
                            
                             
                         <Else>
                                  <Then>
            

                            {
                                this.state.cart.map((ele) => {
                                    return (
                                       
                                        <div >
                                        <div>
                                            <div >
                                                <div>
                                                <div className="book-details-divcart" >

                                                <div className="img-book">
                                                  {/* <img src={""} className="order-logo" /> */}
                                                  <img id='img-book' src={ele.book.imageURL} />

                                                </div>
                                                    
                                
                                             <div className="aligncontentbesidepic">
                                                <div >
                                                    <h4 className="h4-div">{ele.book.bookName}</h4>

                                                </div>
                                                <div className="author-name-div">
                                                    <p>{ele.book.authorName}</p>
                                                </div>
                                                <div className="book-price-div">
                                                    <p>Rs.{ele.book.price}</p>
                                                </div>
                                                <div className="book-price-div" >
                                                    {/* <p>totalprice{this.state.quantity * ele.price}</p> */}
                                                    {/* <p>this.state.total</p> */}
                                                </div>
     {/* -------------------------------------but---------------------------------------------------                                            */}
                                                <div className="quantity-div" >
                                                    {/* <button className="minus-btn" 
                                                       onClick={this.substractQuantity} >
                                                        <RemoveRoundedIcon className="icon" />
                                                    </button> */}
                                                     <Button
                                                 onClick={() =>this.substractQuantity(ele.cartBookId)}
                                                                >
                                                    <RemoveCircleOutlineIcon />
                                                      </Button>

                                                    <div className="input-type" >
                                                        {/* {this.state.quantity} */}
                                                        {ele.bookQuantity}
                                                    </div>
                                                    
                                                    <div>

                                                     
                                                     <Button
                                                                    // id={ele.cartId}
                                                                    onClick={() => this.addQuantity(ele.cartBookId)}
                                                                >
                                                                    <AddCircleOutlineIcon />
                                                                </Button>
                    
                                                    </div>
                                                    <button
                                                     className="remove-btn" 
                                                     key ={ele.CartId}
                                                      onClick={() => this.removeFromCart(ele.cartBookId)} 
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
                            </Then>

                            </Else>
                     </If>
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
                                                                {/* <button type="submit" id="continue" className="address-button" onClick={this.addCustomerDetailsHandler}>CONTINUE</button> */}
                                                            
                                                                <button type="submit" id="continue" className="address-button" style={{backgroundColor:'rgb(110, 18, 18)',color:'white'}} onClick={this.addCustomerDetailsHandler}>CONTINUE</button>

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
                                                                    <img src={ele.book.imageURL} className="order-logo" />
                                                                </div>
                                                                <div className= "aligncontentbesidepic">
                                                                    <div className="book-title-div">
                                                                        <h4 >{ele.book.bookNamw}</h4>
                                                                    </div>
                                                                    <div className="author-name-div">
                                                                        <p>{ele.book.authorName}</p>
                                                                    </div>
                                                                    <div className="book-price-div">
                                                                        <p>Rs.{ele.book.price}</p>
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
