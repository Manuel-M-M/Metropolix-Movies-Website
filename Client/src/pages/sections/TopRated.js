import {useState, useEffect } from "react";
import './Sections.css';
import Movie from "../../components/movie/Movie";
import HeaderBody from "../../components/headerBody/HeaderBody";
import Searcher from "../../components/searcher/Searcher";


function TopRated() {

    const topRatedMoviesPath = 'http://localhost:8000/topRated';
    const [topRatedMoviesArray, setTopRatedMoviesArray] = useState([]);

    useEffect(() => {

        fetch(topRatedMoviesPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Algo no funciona...");
                }
                return response.json();
            })
            .then(data => {
                setTopRatedMoviesArray(data);
            })
            .catch(error => alert("Algo no funciona..."))
    }, [topRatedMoviesPath]);

    
    return (
            <div className="main_section">
                <Searcher />
                <div className="container_section">
                    <HeaderBody title="Top 20 Rated Movies"/>
                    <div className="movie-container">
                        <div className="flex">
                            {topRatedMoviesArray.map((movie) => {
                                return (
                                    <Movie movie={movie}/>
                                )})}
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default TopRated;
