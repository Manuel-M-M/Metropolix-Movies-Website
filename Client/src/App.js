// import {useContext} from "react";
import { BrowserRouter, Redirect, Route, useHistory } from 'react-router-dom';
import './css/App.css';
import Home from './pages/home/Home';
import TopRated from './pages/sections/TopRated';
import Upcomings from './pages/sections/Upcomings';
import Popular from './pages/sections/Popular';
import Details from './pages/details/Details';
import Signin from './pages/signin/Signin';
// import Favourites from './pages/sections/Favourites';
import Signup from './pages/signup/Signup';
import Searchs from './pages/searchs/Searchs';
import User from './pages/user/User';
import Header from './components/header/Header';
import Searcher from './components/searcher/Searcher';
import Footer from './components/footer/Footer';
import ContextProvider from './context/Context';
import ModalProvider from './context/ModalContext';
// import AlertState from "./context/alerts/AlertState";
// import AuthState from "./context/auth/AuthState";

function App() {
  

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

          <Footer />
        </BrowserRouter>
        {/* </AuthState>
        </AlertState> */}
      </ModalProvider>
    </ContextProvider>
  );
}

export default App;
