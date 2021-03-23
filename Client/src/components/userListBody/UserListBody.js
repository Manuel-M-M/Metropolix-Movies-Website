

function Userlist () {


    return (
        <li>
            <div className="poster-fav">
                <img src={movie.poster_path} alt=""/>
            </div>
            <div className="title-fav">
                {movie.title}
            </div>
            <div className="btn-user-movies">
                <button 
                    className="btn btn-danger btn-u-list"
                    onClick={(e) => {
                        handleDeleteFavourites(e, movie.id);
                    }}
                >X
                </button>
            </div>
        </li>
    )
}

export default Userlist;