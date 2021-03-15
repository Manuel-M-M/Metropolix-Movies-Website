import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const Context = createContext();

const api_key = "73335406cba0f2d2b6be748d34df365b";
 const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

const ContextProvider = (props) => {

    const [show, setShow] = useState(false);
    const [searchPath, setSearchPath] = useState(`http://localhost:8000/getMovies?`);
    const [searchArray, setSearchArray] = useState([]);
    const [isLogin, setIslogin] = useState(false);

    useEffect(() => {

        fetch(searchPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Algo no funciona...");
                }
                return response.json();
            })
            .then(data => {
                setSearchArray(data.results);
                    
            })
            .catch(error => alert("Algo no funciona correctamente..."))
    }, [searchPath]);
    


    // const [popularMoviesPath, setPopularMoviesPath] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
    // const [popularMoviesArray, setPopularMoviesArray] = useState([]);
    // const [maxPages, setMaxPages] = useState(0);
    


    const [moviesPath, setMoviesPath] = useState('http://localhost:8000/getMovies?page=1');
    const [homeMoviesArray, setHomeMoviesArray] = useState([]);
    const [actualPage, setActualPage] = useState(1);

    const maxPages = 9

    useEffect(() => {
        console.log(moviesPath);

        //const newUrl = URL + "&page=${}"
        fetch(moviesPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Algo no funciona...");
                }
                return response.json();
            })
            .then(data => {
                setHomeMoviesArray(data);
                //setMaxPages(data.total_pages);
            })
            .catch(error => alert("Algo no funciona..."))
    }, [moviesPath]);

    const handleIncrementMovies = () => {
        if (actualPage<maxPages) {
            let nextPage = actualPage +1
            setActualPage(nextPage);
            setMoviesPath(`http://localhost:8000/getMovies?page=${nextPage}`);
        }
      };

    const handleDecrementMovies = () => {
        if (actualPage>1) {
            let nextPage = actualPage -1
            setActualPage(actualPage-1);
            setMoviesPath(`http://localhost:8000/getMovies?page=${nextPage}`);
        }
      };


    const [MovieId, saveMovieId] = useState(null);
    const [MovieDetails, saveMovieDetails] = useState({});
    
    console.log(MovieId);
    useEffect(() => {

        const getMovieDetails = async () => {
            if (!MovieId) return; 
            console.log(MovieId);
            const url = `http://localhost:8000/getMovies?id=${MovieId}`;    
                    
            const result = await axios.get(url);
        
            saveMovieDetails(result.data);
        }
        getMovieDetails();
    
    }, [MovieId]);

    

    


    // const [upcomingMoviesPath, setUpcomingMoviesPath] = useState("https://api.themoviedb.org/3/movie/upcoming?api_key=73335406cba0f2d2b6be748d34df365b&language=en-US&page=1")
    // const [upcomingMoviesArray, setUpcomingMoviesArray] = useState([]);

    



    // const [topRatedMoviesPath, setTopRatedMoviesPath] = useState(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`) 
    // const [topRatedMoviesArray, setTopRatedMoviesArray] = useState([]);

    

    
    return (
        <Context.Provider value={{api_key, show, setShow, searchPath, setSearchPath, searchArray,
        setSearchArray, getImage, actualPage, setActualPage, isLogin, setIslogin, moviesPath, setMoviesPath, homeMoviesArray, 
        setHomeMoviesArray, handleIncrementMovies, handleDecrementMovies, maxPages, api_key, MovieId, 
        saveMovieId, MovieDetails, saveMovieDetails,}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;