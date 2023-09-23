import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCategorys, getListSearchPlus, getNations} from "../services/searchService";
import {useLocation, useNavigate, useParams} from "react-router";
import Sibar from "./Sidebar";
import {findListMovieFavourite} from "../services/favouriteMovie";

export default function ListFavouriteAccount() {

    const [listSearchPlus, setListSearchPlus] = useState([]);
    const [pageSearch, setPageSearch] = useState(0);
    const [account,setAccount]=useState({});
    const location = useLocation()
    console.log(listSearchPlus)
    const getPageSearch = async (item) => {
        await setPageSearch(item);
    }
    const nextPage = async () => {
        const newPage = pageSearch + 1;
        const result = await findListMovieFavourite(account.nameAccount)
        if (result.content.length != 0) {
            window.scrollTo(0, 0)
            await getPageSearch(newPage).then(setListSearchPlus(await findListMovieFavourite(account.nameAccount)))
        }
    }
    const previousPage = async () => {
        const newPage = pageSearch - 1;
        if (newPage >= 0) {
            window.scrollTo(0, 0)
            await getPageSearch(newPage).then(setListSearchPlus(await findListMovieFavourite(account.nameAccount)))
        }
    }
    const getListFavouriteMovie=async ()=>{
        setListSearchPlus(await findListMovieFavourite(account.nameAccount));
    }
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
        setAccount(JSON.parse(localStorage.getItem("account")))
    }, [])
    useEffect(()=>{
        if (account.nameAccount!=undefined){
            getListFavouriteMovie()
        }
    },[account])
    console.log(account)

    return (
        <>

            <title>Danh sách</title>
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link to={"/"}><i className="fa fa-home"></i> Trang chủ</Link>
                                <span>Danh sách yêu thích</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="product-page spad">
                <div className="container">

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
                                            <div key={`listSearch_${index}`} className="col-lg-3 col-md-4 col-sm-6" title={item.movie.name}>
                                                <div className="product__item" onClick={() => {
                                                    navigate(`/detail/${item.movie.id}`)
                                                }}>
                                                    <div className="product__item__pic set-bg">
                                                        <img className={"maxWidthImg"} src={item.movie.img} alt=""/>
                                                        {/*<div className="ep">mới</div>*/}

                                                    </div>
                                                    <div className="product__item__text">
                                                        <h5><a href="#">{item.movie.name}</a></h5>
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
                            {listSearchPlus.totalPages>1?<div className="product__pagination">
                                <a className={"search_name"} onClick={()=>{
                                    previousPage()
                                }}><i className="fa fa-angle-double-left" ></i></a>
                                <a href="#" className="current-page" >1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a className={"search_name"} onClick={()=>{
                                    nextPage()
                                }}><i className="fa fa-angle-double-right" ></i></a>
                            </div>:""}

                        </div>
                        <Sibar/>
                    </div>
                </div>
            </section>
        </>
    );
}