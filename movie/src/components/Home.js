import {useEffect, useState} from "react";
import {getTop10MovieNew, getTop10MovieRandom, getTop6MovieCartoon} from "../services/movieService";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import Sibar from "./Sidebar";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselComponent from "./Carousel";

export default function Home() {
    const [movieNew, setMovieNew] = useState([])
    const [movieCartoon, setMovieCartoon] = useState([])
    const navigate = useNavigate();


    const getTop10New = async () => {
        setMovieNew(await getTop10MovieNew())
    }
    const getTop6Cartoon = async () => {
        setMovieCartoon(await getTop6MovieCartoon())
    }

    useEffect(() => {
        getTop10New()
        getTop6Cartoon()
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <title>Trang chủ</title>


            <section>
                <div className="container" style={{paddingTop: "70px"}}>
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8">
                            <div className="section-title">
                                <h4>Danh sách đề xuất</h4>
                            </div>
                        </div>
                    </div>
                    <CarouselComponent/>
                </div>
            </section>
            <section className="product spad" style={{paddingTop: "70px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="trending__product">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <div className="section-title">
                                            <h4>Phim mới</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="btn__all">
                                            <Link to={"/list"} className="primary-btn">Tất cả
                                                <span className="arrow_right"></span></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    {movieNew &&
                                    movieNew.map((item, index) =>
                                        <div key={`movieNew_${index}`} className="col-lg-3 col-md-4 col-sm-4 "
                                             title={item.name}>
                                            <div className="product__item" onClick={() => {
                                                navigate(`/detail/${item.id}`)
                                            }}>
                                                <div className="product__item__pic set-bg img">
                                                    <img className={"maxImg"} src={item.img} alt=""/>
                                                    <div className="ep">Mới</div>
                                                    <div className="nameInline">
                                                        <span>{item.name}</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                    }


                                </div>
                            </div>
                            <div className="popular__product">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <div className="section-title">
                                            <h4>Hoạt hình</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="btn__all">
                                            <Link to={"/list"} className="primary-btn">Tất cả
                                                <span className="arrow_right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {movieCartoon &&
                                    movieCartoon.map((item, index) =>
                                        <div key={`movieCartoon_${index}`} className="col-lg-3 col-md-4 col-sm-4">
                                            <div className="product__item"
                                                 onClick={() => {
                                                     navigate(`/detail/${item.id}`)
                                                 }}
                                            >
                                                <div className="product__item__pic set-bg img"
                                                     data-setbg="img/popular/popular-1.jpg">
                                                    <img className={"maxImg"} src={item.img} alt=""/>
                                                    <div className="ep">Hoạt hình</div>
                                                    <div className={"nameInline"}>
                                                        <span>{item.name}</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <Sibar/>
                    </div>
                </div>
            </section>
        </>


    );
}