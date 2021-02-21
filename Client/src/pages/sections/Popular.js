import { useContext, useEffect, useState } from "react";
import { Context } from '../../context/Context';
import { ModalContext } from '../../context/ModalContext';
import { useHistory } from 'react-router-dom';
import '../../css/sections.css';


const api_key = "73335406cba0f2d2b6be748d34df365b";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;


function Popular() {

    // const {popularMoviesArray, setPopularMoviesArray, popularMoviesPath, setPopularMoviesPath,
    // actualPage, setActualPage, maxPages, setMaxPages} = useContext(Context);
    
    const [popularMoviesPath, setPopularMoviesPath] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
    const [popularMoviesArray, setPopularMoviesArray] = useState([]);
    const [actualPage, setActualPage] = useState(1);

    const maxPages = 16

    const { MovieId, saveMovieId, MovieDetails, saveMovieDetails, MovieDetailsPath, setMovieDetailsPath, modalStyle,
    open, setOpen, classes} = useContext(ModalContext);

    const history = useHistory();

    useEffect(() => {
        console.log(popularMoviesPath);
        fetch(popularMoviesPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Algo no funciona...");
                }
                return response.json();
            })
            .then(data => {
                setPopularMoviesArray(data.results);
                // setMaxPages(data.total_pages);
            })
            .catch(error => alert("Algo no funciona..."))
    }, [popularMoviesPath]);

    const handleIncrementPopularMovies = () => {   
        if (actualPage<maxPages) {
            let nextPage = actualPage +1 
            setActualPage(nextPage); // setActualPage(prevActualPage => prevActualPage+1);
            console.log(actualPage);
            setPopularMoviesPath(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${nextPage}`);
        }
      };

    const handleDecrementPopularMovies = () => {       
        if (actualPage>1) {
            let nextPage = actualPage -1
             setActualPage(actualPage-1);  //setActualPage(prevActualPage => prevActualPage-1);
             console.log(actualPage);
             setPopularMoviesPath(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${nextPage}`);
        }
      };

    

      const handleGoToDetails = () => {
        history.push("/Details")
      }

    // const handleOpen = () => {
    //     setOpen(true);
    // }


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
                    <h1 className="h1">POPULAR MOVIES</h1>
                </div>
                <div className="movie-container">
                    <div className="flex">
                        {popularMoviesArray.map((movie) => {
                            return (
                                <div key={movie.id} className="wrap" /*onClick={handleSaveId(movie.id)}*/>
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
                    <button className="btn btn-transparent mr-1" onClick={() => handleDecrementPopularMovies()}>-</button>
                    <button className="btn btn-transparent ml-1" onClick={() => handleIncrementPopularMovies()}>+</button>
                </div>
            </div>
        </>
    );
}

export default Popular;