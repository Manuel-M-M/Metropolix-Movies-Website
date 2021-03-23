import { useContext } from "react";
import { Context } from "../../context/Context";
import { useHistory } from 'react-router-dom';
import "./Movie.css";


function Movie ({movie}) {

    const history = useHistory();

    const handleGoToDetails = () => {
        history.push("/Details")
    }

    const { saveMovieId } = useContext(Context);

    
    return(
        <div key={movie.id} className="wrap">
            <img 
                className="clickable" 
                src={(movie.poster_path)}
                alt="movie" 
                onClick={() => {
                    saveMovieId(movie.id);
                    handleGoToDetails();
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
