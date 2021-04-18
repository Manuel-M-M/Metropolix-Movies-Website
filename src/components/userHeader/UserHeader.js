import { useState, useContext } from 'react';
import { Context } from '../../context/Context';
import Favourites from '../../components/userMovieLists/Favourites';
import Seens from '../../components/userMovieLists/Seens';
import Pendings from '../../components/userMovieLists/Pendings';
import './UserHeader.css';


function UserHeader () {

    const { handleGetFavourites, handleGetSeens, handleGetPendings } = useContext(Context);
    const [showFav, setShowFav] = useState(false);
    const [showSeens, setShowSeens] = useState(false);
    const [showPendings, setShowPendings] = useState(false);

    const handleListFav = () => {
        setShowFav(!showFav)
        setShowSeens(false)
        setShowPendings(false)
        handleGetFavourites()
    }

    const handleListSeens = () => {
        setShowSeens(!showSeens)
        setShowFav(false)
        setShowPendings(false)
        handleGetSeens()
    }

    const handleListPendings = () => {
        setShowPendings(!showPendings)
        setShowFav(false)
        setShowSeens(false)
        handleGetPendings()
    }

    
    return (
        
        <>
        <div className="container-list-user">
            <div className="ul-list-user">
                <ul className="ul-user">
                    <li>
                        <h4
                            className="userLink"
                            onClick={() => {
                                handleListFav()
                            }}
                        >Favourites
                        </h4>
                    </li>
                    <li>
                        <h4 
                            className="userLink"
                            onClick={() => {
                                handleListSeens()
                            }}
                        >Seens
                        </h4>    
                    </li>
                    <li>
                        <h4 
                            className="userLink"
                            onClick={() => {
                                handleListPendings()
                            }}
                        >Pendings
                        </h4>
                    </li>
                </ul>
            </div>
            <div>
            {
                showFav &&
                <div className="wrap-list-user">
                    <Favourites />
                </div>
            }
            {
                showSeens &&
                <div className="wrap-list-user">
                     <Seens />
                </div>
            }
            {
                showPendings &&
                <div className="wrap-list-user">
                    <Pendings />
                </div>
            }  
            </div>
        </div>
        </>
    )

}

export default UserHeader;
