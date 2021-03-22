import {useContext} from "react";
import { Context } from '../../context/Context';
import "./Home.css";
import "../../css/sections.css";
import Carousel from '../../components/carousel/Carousel';
import Searcher from "../../components/searcher/Searcher";
import Movie from "../../components/movie/Movie";


function Home() {

    const {  homeMoviesArray,  handleDecrementMovies, handleIncrementMovies } = useContext(Context);

    
    return (
        <>
            <Searcher />
            <div id="carousel" className="carouselDisplayActive">
                <Carousel />
            </div>
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
        </>
    );
}

export default Home;
