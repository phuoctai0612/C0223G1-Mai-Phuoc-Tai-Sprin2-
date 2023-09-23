import {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router";
import {detailMovie} from "../services/movieService";
import {Link} from "react-router-dom";
import Sibar from "./Sidebar";
import {addFavourite, deleteMovieOfAccount, findMovieOfAccount} from "../services/favouriteMovie";
import Swal from "sweetalert2";
import {getHistoryAccount} from "../services/history";

export default function Detail() {
    const [movie, setMovie] = useState("")
    const [account, setAccount] = useState({})
    const param = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [movieOfAccount, setMovieOfAccount] = useState({});
    const [flag, setFlag] = useState(false);
    const [flag1, setFlag1] = useState(false)
    const [packed, setPacked] = useState("")
    const [trailer, setTrailer] = useState("")
    const getHistoryPackedAccount = async (id) => {
        try {
            setPacked(await getHistoryAccount(id))
        } catch (e) {

        }
    }
    const getDetailMovieById = async () => {
        setMovie(await detailMovie(param.id))
    }
    const setFlagFunction = async () => {
        setFlag(!flag)
    }
    const setFlag1Function = async (paramFlag) => {

        setFlag1(paramFlag)
    }

    console.log(movieOfAccount.movie)

    const addFavouriteMovie = async () => {
        await addFavourite(movie.id, account.nameAccount)
    }
    const deleteFavouriteMovie = async () => {
        await deleteMovieOfAccount(movie.id, account.nameAccount)
    }
    const getMovieOfAccountFunction = async () => {
        try {
            setMovieOfAccount(await findMovieOfAccount(movie.id, account.nameAccount))
        } catch (e) {
        }
    }
    const watchMovieAccount = () => {
        if (account != null) {
            if (packed == '') {
                navigate(`/payment`)
            } else {
                navigate(`/movie/${movie.id}`)
            }
        } else {

            Swal.fire({
                icon: "error",
                timer: 2000,
                title: "Bạn cần đăng nhập để thực hiện chức năng này!",
                showConfirmButton: false
            })

        }
    }
    console.log(trailer)
    const handleOnClickFavourite = async (number) => {
        if (number == 1) {
            if (account != null) {
                try {
                    await addFavouriteMovie().then(await setFlagFunction()).then(Swal.fire({
                        icon: "success",
                        timer: 2000,
                        title: "Thêm vào danh sách yêu thích!",
                        showConfirmButton: false
                    }))
                } catch (e) {

                }
            } else {

            }
        } else if (number == 2) {
            if (account != null) {
                try {
                    await deleteFavouriteMovie().then(await setFlagFunction()).then(Swal.fire({
                        icon: "error",
                        timer: 2000,
                        title: "Xóa khỏi danh sách yêu thích!",
                        showConfirmButton: false
                    }))
                } catch (a) {

                }

            } else {
                Swal.fire({
                    icon: "error",
                    timer: 2000,
                    title: "Bạn cần đăng nhập để thực hiện chức năng này!",
                    showConfirmButton: false

                })
            }
        }

    }
    useEffect(() => {
        setAccount(JSON.parse(localStorage.getItem("account")))
    }, [])
    useEffect(() => {
        if (movie != '' && account != null) {
            getMovieOfAccountFunction();
            getHistoryPackedAccount(account.id)

        }
    }, [account, movie])
    useEffect(() => {
        setTimeout(() => {
            getMovieOfAccountFunction();
        }, 150)
    }, [flag])

    useEffect(() => {
        getDetailMovieById()
    }, [param.id])
    useEffect(() => {
        setTrailer(movie.trailer)
    }, [flag1])

    useEffect(() => {
        setTrailer("")
        setFlag1Function(!flag1)
        if (account != null) {
            getHistoryPackedAccount(account.id)
        }
        window.scrollTo(0, 0)
    }, [location])

    console.log(flag)
    return (
        <div>

            <title>{movie.name}</title>

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
                                {movie &&
                                <span> Phim:
                                    <> {movie.name}</>
                                </span>
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
                            <div className="col-lg-8 col-sm-8 col-md-8">
                                <div className="row">
                                    <div className="col-lg-5 col-sm-12 col-md-12">
                                        <div className="anime__details__pic set-bg">
                                            <a> <img style={{height: "100%", width: "100%"}} src={movie.img}
                                                     alt=""/></a>

                                            {movieOfAccount == '' || movieOfAccount.movie == undefined ?
                                                <div className={"heart search_name "} onClick={async () => {
                                                    handleOnClickFavourite(1)
                                                }}>
                                                    <a className="follow-btn ">

                                                    <span className={""}
                                                    ><i
                                                        className="fa-regular fa-heart"></i></span> </a>
                                                </div>
                                                :
                                                <div className={"heart search_name"} onClick={async () => {
                                                    handleOnClickFavourite(2)
                                                }}>
                                                    <a className="follow-btn">

                                                        <span className={""}><i
                                                            className="fa-solid fa-heart"></i></span> </a>
                                                </div>
                                            }


                                            <div className="anime__details__btn buttonWatchMovie">
                                                <a onClick={() => {
                                                    setFlag1Function(true)
                                                }} href="#trailer"
                                                   className="follow-btn">Trailer</a>

                                                <a onClick={() => {
                                                    watchMovieAccount();
                                                }}>
                                                    <Link
                                                        className="follow-btn"><span>Xem phim</span></Link></a>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-sm-12 col-md-12">
                                        {movie &&
                                        <div className="anime__details__text">
                                            <div className="anime__details__title">
                                                <h3>{movie.name}</h3>
                                                <span>{movie.otherName}</span>
                                            </div>
                                            <div className="anime__details__widget contentMovie">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <ul>
                                                            <li>
                                                                <span>Đạo diễn:</span> {
                                                                movie?.authors?.length != 0 ?
                                                                    movie.authors.map((item, index) =>
                                                                        <Link key={`author_${index}`}
                                                                              to={`/list/author/${item.id}`}>{index + 1 === movie.authors.length ?
                                                                            <strong
                                                                                className="search_name_detail search_name">{item.name}</strong> : <>
                                                                                <strong
                                                                                    className="search_name_detail search_name">{item.name}</strong><strong
                                                                                className="search_name_detail search_name">,</strong> </>} </Link>
                                                                    ) : <span>N/A</span>}</li>
                                                            <li><span>Năm sản xuất:</span> {movie.yearStart}</li>
                                                            <li><span>Thời gian:</span> {movie.timeEndMovie}</li>
                                                            <li><span>Quốc gia:</span> {movie.nation.name}</li>
                                                            <li>
                                                                <span>Diễn viên:</span> {movie.actors.map((item, index) =>
                                                                <>  <Link key={`actor_${index}`}
                                                                          to={`/list/actor/${item.id}`}>{index + 1 === movie.actors.length ?
                                                                    <strong
                                                                        className="search_name_detail search_name">{item.name}</strong> : <>
                                                                        <strong
                                                                            className="search_name_detail search_name">{item.name}</strong><strong
                                                                        className="search_name_detail search_name">,</strong> </>} </Link></>
                                                            )}</li>
                                                            <li>
                                                                <span>Thể loại:</span>{movie.categories.map((item, index) =>
                                                                <>  <Link key={`actor_${index}`}
                                                                          to={`/list/category/${item.id}`}>{index + 1 === movie.categories.length ?
                                                                    <strong
                                                                        className="search_name_detail search_name">{item.name}</strong> : <>
                                                                        <strong
                                                                            className="search_name_detail search_name">{item.name}</strong><strong
                                                                        className="search_name_detail search_name">,</strong> </>} </Link></>
                                                            )}
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                        }
                                    </div>
                                </div>
                                <div className="row" style={{paddingTop: "10%"}}>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="section-title">
                                            <h5>Mô tả</h5>
                                        </div>
                                        <p style={{color: "white"}}>{movie.description}</p>
                                    </div>
                                </div>
                                <div className={"row"} id={"trailer"}>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="anime__video__player ">

                                            {movie &&
                                            trailer === movie.trailer &&
                                            <>
                                                <div className="section-title">
                                                    <h5>Trailer</h5>
                                                </div>

                                                <video id="player" playsInline controls
                                                       data-poster="./videos/anime-watch.jpg"
                                                       className="videoWidth">
                                                    <source src={trailer} type="video/mp4"/>
                                                </video>
                                            </>

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Sibar/>
                        </div>
                    </div>
                </div>
            </section>


        </div>


        // <div className="col-lg-4 col-md-4">
        //     <div className="anime__details__sidebar">
        //         <div className="section-title">
        //             <h5>you might like...</h5>
        //         </div>
        //         <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-1.jpg">
        //             <div className="ep">18 / ?</div>
        //             <div className="view"><i className="fa fa-eye"></i> 9141</div>
        //             <h5><a href="#">Boruto: Naruto next generations</a></h5>
        //         </div>
        //         <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-2.jpg">
        //             <div className="ep">18 / ?</div>
        //             <div className="view"><i className="fa fa-eye"></i> 9141</div>
        //             <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
        //         </div>
        //         <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-3.jpg">
        //             <div className="ep">18 / ?</div>
        //             <div className="view"><i className="fa fa-eye"></i> 9141</div>
        //             <h5><a href="#">Sword art online alicization war of underworld</a></h5>
        //         </div>
        //         <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-4.jpg">
        //             <div className="ep">18 / ?</div>
        //             <div className="view"><i className="fa fa-eye"></i> 9141</div>
        //             <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
        //         </div>
        //     </div>
        // </div>
    );
}