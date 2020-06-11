<<<<<<< HEAD
// import axios from 'axios';

// let headers = {
//     'Content-Type': 'application/json'
// }

// var controller = {
//     userRegister(registrationData){
//         return axios.post("http://localhost:8080/user/Registration", registrationData, {
//             headers: headers
            
//         });
//     },
//     resetPassword(data){
//         return axios.post("http://local:8080/user/ResetPasssword",data,{
//             headers:headers
//         });
//     }
   
// }
// export default controller;
=======
import axios from 'axios';

let headers = {
    'Content-Type': 'application/json'
}

var controller = {
    userRegister(registrationData){
        return axios.post("http://localhost:8080/user/Registration", registrationData, {
            headers: headers
            
        });
    },
    resetPassword(data){
        return axios.post("http://local:8080/user/ResetPasssword",data,{
            headers:headers
        });
    }
   
}
export default controller;
>>>>>>> 826f0aa4379d85017661ff52b6021ae0f0fdb546
