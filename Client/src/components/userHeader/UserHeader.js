import { useState, useContext } from 'react';
import { Context } from '../../context/Context';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Favourites from '../../pages/user/pages/Favourites';
import Seens from '../../pages/user/pages/Seens';
import Pendings from '../../pages/user/pages/Pendings';
import './UserHeader.css';


function UserHeader () {

    const { handleGetFavourites, handleGetSeens, handleGetPendings } = useContext(Context);

    const [toggle, setToggle] = useState(true);

    const handleRoute = () => {
        if (toggle === true) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

    
    return (
        <BrowserRouter>
            <nav className="row justify-content-around bg-transparent">
                <NavLink 
                    to="/Favourites" 
                    onClick={() => {
                        handleRoute()
                        handleGetFavourites()
                    }}
                    exact className="font-weight-bold  text-decoration-none userLink h-100" 
                    activeClassName="active"
                >Favourites
                </NavLink>
                <NavLink 
                    to="/Seens" 
                    onClick={() => {
                        handleRoute()
                        handleGetSeens()
                    }} 
                    exact className="font-weight-bold  text-decoration-none userLink" 
                    activeClassName="active"
                >Seens
                </NavLink>
                <NavLink 
                    to="/Pendings" 
                    onClick={() => {
                        handleRoute()
                        handleGetPendings()
                    }}
                    exact className="font-weight-bold  text-decoration-none userLink" 
                    activeClassName="active"
                >Pendings
                </NavLink>
            </nav>
            <Route path="/Favourites" exact component={Favourites} />
            <Route path="/Seens" exact component={Seens} />
            <Route path="/Pendings" exact component={Pendings} />
        </BrowserRouter>

    )

}

export default UserHeader;
