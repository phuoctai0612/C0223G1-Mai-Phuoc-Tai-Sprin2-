import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import Swal from "sweetalert2";
import {getCategorys, getNations} from "../services/searchService";
import {getDatabase, ref, child, get} from "firebase/database";
import {database} from "./MovieFirebase";
import {getAccountWithToken} from "../services/loginService";


const dbRef = ref(database);
get(child(dbRef, `movie`)).then((snapshot) => {
    if (snapshot.exists()) {
    } else {
        console.log("No data available");
    }
}).catch((error) => {
});
export default function Header() {
    const [nations, setNations] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [token, setToken] = useState("")
    const [account, setAccount] = useState("");
    const location = useLocation()
    useEffect(() => {
        setAccount(JSON.parse(localStorage.getItem("account")))
    }, [token])
    useEffect(() => {
        getListNations()
    }, [])
    useEffect(() => {
        getListCategorys()
    }, [])
    const getTokenPromise = async () => {
        setToken(localStorage.getItem("token"));
    }
    useEffect(() => {
        getTokenPromise()
    }, [location])


    const getToken = async (tokena) => {
        setAccount(await getAccountWithToken(tokena));
    }

    useEffect(() => {
        if (token != ''&&token!=null) {
           getToken(token)
        }
    }, [token])

    console.log("token"+token)
    console.log(account)
    const getListNations = async () => {
        setNations(await getNations());
    }
    const getListCategorys = async () => {
        setCategorys(await getCategorys());
    }

    return (
        <div>
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="header__logo">
                                <Link to="">
                                    <img src="img/Untitled123.png" alt=""/>
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
                                                        <li className={"liWidth"}>
                                                            <span className={"col-lg-12 search_name"}>{item.name}</span>
                                                        </li>
                                                    )}

                                                </ul>

                                            </div>
                                        </li>
                                        <li>
                                            <a>
                                                Quốc gia <span className="arrow_carrot-down"/>
                                            </a>
                                            <ul className="dropdown row" style={{width: "300px"}}>

                                                {nations &&
                                                nations.map((item, index) =>
                                                    <li className={"liWidthNation"}>
                                                        <span className={"col-lg-12 search_name"}>{item.name}</span>
                                                    </li>
                                                )}

                                            </ul>
                                        </li>
                                        <li>
                                            <Link to={`/list`}>Tìm kiếm</Link>
                                        </li>
                                        <li>
                                            <input type="text" className="form-control"
                                                   placeholder="Ví dụ: Tây du kí ..."/>
                                        </li>
                                        <li>
                                            <a href="#" className="search-switch">
                                                <span className="icon_search"/>
                                            </a>
                                        </li>
                                        {account ?
                                            <li onClick={() => {
                                                localStorage.removeItem("account")
                                                localStorage.removeItem("token")
                                                // Swal.fire({
                                                //     icon: "success",
                                                //     timer: 2000,
                                                //     title: "Đăng xuất thành công!"
                                                // })
                                            }
                                            }>
                                                <Link to="/">
                                                    <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                                                    <span>{account.nameAccount}</span>
                                                </Link>
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
                    <div id="mobile-menu-wrap"/>
                </div>
            </header>
        </div>
    );
}