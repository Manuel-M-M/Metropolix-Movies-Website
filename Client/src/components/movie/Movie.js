import { useState, useContext } from "react";
import { Context } from "../../context/Context";
import { MovieContext } from "../../context/movie/MovieContext";
import { useHistory } from 'react-router-dom';
import "./Movie.css";


//const api_key = "73335406cba0f2d2b6be748d34df365b";
// const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function Movie ({movie}) {

    const history = useHistory();

    const handleGoToDetails = () => {
        history.push("/Details")
    }

    // console.log(movie);

      const { MovieId, saveMovieId, MovieDetails, saveMovieDetails, MovieDetailsPath, setMovieDetailsPath, modalStyle,
      open, setOpen, classes} = useContext(Context);

    // const { handleGoToDetails, api_key, MovieId, saveMovieId, MovieDetails, saveMovieDetails,
    //     topRatedMoviesArray, setTopRatedMoviesArray } = useContext(MovieContext);

    // const [movie, setMovie] = useState[{}];

    return(
        <div key={movie.id} className="wrap">
            <img className="clickable" src={(movie.poster_path)} onClick={() => {
                saveMovieId(movie.id);
                handleGoToDetails();
                console.log(movie.id);
            }}
            />
                
            <div className="cardData">
                <h4 className="movie_list_title">{movie.title}</h4>
                <p className="movie_list_date">{movie.release_date}</p>
            </div>
        </div>
    )
}

export default Movie;