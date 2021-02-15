
let = moviesArray([]);



<div className="movie-container">
<div className="flex">
    {topRatedMoviesArray.map((movie) => {
        return (
            <div key={movie.id} className="wrap">
                <img className="clickable" src={getImage(movie.poster_path)} onClick={() => {
                    saveMovieId(movie.id);
                    handleGoToDetails();
                    // handleOpen();
                }}
                />

                <h4 className="movie_list_title">{movie.title}</h4>
                <p className="movie_list_date">{movie.release_date}</p>
            </div>
    )})}
    
</div>
</div>