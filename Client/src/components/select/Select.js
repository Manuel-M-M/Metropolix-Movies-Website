import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import '../header/Header.css';


function Select () {

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

    return (
        <select id="nav-select" class="form-select form-select-sm drop" aria-label=".form-select-sm example">
            <option selected>Sections</option>
            <option id="tm" value="1" onClick={handleTopRatedM}>Top Rated Movies</option>
            <option id="pm" value="2" onClick={handlePopularM}>Popular Movies</option>
            <option id="um" value="3" onClick={handleUpcomingM}>Upcoming Movies</option>
        </select>
    )
}

export default Select;