import {useContext, useRef} from 'react';
import './DropDown.css';
import {useDetectOutsideClick} from './UseDetectOutsideClick';
import { useHistory } from 'react-router-dom';
import { Context } from '../../context/Context';



const DropDown = () => {

    const { setActualPage} = useContext(Context);

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

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

    // const handleFavourites = () => {
    //     setActualPage(1);
    //     history.push("/Favourites")
    // };
  
    return (
        
        <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>Sections</span>
          {/* <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="User avatar"
          /> */}
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#" onClick={handleTopRatedM}>Top Rated</a>
            </li>
            <li>
              <a href="#" onClick={handlePopularM}>Popular</a>
            </li>
            <li>
              <a href="#" onClick={handleUpcomingM}>Upcomings</a>
            </li>
          </ul>
        </nav>
      </div>
    
    )

}

export default DropDown;