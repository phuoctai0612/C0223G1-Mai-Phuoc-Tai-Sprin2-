import {useEffect, useState} from "react";
import {getTop10MovieRandom, getTop10ViewMovie} from "../services/movieService";
import {useNavigate} from "react-router";


export default function Sibar() {
    const [listTopView, setListTopView] = useState([]);
    const [listRandom, setListRandom] = useState([]);

    const navigate = useNavigate();
    const getListTopViewFunction = async () => {
        setListTopView(await getTop10ViewMovie());
    }
    const getListRandomFunction = async () => {
        setListRandom(await getTop10MovieRandom());
    }
    useEffect(() => {
        getListRandomFunction()
        getListTopViewFunction()
    }, [])

    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="product__sidebar">
                    <div className="product__sidebar__view">
                        <div className="section-title">
                            <h5>Trending</h5>
                        </div>
                        <div className="filter__gallery">
                            {listTopView &&
                            listTopView.map((item, index) =>
                                <div className="product__sidebar__comment__item">
                                    <div onClick={() => {
                                        navigate(`/detail/${item.id}`)
                                    }
                                    } className="product__sidebar__comment__item__pic">
                                        <img className={'maxImgSidebar'} src={item.img} alt=""/>
                                    </div>
                                    <div className="product__sidebar__comment__item__text">
                                        <h5 onClick={() => {
                                            navigate(`/detail/${item.id}`)
                                        }
                                        }><a href="#">{item.name}</a></h5>
                                        <ul>
                                            <li>{item.yearStart}</li>
                                            <li>{item.nation.name}</li>
                                        </ul>
                                        <span><i className="fa fa-eye"></i> {item.view}</span>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </div>
                    {/*<div className="product__sidebar__comment">*/}
                    {/*    <div className="section-title">*/}
                    {/*        <h5>Phim đề xuất</h5>*/}
                    {/*    </div>*/}

                    {/*    {listRandom &&*/}
                    {/*    listRandom.map((item, index) =>*/}
                    {/*        <div className="product__sidebar__comment__item">*/}
                    {/*            <div onClick={() => {*/}
                    {/*                navigate(`/detail/${item.id}`)*/}
                    {/*            }*/}
                    {/*            } className="product__sidebar__comment__item__pic">*/}
                    {/*                <img className={'maxImgSidebar'} src={item.img} alt=""/>*/}
                    {/*            </div>*/}
                    {/*            <div className="product__sidebar__comment__item__text">*/}
                    {/*                <h5 onClick={() => {*/}
                    {/*                    navigate(`/detail/${item.id}`)*/}
                    {/*                }*/}
                    {/*                }><a href="#">{item.name}</a></h5>*/}
                    {/*                <ul>*/}
                    {/*                    <li>{item.yearStart}</li>*/}
                    {/*                    <li>{item.nation.name}</li>*/}
                    {/*                </ul>*/}
                    {/*                <span><i className="fa fa-eye"></i> {item.view}</span>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*    }*/}

                    {/*</div>*/}
                </div>
            </div>

        </>

    );
}