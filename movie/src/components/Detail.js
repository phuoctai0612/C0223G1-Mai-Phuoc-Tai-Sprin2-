import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {detailMovie} from "../services/movieService";
import {Link} from "react-router-dom";

export default function Detail(){
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



            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta
                name="keywords"
                content="Movies Pro Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template,
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design"
            />
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link to={`/`}><i className="fa fa-home"></i> Trang chủ</Link>
                                <Link to={"/list"}>Danh sách</Link>
                                {movie&&
                                <span>{movie.categories.map((item,index)=>
                                <>{index==0?<>{item.name}</>:""}</>
                                )}</span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="anime-details spad">
                <div className="container">
                    <div className="anime__details__content">
                        <div className="row">
                            <div className="col-lg-3">
                                <div  className="anime__details__pic set-bg" data-setbg="img/anime/details-pic.jpg">
                                    <img style={{height:"100%"}}  src={movie.img} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                {movie &&
                                <div className="anime__details__text">
                                    <div className="anime__details__title">
                                        <h3>{movie.name}</h3>
                                        <span>フェイト／ステイナイト, Feito／<s></s>utei naito</span>
                                    </div>


                                    <div className="anime__details__widget contentMovie" >
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <ul>
                                                   <li ><span>Đạo diễn:</span> {movie.authors.map((item,index)=>
                                                        <Link to={`/list/author/${item.id}`} >{index+1===movie.authors.length?<strong className="search_name">{item.name}</strong>:<><strong className="search_name">{item.name}</strong>, </> } </Link>
                                                    )}</li>
                                                    <li><span>Năm sản xuất:</span> {movie.yearStart}</li>
                                                    <li><span>Thời gian:</span> {movie.timeEndMovie}</li>
                                                    <li><span>Quốc gia:</span> {movie.nation.name}</li>
                                                    <li><span>Diễn viên:</span> {movie.actors.map((item,index)=>
                                                    <>{index+1===movie.actors.length?<strong className="search_name">{item.name}</strong>:<><strong className="search_name">{item.name}</strong>, </> } </>
                                                    )}</li>
                                                    <li><span>Thể loại:</span>{movie.categories.map((item,index)=>
                                                        <strong className="search_name"> {item.name}</strong>

                                                    )}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="anime__details__btn buttonWatchMovie" >
                                        <a href="#" className="follow-btn">Trailer</a>
                                        <Link to={`/movie/${movie.id}`} className="follow-btn"><span>Xem phim</span></Link>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                        <div className="section-title">
                            <h5 >Mô tả</h5>
                        </div>
                        <p style={{color:"white"}}>{movie.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
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
                        <div className="col-lg-4 col-md-4">
                            <div className="anime__details__sidebar">
                                <div className="section-title">
                                    <h5>you might like...</h5>
                                </div>
                                <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-1.jpg">
                                    <div className="ep">18 / ?</div>
                                    <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    <h5><a href="#">Boruto: Naruto next generations</a></h5>
                                </div>
                                <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-2.jpg">
                                    <div className="ep">18 / ?</div>
                                    <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                </div>
                                <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-3.jpg">
                                    <div className="ep">18 / ?</div>
                                    <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    <h5><a href="#">Sword art online alicization war of underworld</a></h5>
                                </div>
                                <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-4.jpg">
                                    <div className="ep">18 / ?</div>
                                    <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}