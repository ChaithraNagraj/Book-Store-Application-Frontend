import axios from 'axios';
let headers = {
    'Content-Type': 'application/json'
}

export var controller = {
    userRegister(registrationData){
        return axios.post("http://localhost:8080/user/register", registrationData, {
            headers: headers
            
        });
    },
    userLogin(loginData){
        return axios.post("http://localhost:8080/login",loginData, {
            headers: headers
        });
    },
    forgetPassword(email){
        return axios.post("http://localhost:8080/forgetPassword",email,{
            headers : headers
        });
    }
}
// export default controller;
