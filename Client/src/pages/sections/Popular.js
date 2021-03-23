import { useEffect, useState } from "react";
import Movie from '../../components/movie/Movie';
import Searcher from '../../components/searcher/Searcher';
import './Sections.css';
import HeaderBody from "../../components/headerBody/HeaderBody";


function Popular() {

    const popularMoviesPath = 'http://localhost:8000/popular';
    const [popularMoviesArray, setPopularMoviesArray] = useState([]);

    useEffect(() => {

        fetch(popularMoviesPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Algo no funciona...");
                }
                return response.json();
            })
            .then(data => {
                setPopularMoviesArray(data);
            })
            .catch(error => alert("Algo no funciona..."))
    }, [popularMoviesPath]);


    return (
       
            <div className="main_section">
                <Searcher />
                 <div className="container_section">
                    <HeaderBody title="Top 20 Popular Movies"/>
                     <div className="movie-container">
                        <div className="flex">
                             {popularMoviesArray.map((movie) => {
                                 return (
                                     <Movie movie={movie}/>
                                )})}
                        </div>
                    </div>
                </div>
            </div>
       
    );
}

export default Popular;
