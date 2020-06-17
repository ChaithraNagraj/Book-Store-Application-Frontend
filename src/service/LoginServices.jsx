import axios from 'axios'
const loginURL='https://localhost:8080/user/login';

export const LoginRequestMethod = async (data)=>{
    const response = await axios.post(loginURL,data);
    return response;
}

export default LoginRequestMethod;