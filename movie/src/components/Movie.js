import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {detailMovie, getTop10MovieRandom, increaseViewMovie} from "../services/movieService";
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import {getHistoryAccount} from "../services/history";
import CarouselComponent from "./Carousel";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db} from "../firebase/config";
import {
    query,
    orderBy,
    onSnapshot,
    limit,
} from "firebase/firestore";

import "../css/bootstrap.min.css"
import "../css/plyr.css"
import "../css/style.css"
import "../css/elegant-icons.css"
import "../css/nice-select.css"
import "../css/font-awesome.min.css"
import "../css/owl.carousel.min.css"
import "../css/slicknav.min.css"
import videojs from "video.js";
import PR from "./PR";
import Sibar from "./Sidebar";


export default function Movie() {
    const [movie, setMovie] = useState("")
    const param = useParams();
    const navigate = useNavigate()
    const [account, setAccount] = useState({})
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const scroll = useRef();


    const sendMessage = async (event) => {
        event.preventDefault();
        console.log(event)
        if (message.trim() !== "") {
            await addDoc(collection(db, "messages"), {
                name: account.nameAccount,
                message: message,
                id_movie: movie.id,
                createdAt: serverTimestamp()

            })
            setMessage("")
        }
    }
    const handleKeyDown =async (event) => {
        const keyCode = event.keyCode
        if (keyCode == 13) {
           sendMessage(event)
        }
    }
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "asc")
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = [];
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({...doc.data(), id: doc.id});
            });
            // const sortedMessages = fetchedMessages.sort(
            //     (a, b) => a.createdAt - b.createdAt
            // );
            setMessages(fetchedMessages);
        });
        return () => unsubscribe;
    }, []);
    console.log(param)

    const getDetailMovieById = async () => {
        setMovie(await detailMovie(param.id))
    }


    const getHistoryPackedAccount = async (id) => {
        try {
            await getHistoryAccount(id)
        } catch (e) {
            navigate("/error")
        }
    }

    useEffect(() => {
        getDetailMovieById()
    }, [param.id])
    useEffect(() => {
        if (account.id != undefined) {
            getHistoryPackedAccount(account.id)
        }
    }, [account])
    useEffect(() => {
        window.scrollTo(0, 0)
        const accountCheck = JSON.parse(localStorage.getItem("account"))
        if (accountCheck) {
            setAccount(accountCheck)
        } else {
            navigate("/error")
        }
    }, [])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    return (
        <>
            <title>Xem phim {movie.name}</title>
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link to={`/`}><i className="fa fa-home"></i> Trang chủ</Link>
                                <Link to={"/list"}>Danh sách</Link>
                                {movie &&
                                <span>
                                    {movie.categories.map((item, index) =>
                                        <>{index == 0 ? <Link to={`/list/category/${item.id}`}><>{item.name}</>
                                        </Link> : ""}</>
                                    )}
                                </span>
                                }
                                <Link to={`/detail/${movie.id}`}>Phim: <>{movie.name}</></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="anime-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="anime__video__player ">
                                <video
                                       id="my-player"
                                       playsInline controls
                                       className="videoWidth"

                                >
                                    {movie.video &&
                                    <source src={movie.video} type="video/mp4"/>
                                    }
                                    {/*<track label="English" kind="subtitles" srcLang="en" src="life.vtt" default />*/}
                                </video>
                            </div>
                            <div className="anime__details__episodes">
                                <div className="section-title">

                                    <h5><p style={{fontSize: "30px", color: "white"}}>{movie.name}</p></h5>
                                    <div>
                                        <p style={{color: "white"}}>{movie.description}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <PR movie={movie}/>
                    <div className="row">
                        <div className="col-lg-8" >
                            <div className="anime__details__review">
                                <div className="section-title">
                                    <h5>Bình luận</h5>
                                </div>
                                <div className="anime__review__item" style={{maxHeight:"2000px"}} id={"chat"}>
                                    {
                                        messages &&
                                        messages.map((message) =>
                                            message.id_movie == movie.id ?
                                                <div style={{paddingTop: "20px"}}>
                                                    <div className="anime__review__item__pic">
                                                        <img src="img/anime/review-1.jpg" alt=""/>
                                                    </div>
                                                    <div className="anime__review__item__text" ref={scroll}>
                                                        <h6>{message.name} </h6>
                                                        <p>{message.message}</p>
                                                    </div>
                                                </div> : ""
                                        )
                                    }
                                </div>
                            </div>

                            <div className="anime__details__form">
                                <div className="section-title">
                                    <h5>Bình luận của bạn</h5>
                                </div>
                                <form action="#">
                                    <textarea placeholder="Viết bình luận..." value={message} onChange={(event) => {
                                        setMessage(event.target.value)
                                    }}
                                              onKeyDown={(event) => {
                                                  handleKeyDown(event)
                                              }}
                                    ></textarea>
                                    <button onClick={(event) => {
                                        sendMessage(event)
                                    }} type="submit"><i className="fa fa-location-arrow"></i> Gửi bình luận
                                    </button>
                                </form>
                            </div>
                        </div>
                    <Sibar/>
                    </div>

                </div>
            </section>

            <div className={"container"} style={{paddingBottom: "120px"}} autoPlay={true} slidesToSlide={5}
                 autoPlaySpeed={4500} shouldResetAutoplay={true} rewind={true}>
                <div>
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8">
                            <div className="section-title">
                                <h4>Danh sách đề xuất</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <CarouselComponent/>
            </div>
        </>

    );

}