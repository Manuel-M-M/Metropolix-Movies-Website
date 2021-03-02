import {useContext} from "react";
import Movie from "../../components/movie/Movie";
import { Context } from '../../context/Context';
import Searcher from "../../components/searcher/Searcher";


function Searchs () {

    const { searchArray } = useContext(Context);

    return (
        <>
        <Searcher />
        <div className="container">
            <div id="movie-container-display" className="movie-container home-margin">
                <div id="searchDiv" className="flex">
                    {searchArray.map((movie) => {
                        return (
                            <Movie movie={movie}/>
                        )})}
                </div>
            </div>
                <div className="row justify-content-center mt-3 mb-3">
            </div>
        </div>
        </>
    );

}

export default Searchs;
