import { useContext } from "react";
import { ModalContext } from '../../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { ModalConsumer } from '../../context/ModalContext';

const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

const MovieDetailsModal = () => {

    const { MovieId, saveMovieId, MovieDetails, saveMovieDetails, MovieDetailsPath, setMovieDetailsPath, modalStyle,
    open, setOpen, classes, handleOpen} = useContext(ModalContext);

    const handleClose = () => {
        setOpen(false);
    }

    return ( 
        
            <Modal
                open={open}
                onClose={() => {
                    saveMovieId(null);
                    handleClose();
                }}
            >
                <div style={modalStyle} className={classes.paper}>
                    <img src={getImage(MovieDetails.backdrop_path)} alt={MovieDetails.original_title}/>
                    <h2 className="mt-4">{MovieDetails.title}</h2>
                    <p>{MovieDetails.overview}</p>
                    <p>
                        <span>Release date: </span>
                        {MovieDetails.release_date}
                    </p>
                    <p>
                        <span>Popularity: </span>
                        <span>{MovieDetails.popularity}</span>
                    </p>
                    <p>
                        <span>Vote count: </span>
                        <span>{MovieDetails.vote_count}</span>
                    </p>
                    <p>
                        <span>Vote average: </span>
                        <span>{MovieDetails.vote_average}</span>
                    </p>
                    
                    
                </div>
            </Modal>
        
     );
}
 
export default MovieDetailsModal;