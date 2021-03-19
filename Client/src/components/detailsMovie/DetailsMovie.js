import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./DetailsMovie.css";
import { Context } from '../../context/Context';
import CommentBox from "../commentBox/CommentBox";
import StarRating from "../starRating/StarRating";
import '../../css/sections.css';


function DetailsMovie () {

    const { saveMovieDetails, MovieDetails, MovieId } = useContext(Context);

    let detailPath = '';
    
    useEffect(() => {
        detailPath = `http://localhost:8000/getDetails?id=${MovieId}`;
        
        fetch(detailPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Algo no funciona...");
                }
                return response.json();
            })
            .then(data => {
                saveMovieDetails(data);
            })
            .catch(error => alert("Algo no funciona..."))         
    }, [MovieId]);

    
    const [checked, setChecked] = useState(false);

    const handleFavourites = () => {
        
        var token = localStorage.getItem('token');

        if (checked === false) {
        fetch(`http://localhost:8000/addFavourites/${MovieId}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response  => response.json())
        // setChecked(true)
        .catch( error => console.log(error) ); 
        }    
    }

    const handleSeens = () => {
        
        var token = localStorage.getItem('token');

        if (checked === false) {
        fetch(`http://localhost:8000/addSeens/${MovieId}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response  => response.json())
        // setChecked(true)
        .catch( error => console.log(error) ); 
        }    
    }

    const handlePendings = () => {
        
        var token = localStorage.getItem('token');

        if (checked === false) {
        fetch(`http://localhost:8000/addPendings/${MovieId}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response  => response.json())
        // setChecked(true)
        .catch( error => console.log(error) ); 
        }    
    }


    return (
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
                            <input 
                                type="checkbox" 
                                id="favourite" 
                                name="favourite" 
                                value="favourite"
                                checked={checked}
                                onChange={() => { 
                                    handleFavourites();
                                    setChecked(true)
                                }}
                            >
                            </input>
                        </p>
                        <p>
                            <span>Seen: </span>
                            <input 
                                type="checkbox" 
                                id="favourite" 
                                name="favourite" 
                                value="favourite"
                                checked={checked}
                                onChange={() => { 
                                    handleSeens();
                                    setChecked(true)
                                }}
                            >
                            </input>
                        </p>
                        <p>
                            <span>See later: </span>
                            <input 
                                type="checkbox" 
                                id="favourite" 
                                name="favourite" 
                                value="favourite"
                                checked={checked}
                                onChange={() => { 
                                    handlePendings();
                                    setChecked(true)
                                }}
                            >
                            </input>
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