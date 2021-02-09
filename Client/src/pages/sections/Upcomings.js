import { useContext, useState, useEffect } from "react";
import { Context } from '../../context/Context';
import { ModalContext } from '../../context/ModalContext';
import { useHistory } from 'react-router-dom';
import MovieDetailsModal from '../../components/modal/MovieDetailsModal';

const api_key = "73335406cba0f2d2b6be748d34df365b";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;



function Upcomings() {

    const [upcomingMoviesPath, setUpcomingMoviesPath] = useState("https://api.themoviedb.org/3/movie/upcoming?api_key=73335406cba0f2d2b6be748d34df365b&language=en-US&page=1")
    const [upcomingMoviesArray, setUpcomingMoviesArray] = useState([]);    
    const [actualPage, setActualPage] = useState(1);

    const maxPages = 16

    // const {upcomingMoviesPath, setUpcomingMoviesPath, upcomingMoviesArray, setUpcomingsArray,
    // maxPages, setMaxPages, actualPage, setActualPage} = useContext(Context);

    const { MovieId, saveMovieId, MovieDetails, saveMovieDetails, MovieDetailsPath, setMovieDetailsPath, modalStyle,
    open, setOpen, classes} = useContext(ModalContext);
    
    useEffect(() => {
        console.log(upcomingMoviesPath);
        fetch(upcomingMoviesPath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Algo no funciona...");
                    }
                    return response.json();
                })
                .then(data => {
                    setUpcomingMoviesArray(data.results);
                    // setMaxPages(data.total_pages);
                })
                .catch(error => alert("Algo no funciona..."))
    }, [upcomingMoviesPath]);

    const handleIncrementUpcomingsMovies = () => {
        if (actualPage<maxPages) {
            let nextPage = actualPage +1
            setActualPage(nextPage);
            setUpcomingMoviesPath(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=${nextPage}`);
        }
      };

    const handleDecrementUpcomingsMovies = () => {
        if (actualPage>1) {
            let nextPage = actualPage -1
            setActualPage(actualPage-1);
            setUpcomingMoviesPath(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=${nextPage}`);
        }
      };

    const history = useHistory();

    // const handleOpen = () => {
    //     setOpen(true);
    // }

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
                <h1 className="h1">UPCOMING MOVIES</h1>
            </div>
            <div className="grid">
                {upcomingMoviesArray.map((movie) => {
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
                {/* <MovieDetailsModal /> */}
                
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <button className="btn btn-transparent mr-1" onClick={handleDecrementUpcomingsMovies}>-</button>
                <button className="btn btn-transparent ml-1" onClick={handleIncrementUpcomingsMovies}>+</button>
            </div>
        </>
    );
}

export default Upcomings;