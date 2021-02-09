import { useContext } from "react";
import { Link } from 'react-router-dom';
import { ModalContext } from '../../context/ModalContext';
import './Details.css';


const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function Details() {

    const { MovieId, saveMovieId, MovieDetails, saveMovieDetails, MovieDetailsPath, setMovieDetailsPath, modalStyle,
        open, setOpen, classes, handleOpen} = useContext(ModalContext);
    
    return(
        <div className="mainDetails">
            <div className="containerDetails details">
               <img className="imgDetails" src={getImage(MovieDetails.backdrop_path)} alt={MovieDetails.title}/>
                        <h2 className="mt-4">{MovieDetails.title}</h2>
                        <div className="overview">
                            <p>{MovieDetails.overview}</p>
                        </div>
                        <div className="movieDates">
                            <p>
                                <span className="head">Original title: </span>
                                <span>{MovieDetails.original_title}</span>
                            </p>
                            <p>
                                <span className="head">Original language: </span>
                                <span>{MovieDetails.original_language}</span>
                            </p>
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
                            <p>
                                <span>Add to favourites: </span>
                                <input type="checkbox" id="favourite" name="favourite" value="favourite"></input>
                            </p>
                            <div className="detailsStars">
                                <div class="ec-stars-wrapper">
                                    <a href="#" data-value="1" title="Vote 1 stars">&#9733;</a>
                                    <a href="#" data-value="2" title="Vote 2 stars">&#9733;</a>
                                    <a href="#" data-value="3" title="Vote 3 stars">&#9733;</a>
                                    <a href="#" data-value="4" title="Vote 4 stars">&#9733;</a>
                                    <a href="#" data-value="5" title="Vote 5 stars">&#9733;</a>
                                    <a href="#" data-value="6" title="Vote 6 stars">&#9733;</a>
                                    <a href="#" data-value="7" title="Vote 7 stars">&#9733;</a>
                                    <a href="#" data-value="8" title="Vote 8 stars">&#9733;</a>
                                    <a href="#" data-value="9" title="Vote 9 stars">&#9733;</a>
                                    <a href="#" data-value="10" title="Vote 10 stars">&#9733;</a>
                                </div>
                            </div>
                            <div className="linkDetails">
                                <p>
                                <Link to={'/Media'} className="account-link">
                                    Go to Video/Images
                                </Link>
                                </p>
                                <p>
                                <Link to={'/Critics'} className="account-link">
                                    Go to Critics
                                </Link>
                                </p>
                            </div>
                        </div>
                        
            </div>
        </div>
    )
}

export default Details;
