import axios from "axios";

export async function getAuthorById(id){
    const res=await axios.get(`http://localhost:8080/authors/getAuthor/${id}`)
    return res.data
}