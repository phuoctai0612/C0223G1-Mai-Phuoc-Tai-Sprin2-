import axios from "axios";

export async function loginCustomer(email,password){

    const response =await axios.post(`http://localhost:8080/accounts/signin?email=${email}&&password=${password}`)
    console.log(response.data)
    return response.data
}

export async function getAccountWithToken(token){
    const response =await axios.get(`http://localhost:8080/accounts/token/`+token)
    localStorage.setItem("account",JSON.stringify(response.data))
    return response.data
}