import {useEffect, useContext} from 'react';
import { Context } from '../../context/Context';
import Movie from "../../components/movie/Movie";
import './ModalSearchs.css';

// const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

const ModalSearchs = props => {

    const { searchArray } = useContext(Context);

    if (!props.show) {
        return null
    }

    // const closeOnEscapeKeyDown = (e) => {
    //     if ((e.charCode || e.keyCode) === 27) {
    //         props.onClose()
    //     }
    // }

    // useEffect(() => {
    //     document.body.addEventListener("keydown", closeOnEscapeKeyDown)
    //     return function cleanup() {
    //         document.body.removeEventListener("keydown", closeOnEscapeKeyDown)
    //     }
    // }, [])

    return ( 

        //  <div className="modal">
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Searchs</h4>
                </div>
                <div className="container">
                    <div id="movie-container-display" className="movie-container home-margin">
                        <div id="searchDiv" className="flex">
                            {searchArray.map((movie) => {
                                return (
                                    <Movie movie={movie}/>
                                )})}
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3 mb-3"></div>
                </div>
                {/* <div className="modal-header">
                    <h4 className="modal-title">Modal title</h4>
                </div>
                <div className="modal-body">
                    This is modal content
                </div> */}
                <div className="modal-footer">
                    <button  onClick={props.onClose} className="modal-close-btn">Close</button>
                </div>
            </div>
        //  </div>
        
     );
}
 
export default ModalSearchs;