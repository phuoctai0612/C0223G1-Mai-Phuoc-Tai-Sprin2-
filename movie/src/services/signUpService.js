import axios from "axios";

export async function signUpCustomer(email, password) {
    const res = await axios.post(`http://localhost:8080/accounts?email=${email}&&password=${password}`)
    return res.data;
}