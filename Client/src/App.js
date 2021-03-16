// import {useContext} from "react";
import { BrowserRouter, Redirect, Route, useHistory } from 'react-router-dom';
import './css/App.css';
import Home from './pages/home/Home';
import {useState} from 'react';
import TopRated from './pages/sections/TopRated';
import Upcomings from './pages/sections/Upcomings';
import Popular from './pages/sections/Popular';
import Details from './pages/details/Details';
import Signin from './pages/signin/Signin';
// import Favourites from './pages/sections/Favourites';
import Signup from './pages/signup/Signup';
import Searchs from './pages/searchs/Searchs';
import User from './pages/user/User';
import Error from './pages/error/Error';
import ErrorChat from './pages/error/ErrorChat';
import MChat from './pages/mchat/MChat';
import Header from './components/header/Header';
import Searcher from './components/searcher/Searcher';
import Footer from './components/footer/Footer';
import ContextProvider from './context/Context';
import ModalProvider from './context/ModalContext';
import ModalSearchs from './components/modalSearchs/ModalSearchs';
// import AlertState from "./context/alerts/AlertState";
// import AuthState from "./context/auth/AuthState";

function App() {
  
  const [show, setShow] = useState(false)
  // const { searchArray } = useContext(Context);

  return (
    <ContextProvider>
      <ModalProvider>
        {/* <AlertState>
        <AuthState> */}
        <BrowserRouter>
          <Header />
          {/* <Searcher /> */}
          
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/Home" exact component={Home} />
          <Route path="/TopRated" exact component={TopRated} />
          <Route path="/Popular" exact component={Popular} />
          <Route path="/Upcomings" exact component={Upcomings} />
          <Route path="/Details" exact component={Details} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Searchs" exact component={Searchs} />
          <Route path="/User" exact component={User} />
          <Route path="/Error" exact component={Error} />
          <Route path="/ErrorChat" exact component={ErrorChat} />
          <Route path="/MChat" exact component={MChat} />

          <Footer />
        </BrowserRouter>
        {/* </AuthState>
        </AlertState> */}
      </ModalProvider>
    </ContextProvider>
  );
}

export default App;
