import axios from 'axios';
const getAllBooksURL = 'http://localhost:8080/books/getBooks';
const getAllBookByAutorNameURL='http://localhost:8080/books/bookStoreApplication/getBookByAuthorName';

export const getAllBooksRequestMethod= async ()=>{
    const response = await axios.get(getAllBooksURL);
    return response;
}

export const getBookByAuthorName= async ()=>{
    const response = await axios.get(getAllBookByAutorNameURL);
    return response;
}
