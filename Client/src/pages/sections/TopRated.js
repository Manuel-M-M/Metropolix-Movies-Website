import { useContext, useState, useEffect } from "react";
import { Context } from '../../context/Context';
import { ModalContext } from '../../context/ModalContext';
import { useHistory } from 'react-router-dom';
import '../../css/sections.css';
import Movie from "../../components/movie/Movie";
import MovieDetailsModal from '../../components/modal/MovieDetailsModal';

const api_key = "73335406cba0f2d2b6be748d34df365b";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;



function TopRated() {

    // const {topRatedMoviesPath, setTopRatedMoviesPath, topRatedMoviesArray, setTopRatedMoviesArray,
    // maxPages, setMaxPages, actualPage, setActualPage, handleIncrementTopRatedMovies, handleDecrementTopRatedMovies} = useContext(Context);

    const { MovieId, saveMovieId, MovieDetails, saveMovieDetails, MovieDetailsPath, setMovieDetailsPath, modalStyle,
    open, setOpen, classes} = useContext(ModalContext);
    
    const history = useHistory();

    const handleGoToDetails = () => {
        history.push("/Details")
    }

    // const handleOpen = () => {
    //     setOpen(true);
    // }


    const [topRatedMoviesPath, setTopRatedMoviesPath] = useState(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`) 
    const [topRatedMoviesArray, setTopRatedMoviesArray] = useState([]);
    const [actualPage, setActualPage] = useState(1);

    const maxPages = 16

    useEffect(() => {
        console.log(topRatedMoviesPath);


        //const newUrl = URL + "&page=${}"
        fetch(topRatedMoviesPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Algo no funciona...");
                }
                return response.json();
            })
            .then(data => {
                setTopRatedMoviesArray(data.results);
                //setMaxPages(data.total_pages);
            })
            .catch(error => alert("Algo no funciona..."))
    }, [topRatedMoviesPath]);

    const handleIncrementTopRatedMovies = () => {
        if (actualPage<maxPages) {
            let nextPage = actualPage +1
            setActualPage(nextPage);
            setTopRatedMoviesPath(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=${nextPage}`);
        }
      };

    const handleDecrementTopRatedMovies = () => {
        if (actualPage>1) {
            let nextPage = actualPage -1
            setActualPage(actualPage-1);
            setTopRatedMoviesPath(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=${nextPage}`);
        }
      };
    

    return (
        <>
            <div className="container">
                <div className="title-page d-flex justify-content-center align-items-center mt-4">
                    <button className="btn btn-transparent mr-5"
                        onClick={() => {
                            history.push("/Home")
                            }}
                    >Home
                    </button>
                    <h1 className="h1">TOP RATED MOVIES</h1>
                </div>
                <div className="movie-container">
                    <div className="flex">
                        {topRatedMoviesArray.map((movie) => {
                            return (
                                <div key={movie.id} className="wrap">
                                    <img className="clickable" src={getImage(movie.poster_path)} onClick={() => {
                                        saveMovieId(movie.id);
                                        handleGoToDetails();
                                        // handleOpen();
                                    }}
                                    />
                
                                    <h4 className="movie_list_title">{movie.title}</h4>
                                    <p className="movie_list_date">{movie.release_date}</p>
                                </div>
                        )})}
                        
                    </div>
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