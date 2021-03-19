import { useContext } from 'react';
import { Context } from '../../../context/Context';
import '../User.css';


function Seens () {

    const { SeensArray, MovieId } = useContext(Context);

    const handleDeleteSeens = (e)=>{
        e.preventDefault();

       var token = localStorage.getItem('token');

       fetch(`http://localhost:8000/deleteSeen${MovieId}`, {
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
                <h3>Seens</h3>
            </div>
            <div className="userList">
                <div className="ul">
                <ul>{SeensArray.map((movie) => {
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
                                            handleDeleteSeens(e);
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

export default Seens;