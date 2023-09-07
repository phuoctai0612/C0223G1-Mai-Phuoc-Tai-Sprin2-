import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCategorys, getListSearchPlus, getNations} from "../services/searchService";
import {useNavigate} from "react-router";

export default function ListSearchMovie() {

    const [nations, setNations] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [listSearchPlus, setListSearchPlus] = useState([]);
    const [categorySearch, setCategorySearch] = useState("");
    const [nationSearch, setNationSearch] = useState("");
    const [pageSearch, setPageSearch] = useState(0);
    const [yearStartSearch, setYearStartSearch] = useState("");
    const [typeMovieSearch, setTypeMovieSearch] = useState("");


    const getCategorySearch = async (item) => {
        await setCategorySearch(item);
    }
    const getNationSearch = async (item) => {
        await setNationSearch(item);
    }
    const getPageSearch = async (item) => {
        await setPageSearch(item);
    }
    const getYearStartSearch = async (item) => {
        await setYearStartSearch(item);
    }
    const getTypeMovieSearch = async (item) => {
        await setTypeMovieSearch(item);
    }
    const nextPage = async () => {
        const newPage = pageSearch + 1;
        const result = await getListSearchPlus(newPage, typeMovieSearch, categorySearch, nationSearch, yearStartSearch)
        if (result.length != 0) {
            await getPageSearch(newPage).then(setListSearchPlus(await getListSearchPlus(newPage, typeMovieSearch, categorySearch, nationSearch, yearStartSearch)))
        }
    }
    const previousPage = async () => {
        const newPage = pageSearch - 1;
        const result = await getListSearchPlus(newPage, typeMovieSearch, categorySearch, nationSearch, yearStartSearch)
        if (result.length != 0 && newPage >= 0) {
            await getPageSearch(newPage).then(setListSearchPlus(await getListSearchPlus(newPage, typeMovieSearch, categorySearch, nationSearch, yearStartSearch)))
        }
    }
    const navigate = useNavigate();
    useEffect(() => {
        getListNations()
    }, [])
    useEffect(() => {
        getListCategorys()
    }, [])
    useEffect(() => {
        getListSearch(pageSearch, typeMovieSearch, categorySearch, nationSearch, yearStartSearch)
    }, [])
    const getListNations = async () => {
        setNations(await getNations());
    }
    const getListCategorys = async () => {
        setCategorys(await getCategorys());
    }
    const getListSearch = async (pageSearchNew, typeMovieSearchNew, categorySearchNew, nationSearchNew, yearStartSearchNew) => {
        setListSearchPlus(await getListSearchPlus(pageSearchNew, typeMovieSearchNew, categorySearchNew, nationSearchNew, yearStartSearchNew));
    }

    const handleSearch = async () => {
        const pageInput = 0;
        const typeMovieSortInput = document.getElementById("sort").value;
        const categoryInput = document.getElementById("category").value;
        const nationInput = document.getElementById("nation").value;
        const yearStartInput = document.getElementById("yearStart").value;

        await getTypeMovieSearch(typeMovieSortInput).then(await getCategorySearch(categoryInput)).then(await getNationSearch(nationInput)).then(await getYearStartSearch(yearStartInput)).then(await getPageSearch(pageInput))
        getListSearch(pageInput, typeMovieSortInput, categoryInput, nationInput, yearStartInput)
    }
    console.log(listSearchPlus)
    return (
        <>
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link to={"/"}><i className="fa fa-home"></i> Trang chủ</Link>
                                <Link to={"/list"}>Danh sách</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="product-page spad">
                <div className="container">g

                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-3">
                            <div className="product__page__filter" style={{paddingBottom: "40px"}}>
                                <select className="styleSearch" id={"sort"} onChange={() => {
                                    handleSearch()
                                }}>
                                    <option value="">--Sắp xếp--</option>
                                    <option value="1">Mới cập nhật</option>
                                    <option value="2">Tên phim</option>
                                    <option value="3">Năm sản xuất</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3">
                            <div className="product__page__filter" style={{paddingBottom: "40px"}}>
                                <select className="styleSearch" id={"category"} onChange={() => {
                                    handleSearch()
                                }}>
                                    <option value="">--Thể loại--</option>
                                    {categorys &&
                                    categorys.map((item, index) =>
                                        <option value={item.id}>{item.name}</option>
                                    )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3">
                            <div className="product__page__filter" style={{paddingBottom: "40px"}}>
                                <select className="styleSearch" id={"nation"} onChange={() => {
                                    handleSearch()
                                }}>
                                    <option value="">--Quốc gia--</option>

                                    {nations &&
                                    nations.map((item, index) =>
                                        <option value={item.name}>{item.name}</option>
                                    )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2">
                            <div className="product__page__filter" style={{paddingBottom: "40px"}}>
                                <select className="styleSearch" id={"yearStart"} onChange={() => {
                                    handleSearch()
                                }}>
                                    <option value="">--Năm--</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-1">
                            <div className="product__page__filter" style={{paddingBottom: "40px", color: "white"}}
                                 onClick={async () => {
                                     await handleSearch()
                                 }}>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="product__page__content">
                                <div className="product__page__title">
                                    <div className="row">
                                    </div>
                                </div>
                                <div className="row">
                                    {listSearchPlus.content &&
                                    listSearchPlus.content.map((item, index) =>
                                        <div className="col-lg-4 col-md-6 col-sm-6" title={item.name}>
                                            <div className="product__item" onClick={() => {
                                                navigate(`/detail/${item.id}`)
                                            }}>
                                                <div className="product__item__pic set-bg">
                                                    <img src={item.img} alt=""/>
                                                    {/*<div className="ep">mới</div>*/}

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
                            <div className="product__pagination">
                                <a href="#" className="current-page">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#"><i className="fa fa-angle-double-right"></i></a>
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