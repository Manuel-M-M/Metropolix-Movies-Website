import { useState, useContext } from 'react';
import { Context } from '../../context/Context';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Favourites from '../../pages/user/pages/Favourites';
import Seens from '../../pages/user/pages/Seens';
import Pendings from '../../pages/user/pages/Pendings';
import './UserHeader.css';


function UserHeader () {

    const { handleGetFavourites, handleGetSeens, handleGetPendings } = useContext(Context);
    const [showFav, setShowFav] = useState(false);
    const [showSeens, setShowSeens] = useState(false);
    const [showPendings, setShowPendings] = useState(false);

    // const [toggle, setToggle] = useState(true);

    // const handleRoute = () => {
    //     if (toggle === true) {
    //         setToggle(false)
    //     } else {
    //         setToggle(true)
    //     }
    // }

    const handleListFav = () => {
        setShowFav(!showFav)
        handleGetFavourites()
    }

    const handleListSeens = () => {
        setShowSeens(!showSeens)
        handleGetSeens()
    }

    const handleListPendings = () => {
        setShowPendings(!showPendings)
        handleGetPendings()
    }

    
    return (
        
        // <nav className="row justify-content-around bg-warning nav-userlist">
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
            {/* <div className="main-container-header-list">
                <div className="container-wrap-list">
                    <ul className="title-fav">
                        <h4
                            className="userLink"
                            onClick={() => {
                                handleListFav()
                            }}
                        >Favourites
                        </h4>
                    </ul>
                    {
                        showFav &&
                        <div className="wrap-list-fav">
                        	<Favourites />
                        </div>
                    }
                </div> 
                <div className="container-wrap-list">
                    <div className="title-seens">
                        <h4 
                            className="userLink"
                            onClick={() => {
                                handleListSeens()
                            }}
                        >Seens
                        </h4>    
                    </div>   
                    {
                        showSeens &&
                        <div className="wrap-list-seens">
                            <Seens />
                        </div>
                    }
                </div>
                <div className="container-wrap-list">
                    <div className="titlel-pendings">
                        <h4 
                            className="userLink"
                            onClick={() => {
                                handleListPendings()
                            }}
                        >Pendings
                        </h4>
                    </div>
                    {
                        showPendings &&
                        <div className="wrap-list-pendings">
                            <Pendings />
                        </div>
                    }  
                </div>
            </div> */}
        </>
        // </nav>
        
        // <BrowserRouter>
        //     <nav className="row justify-content-around bg-transparent">
        //         <NavLink 
        //             to="/Favourites" 
        //             onClick={() => {
        //                 handleRoute()
        //                 handleGetFavourites()
        //             }}
        //             exact className="font-weight-bold  text-decoration-none userLink h-100" 
        //             activeClassName="active"
        //         >Favourites
        //         </NavLink>
        //         <NavLink 
        //             to="/Seens" 
        //             onClick={() => {
        //                 handleRoute()
        //                 handleGetSeens()
        //             }} 
        //             exact className="font-weight-bold  text-decoration-none userLink" 
        //             activeClassName="active"
        //         >Seens
        //         </NavLink>
        //         <NavLink 
        //             to="/Pendings" 
        //             onClick={() => {
        //                 handleRoute()
        //                 handleGetPendings()
        //             }}
        //             exact className="font-weight-bold  text-decoration-none userLink" 
        //             activeClassName="active"
        //         >Pendings
        //         </NavLink>
        //     </nav>
        
        //     <Route path="/Favourites" exact component={Favourites} />
        //     <Route path="/Seens" exact component={Seens} />
        //     <Route path="/Pendings" exact component={Pendings} />
        
        // </BrowserRouter>
    
    )

}

export default UserHeader;
