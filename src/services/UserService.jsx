import axios from 'axios';
let headers = {
    'Content-Type': 'application/json'
}

export var controller = {
    userRegister(registrationData){
        return axios.post("http://localhost:8080/user/register", registrationData, {
            headers: headers
            
        });
    }
    
}
export default controller;
