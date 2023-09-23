import axios from "axios";

export async function getCategorysById(id){
    const res=await axios.get(`http://localhost:8080/categorys/getCategory/${id}`)
    return res.data
}