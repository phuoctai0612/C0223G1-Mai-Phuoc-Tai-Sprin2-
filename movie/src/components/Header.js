import {useState} from "react";
import {Link} from "react-router-dom";


export default function Header() {
    const [dropDown,setDropDown]=useState(false);
    const [dropDown1,setDropDown1]=useState(false);
    const [dropDown2,setDropDown2]=useState(false);
    const handleDropDown=()=>{
        setDropDown(!dropDown);
    }
    const handleDropDown1=()=>{
        setDropDown1(!dropDown1);
    }
    const handleDropDown2=()=>{
        setDropDown2(!dropDown2);
    }
    return (
        <div >


                    {/*/header-w3l*/}
                    <div className="header-w3-agileits" id="home">
                        <div className="inner-header-agile">
                            <nav className="navbar navbar-default">
                                <div className="navbar-header">
                                    <button
                                        type="button"
                                        className="navbar-toggle"
                                        data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1"
                                    >
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"/>
                                        <span className="icon-bar"/>
                                        <span className="icon-bar"/>
                                    </button>
                                    <h1>
                                        <a href="index.html">
                                            <span className="logoConflix" >CONFLIX</span>
                                        </a>
                                    </h1>
                                </div>
                                {/* navbar-header */}
                                <div
                                    className="collapse navbar-collapse"
                                    id="bs-example-navbar-collapse-1"
                                >
                                    <ul className="nav navbar-nav">
                                        <li className="active">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                onClick={handleDropDown}
                                            >
                                                Genre <b className="caret" />
                                            </a>
                                            <ul className="dropdown-menu multi-column columns-3" style={{ display: dropDown ? 'block' : 'none' }}>
                                                <li>
                                                    <div className="col-sm-4" >
                                                        <ul className="multi-column-dropdown" >
                                                            <li>
                                                                <a href="genre.html">Action</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Biography</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Crime</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Family</a>
                                                            </li>
                                                            <li>
                                                                <a href="horror.html">Horror</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Romance</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Sports</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">War</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                                <a href="genre.html">Adventure</a>
                                                            </li>
                                                            <li>
                                                                <a href="comedy.html">Comedy</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Documentary</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Fantasy</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Thriller</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                                <a href="genre.html">Animation</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Costume</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Drama</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">History</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Musical</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Psychological</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="clearfix"/>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="series.html">tv - series</a>
                                        </li>
                                        <li>
                                            <a href="news.html">news</a>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                onClick={handleDropDown1}
                                            >
                                                Country <b className="caret"/>
                                            </a>
                                            <ul className="dropdown-menu multi-column columns-3"
                                                style={{ display: dropDown1 ? 'block' : 'none' }}
                                             >
                                                <li>
                                                    <div className="col-sm-4">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                                <a href="genre.html">Asia</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">France</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Taiwan</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">United States</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                                <a href="genre.html">China</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">HongCong</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Japan</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Thailand</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                                <a href="genre.html">Euro</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">India</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">Korea</a>
                                                            </li>
                                                            <li>
                                                                <a href="genre.html">United Kingdom</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="clearfix"/>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="list.html">A - z list</a>
                                        </li>
                                        <li>
                                            {/*<Link to="/login">Đăng kí</Link>*/}
                                        </li>
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                            </nav>
                            <div className="w3ls_search">
                                <div className="cd-main-header">
                                    <ul className="cd-header-buttons">
                                        <li>
                                            <a className="cd-search-trigger" href="#cd-search">
                                                {" "}
                                                <span/>
                                            </a>
                                        </li>
                                    </ul>
                                    {" "}
                                    {/* cd-header-buttons */}
                                </div>
                                <div id="cd-search" className="cd-search">
                                    <form action="#" method="post">
                                        <input name="Search" type="search" placeholder="Search..."/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*//header-w3l*/}
                    {/*/banner-info*/}



        </div>
    );
}