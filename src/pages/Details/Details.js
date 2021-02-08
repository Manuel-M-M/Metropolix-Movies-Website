import { useContext } from "react";
import { ModalContext } from '../../context/ModalContext';
import './Details.css';



const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function Details() {

    const { MovieId, saveMovieId, MovieDetails, saveMovieDetails, MovieDetailsPath, setMovieDetailsPath, modalStyle,
        open, setOpen, classes, handleOpen} = useContext(ModalContext);
    
    return(
        <div>
            <div className="container details">
               <img src={getImage(MovieDetails.backdrop_path)} alt={MovieDetails.original_title}/>
                        <h2 className="mt-4">{MovieDetails.title}</h2>
                        <div className="overview">
                            <p>{MovieDetails.overview}</p>
                        </div>
                        <div className="movieDates">
                            <p>
                                <span className="head">Release date: </span>
                                <span>{MovieDetails.release_date}</span>
                            </p>
                            <p>
                                <span className="head">Popularity: </span>
                                <span>{MovieDetails.popularity}</span>
                            </p>
                            <p>
                                <span className="head">Vote count: </span>
                                <span>{MovieDetails.vote_count}</span>
                            </p>
                            <p>
                                <span className="head">Vote average: </span>
                                <span>{MovieDetails.vote_average}</span>
                            </p>
                        </div>
            </div>
        </div>
    )
}

export default Details;