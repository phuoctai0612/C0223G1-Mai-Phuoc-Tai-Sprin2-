import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    getCategorys,
    getListSearchActor,
    getListSearchAuthor, getListSearchMovieName,
    getListSearchPlus,
    getNations
} from "../services/searchService";
import {useNavigate, useParams} from "react-router";
import Sibar from "./Sidebar";
import ReactPaginate from "react-paginate";
import {getActorById} from "../services/actorService";

export default function ListSearchActor() {
    const [nations, setNations] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [listSearchPlus, setListSearchPlus] = useState([]);
    const [categorySearch, setCategorySearch] = useState("");
    const [nationSearch, setNationSearch] = useState("");
    const [actor, setActor] = useState("");
    const [actorDisplay, setActorDisplay] = useState({});
    const [pageSearch, setPageSearch] = useState(0);
    const [yearStartSearch, setYearStartSearch] = useState("");
    const [typeMovieSearch, setTypeMovieSearch] = useState("");
    const param = useParams();




    const getActorDisplay=async (id)=>{
        setActorDisplay(await getActorById(id))
    }
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
    const actorSearch = async (item) => {
        await setActor(item);
    }
    const nextPage = async () => {
        const newPage = pageSearch + 1;
        const result = await getListSearchActor(newPage, typeMovieSearch, actor, categorySearch, nationSearch, yearStartSearch)
        if (result.length != 0) {
            window.scrollTo(0, 0)
            await getPageSearch(newPage).then(setListSearchPlus(await getListSearchActor(newPage, typeMovieSearch, actor, categorySearch, nationSearch, yearStartSearch)))
        }
    }
    const previousPage = async () => {
        const newPage = pageSearch - 1;
        const result = await getListSearchActor(newPage, typeMovieSearch, actor, categorySearch, nationSearch, yearStartSearch)
        if (result.length != 0 && newPage >= 0) {
            window.scrollTo(0, 0)

            await getPageSearch(newPage).then(setListSearchPlus(await getListSearchActor(newPage, typeMovieSearch, actor, categorySearch, nationSearch, yearStartSearch)))
        }
    }
    const handlePageChange = async (data) => {
        window.scrollTo(0,0)
        await getPageSearch(data.selected).then(setListSearchPlus(await getListSearchActor(data.selected, typeMovieSearch, actor, categorySearch, nationSearch, yearStartSearch)))

    }
    const navigate = useNavigate();
    useEffect(() => {
        getListNations()
    }, [])
    useEffect(() => {
        actorSearch(param.actor)
        getActorDisplay(param.actor)
    }, [])
    useEffect(() => {
        getListCategorys()
    }, [])
    useEffect(() => {
        if (actor != '') {
            getListSearch(pageSearch, typeMovieSearch, actor, categorySearch, nationSearch, yearStartSearch)
        }
    }, [actor])
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const getListNations = async () => {
        setNations(await getNations());
    }
    const getListCategorys = async () => {
        setCategorys(await getCategorys());
    }
    const getListSearch = async (pageSearchNew, typeMovieSearchNew, actors, categorySearchNew, nationSearchNew, yearStartSearchNew) => {
        setListSearchPlus(await getListSearchActor(pageSearchNew, typeMovieSearchNew, actors, categorySearchNew, nationSearchNew, yearStartSearchNew));
    }

    const handleSearch = async () => {
        const pageInput = 0;
        const typeMovieSortInput = document.getElementById("sort").value;
        const categoryInput = document.getElementById("category").value;
        const nationInput = document.getElementById("nation").value;
        const yearStartInput = document.getElementById("yearStart").value;
        await getTypeMovieSearch(typeMovieSortInput).then(await getCategorySearch(categoryInput)).then(await getNationSearch(nationInput)).then(await getYearStartSearch(yearStartInput)).then(await getPageSearch(pageInput))
        getListSearch(pageInput, typeMovieSortInput, actor, categoryInput, nationInput, yearStartInput)
    }
    console.log(listSearchPlus)
    return (
        <>
            <title>Danh sách tác giả</title>
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link to={"/"}><i className="fa fa-home"></i> Trang chủ</Link>
                                {listSearchPlus.content &&
                                <span >Diễn viên:< > { actorDisplay.name}</>
                                </span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="product-page spad">
                <div className="container">
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
                                        <option key={`category_${index}`} value={item.id}>{item.name}</option>
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
                                        <option key={`nation_${index}`} value={item.name}>{item.name}</option>
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
                                    {listSearchPlus.content && listSearchPlus.content.length>0?
                                        listSearchPlus.content.map((item, index) =>
                                            <div key={`listSearch_${index}`} className="col-lg-3 col-md-4 col-sm-6" title={item.name}>
                                                <div className="product__item" onClick={() => {
                                                    navigate(`/detail/${item.id}`)
                                                }}>
                                                    <div className="product__item__pic set-bg">
                                                        <img className={"maxWidthImg"} src={item.img} alt=""/>
                                                        {/*<div className="ep">mới</div>*/}
                                                        <div className={"nameInline"}>
                                                            <span>{item.name}</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                        :
                                        <div style={{display:"flex",paddingLeft:"120px"}}>
                                            <h2 style={{color:"white"}}>-------- Không có dữ liệu --------</h2>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="product__pagination row" style={{justifyContent:"center"}}>
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel={pageSearch!=listSearchPlus.totalPages-1?<i style={{fontSize:"20px"}} className="fa fa-angle-double-right" onClick={() => {
                                        nextPage()
                                    }}></i>:""}
                                    // onPageChange={handlePageClick}
                                    pageRangeDisplayed={3}
                                    pageCount={listSearchPlus.totalPages==1?"":listSearchPlus.totalPages}
                                    previousLabel={pageSearch!=0?<i style={{fontSize:"20px"}} className="fa fa-angle-double-left" onClick={() => {
                                        previousPage()
                                    }}></i>:""}
                                    marginPagesDisplayed={2}
                                    onPageChange={handlePageChange}
                                    renderOnZeroPageCount={null}
                                    containerClassName={"pagination"}
                                    pageClassName={"page-item"}
                                    pageLinkClassName={"page-link"}
                                    previousClassName={"page-item"}
                                    nextClassName={"page-item"}
                                    breakClassName={"page-item"}
                                    breakLinkClassName={"page-item"}
                                    activeClassName={"active"}
                                />
                            </div>
                        </div>
                       <Sibar/>
                    </div>
                </div>
            </section>
        </>
    );
}