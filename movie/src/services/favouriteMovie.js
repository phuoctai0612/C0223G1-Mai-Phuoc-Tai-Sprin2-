import axios from "axios";
export async function addFavourite(idMovie,nameAccount){
  await axios.post(`http://localhost:8080/tickets?idMovie=${idMovie}&&nameAccount=${nameAccount}`)
}
export async function findMovieOfAccount(idMovie,nameAccount){
 const res= await axios.get(`http://localhost:8080/tickets/findMovie?idMovie=${idMovie}&&nameAccount=${nameAccount}`)
  return res.data;
}
export async function findListMovieFavourite(nameAccount){
 const res= await axios.get(`http://localhost:8080/tickets/getListFavourite?nameAccount=${nameAccount}`)
  return res.data;
}
export async function deleteMovieOfAccount(idMovie,nameAccount){
 await axios.delete(`http://localhost:8080/tickets?idMovie=${idMovie}&&nameAccount=${nameAccount}`)

}
