import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../context/Context';
import './Header.css';
import logo from "../../img/logos/icons8-male-user-48.png";


function Header() {

    // const [isNavVisible, setNavVisibility] = useState(false);
    // const [isSmallScreen, setIsSmallScreen] = useState(false);

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

    const handleFavourites = () => {
        setActualPage(1);
        history.push("/Favourites")
    };

    // useEffect(() => {
    //     const mediaQuery = window.matchMedia("(max-width: 700px)");
    //     mediaQuery.addListener(handleMediaQueryChange);
    //     handleMediaQueryChange(mediaQuery);
    
    //     return () => {
    //       mediaQuery.removeListener(handleMediaQueryChange);
    //     };
    //   }, []);
    
    //   const handleMediaQueryChange = mediaQuery => {
    //     if (mediaQuery.matches) {
    //       setIsSmallScreen(true);
    //     } else {
    //       setIsSmallScreen(false);
    //     }
    //   };
    
    //   const toggleNav = () => {
    //     setNavVisibility(!isNavVisible);
    //   };


    return(

        <header>
            <div className="Container">
                {/* <a href="https://www.themoviedb.org" target="_blank"><img className="header_logo" src={Logo} alt="logo"/></a> */}
                <NavLink to="/Home" exact className="logo" activeClassName="active"><h1 id="headerTitle">Metropoli<span id="titleSpan">X</span></h1></NavLink>
                {/* <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    timeout={350}
                    classNames="NavAnimation"
                    unmountOnExit
                > */}
                    {/* <div  key="CSSTransition"> */}
                        <div className="signHeader">
                            <NavLink to="/Signin" exact className="headerSignin" activeClassName="active"><p className="signinP">Sign In</p></NavLink>
                            <span>/</span>
                            <NavLink to="/Signup" exact className="headerSignup" activeClassName="active"><p className="signupP">Sign Up</p></NavLink>
                        </div>
                        <nav>
                        <select name="" id="navSelect">Sections
                            <option value="#" disabled selected >Sections:</option>
                            <option id="tm" value="#" onClick={handleTopRatedM}>Top Rated Movies</option>
                            <option id="pm" value="#" onClick={handlePopularM}>Popular Movies</option>
                            <option id="um" value="#" onClick={handleUpcomingM}>Upcoming Movies</option>
                            <option id="fa" value="#" onClick={handleFavourites}>Favourites</option>
                        </select>
                        </nav>
                        <div className="userAccount">
                            <a href="#" target="_blank"><img className="headerAccount" src={logo} alt="logo"/></a>
                            {/* <span>Username</span> */}
                        </div>
                    {/* </div> */}
                {/* </CSSTransition> */}
                {/* <button onClick={toggleNav} className="Burger">
                    
                </button> */}
            </div>
        </header>
    )
};

export default Header;

