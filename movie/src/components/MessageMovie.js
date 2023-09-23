// import React, {useState} from "react";
// import {addDoc, collection, serverTimestamp} from "firebase/firestore";
// import {db} from "../firebase/config";
// import {
//     query,
//     orderBy,
//     onSnapshot,
//     limit,
// } from "firebase/firestore";
//
// import "../css/bootstrap.min.css"
// import "../css/plyr.css"
// import "../css/style.css"
// import "../css/elegant-icons.css"
// import "../css/nice-select.css"
// import "../css/font-awesome.min.css"
// import "../css/owl.carousel.min.css"
// import "../css/slicknav.min.css"
//
//
// export default function MessageMovie(props) {
//     const [message, setMessage] = useState("");
//     const [messages, setMessages] = useState([])
//     event.preventDefault();
//     if (message.trim() === "") {
//         alert("Enter valid message");
//         return;
//     }
//     const sendMessage = async (event) => {
//         event.preventDefault();
//         console.log(event)
//         if (message.trim() !== "") {
//             await addDoc(collection(db, "messages"), {
//                 name: account.nameAccount,
//                 message: message,
//                 id_movie: movie.id,
//                 createdAt: serverTimestamp()
//
//             })
//             setMessage("")
//         }
//
//     }
//     return (
//         <div className="col-lg-8">
//             <div className="anime__details__review">
//                 <div className="section-title">
//                     <h5>Bình luận</h5>
//                 </div>
//                 <div className="anime__review__item">
//
//                     {
//                         messages &&
//                         messages.map((message) =>
//                             (movie.id === message.id_movie &&
//                                 <div style={{paddingTop:"6px"}}>
//                                     <div className="anime__review__item__pic">
//                                         <img src="img/anime/review-1.jpg" alt=""/>
//                                     </div>
//                                     <div className="anime__review__item__text">
//                                         <h6>{message.name} </h6>
//                                         <p>{message.message}</p>
//                                     </div>
//                                 </div>
//                             )
//                         )
//                     }
//
//                 </div>
//             </div>
//             <div className="anime__details__form">
//                 <div className="section-title">
//                     <h5>Bình luận của bạn</h5>
//                 </div>
//                 <form action="#">
//                                     <textarea placeholder="Viết bình luận..." value={message} onChange={(event) => {
//                                         setMessage(event.target.value)
//                                     }}></textarea>
//                     <button onClick={(event) => {
//                         sendMessage(event)
//                     }} type="submit"><i className="fa fa-location-arrow"></i> Gửi bình luận
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };
