import { createContext, useState, useEffect } from 'react';
export const Context = createContext();


const ContextProvider = (props) => {

    const [show, setShow] = useState(false);
    const [searchArray, setSearchArray] = useState([]);
    const [isLogin, setIslogin] = useState(false);
    const [moviesPath, setMoviesPath] = useState('http://localhost:8000/getMovies?page=1');
    const [homeMoviesArray, setHomeMoviesArray] = useState([]);
    const [actualPage, setActualPage] = useState(1);
    const maxPages = 9

    useEffect(() => {

        fetch(moviesPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Algo no funciona...");
                }
                return response.json();
            })
            .then(data => {
                setHomeMoviesArray(data);
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
    const [MovieDetails, saveMovieDetails] = useState([]);

    const [FavouritesArray, saveFavouritesArray] = useState([]);

    let favouritesPath = "";

    const handleGetFavourites = () => {
        
        var token = localStorage.getItem('token');

        favouritesPath = `http://localhost:8000/getFavourites`;
            
        fetch(favouritesPath, {
            headers: {
            'Authorization': 'Bearer ' + token
        }})
        
            .then(response => {
                if (!response.ok) {
                    throw new Error("Algo no funciona...");
                }
                return response.json();
            })
            .then(data => {
                    saveFavouritesArray(data);
            })
            .catch(error => alert("Algo no funciona..."))              
    }

    
    return (
        <Context.Provider value={{show, setShow, searchArray, setSearchArray,
        actualPage, setActualPage, isLogin, setIslogin, moviesPath, setMoviesPath, homeMoviesArray, 
        setHomeMoviesArray, handleIncrementMovies, handleDecrementMovies, maxPages, MovieId, 
        saveMovieId, MovieDetails, saveMovieDetails, FavouritesArray, saveFavouritesArray,
        handleGetFavourites}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;