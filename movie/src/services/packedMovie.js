import axios from "axios";

export async function getPackedMovieById(id){
    const res=await axios.get(`http://localhost:8080/packedMovie/${id}`)
    return res.data
}
export async function getListPackedMovie(){
    const res=await axios.get(`http://localhost:8080/packedMovie`)
    return res.data
}