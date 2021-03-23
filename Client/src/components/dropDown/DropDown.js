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

    const handleTopRatedM = (e) => {
        e.preventDefault();
        setActualPage(1);
        history.push("/TopRated")
    };

    const handlePopularM = (e) => {
        e.preventDefault();
        setActualPage(1);
        history.push("/Popular")
    };

  
    return (
        
        <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>Sections</span>
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="123" onClick={handleTopRatedM}>Top Rated</a>
            </li>
            <li>
              <a href="456" onClick={handlePopularM}>Popular</a>
            </li>
          </ul>
        </nav>
      </div>
    
    )

}

export default DropDown;
