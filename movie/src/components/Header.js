import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import Swal from "sweetalert2";
import {getCategorys, getNations} from "../services/searchService";
import {getDatabase, ref, child, get} from "firebase/database";
import logo from "../img/image6.png"

import {getAccountWithToken} from "../services/loginService";
import {useNavigate} from "react-router";
import {getHistoryAccount} from "../services/history";

export default function Header() {
    const [nations, setNations] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [token, setToken] = useState("")
    const [account, setAccount] = useState("");
    const [packed, setPacked] = useState("")
    const location = useLocation()
    const navigate = useNavigate();
    const getListNations = async () => {
        setNations(await getNations());
    }
    const getListCategorys = async () => {
        setCategorys(await getCategorys());
    }
    const nameSearchMovie = () => {
        const nameMovie = document.getElementById("nameMovie").value;
        const regex = /[!@#$%^&*(),.?":{}|<>/]/;
        if (regex.test(nameMovie)) {
            // Xử lý lỗi khi có ký tự đặc biệt
            Swal.fire({
                icon: "error",
                timer: 2000,
                title: "Không được nhập kí tự đặc biệt!",
                showConfirmButton:false
            })
            document.getElementById("nameMovie").value = ""
            return;
        }else {
            navigate(`/list-movie/${nameMovie.trim()}`)
        }
        document.getElementById("nameMovie").value = ""
    }
    const getTokenPromise = async () => {
        setToken(localStorage.getItem("token"));
    }

    const getToken = async (tokena) => {
        try {
            setAccount(await getAccountWithToken(tokena));
        } catch (e) {
            localStorage.removeItem("account")
            localStorage.removeItem("token")
        }
    }
    const handleKeyDown = (event) => {
        const keyCode = event.keyCode
        if (keyCode == 13) {
            nameSearchMovie()
        }
    }
    const getHistoryPackedAccount = async (id) => {
        try {
            setPacked(await getHistoryAccount(id))
        } catch (e) {
            setPacked("")
        }
    }
    useEffect(() => {
        if (account) {
                getHistoryPackedAccount(account.id)

        }
    }, [account])
    useEffect(() => {
        if (account) {
                getHistoryPackedAccount(account.id)
        }
        getTokenPromise()
    }, [location])
    useEffect(() => {
        setAccount(JSON.parse(localStorage.getItem("account")))
    }, [token])
    useEffect(() => {
        getListNations()
        getListCategorys()
    }, [])

    useEffect(() => {
        if (token != '' && token != null) {
            getToken(token)
        }
    }, [token])

    return (
        <div>
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="header__logo row" style={{float: "right"}}>
                                <Link to="">
                                    <img style={{height: "45px"}} src={logo} alt=""/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="header__nav">
                                <nav className="header__menu mobile-menu">
                                    <ul>
                                        <li className="active">
                                            <Link to={""}>Trang chủ</Link>
                                        </li>
                                        <li>

                                            <a>
                                                Thể loại <span className="arrow_carrot-down"/>
                                            </a>
                                            <div className="row">
                                                <ul className="dropdown row" style={{width: "600px"}}>
                                                    {categorys &&
                                                    categorys.map((item, index) =>

                                                        <li key={`category_${index}`} className={"liWidth"}>
                                                            <Link to={`/list/category/${item.id}`}
                                                                  style={{width: "230px"}}>
                                                            <span className={"col-lg-12 search_name"}>
                                                                {item.name}
                                                            </span>
                                                            </Link>
                                                        </li>
                                                    )}

                                                </ul>

                                            </div>
                                        </li>
                                        <li>
                                            <a>
                                                Quốc gia <span className="arrow_carrot-down"/>
                                            </a>
                                            <ul className="dropdown row" style={{width: "180px"}}>

                                                {nations &&
                                                nations.map((item, index) =>

                                                    <li key={`nation_${index}`} className={"liWidthNation"}>
                                                        <Link to={`/list/${item.name}`}>
                                                            <span className={"col-lg-12 search_name"}>{item.name}</span>
                                                        </Link>
                                                    </li>
                                                )}

                                            </ul>
                                        </li>
                                        <li>
                                            <input type="text" className="form-control" id={"nameMovie"}
                                                   onKeyDown={(event) => {
                                                       handleKeyDown(event)
                                                   }}
                                                   placeholder="Ví dụ: Tây du kí ..."/>
                                        </li>
                                        <li onClick={() => {
                                            nameSearchMovie()
                                        }}>
                                            <a className="search-switch">
                                                <span className="icon_search"/>
                                            </a>
                                        </li>
                                        {account ?
                                            <li>
                                                <a>{account.nameAccount}</a>
                                                <ul className="dropdown row" style={{width: "190px"}}>

                                                        {packed ? "" : account != null ? <li>
                                                            <Link to={`/payment`}>Mua gói <i className="fa-solid fa-film"></i></Link>
                                                     </li>  : ""
                                                        }
                                                        {packed &&

                                                        <li>

                                                            <a>{packed.packedMovie.name} <i className="fa-solid fa-crown"></i> </a>

                                                        </li>
                                                        }
                                                        <li>
                                                            <Link to="/history-account">
                                                               Lịch sử mua gói <i
                                                                className="fa-solid fa-sack-dollar"></i>
                                                            </Link>
                                                        </li>
                                                    <li>
                                                            <Link to="/favourite">
                                                                Danh sách yêu thích <i
                                                                className="fa-solid fa-heart"></i>
                                                            </Link>
                                                        </li>
                                                        <li onClick={() => {
                                                            localStorage.removeItem("account")
                                                            localStorage.removeItem("token")
                                                        }
                                                        }>
                                                            <Link to="/">
                                                                Đăng xuất <i
                                                                className="fa-solid fa-arrow-right-from-bracket"></i>
                                                            </Link>
                                                        </li>


                                                </ul>

                                            </li>
                                            : <li>
                                                <Link to="/login">
                                                    <span className="icon_profile"/><span>Đăng nhập</span>
                                                </Link>
                                            </li>
                                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </header>
        </div>
    );
}