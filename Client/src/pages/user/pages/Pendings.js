import { useContext } from 'react';
import { Context } from '../../../context/Context';
import '../User.css';
import './UserList.css';


function Pendings () {

    const { PendingsArray, savePendingsArray } = useContext(Context);

    const handleDeletePendings = (e, id)=>{
        e.preventDefault();

       var token = localStorage.getItem('token');

       fetch(`http://localhost:8000/removePending/${id}`, {
           method: 'DELETE',
           mode: 'cors',
           headers: {
               'Authorization': 'Bearer ' + token
           }
       })
       .then(response => response.json())
       .then(pendings => savePendingsArray(pendings))
       .catch( error => console.log(error) );      
    }
    

    return (
        <div className="container-userList">
            <div className="title-userList">
                <h3>Pendings</h3>
            </div>
            <div className="userList">
                <div className="ul-userList">
                    <ul className="userList-ul">{PendingsArray.map((movie) => {
                        return (
                            <div className="userList-li">
                                <li>
                                    <div className="poster-fav">
                                        <img src={movie.poster_path} alt=""/>
                                    </div>
                                    <div className="title-fav">
                                            {movie.title}
                                    </div>
                                    <div className="btn-user-movies">
                                        <button 
                                            className="btn btn-danger btn-u-list"
                                            onClick={(e) => {
                                                handleDeletePendings(e, movie.id);
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

export default Pendings;