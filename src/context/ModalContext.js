import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

export const ModalContext = createContext();

const api_key = "73335406cba0f2d2b6be748d34df365b";

const ModalProvider = (props) => {

    const [MovieId, saveMovieId] = useState(null);
    const [MovieDetails, saveMovieDetails] = useState({});
    
    useEffect(() => {

        const getMovieDetails = async () => {
            if (!MovieId) return; 
        
            const url = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=${api_key}&language=en-US`;    
                    
            const result = await axios.get(url);
        
            saveMovieDetails(result.data);
        }
        getMovieDetails();
    
    }, [MovieId]);
         //console.log(MovieDetails);

        const [modalStyle] = useState(getModalStyle);
        const [open, setOpen] = useState(false);
    
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
              width: 700, 
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[5],
              padding: theme.spacing(2, 4, 3),
              overflow: 'scroll',
              height: '100%',
              maxHeight: 700,
              display: 'block'
            },
            header: {
                padding: '12px 0',
                borderBottom: '1px solid darkgrey'
                },
                content: {
                padding: "12px 0",
                overflow: 'scroll'
                }
            
        }));

        const classes = useStyles();


    return (
        <ModalContext.Provider
            value={{api_key, MovieId, saveMovieId, MovieDetails, saveMovieDetails, modalStyle, classes, 
            open, setOpen }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;