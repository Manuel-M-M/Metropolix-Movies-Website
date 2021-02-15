import { useContext } from "react";
import { MovieContext } from "../../context/movie/MovieContext";
import "./Movie.css";


const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function MovieProvider () {

    const { MovieId, saveMovieId, MovieDetails, saveMovieDetails, MovieDetailsPath, setMovieDetailsPath, modalStyle,
        open, setOpen, classes} = useContext(MovieContext);

    return(
        <div key={movie.id} className="wrap">
            <img className="clickable" src={getImage(movie.poster_path)} onClick={() => {
                saveMovieId(movie.id);
                handleGoToDetails();
            }}
            />
                
            <h4 className="movie_list_title">{movie.title}</h4>
            <p className="movie_list_date">{movie.release_date}</p>
        </div>
    )
}

export default MovieProvider;