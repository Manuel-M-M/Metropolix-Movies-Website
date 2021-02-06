import {useContext} from "react";
import { useHistory } from 'react-router-dom';
import Carousel from '../components/carousel/Carousel';
import LateralScroll from '../components/lateralScroll/LateralScroll';
import { Context } from '../Context';

const api_key = "73335406cba0f2d2b6be748d34df365b";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function Home() {

    const {searchPath, setSearchPath, searchArray, setSearchArray} = useContext(Context);

    
    const history = useHistory();
    
    

    const handleSearch = (e) => {
        if (e.target.value !== "") {
            setSearchPath(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${e.target.value}`);
            document.getElementById("carousel").classList.add("carouselDisplayNone")
            document.getElementById("searchDiv").classList.remove("carouselDisplayNone")
            document.getElementById("lateralScroll").classList.add("lateralScrollDisplayNone")
            document.getElementById("searchDiv").classList.remove("lateralScrollDisplayNone")
        } else {
            document.getElementById("carousel").classList.remove("carouselDisplayNone")
            document.getElementById("searchDiv").classList.add("carouselDisplayNone")
            document.getElementById("lateralScroll").classList.remove("lateralScrollDisplayNone")
            document.getElementById("searchDiv").classList.add("lateralScrollDisplayNone")
        }
      };

    const handleGoToDetails = () => {
        history.push("/Details")
    }

    return (
        <>
           
            <div className="container mt-4 mb-4">
                <div className="row justify-content-center align-items-center">
                    <div className="col-6">
                        <input className="form-control" type="text" onChange={handleSearch}  placeholder="Search" aria-label="Search"></input>
                    </div>
                </div>
            </div>
            <div id="carousel" className="carouselDisplayActive">
                <Carousel />
            </div>
            <div id="lateralScroll" className="lateralScrollDisplayActive">
                <LateralScroll />
            </div>
            <div>
                <div id="searchDiv" className="grid">
                    {searchArray.map((movie) => {
                        return (
                            <div key={movie.id} className="wrap">
                                <img className="clickable" src={getImage(movie.poster_path)} onClick={handleGoToDetails} />
                                <h4 className="movie_list_title">{movie.title}</h4>
                                <p className="movie_list_date">{movie.release_date}</p>
                                <p className="movie_overview">{movie.overview}</p>
                            </div>
                    )})}
                </div> 
            </div>
        </>
    );
}

export default Home;