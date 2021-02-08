import { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const api_key = "73335406cba0f2d2b6be748d34df365b";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

const ContextProvider = (props) => {

    const [searchPath, setSearchPath] = useState(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=original_title&page=1`);
    const [searchArray, setSearchArray] = useState([]);

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
    


    const [popularMoviesPath, setPopularMoviesPath] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
    const [popularMoviesArray, setPopularMoviesArray] = useState([]);
    const [maxPages, setMaxPages] = useState(0);
    const [actualPage, setActualPage] = useState(1);

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
                setMaxPages(data.total_pages);
            })
            .catch(error => alert("Algo no funciona..."))
    }, [popularMoviesPath]);

    const handleIncrementPopularMovies = () => {
        
        if (actualPage<maxPages) {
              
            setActualPage(actualPage+1); // setActualPage(prevActualPage => prevActualPage+1);
            console.log(actualPage);
            setPopularMoviesPath(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${actualPage}`);
        }
      };

    const handleDecrementPopularMovies = () => {
        
        if (actualPage>1) {
             setActualPage(actualPage-1);  //setActualPage(prevActualPage => prevActualPage-1);
             console.log(actualPage);
             setPopularMoviesPath(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${actualPage}`);
        }
      };



    const [upcomingMoviesPath, setUpcomingMoviesPath] = useState("https://api.themoviedb.org/3/movie/upcoming?api_key=73335406cba0f2d2b6be748d34df365b&language=en-US&page=1")
    const [upcomingMoviesArray, setUpcomingMoviesArray] = useState([]);

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
                    setMaxPages(data.total_pages);
                })
                .catch(error => alert("Algo no funciona..."))
    }, [upcomingMoviesPath]);

    const handleIncrementUpcomingsMovies = () => {
        if (actualPage<maxPages) {
            setActualPage(actualPage+1);
            setUpcomingMoviesPath(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=${actualPage}`);
        }
      };

    const handleDecrementUpcomingsMovies = () => {
        if (actualPage>1) {
            setActualPage(actualPage-1);
            setUpcomingMoviesPath(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=${actualPage}`);
        }
      };



    const [topRatedMoviesPath, setTopRatedMoviesPath] = useState(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`) 
    const [topRatedMoviesArray, setTopRatedMoviesArray] = useState([]);

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
                setMaxPages(data.total_pages);
            })
            .catch(error => alert("Algo no funciona..."))
    }, [topRatedMoviesPath]);

    const handleIncrementTopRatedMovies = () => {
        if (actualPage<maxPages) {
            setActualPage(actualPage+1);
            setTopRatedMoviesPath(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=${actualPage}`);
        }
      };

    const handleDecrementTopRatedMovies = () => {
        if (actualPage>1) {
            setActualPage(actualPage-1);
            setTopRatedMoviesPath(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=${actualPage}`);
        }
      };



    return (
        <Context.Provider value={{api_key, getImage, searchPath, setSearchPath, searchArray,setSearchArray,
            popularMoviesPath, setPopularMoviesPath, popularMoviesArray, setPopularMoviesArray, handleIncrementPopularMovies, 
            handleDecrementPopularMovies, maxPages, setMaxPages, actualPage, setActualPage, handleIncrementTopRatedMovies, 
            handleDecrementTopRatedMovies, upcomingMoviesPath, setUpcomingMoviesPath, upcomingMoviesArray,
            setUpcomingMoviesArray, handleIncrementUpcomingsMovies, handleDecrementUpcomingsMovies, topRatedMoviesPath, 
            setTopRatedMoviesPath, topRatedMoviesArray, setTopRatedMoviesArray}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;