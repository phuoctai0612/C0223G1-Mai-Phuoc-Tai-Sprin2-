import {useEffect, useState} from "react";
import {getTop10MovieRandom} from "../services/movieService";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useNavigate} from "react-router";
export default function CarouselComponent(){
    const [movieRandom, setMovieRandom] = useState([])
    const getListMovieRandomCarousel = async () => {
        setMovieRandom(await getTop10MovieRandom())
    }
    const navigate = useNavigate();

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    useEffect(()=>{
        getListMovieRandomCarousel()
    },[])
    return(
        <Carousel responsive={responsive}  slidesToSlide={2} autoPlaySpeed={3500} rewind={true} autoPlay={true} keyBoardControl={true} rewindWithAnimation={true}>
            {movieRandom&&
            movieRandom.map((item, index) =>
                <div key={`movieNew_${index}`}
                     title={item.name}
                className={"row"} style={{justifyContent:"center"}}
                >
                    <div  className="col-lg-10 col-md-10 col-sm-10">
                        <div className="product__item__pic set-bg row imgZoom" id={"carousel"} >
                            <img className={"maxImg "} src={item.img} alt=""  onClick={() => {
                                navigate(`/detail/${item.id}`)
                            }}/>
                            <div className={"nameInline"}>
                                <span>{item.name}</span>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </Carousel>
    )
}