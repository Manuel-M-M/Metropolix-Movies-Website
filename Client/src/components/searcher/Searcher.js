import {useContext} from "react";
import { useHistory } from 'react-router-dom';
import { ModalContext } from '../../context/ModalContext';
import { Context } from '../../context/Context';
import './Searcher.css';


const api_key = "73335406cba0f2d2b6be748d34df365b";


function Searcher () {

    const { setSearchPath } = useContext(Context);

    const history = useHistory();

    // const handleGoToSearchs = () => {
    //     history.push("/")
    // }

    const handleSearch = (e) => {
        if (e.target.value !== "") {
            // history.push("/Searchs")
            setSearchPath(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${e.target.value}`);
            
            // document.getElementById("carousel").classList.add("carouselDisplayNone")
            document.getElementById("searchDiv").classList.remove("carouselDisplayNone")
            // document.getElementById("lateralScroll").classList.add("lateralScrollDisplayNone")
            document.getElementById("searchDiv").classList.remove("lateralScrollDisplayNone")
        } else {

            
            // window.location.reload();
            
            // window.history.back();
            
            // document.getElementById("carousel").classList.remove("carouselDisplayNone")
            document.getElementById("searchDiv").classList.add("carouselDisplayNone")
            // document.getElementById("lateralScroll").classList.remove("lateralScrollDisplayNone")
            document.getElementById("searchDiv").classList.add("lateralScrollDisplayNone")
           document.getElementById("movie-container-display").classList.add("movie-container-display-none")
        }
        
      };

    return (
        
        <div className="container mt-2 mb-2">
            <div className="row justify-content-center align-items-center">
                <div className="div-searcher col-6">
                    <input className="form-control" type="text"  placeholder="Search" aria-label="Search"
                        onChange={handleSearch}
                    >
                    </input>
                </div>
            </div>
         </div>
    );
}

export default Searcher;