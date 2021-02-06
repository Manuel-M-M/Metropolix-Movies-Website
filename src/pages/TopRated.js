import { useContext } from "react";
import { Context } from '../Context';
import { useHistory } from 'react-router-dom';
import '../css/TopRated.css';

const api_key = "73335406cba0f2d2b6be748d34df365b";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function TopRated() {

    const {topRatedMoviesPath, setTopRatedMoviesPath, topRatedMoviesArray, setTopRatedMoviesArray,
    maxPages, setMaxPages, actualPage, setActualPage, handleIncrementTopRatedMovies, handleDecrementTopRatedMovies} = useContext(Context);
    
    const history = useHistory();

    

    const handleGoToDetails = () => {
        history.push("/Details")
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center mt-4">
                <button className="btn btn-transparent mr-5"
                    onClick={() => {
                        history.push("/Home")
                        }}
                >Home
                </button>
                <h1 className="h1">TOP RATED MOVIES</h1>
            </div>
            <div>
                <div className="grid">
                    {topRatedMoviesArray.map((movie) => {
                        return (
                            <div key={movie.id} className="wrap">
                                <img className="clickable" src={getImage(movie.poster_path)} onClick={handleGoToDetails} />
                                <h4 className="movie_list_title">{movie.title}</h4>
                                <p className="movie_list_date">{movie.release_date}</p>
                                <p className="movie_overview">{movie.overview}</p>
                            </div>
                    )})}
                    
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <button className="btn btn-transparent mr-1" onClick={handleDecrementTopRatedMovies}>-</button>
                <button className="btn btn-transparent ml-1" onClick={handleIncrementTopRatedMovies}>+</button>
            </div>
            </div>
        </>
    );
}

export default TopRated;