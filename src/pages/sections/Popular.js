import { useContext, useEffect } from "react";
import { Context } from '../../context/Context';
import { ModalContext } from '../../context/ModalContext';
import { useHistory } from 'react-router-dom';
import '../../css/TopRated.css';
import MovieDetailsModal from '../../components/modal/MovieDetailsModal';

const api_key = "73335406cba0f2d2b6be748d34df365b";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;


function Popular() {

    const {popularMoviesArray, setPopularMoviesArray, popularMoviesPath, setPopularMoviesPath,
    actualPage, setActualPage, maxPages, setMaxPages} = useContext(Context);

    const { MovieId, saveMovieId, MovieDetails, saveMovieDetails, MovieDetailsPath, setMovieDetailsPath, modalStyle,
    open, setOpen, classes, handleIncrementPopularMovies, handleDecrementPopularMovies} = useContext(ModalContext);

    const history = useHistory();
    

    //   const handleGoToDetails = () => {
    //     history.push("/Details")
    //   }

    const handleOpen = () => {
        setOpen(true);
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
                <h1 className="h1">POPULAR MOVIES</h1>
            </div>
            <div className="grid">
                {popularMoviesArray.map((movie) => {
                    return (
                        <div key={movie.id} className="wrap" /*onClick={handleSaveId(movie.id)}*/>
                            <img className="clickable" src={getImage(movie.poster_path)} onClick={() => {
                                    saveMovieId(movie.id);
                                    handleOpen();
                            }} />
                            <h4 className="movie_list_title">{movie.title}</h4>
                            <p className="movie_list_date">{movie.release_date}</p>
                            <p className="movie_overview">{movie.overview}</p>
                        </div>
                )})}
                <MovieDetailsModal />

            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <button className="btn btn-transparent mr-1" onClick={() => handleDecrementPopularMovies()}>-</button>
                <button className="btn btn-transparent ml-1" onClick={() => handleIncrementPopularMovies()}>+</button>
            </div>
        </>
    );
}

export default Popular;