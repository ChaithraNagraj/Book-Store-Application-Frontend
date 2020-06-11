import axios from 'axios'

export default class AxioServices {
    GET(path,token) {
        return axios.get(path, token);

    }
    POST(path, data, token) {
        return axios.post(path, data, token);
    }
    PUT(path, token){
        return axios.put(path, data, token)
    }
    DELETE(path, token) {
        return axios.delete(path, token)
    }
}