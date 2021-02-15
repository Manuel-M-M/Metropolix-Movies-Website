import { createContext, useState, useEffect } from 'react';

export const Context = createContext();


const MovieProvider = (props) => {
    return (
        <MovieContext.Provider
            value={{api_key, MovieId, saveMovieId, MovieDetails, saveMovieDetails, modalStyle, classes, 
            open, setOpen }}
        >
            {props.children}
        </MovieContext.Provider>
    );
}

export default MovieProvider;