import axios from 'axios'

const addCartURL = 'http://localhost:8080/carts/addToCart';
const cartAddedCountURL = 'https://localhost:8080/cart/CountCart';
const getCartValuesURL = 'https://localhost:8080/carts/displayItems';
// const addCartURL = 'http://localhost:8080/carts/addToCart/{bookId}';
// const cartAddedCountURL = 'https://localhost:8080/api/Cart/CountCart';
// const getCartValuesURL = 'https://localhost:8080/api/Cart/GetAllCartValue';
const deleteCartValueURL = 'https://localhost:8080/api/Cart/DeleteCart';
const addCustomerDetailsURL = 'https://localhost:8080/api/Address/AddAddress';
const getCustomerAddressURL = 'https://localhost:8080/api/Address/GetCustomerAddress';
// var tokenn=sessionStorage.getItem("token");
const token = localStorage.getItem("token")
let headers = {
    'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
}

export const AddCartRequestMethod = async (data)=>{
    console.log(data.bookId)
    const response = axios.post(`${addCartURL}/`+data.bookId, {
        headers: {
            'token': token }}) 
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
    const response = await axios.delete(deleteCartValueURL,id);
    return response;
}

export const addCustomerDetailsRequestMethod = async (data)=>{
    const response = await axios.post(addCustomerDetailsURL,data);
    return response;
}

export const getCustomerAddressRequestMethod = async (data)=>{
    const response = await axios.get(getCustomerAddressURL,{ params: {email: data}});
    return response;
}
