import {useEffect, useState} from "react";
import {getTop10MovieNew, getTop6MovieCartoon} from "../services/movieService";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

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

    }, [])
    useEffect(() => {
        getTop6Cartoon()
    }, [])
    console.log(movieCartoon);
    return (
        <>

            <section className="hero">
                <div className="container">
                    <div className="hero__slider owl-carousel">

                        <div className="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero__text">
                                        <div className="label">Adventure</div>
                                        <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                        <p>After 30 days of travel across the world...</p>
                                        <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero__text">
                                        <div className="label">Adventure</div>
                                        <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                        <p>After 30 days of travel across the world...</p>
                                        <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero__text">
                                        <div className="label">Adventure</div>
                                        <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                        <p>After 30 days of travel across the world...</p>
                                        <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product spad">
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
                                        <div className="col-lg-4 col-md-6 col-sm-6" title={item.name}>
                                            <div className="product__item" onClick={() => {
                                                navigate(`/detail/${item.id}`)
                                            }}>
                                                <div className="product__item__pic set-bg">
                                                    <img src={item.img} alt=""/>
                                                    <div className="ep">mới</div>

                                                </div>
                                                <div className="product__item__text">
                                                    <h5><a href="#">{item.name}</a></h5>
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
                                        movieCartoon.map((item,index)=>
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="product__item"
                                                     onClick={() => {
                                                         navigate(`/detail/${item.id}`)}
                                                     }
                                                >
                                                    <div className="product__item__pic set-bg"
                                                         data-setbg="img/popular/popular-1.jpg">
                                                        <img src={item.img} alt=""/>
                                                        <div className="ep">Hoạt hình</div>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Sen to Chihiro no Kamikakushi</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )

                                    }
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="product__sidebar">
                                <div className="product__sidebar__view">
                                    <div className="section-title">
                                        <h5>Top Views</h5>
                                    </div>
                                    <ul className="filter__controls">
                                        <li className="active" data-filter="*">Day</li>
                                        <li data-filter=".week">Week</li>
                                        <li data-filter=".month">Month</li>
                                        <li data-filter=".years">Years</li>
                                    </ul>
                                    <div className="filter__gallery">
                                        <div className="product__sidebar__view__item set-bg mix day years"
                                             data-setbg="img/sidebar/tv-1.jpg">
                                            <div className="ep">18 / ?</div>
                                            <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                            <h5><a href="#">Boruto: Naruto next generations</a></h5>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix month week"
                                             data-setbg="img/sidebar/tv-2.jpg">
                                            <div className="ep">18 / ?</div>
                                            <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                            <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix week years"
                                             data-setbg="img/sidebar/tv-3.jpg">
                                            <div className="ep">18 / ?</div>
                                            <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                            <h5><a href="#">Sword art online alicization war of underworld</a></h5>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix years month"
                                             data-setbg="img/sidebar/tv-4.jpg">
                                            <div className="ep">18 / ?</div>
                                            <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                            <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg mix day"
                                             data-setbg="img/sidebar/tv-5.jpg">
                                            <div className="ep">18 / ?</div>
                                            <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                            <h5><a href="#">Fate stay night unlimited blade works</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__sidebar__comment">
                                    <div className="section-title">
                                        <h5>New Comment</h5>
                                    </div>
                                    <div className="product__sidebar__comment__item">
                                        <div className="product__sidebar__comment__item__pic">
                                            <img src="img/sidebar/comment-1.jpg" alt=""/>
                                        </div>
                                        <div className="product__sidebar__comment__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                            <span><i className="fa fa-eye"></i> 19.141 Viewes</span>
                                        </div>
                                    </div>
                                    <div className="product__sidebar__comment__item">
                                        <div className="product__sidebar__comment__item__pic">
                                            <img src="img/sidebar/comment-2.jpg" alt=""/>
                                        </div>
                                        <div className="product__sidebar__comment__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">Shirogane Tamashii hen Kouhan sen</a></h5>
                                            <span><i className="fa fa-eye"></i> 19.141 Viewes</span>
                                        </div>
                                    </div>
                                    <div className="product__sidebar__comment__item">
                                        <div className="product__sidebar__comment__item__pic">
                                            <img src="img/sidebar/comment-3.jpg" alt=""/>
                                        </div>
                                        <div className="product__sidebar__comment__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">Kizumonogatari III: Reiket su-hen</a></h5>
                                            <span><i className="fa fa-eye"></i> 19.141 Viewes</span>
                                        </div>
                                    </div>
                                    <div className="product__sidebar__comment__item">
                                        <div className="product__sidebar__comment__item__pic">
                                            <img src="img/sidebar/comment-4.jpg" alt=""/>
                                        </div>
                                        <div className="product__sidebar__comment__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">Monogatari Series: Second Season</a></h5>
                                            <span><i className="fa fa-eye"></i> 19.141 Viewes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    );
}