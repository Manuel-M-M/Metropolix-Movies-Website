import { createContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

export const MovieContext = createContext();

const api_key = "73335406cba0f2d2b6be748d34df365b";

const MovieProvider = (props) => {

    const history = useHistory();

    const handleGoToDetails = () => {
        history.push("/Details")
    }

    const [MovieId, saveMovieId] = useState(null);
    const [MovieDetails, saveMovieDetails] = useState({});
    
    useEffect(() => {

        const getMovieDetails = async () => {
            if (!MovieId) return; 
        
            const url = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=${api_key}&language=en-US`;    
                    
            const result = await axios.get(url);
        
            saveMovieDetails(result.data);
        }
        getMovieDetails();
    
    }, [MovieId]);

    const [topRatedMoviesArray, setTopRatedMoviesArray] = useState([]);
    

    return (
        <MovieContext.Provider
            value={{handleGoToDetails, api_key, MovieId, saveMovieId, MovieDetails, saveMovieDetails,
                topRatedMoviesArray, setTopRatedMoviesArray}}
        >
            {props.children}
        </MovieContext.Provider>
    );
}

export default MovieProvider;