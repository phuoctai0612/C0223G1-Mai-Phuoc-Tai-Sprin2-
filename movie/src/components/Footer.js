import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCategorys, getNations} from "../services/searchService";
import logo from "../img/image6.png"

export default function Footer(){
    const [nations, setNations] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const getListNations = async () => {
        setNations(await getNations());
    }
    const getListCategorys = async () => {
        setCategorys(await getCategorys());
    }
    useEffect(() => {
        getListNations()
        getListCategorys()
    }, [])
    const upToTop=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Cuộn mượt
        });
    }
    return(
        <div>
            <div>
                <footer className="footer">
                    <div className="page-up">
                        <a onClick={()=>{
                           upToTop()
                        }}

                        ><span className="arrow_carrot-up"></span></a>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="footer__logo img" >
                                    <Link to="" >

                                        <img onClick={()=>{
                                            {window.scrollTo(0,0)}
                                        }} src={logo} alt=""/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer__nav">
                                    <ul>
                                        {/*<li className="active"><a href="./index.html">Trang chủ</a></li>*/}
                                        <li>

                                            <Link to={`/`} onClick={()=>{
                                                upToTop()
                                            }}>
                                                Trang chủ <span className="arrow_carrot-up"/>
                                            </Link>
                                            <div className="row">
                                                {/*<ul className="dropdown row" style={{width: "600px"}}>*/}
                                                {/*    {categorys &&*/}
                                                {/*    categorys.map((item, index) =>*/}

                                                {/*        <li key={`category_${index}`} className={"liWidth"}>*/}
                                                {/*            <Link to={`/list/category/${item.id}`}*/}
                                                {/*                  style={{width: "230px"}}>*/}
                                                {/*            <span className={"col-lg-12 search_name"}>*/}
                                                {/*                {item.name}*/}
                                                {/*            </span>*/}
                                                {/*            </Link>*/}
                                                {/*        </li>*/}
                                                {/*    )}*/}

                                                {/*</ul>*/}

                                            </div>
                                        </li>
                                        <li><Link to={`/list`}>Danh sách phim</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3" >
                                <p style={{color:"white"}}>
                                     Copyright &copy; Xem phim hay miễn phí chất lượng cao với phụ đề tiếng việt - thuyết minh - lồng tiếng <i className="fa fa-heart" aria-hidden="true"></i> by <a
                                        href="https://www.facebook.com/thuan.my.9674227/" target="_blank">Tài Phước</a>
                                </p>

                            </div>
                        </div>
                    </div>
                </footer>

        </div>
        </div>
    );
}