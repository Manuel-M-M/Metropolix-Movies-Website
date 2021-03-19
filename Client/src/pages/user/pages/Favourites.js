import { useContext } from 'react';
import { Context } from '../../../context/Context';
import '../User.css';


function Favourites () {

    const { FavouritesArray, MovieId } = useContext(Context);

    const handleDeleteFavourites = (e)=>{
        e.preventDefault();

       var token = localStorage.getItem('token');

       fetch(`http://localhost:8000/deleteFavourite${MovieId}`, {
           method: 'DELETE',
           mode: 'cors',
           headers: {
               'Authorization': 'Bearer ' + token
           }
       })
       .then(response => response.json())
       
       .catch( error => console.log(error) );      
    }
    

    return (
        <div className="container">
            <div className="title">
                <h3>Favourites</h3>
            </div>
            <div className="userList">
                <div className="ul">
                    <ul>{FavouritesArray.map((movie) => {
                        return (
                            <li>
                                <div className="poster-fav">
                                    <img src={movie.poster_path} alt=""/>
                                </div>
                                <div className="title-fav">
                                    {movie.title}
                                </div>
                                <div className="btn-user-movies">
                                    <button 
                                        className="btn btn-danger btn-transparent btn-u-list"
                                        onClick={(e) => {
                                            handleDeleteFavourites(e);
                                         }}
                                    >X
                                    </button>
                                </div>
                            </li>
                        )})}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Favourites;