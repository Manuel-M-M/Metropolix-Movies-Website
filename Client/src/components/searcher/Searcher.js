import {useContext, useState} from "react";
import { useHistory } from 'react-router-dom';
// import { ModalContext } from '../../context/ModalContext';
import { Context } from '../../context/Context';
import './Searcher.css';
import '../modalSearchs/ModalSearchs.css';
import ModalSearchs from '../modalSearchs/ModalSearchs';


const api_key = "73335406cba0f2d2b6be748d34df365b";


function Searcher () {

    const { setSearchPath, searchArray, show, setShow, moviesPath, setMoviesPath } = useContext(Context);

    

    const history = useHistory();

    // const handleGoToSearchs = () => {
    //     history.push("/")
    // }

    // if (!show) {
    //     return null
    // }

    const handleSearch = (e) => {
        if (e.target.value !== "") {
            // history.push("/Searchs")
            setShow(true);
            setSearchPath(`'http://localhost:8000/getDetails?title=${e.target.value}`);
            
            // document.getElementById("carousel").classList.add("carouselDisplayNone")
            // document.getElementById("searchDiv").classList.remove("carouselDisplayNone")
            // document.getElementById("lateralScroll").classList.add("lateralScrollDisplayNone")
            // document.getElementById("searchDiv").classList.remove("lateralScrollDisplayNone")
        } else {

            setShow(false);
            // window.location.reload();
            
            // window.history.back();
            
            // document.getElementById("carousel").classList.remove("carouselDisplayNone")
            // document.getElementById("searchDiv").classList.add("carouselDisplayNone")
            // document.getElementById("lateralScroll").classList.remove("lateralScrollDisplayNone")
        //     document.getElementById("searchDiv").classList.add("lateralScrollDisplayNone")
        //    document.getElementById("movie-container-display").classList.add("movie-container-display-none")
        }
        
      };

    return (
        <>
        <div className="container mt-3">
            <div className="row justify-content-center align-items-center wrapSearcher">
                <div className="div-searcher col-6">
                    <input className="form-control" type="text"  placeholder="Search" aria-label="Search"
                        onChange={handleSearch} onClick={() => setShow(true)}
                    >
                    </input>
                </div>
            </div>
        </div>
        {/* <button onClick={() => setShow(true)}>Show Modal</button> */}
        <div className="modal-container" onClick={() => setShow(false)}>
            <ModalSearchs onClose={() => setShow(false)} show={show} />
        </div>
         {/* <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h4 className="modal-title">Modal title</h4>
            </div>
            <div className="modal-body">
                This is modal content
            </div>
            <div className="modal-footer">
                <button  onClick={() => setShow(false)} show={show} className="modal-close-btn">Close</button>
            </div>
        </div> */}
        </>
    );
}

export default Searcher;
