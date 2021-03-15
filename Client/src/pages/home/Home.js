 import {useContext, useState} from "react";
 import { Context } from '../../context/Context';
// import { ModalContext } from '../../context/ModalContext';
// import { useHistory } from 'react-router-dom';
import Carousel from '../../components/carousel/Carousel';
// import LateralScroll from '../../components/lateralScroll/LateralScroll';
// import { Context } from '../../context/Context';
import "./Home.css";
import "../../css/sections.css";
import "../../components/searcher/Searcher";
// import Movie from "../../components/movie/Movie";
import Searcher from "../../components/searcher/Searcher";
import Movie from "../../components/movie/Movie";
// import ModalSearchs from "../../components/modalSearchs/ModalSearchs";



// const api_key = "73335406cba0f2d2b6be748d34df365b";
// const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function Home() {

    const { setSearchPath, searchArray, show, setShow, homeMoviesArray, setHomeMoviesArray, handleDecrementMovies, handleIncrementMovies } = useContext(Context);

    // const moviesPath = '';
    // const [homeMoviesArray, setHomeMoviesArray] = useState([]);

    // useEffect(() => {
    //     console.log(topRatedMoviesPath);

    //     //const newUrl = URL + "&page=${}"
    //     fetch(topRatedMoviesPath)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error("Algo no funciona...");
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             setTopRatedMoviesArray(data.results);
    //             //setMaxPages(data.total_pages);
    //         })
    //         .catch(error => alert("Algo no funciona..."))
    // }, [topRatedMoviesPath]);

    // const [carouselShow, setCarouselShow] = useState(true);

    // const { searchArray } = useContext(Context);

    // const [show, setShow] = useState(false)
    
    //  const { MovieId, saveMovieId, MovieDetails, saveMovieDetails, MovieDetailsPath, setMovieDetailsPath, modalStyle,
    //      open, setOpen, classes} = useContext(ModalContext);

    //  const history = useHistory();
    
    

    // const handleSearch = (e) => {
    //     if (e.target.value !== "") {
    //         setSearchPath(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${e.target.value}`);
    //         document.getElementById("carousel").classList.add("carouselDisplayNone")
    //         document.getElementById("searchDiv").classList.remove("carouselDisplayNone")
    //         // document.getElementById("lateralScroll").classList.add("lateralScrollDisplayNone")
    //         document.getElementById("searchDiv").classList.remove("lateralScrollDisplayNone")
    //     } else {
    //         document.getElementById("carousel").classList.remove("carouselDisplayNone")
    //         //document.getElementById("searchDiv").classList.add("carouselDisplayNone")
    //         //document.getElementById("lateralScroll").classList.remove("lateralScrollDisplayNone")
    //         document.getElementById("searchDiv").classList.add("lateralScrollDisplayNone")
    //        // document.getElementById("movie-container-display").classList.add("movie-container-display-none")
    //     }
        
    //   };

    // const handleGoToDetails = () => {
    //     history.push("/Details")
    // }

    return (
        <>
            {/* <div className="container-home"> */}
                <Searcher />
                {/* <button onClick={() => setShow(true)}>Show Modal</button>
                <div className="modal-container">
                    <ModalSearchs onClose={() => setShow(false)} show={show} />
                </div> */}
                {/* <Searcher />    */}
                {/* <div className="container mt-2 mb-2">
                    <div className="row justify-content-center align-items-center">
                        <div className="div-searcher col-6">
                            <input className="form-control" type="text"  placeholder="Search" aria-label="Search"
                                onChange={handleSearch}
                            >
                            </input>
                        </div>
                    </div>
                </div> */}
                <div id="carousel" className="carouselDisplayActive">
                    <Carousel />
                </div>
                {/* <div id="lateralScroll" className="lateralScrollDisplayActive">
                    <LateralScroll />
                </div> */}
                <div className="container-home">
                <div class="contenedor">
			        <h2>MOVIES: <span>&#160; </span> </h2>
		        </div>
                    <div id="movie-container-display" className="movie-container home-margin">
                        <div id="searchDiv" className="flex">
                            {homeMoviesArray.map((movie) => {
                                return (
                                    <Movie movie={movie}/>
                                )})}
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3 mb-3">
                        <button className="btn btn-transparent mr-1" onClick={handleDecrementMovies}>-</button>
                        <button className="btn btn-transparent ml-1" onClick={handleIncrementMovies}>+</button>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
}

export default Home;