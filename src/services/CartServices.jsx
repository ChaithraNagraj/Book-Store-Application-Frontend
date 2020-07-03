import axios from 'axios'
const deleteCartValueURL = 'http://localhost:8080/api/Cart/DeleteCart';
const addCustomerDetailsURL = 'http://localhost:8080/address/addAddress';
const getCustomerAddressURL = 'http://localhost:8080/api/Address/GetCustomerAddress';
const cartAddedCountURL = 'http://localhost:8080/carts/CountCart';

const addCartURL = 'http://localhost:8080/carts/addToCart';

const getCartValuesURL = 'http://localhost:8080/carts/displayItems';

var tokenn=sessionStorage.getItem("token");
console.log("token")
console.log("token from cart service")


let headers = {
    // 'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
}
var token = localStorage.getItem('token')
export const AddCartRequestMethod = async (data)=>{

     var bookId=data.bookId
    console.log(data.bookId)
    var abc=''
    // const response = await axios.post("http://localhost:8080/carts/addToCart?bookId="+bookId,"null",{headers: {'token' :  localStorage.getItem('token')}}
   const response =await axios.post(`http://localhost:8080/carts/addToCart/${bookId}`,{},{headers: {'token' :  localStorage.getItem('token')}}

    // const response =  await axios.post(`${addCartURL}/`+`bookId`,{headers: {'token' :  localStorage.getItem('token')}}

    // const response =await axios.post( addCartURL+'data.bookId',{ headers:headers}
    // const response =await axios.post( addCartURL+bookId,null,{headers: {'token' :  localStorage.getItem('token')}}
    // const response =await axios.post( addCartURL,{ params: {bookId: bookId}},null,{headers: {'token' :  localStorage.getItem('token')}}

        
        );
    return response;
    



}
export const getCartAddedCountRequestMethod= async ()=>{
    const response = await axios.get(cartAddedCountURL);
    return response;
}

export const getCartValuesRequestMethod= async ()=>{
    const response = await axios.get(getCartValuesURL,
        // { headers: {"Authorization" : {token}} }
        {
        headers : headers
        }

        );
        
    console.log("Printing response which are recieved from bookstore api");
    console.log(response);
    
    
    
    return response;
}

export const deleteCartValueRequestMethod= async (id)=>{
    const response = await axios.delete(deleteCartValueURL,id,{headers: {'token' :  localStorage.getItem('token')}});
    return response;
}

export const addCustomerDetailsRequestMethod = async (data)=>{
    const response = await axios.post(addCustomerDetailsURL,data, {headers: {'token' :  localStorage.getItem('token')}}
    
    );
    return response;
}

export const getCustomerAddressRequestMethod = async (data)=>{
    const response = await axios.get(getCustomerAddressURL,{ params: {email: data}});
    return response;
}

export const addQuantityRequestMethod = async (bookId)=>{
    const response = await axios.put(`http://localhost:8080/carts/addQuantity/${bookId}`,{},{headers: {'token' :  localStorage.getItem('token')}})
}

export const subQuantityRequestMethod = async (bookId)=>{
    const response = await axios.put(`http://localhost:8080/carts/removeQuantity/${bookId}`,{},{headers: {'token' :  localStorage.getItem('token')}})
}
