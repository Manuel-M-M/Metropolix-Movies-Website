import { useContext, useEffect, useState } from "react";
import { Link, Router } from 'react-router-dom';
import "./DetailsMovie.css";
import { Context } from '../../context/Context';
import CommentBox from "../commentBox/CommentBox";
import '../../css/sections.css';


function DetailsMovie () {

    const { saveMovieDetails, MovieDetails, MovieId, isLogin, handleGetComments } = useContext(Context);

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
                //frame.contentWindow.location.replace(data.video_path);
            })
            .catch(error => alert("Algo no funciona..."))         
    }, [MovieId]);

    
    const [checkedFav, setCheckedFav] = useState(false);
    const [checkedSeens, setCheckedSeens] = useState(false);
    const [checkedPendings, setCheckedPendings] = useState(false);

    const handleFavourites = () => {
        
        var token = localStorage.getItem('token');

        if (checkedFav === false && isLogin === true) {
            fetch(`http://localhost:8000/addFavourites/${MovieId}`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(response  => response.json())
            // setCheckedFav(true)
            .catch( error => console.log(error) ); 
        } else {
            alert("Error. Try to sign in or create an account")
        }   

    }

    const handleSeens = () => {
        
        var token = localStorage.getItem('token');

        if (checkedSeens === false && isLogin === true) {
            fetch(`http://localhost:8000/addSeens/${MovieId}`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(response  => response.json())
            // setCheckedSeens(true)
            .catch( error => console.log(error) ); 
        } else {
            alert("Error. Try to sign in or create an account")
        }      
    }

    const handlePendings = () => {
        
        var token = localStorage.getItem('token');

        if (checkedPendings === false && isLogin === true) {
            fetch(`http://localhost:8000/addPendings/${MovieId}`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(response  => response.json())
            // setCheckedPendings(true)
            .catch( error => console.log(error) ); 
        } else {
            alert("Error. Try to sign in or create an account")
        }   
    }

    const [text, saveText] = useState("");
    

    const handleCommentSubmit = (event) => {
        event.preventDefault();

        if ( isLogin === false || text.trim() === "" ) {
            alert("You need to sign in or create and account or the comment box are empty")
        } else {
            var token = localStorage.getItem('token');

            const formData = new FormData();
            formData.append('text', text);

            fetch(`http://localhost:8000/addComments/${MovieId}`, {
            method: 'POST',
            mode: 'cors',
            body: formData,
            headers: {
                'Authorization': 'Bearer ' + token
            }
            })
            .then(response => response.json())
            
            .catch( error => console.log(error) );
        }
    }

    const handleText = (event)=>{
        saveText(event.target.value);
    }

    const [toggleComments, setToggleComments] = useState(true);

    const handleRouteComments = () => {
        if (toggleComments === true) {
            setToggleComments(false)
        } else {
            setToggleComments(true)
        }
    }

    const handleGocomments = () => {
        if (isLogin === true) {
            window.history.back();
        }else {
            alert("Error. Try to login or create an account")
        }  
    }


    return (
            <div className="mainDetails">

                         {/* {
                !MovieDetails &&
                <div></div>
                         } */}

                {
                MovieDetails &&
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
                                    checked={checkedFav}
                                    onChange={() => { 
                                        handleFavourites();
                                        setCheckedFav(true)
                                    }}
                                >
                                </input>
                            </p>
                            <p>
                                <span>Seen: </span>
                                <input 
                                    type="checkbox" 
                                    id="seen" 
                                    name="seen" 
                                    value="seen"
                                    checked={checkedSeens}
                                    onChange={() => { 
                                        handleSeens();
                                        setCheckedSeens(true)
                                    }}
                                >
                                </input>
                            </p>
                            <p>
                                <span>See later: </span>
                                <input 
                                    type="checkbox" 
                                    id="pending" 
                                    name="pending" 
                                    value="pending"
                                    checked={checkedPendings}
                                    onChange={() => { 
                                        handlePendings();
                                        setCheckedPendings(true)
                                    }}
                                >
                                </input>
                            </p>
                            <form 
                                onSubmit={(e) => {
                                    handleCommentSubmit(e);
                                }} 
                                className="comment-form"
                            >
                                <CommentBox 
                                    value={text}
                                    onChange={handleText}
                                />
                                <div className="btn-comment">
                                    <button className="btn btn-transparent mt-2 mr-5">Send comment</button>
                                </div>
                            </form>
                            
                            {
                              MovieDetails?.video_path &&  
                              <div className="video-details">
                                    <iframe title={MovieDetails.id} src={MovieDetails.video_path} frameBorder="0"></iframe>
                              </div>
                            }
                            <div className="linkDetails">  
                                <p>
                                    <Link to={'/Trailer'} className="account-link">
                                        Go to big screen trailer
                                    </Link>
                                </p>
                                <p>
                                    <a 
                                        src="123" 
                                        className="account-link"
                                        onClick={() => {
                                            handleRouteComments()
                                            handleGetComments()
                                            handleGocomments()
                                        }} 
                                    >
                                        Show comments
                                    </a>
                                </p>
                            </div>
                            <button className="btn btn-transparent mr-5"
                            onClick={() => {
                                
                                window.history.back();
                                console.log('después del history.back');
                                saveMovieDetails({...MovieDetails, video_path: ''});
                                // saveMovieDetails(null);
                            }}
                            >Go Back
                            </button>
                        </div>        
                </div>
                }
            </div>            
    )
}

export default DetailsMovie;
