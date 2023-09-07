import axios from "axios";
export async function getCategorys(){
    const res=await axios.get(`http://localhost:8080/categorys`)
    return res.data
}
export async function getNations(){
    const res=await axios.get(`http://localhost:8080/nations`)
    return res.data
}
export async function getListSearchPlus(page,typeMovieSearch,category,nation,yearStart){
    const res=await axios.get(`http://localhost:8080/movies/search?page=${page}&&typeMovie=${typeMovieSearch}&&category=${category}&&nation=${nation}&&yearStart=${yearStart}`)
    return res.data
}
export async function getListSearchAuthor(page,typeMovieSearch,author,category,nation,yearStart){
    const res=await axios.get(`http://localhost:8080/movies/search/author?page=${page}&&author=${author}&&typeMovie=${typeMovieSearch}&&category=${category}&&nation=${nation}&&yearStart=${yearStart}`)
    return res.data
}
