import { useContext, useState } from "react";
import { Context } from '../../context/Context';
import { ModalContext } from '../../context/ModalContext';
import { useHistory } from 'react-router-dom';
import '../../css/TopRated.css';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const api_key = "73335406cba0f2d2b6be748d34df365b";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

function TopRated() {

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const {topRatedMoviesPath, setTopRatedMoviesPath, topRatedMoviesArray, setTopRatedMoviesArray,
    maxPages, setMaxPages, actualPage, setActualPage, handleIncrementTopRatedMovies, handleDecrementTopRatedMovies} = useContext(Context);

    const { MovieId, saveMovieId, MovieDetails, saveMovieDetails, MovieDetailsPath, setMovieDetailsPath } = useContext(ModalContext);
    
    const history = useHistory();

    // const handleGoToDetails = () => {
    //     history.push("/Details")
    // }

    // const handleGoToDetails = () => {
    //     saveMovieId(movie.id)
    // }



    

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center mt-4">
                <button className="btn btn-transparent mr-5"
                    onClick={() => {
                        history.push("/Home")
                        }}
                >Home
                </button>
                <h1 className="h1">TOP RATED MOVIES</h1>
            </div>
            <div>
                <div className="grid">
                    {topRatedMoviesArray.map((movie) => {
                        return (
                            <div key={movie.id} className="wrap">
                                <img className="clickable" src={getImage(movie.poster_path)} onClick={() => {
                                    saveMovieId(movie.id);
                                    handleOpen();
                                }} 
                                />
                                
                                <h4 className="movie_list_title">{movie.title}</h4>
                                <p className="movie_list_date">{movie.release_date}</p>
                                <p className="movie_overview">id: {movie.id}</p>
                            </div>
                    )})}
                    <Modal
                        open={open}
                        onClose={() => {
                            saveMovieId(null);
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h1>Ahoi Modal</h1>
                        </div>
                    </Modal>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <button className="btn btn-transparent mr-1" onClick={handleDecrementTopRatedMovies}>-</button>
                <button className="btn btn-transparent ml-1" onClick={handleIncrementTopRatedMovies}>+</button>
            </div>
            </div>
        </>
    );
}

export default TopRated;