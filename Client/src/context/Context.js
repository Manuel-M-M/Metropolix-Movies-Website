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
    


    // const [popularMoviesPath, setPopularMoviesPath] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
    // const [popularMoviesArray, setPopularMoviesArray] = useState([]);
    // const [maxPages, setMaxPages] = useState(0);
    const [actualPage, setActualPage] = useState(1);

    

    


    // const [upcomingMoviesPath, setUpcomingMoviesPath] = useState("https://api.themoviedb.org/3/movie/upcoming?api_key=73335406cba0f2d2b6be748d34df365b&language=en-US&page=1")
    // const [upcomingMoviesArray, setUpcomingMoviesArray] = useState([]);

    



    // const [topRatedMoviesPath, setTopRatedMoviesPath] = useState(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`) 
    // const [topRatedMoviesArray, setTopRatedMoviesArray] = useState([]);

    

    
    return (
        <Context.Provider value={{api_key, getImage, searchPath, setSearchPath, searchArray,
        setSearchArray, actualPage, setActualPage}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;