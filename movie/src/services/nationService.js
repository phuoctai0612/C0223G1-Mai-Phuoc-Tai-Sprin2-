import axios from "axios";


export async function getNationsById(id){
    const res=await axios.get(`http://localhost:8080/nations/findById/${id}`)
    return res.data
}