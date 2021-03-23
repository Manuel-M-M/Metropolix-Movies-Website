import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Context } from '../../context/Context';
import DropDown from '../dropDown/DropDown';
import './Header.css';


function Header() {

    
    const { isLogin } = useContext(Context);
    const history = useHistory();

    const handleGoToUser = (e) => {
        e.preventDefault();
         if (isLogin === true) {
        history.push("/User")
         } else {
             history.push("/ErrorUser")
         }
    }

    const handleGoToErrorChat = (e) => {
        e.preventDefault();
         if (isLogin === true) {
        history.push("/Chat")
         } else {
             history.push("/ErrorChat")
         }
    }


    return(
        <>
        <header>
            <div className="Container">
                <NavLink 
                    to="/Home" 
                    exact className="logo" 
                    activeClassName="active"
                >
                    <h1 id="headerTitle">Metropoli
                        <span id="titleSpan">X</span>
                    </h1>
                </NavLink>
                <div className="signHeader">
                    <NavLink 
                        to="/Signin" 
                        exact className="headerSignin" 
                        activeClassName="active"
                    >
                        <p className="signinP">Sign In</p>
                    </NavLink>
                    <span>/</span>
                    <NavLink 
                        to="/Signup" 
                        exact className="headerSignup" 
                        activeClassName="active"
                    >
                        <p className="signupP">Sign Up</p>
                    </NavLink>
                </div>
                <nav>
                    <DropDown />
                </nav>
                <div className="wrapChatHeader">
                    <NavLink 
                        to="/MChat" 
                        exact className="chatHeader" 
                        activeClassName="active"
                        onClick={(e) =>
                            handleGoToErrorChat(e)
                        }      
                    >
                        <p className="signupP" >Chat</p>
                    </NavLink>
                </div>
                <div className="userAccount">
                    <a href="#w34243">
                        <img 
                            className="headerAccount" 
                            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
                            alt="User avatar" onClick={(e) =>
                                handleGoToUser(e)
                            }      
                    />
                    </a>
                </div>
            </div>
        </header> 
    </>
    )
};

export default Header;
