import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import "./DetailsMovie.css";
import { Context } from '../../context/Context';
import CommentBox from "../commentBox/CommentBox";


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
            saveText("")
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

            saveText("")
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

    const history = useHistory();

    const handleGocomments = () => {
        if (isLogin === true) {
            history.push("/Comments");
        }else {
            alert("Error. Try to login or create an account")
        }  
    }


    return (
            <div className="mainDetails">
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
                                <span className="details-span-head">Release date: </span>
                                <span className="details-last-span">{MovieDetails.release_date}</span>
                            </p>
                            <p>
                                <span className="details-span-head">Runtime: </span>
                                <span className="details-last-span">{MovieDetails.runtime}</span>
                            </p>
                            <p>
                                <span className="details-span-head">Origin country: </span>
                                <span className="details-last-span">{MovieDetails.origin_country}</span>
                            </p>
                            <p>
                                <span className="details-span-head">Original language: </span>
                                <span className="details-last-span">{MovieDetails.original_language}</span>
                            </p>
                            <p>
                                <span className="details-span-head">Director: </span>
                                <span className="details-last-span">{MovieDetails.director}</span>
                            </p>
                            <p>
                                <span className="details-span-head">Screenwriter: </span>
                                <span className="details-last-span">{MovieDetails.writer}</span>
                            </p>
                            <p>
                                <span className="details-span-head">Cast: </span>
                                <span className="details-last-span">{MovieDetails.cast}</span>
                            </p>
                            <p>
                                <span className="details-span-head">Genre: </span>
                                <span className="details-last-span">{MovieDetails.genre}</span>
                            </p>
                            <p>
                                <span className="details-span-head">Popularity: </span>
                                <span className="details-last-span">{MovieDetails.popularity}</span>
                            </p>
                            <p>
                                <span className="details-span-head">Vote count: </span>
                                <span className="details-last-span">{MovieDetails.vote_count}</span>
                            </p>
                            <p>
                                <span className="details-span-head">Vote average: </span>
                                <span className="details-last-span">{MovieDetails.vote_average}</span>
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
                                    <button 
                                        className="btn btn-transparent mt-2 mr-5"
                                    >Send comment
                                    </button>
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
                                    <Link to={'/Trailer'} className="account-link-details">
                                        Go to big screen trailer
                                    </Link>
                                </p>
                                <p className= "last-details-p">
                                    <span  
                                        className="account-link-details"
                                        onClick={() => {
                                            handleRouteComments()
                                            handleGetComments()
                                            handleGocomments()
                                        }} 
                                    >
                                        Show comments
                                    </span>
                                </p>
                            </div>
                            <button className="btn btn-transparent mr-5"
                            onClick={() => {           
                                window.history.back();
                                console.log('después del history.back');
                                saveMovieDetails({...MovieDetails, video_path: ''});
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
