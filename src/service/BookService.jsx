import axios from 'axios';
const getAllBooksURL = 'http://localhost:8080/getBooks';
const getBookCOuntURL = 'http://localhost:6666/api/BookStore/CountBook';

export const getAllBooks= async ()=>{
    const response = await axios.get(getAllBooksURL);
    return response;
}

export const getBookCountRequestMethod= async ()=>{
    const response = await axios.get(getBookCOuntURL);
    return response;
}