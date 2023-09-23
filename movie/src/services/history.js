import axios from "axios";

export async function createHistory(email,price){
await axios.post(`http://localhost:8080/packedMovie?email=${email}&&price=${price}`)
}

export async function getHistoryAccount(id){
const res= await axios.get(`http://localhost:8080/history/${id}`)
    return res.data;
}

export async function getListHistoryAccount(id,page,headers){
    const res= await axios.get(`http://localhost:8080/history/list/${id}?page=${page}`,{headers})
    return res.data;
}
