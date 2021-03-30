import { useContext } from 'react';
import { Context } from '../../context/Context';
import { useHistory } from 'react-router-dom';
import '../../pages/user/User.css';


function Favourites () {

    const { FavouritesArray, saveFavouritesArray, saveMovieId } = useContext(Context);

    const history = useHistory();

    const handleGoToDetails = () => {
        history.push("/Details");
    }

    const handleDeleteFavourites = (e, id)=>{
        e.preventDefault();
        console.log('hola');

       var token = localStorage.getItem('token');

       fetch(`http://localhost:8000/removeFavourites/${id}`, {
           method: 'DELETE',
           mode: 'cors',
           headers: {
               'Authorization': 'Bearer ' + token
           }
       })
       .then(response => response.json())
       .then(favourites => saveFavouritesArray(favourites))
       .catch( error => console.log(error) );      
    }
    

    return (
        <div className="container-userList">
            <div className="title-userList">
                <h3>Favourites</h3>
            </div>
            <div className="userList">
                <div className="ul-userList">
                    <ul className="userList-ul">{FavouritesArray.map((movie) => {
                        return (
                            <div key={movie.id} className="userList-li">
                                <li>
                                    <div className="poster-fav">
                                            <img
                                                className="click" 
                                                src={movie.poster_path} 
                                                alt=""
                                                onClick={() => {
                                                    saveMovieId(movie.id);
                                                    handleGoToDetails();
                                                }}
                                            />
                                    </div>
                                    <div className="title-fav">
                                        {movie.title}
                                    </div>
                                    <div className="btn-user-movies">
                                        <button 
                                            className="btn btn-danger btn-u-list"
                                            onClick={(e) => {
                                                handleDeleteFavourites(e, movie.id);
                                             }}
                                        >X
                                        </button>
                                    </div>
                                </li>
                            </div>
                        )})}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Favourites;