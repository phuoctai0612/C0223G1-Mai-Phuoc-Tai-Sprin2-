import axios from "axios";

export async function getActorById(id){
    const res=await axios.get(`http://localhost:8080/actors/getActor/${id}`)
    return res.data
}