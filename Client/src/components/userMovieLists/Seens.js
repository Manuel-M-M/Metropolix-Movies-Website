import { useContext } from 'react';
import { Context } from '../../context/Context';
import { useHistory } from 'react-router-dom';
import '../../pages/user/User.css';
import './UserList.css';


function Seens () {

    const { SeensArray, saveSeensArray, saveMovieId } = useContext(Context);

    const history = useHistory();

    const handleGoToDetails = () => {
        history.push("/Details");
    }

    const handleDeleteSeens = (e, id)=>{
        e.preventDefault();

       var token = localStorage.getItem('token');

       fetch(`http://localhost:8000/removeSeens/${id}`, {
           method: 'DELETE',
           mode: 'cors',
           headers: {
               'Authorization': 'Bearer ' + token
           }
       })
       .then(response => response.json())
       .then(seens => saveSeensArray(seens))
       .catch( error => console.log(error) );      
    }


    return (
        <div className="container-userList">
            <div className="title-userList">
                <h3>Seens</h3>
            </div>
            <div className="userList">
                <div className="ul-userList">
                    <ul className="userList-ul">{SeensArray.map((movie) => {
                            return (
                                <div className="userList-li">
                                    <li>
                                        <div className="poster-fav">
                                            <img 
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
                                                    handleDeleteSeens(e, movie.id);
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

export default Seens;