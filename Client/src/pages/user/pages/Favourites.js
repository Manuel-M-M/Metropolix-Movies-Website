import { useContext } from 'react';
import { Context } from '../../../context/Context';
import '../User.css';


function Favourites () {

    const { FavouritesArray } = useContext(Context);

    return (
        <div className="container">
            <div className="title">
                <h2>Favourites</h2>
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
                            </li>
                        )})}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Favourites;