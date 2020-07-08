import axios from 'axios'
const updateURL='http://localhost:8080/users/update';
var token=localStorage.getItem('token')
export const ProfileRequestMethod = async (data)=>{
    console.log(data)
    const response = await axios.put(`http://localhost:8080/users/update/${token}`,data
    );
    return response;
}

