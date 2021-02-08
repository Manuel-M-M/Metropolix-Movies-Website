import { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { Context } from '../../context/Context';
import { ModalContext } from '../../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { ModalConsumer } from '../../context/ModalContext';

const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

const MovieDetailsModal = () => {

    const { MovieId, saveMovieId, MovieDetails, saveMovieDetails, MovieDetailsPath, setMovieDetailsPath, modalStyle,
    open, setOpen, classes, handleOpen} = useContext(ModalContext);

    const {searchPath, setSearchPath, searchArray, setSearchArray} = useContext(Context);

    const history = useHistory();

    const handleClose = () => {
        setOpen(false);
    }

    const handleGoToDetails = () => {
        history.push("/Details")
    }

    return ( 
        
            <Modal
                open={open}
                onClose={() => {
                    saveMovieId(null);
                    handleClose();
                }}
            >
               
            </Modal>
        
     );
}
 
export default MovieDetailsModal;