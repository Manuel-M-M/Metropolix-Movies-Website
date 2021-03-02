import { BrowserRouter, NavLink, Route, useHistory } from 'react-router-dom';
import Favourites from '../../pages/user/pages/Favourites';
import Seens from '../../pages/user/pages/Seens';
import Pendings from '../../pages/user/pages/Pendings';
import './UserHeader.css';

function UserHeader () {

    return (
        <BrowserRouter>
            <nav className="row justify-content-around bg-transparent">
                <NavLink to="/Favourites" exact className="font-weight-bold  text-decoration-none userLink h-100" activeClassName="active">Favourites</NavLink>
                <NavLink to="/Seens" exact className="font-weight-bold  text-decoration-none userLink" activeClassName="active">Seens</NavLink>
                <NavLink to="/Pendings" exact className="font-weight-bold  text-decoration-none userLink" activeClassName="active">Pendings</NavLink>
            </nav>

            <Route path="/Favourites" exact component={Favourites} />
            <Route path="/Seens" exact component={Seens} />
            <Route path="/Pendings" exact component={Pendings} />
        </BrowserRouter>

    );
}

export default UserHeader;