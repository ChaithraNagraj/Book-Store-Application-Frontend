import axios from 'axios';
const AddTowishlist = 'http://localhost:8080/wishlists/addToWishlist';
const token = localStorage.getItem("token")
let headers = {
    'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
}
export const AddWishlistRequestMethod= async (data)=>{
    const response = await axios.post(`${AddTowishlist}/`+data.bookId,
    
    {
        headers : headers
        }

    );
    return response;
}
