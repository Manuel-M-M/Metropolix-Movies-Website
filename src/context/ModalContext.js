import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const api_key = "73335406cba0f2d2b6be748d34df365b";

const ModalProvider = (props) => {

    const [MovieId, saveMovieId] = useState(null);
    const [MovieDetails, saveMovieDetails] = useState({});

    // Error 404 en el catch no reconoce el MovieId con el fetch
    // const [MovieDetailsPath, setMovieDetailsPath] = useState(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=${api_key}&language=en-US`);

    useEffect(() => {

        const getMovieDetails = async () => {
            if (!MovieId) return; 
        
            const url = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=${api_key}&language=en-US`;    
                    
            const result = await axios.get(url);
        
            saveMovieDetails(result.data);
        }
        getMovieDetails();
    
    }, [MovieId]);
     

//---------------------FETCH (No reconoce el id)----------------------------------     
    // fetch(MovieDetailsPath)
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error("Algo no funciona...");
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     setMovieDetails(data.results);
                
    // })
    // .catch(error => alert("Algo no funciona correctamente..."))

//--------------------FETCH ASYNC/AWAIT (Da error) ---------------------------
    //  async function getMovieDetails() {
    //     if (!MovieId) return;

    //     const response = await fetch(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=${api_key}&language=en-US`);
    //     const movies = await response.json();  return movies;
    //     console.log(movies);
    //   }
      
    //   getMovieDetails().then(movies => {
    //     movies; // fetched movies
    //   });

    return (
        <ModalContext.Provider
            value={{api_key, MovieId, saveMovieId, MovieDetails, saveMovieDetails}}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;