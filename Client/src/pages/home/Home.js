import {useContext, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./Home.css";
import Carousel from '../../components/carousel/Carousel';
import Searcher from "../../components/searcher/Searcher";
import Movie from "../../components/movie/Movie";


function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
}

function Home() {

    const {  homeMoviesArray,  handleDecrementMovies, handleIncrementMovies } = useContext(Context);

    
    return (
        <>
            <Searcher />
            <div id="carousel" className="carouselDisplayActive">
                <Carousel />
            </div>
            <ScrollToTop />
            <div className="container-home">
                <div className="contenedor">
			        <h2>MOVIES: <span>&#160; </span> </h2>
		        </div>
                <div id="movie-container-display" className="movie-container home-margin">
                    <div id="searchDiv" className="flex">
                        {homeMoviesArray.map((movie) => {
                            return (
                             
                                <Movie key={movie.id} movie={movie}/>
                        
                            )})}
                    </div>
                </div>
                <div className="row justify-content-center mt-3 mb-3">
                    <button className="btn btn-transparent mr-1" onClick={handleDecrementMovies}>-</button>
                    <button className="btn btn-transparent ml-1" onClick={handleIncrementMovies}>+</button>
                </div>
            </div>
        </>
    );
}

export default Home;
