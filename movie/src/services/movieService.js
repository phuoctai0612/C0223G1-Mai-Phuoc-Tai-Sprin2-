import axios from "axios";
export async function getTop10MovieNew(){
    const res=await axios.get(`http://localhost:8080/movies/top10news`)
    return res.data
}
export async function getTop10ViewMovie(){
    const res=await axios.get(`http://localhost:8080/movies/sidebar-topview`)
    return res.data
}
export async function getTop10MovieRandom(){
    const res=await axios.get(`http://localhost:8080/movies/sidebar-propose`)
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
export async function increaseViewMovie(id){
   await axios.post(`http://localhost:8080/movies/increase/${id}`)

}

