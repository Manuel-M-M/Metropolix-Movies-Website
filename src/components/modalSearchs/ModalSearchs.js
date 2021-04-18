import {useContext} from 'react';
import { Context } from '../../context/Context';
import Movie from "../../components/movie/Movie";
import './ModalSearchs.css';


const ModalSearchs = props => {

    const { searchArray } = useContext(Context);

    if (!props.show) {
        return null
    }

    
    return ( 
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Searchs</h4>
                </div>
                <div className="container">
                    <div id="movie-container-display" className="movie-container home-margin">
                        <div id="searchDiv-modal" className="flex-modal">
                            {searchArray.map((movie) => {
                                return (
                                    <Movie key={movie.id} movie={movie}/>
                                )})}
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3 mb-3"></div>
                </div>
                <div className="modal-footer">
                    <button  onClick={props.onClose} className="btn btn-transparent mr-2">Close</button>
                </div>
            </div>
     );
}
 
export default ModalSearchs;
