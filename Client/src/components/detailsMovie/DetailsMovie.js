import { useContext } from "react";
import { Link } from 'react-router-dom';
import "./DetailsMovie.css";
import { ModalContext } from '../../context/ModalContext';
import { Context } from '../../context/Context';
import CommentBox from "../commentBox/CommentBox";
import StarRating from "../starRating/StarRating";
import '../../css/sections.css';

// const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;


function DetailsMovie () {

    const {searchPath, setSearchPath, MovieDetails, searchArray, setSearchArray} = useContext(Context);
    // const { MovieId, saveMovieId, MovieDetails, saveMovieDetails, MovieDetailsPath, setMovieDetailsPath, modalStyle,
    //       open, setOpen, classes, handleOpen} = useContext(ModalContext);

    return(
        <div className="mainDetails">
            <div className="containerDetails details">
               <img className="imgDetails" src={MovieDetails.backdrop_path} alt={MovieDetails.title}/>
               
                    <h2 className="mt-2">{MovieDetails.title}</h2>
                    <div className="overview">
                        <p>{MovieDetails.overview}</p>
                    </div>
                    <div className="movieDates">
                        <p>
                            <span className="head">Release date: </span>
                            <span>{MovieDetails.release_date}</span>
                        </p>
                        <p>
                            <span className="head">Runtime: </span>
                            <span>{MovieDetails.runtime}</span>
                        </p>
                        <p>
                            <span className="head">Origin country: </span>
                            <span>{MovieDetails.origin_country}</span>
                        </p>
                        <p>
                            <span className="head">Original language: </span>
                            <span>{MovieDetails.original_language}</span>
                        </p>
                        <p>
                            <span className="head">Director: </span>
                            <span>{MovieDetails.director}</span>
                        </p>
                        <p>
                            <span className="head">Screenwriter: </span>
                            <span>{MovieDetails.writer}</span>
                        </p>
                        <p>
                            <span className="head">Cast: </span>
                            <span>{MovieDetails.cast}</span>
                        </p>
                        <p>
                            <span className="head">Genre: </span>
                            <span>{MovieDetails.genre}</span>
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
                            <span>Favourite: </span>
                            <input type="checkbox" id="favourite" name="favourite" value="favourite"></input>
                        </p>
                        <p>
                            <span>Seen: </span>
                            <input type="checkbox" id="favourite" name="favourite" value="favourite"></input>
                        </p>
                        <p>
                            <span>See later: </span>
                            <input type="checkbox" id="favourite" name="favourite" value="favourite"></input>
                        </p>
                        <StarRating />
                        <CommentBox />

                        <div className="video-details">
                                <iframe src={MovieDetails.video_path} frameborder="0"></iframe>
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
                        <button className="btn btn-transparent mr-5"
                        onClick={() => {
                            window.history.back();
                        }}
                        >Go Back
                        </button>
                    </div>
                        
            </div>
        </div>
    )
}

export default DetailsMovie;