import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {detailMovie} from "../services/movieService";


export default function Movie(){
    const [movie,setMovie]=useState("")
    const param=useParams();

    const getDetailMovieById=async ()=>{
        setMovie(await detailMovie(param.id))
    }

    useEffect(()=>{
        getDetailMovieById()
    },[param.id])
    console.log(movie)
    return(
        <>
            <link rel="stylesheet" href="../../public/css/plyr.css"/>

            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link to={`/`}><i className="fa fa-home"></i> Trang chủ</Link>
                                <Link >Thể loại</Link>
                                <span>Romance</span>
                                <span>Fate Stay Night: Unlimited Blade</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="anime-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="anime__video__player "   >

                                <video id="player" playsInline controls data-poster="./videos/anime-watch.jpg" className="videoWidth">
                                    <source src="videos/1.mp4" type="video/mp4"/>
                                    <track kind="captions" label="English captions" src="#" srcLang="en" default/>
                                </video>
                            </div>
                            <div className="anime__details__episodes">
                                <div className="section-title" >

                                    <h5>  <p style={{fontSize:"30px",color:"white"}}>{movie.name}</p></h5>
                                    <div>
                                        <p style={{color:"white"}}>{movie.description}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="anime__details__review">
                                <div className="section-title">
                                    <h5>Reviews</h5>
                                </div>
                                <div className="anime__review__item">
                                    <div className="anime__review__item__pic">
                                        <img src="img/anime/review-1.jpg" alt=""/>
                                    </div>
                                    <div className="anime__review__item__text">
                                        <h6>Chris Curry - <span>1 Hour ago</span></h6>
                                        <p>whachikan Just noticed that someone categorized this as belonging to the
                                            genre
                                            "demons" LOL</p>
                                    </div>
                                </div>
                                <div className="anime__review__item">
                                    <div className="anime__review__item__pic">
                                        <img src="img/anime/review-2.jpg" alt=""/>
                                    </div>
                                    <div className="anime__review__item__text">
                                        <h6>Lewis Mann - <span>5 Hour ago</span></h6>
                                        <p>Finally it came out ages ago</p>
                                    </div>
                                </div>
                                <div className="anime__review__item">
                                    <div className="anime__review__item__pic">
                                        <img src="img/anime/review-3.jpg" alt=""/>
                                    </div>
                                    <div className="anime__review__item__text">
                                        <h6>Louis Tyler - <span>20 Hour ago</span></h6>
                                        <p>Where is the episode 15 ? Slow update! Tch</p>
                                    </div>
                                </div>
                                <div className="anime__review__item">
                                    <div className="anime__review__item__pic">
                                        <img src="img/anime/review-4.jpg" alt=""/>
                                    </div>
                                    <div className="anime__review__item__text">
                                        <h6>Chris Curry - <span>1 Hour ago</span></h6>
                                        <p>whachikan Just noticed that someone categorized this as belonging to the
                                            genre
                                            "demons" LOL</p>
                                    </div>
                                </div>
                                <div className="anime__review__item">
                                    <div className="anime__review__item__pic">
                                        <img src="img/anime/review-5.jpg" alt=""/>
                                    </div>
                                    <div className="anime__review__item__text">
                                        <h6>Lewis Mann - <span>5 Hour ago</span></h6>
                                        <p>Finally it came out ages ago</p>
                                    </div>
                                </div>
                                <div className="anime__review__item">
                                    <div className="anime__review__item__pic">
                                        <img src="img/anime/review-6.jpg" alt=""/>
                                    </div>
                                    <div className="anime__review__item__text">
                                        <h6>Louis Tyler - <span>20 Hour ago</span></h6>
                                        <p>Where is the episode 15 ? Slow update! Tch</p>
                                    </div>
                                </div>
                            </div>
                            <div className="anime__details__form">
                                <div className="section-title">
                                    <h5>Your Comment</h5>
                                </div>
                                <form action="#">
                                    <textarea placeholder="Your Comment"></textarea>
                                    <button type="submit"><i className="fa fa-location-arrow"></i> Review</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}