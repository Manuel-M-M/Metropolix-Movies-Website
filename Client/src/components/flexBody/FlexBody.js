// import { Fragment } from React;
import Movie from '../movie/Movie';
import '../../css/sections.css';


// const api_key = "73335406cba0f2d2b6be748d34df365b";


// function FlexBody ({flexBody}) {

//     const [moviesPath, setMoviesPath] = useState(`https://api.themoviedb.org/3/movie/${flexBody.moviePath}?api_key=${api_key}&language=en-US&page=1`);

//     const [actualPage, setActualPage] = useState(1);

//     const maxPages = 16

//     useEffect(() => {
//         console.log(popularMoviesPath);
        
//         fetch(popularMoviesPath)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Algo no funciona...");
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setPopularMoviesArray(data.results);
//                 // setMaxPages(data.total_pages);
//             })
//             .catch(error => alert("Algo no funciona..."))
//     }, [popularMoviesPath]);

//     const handleIncrementPopularMovies = () => {   
//         if (actualPage<maxPages) {
//             let nextPage = actualPage +1 
//             setActualPage(nextPage); // setActualPage(prevActualPage => prevActualPage+1);
//             console.log(actualPage);
//             setPopularMoviesPath(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${nextPage}`);
//         }
//       };

//     const handleDecrementPopularMovies = () => {       
//         if (actualPage>1) {
//             let nextPage = actualPage -1
//              setActualPage(actualPage-1);  //setActualPage(prevActualPage => prevActualPage-1);
//              console.log(actualPage);
//              setPopularMoviesPath(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${nextPage}`);
//         }
//       };

//     return (
//     <>
//         <div className="movie-container">
//             <div className="flex">
//                 {flexBody.popularMoviesArray.map((movie) => {
//                     return (
//                         <Movie movie={movie}/>
//                     )})}
//             </div>
                        
//             <div className="row justify-content-center mt-3 mb-3">
//                 <button className="btn btn-transparent mr-1" onClick={() => handleDecrementPopularMovies()}>-</button>
//                 <button className="btn btn-transparent ml-1" onClick={() => handleIncrementPopularMovies()}>+</button>
//             </div>
//         </div>
//     </>
//     )
// }

// export default FlexBody;