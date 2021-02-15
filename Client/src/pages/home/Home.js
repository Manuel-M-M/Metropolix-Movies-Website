import {useContext} from "react";
import { ModalContext } from '../../context/ModalContext';
import { useHistory } from 'react-router-dom';
import Carousel from '../../components/carousel/Carousel';
import LateralScroll from '../../components/lateralScroll/LateralScroll';
import { Context } from '../../context/Context';
import "./Home.css"

const api_key = "73335406cba0f2d2b6be748d34df365b";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function Home() {

    const {searchPath, setSearchPath, searchArray, setSearchArray} = useContext(Context);
    
    const { MovieId, saveMovieId, MovieDetails, saveMovieDetails, MovieDetailsPath, setMovieDetailsPath, modalStyle,
        open, setOpen, classes} = useContext(ModalContext);

    const history = useHistory();
    
    

    const handleSearch = (e) => {
        if (e.target.value !== "") {
            setSearchPath(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${e.target.value}`);
            document.getElementById("carousel").classList.add("carouselDisplayNone")
            document.getElementById("searchDiv").classList.remove("carouselDisplayNone")
            // document.getElementById("lateralScroll").classList.add("lateralScrollDisplayNone")
            document.getElementById("searchDiv").classList.remove("lateralScrollDisplayNone")
        } else {
            document.getElementById("carousel").classList.remove("carouselDisplayNone")
            //document.getElementById("searchDiv").classList.add("carouselDisplayNone")
            //document.getElementById("lateralScroll").classList.remove("lateralScrollDisplayNone")
            document.getElementById("searchDiv").classList.add("lateralScrollDisplayNone")
           // document.getElementById("movie-container-display").classList.add("movie-container-display-none")
        }
        
      };

    const handleGoToDetails = () => {
        history.push("/Details")
    }

    return (
        <>
           
            <div className="container mt-2 mb-2">
                <div className="row justify-content-center align-items-center">
                    <div className="div-searcher col-6">
                        <input className="form-control" type="text"  placeholder="Search" aria-label="Search"
                            onChange={handleSearch}
                        >

                        </input>
                    </div>
                </div>
            </div>
            <div id="carousel" className="carouselDisplayActive">
                <Carousel />
            </div>
            {/* <div id="lateralScroll" className="lateralScrollDisplayActive">
                <LateralScroll />
            </div> */}
            <div id="movie-container-display" className="movie-container home-margin">
                <div id="searchDiv" className="flex">
                    {searchArray.map((movie) => {
                        return (
                            <div key={movie.id} className="wrap">
                                <img className="clickable" src={getImage(movie.poster_path)} onClick={() => {
                                    saveMovieId(movie.id);
                                    handleGoToDetails();
                                    // handleOpen();
                                }} />
                                <h4 className="movie_list_title">{movie.title}</h4>
                                <p className="movie_list_date">{movie.release_date}</p>
                            </div>
                    )})}
                </div> 
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                    <button className="btn btn-transparent mr-1" /* onClick={() => handleDecrementPopularMovies()}*/>-</button>
                    <button className="btn btn-transparent ml-1" /* onClick={() => handleIncrementPopularMovies() }*/>+</button>
            </div>
        </>
    );
}

export default Home;