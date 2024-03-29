import { useEffect } from "react";
import { BrowserRouter, Redirect, Route, useLocation } from 'react-router-dom';
import './css/App.css';
import Home from './pages/home/Home';
import TopRated from './pages/sections/TopRated';
import Popular from './pages/sections/Popular';
import Details from './pages/details/Details';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Searchs from './pages/searchs/Searchs';
import User from './pages/user/User';
import ErrorUser from './pages/error/ErrorUser';
import ErrorChat from './pages/error/ErrorChat';
import MChat from './pages/mchat/MChat';
import Trailer from './pages/trailer/Trailer';
import Comments from "./pages/comments/Comments";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ContextProvider from './context/Context';


  function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {

  return (
    <ContextProvider>
        <BrowserRouter>
        <ScrollToTop />
          <Header />        
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/Home" exact component={Home} />
          <Route path="/TopRated" exact component={TopRated} />
          <Route path="/Popular" exact component={Popular} />
          <Route path="/Details" exact component={Details} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Searchs" exact component={Searchs} />
          <Route path="/User" exact component={User} />
          <Route path="/ErrorUser" exact component={ErrorUser} />
          <Route path="/ErrorChat" exact component={ErrorChat} />
          <Route path="/MChat" exact component={MChat} />
          <Route path="/Trailer" exact component={Trailer} />
          <Route path="/Comments" exact component={Comments} />
          <Footer />
        </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
