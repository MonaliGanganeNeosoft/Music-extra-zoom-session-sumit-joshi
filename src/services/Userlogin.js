import axios from "axios";
const API_URL="http://localhost:3001/";
function authLogin(data){
    return axios.post(`${API_URL}api/v1/auth`,data)
}
export {authLogin}