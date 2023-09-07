import axios from "axios";
export async function getTop10MovieNew(){
    const res=await axios.get(`http://localhost:8080/movies/top10news`)
    return res.data
}
export async function getTop6MovieCartoon(){
    const res=await axios.get(`http://localhost:8080/movies/top6cartoon/hoat`)
    return res.data
}
export async function detailMovie(id){
    const res=await axios.get(`http://localhost:8080/movies/detail/${id}`)
    return res.data
}
