import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../Context';
import './Header.css';
import Logo from '../../img/logos/cuadrado_verdeNegro.png';

function Header() {

    const {actualPage, setActualPage} = useContext(Context);

    const history = useHistory();

    const handleTopRatedM = () => {
        setActualPage(1);
        history.push("/TopRated")
    };

    const handlePopularM = () => {
        setActualPage(1);
        history.push("/Popular")
    };

    const handleUpcomingM = () => {
        setActualPage(1);
        history.push("/Upcomings")
    };

    const handlePrueba = () => {
        setActualPage(1);
        history.push("/prueba")
    };

    return(

        <header>
            <div className="container">
                <a href="https://www.themoviedb.org" target="_blank"><img className="header_logo" src={Logo} alt="logo"/></a>
                <NavLink to="/Home" exact className="logo" activeClassName="active"><h1 id="headerTitle">Metropoli<span id="titleSpan">X</span></h1></NavLink>
                <nav>
                <select name="" id="navSelect">Sections
                    <option value="#" disabled selected >Sections:</option>
                    <option id="tm" value="#" onClick={handleTopRatedM}>Top Rated Movies</option>
                    <option id="pm" value="#" onClick={handlePopularM}>Popular Movies</option>
                    <option id="um" value="#" onClick={handleUpcomingM}>Upcoming Movies</option>
                    <option id="pr" value="#" onClick={handlePrueba}>Prueba</option>
                </select>
                </nav>
            </div>
        </header>
    )
};

export default Header;

