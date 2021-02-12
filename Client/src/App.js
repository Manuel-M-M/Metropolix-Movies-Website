import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import TopRated from './pages/sections/TopRated';
import Upcomings from './pages/sections/Upcomings';
import Popular from './pages/sections/Popular';
import Details from './pages/details/Details';
import Signin from './pages/signin/Signin';
import Favourites from './pages/sections/Favourites';
import Signup from './pages/signup/Signup';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ContextProvider from './context/Context';
import ModalProvider from './context/ModalContext';
import AlertState from "./context/alerts/AlertState";
import AuthState from "./context/auth/AuthState";

function App() {

  return (
    <ContextProvider>
      <ModalProvider>
        <AlertState>
        <AuthState>
        <BrowserRouter>
          <Header />
      
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/Home" exact component={Home} />
          <Route path="/TopRated" exact component={TopRated} />
          <Route path="/Popular" exact component={Popular} />
          <Route path="/Upcomings" exact component={Upcomings} />
          <Route path="/Details" exact component={Details} />
          <Route path="/Favourites" exact component={Favourites} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/Signup" exact component={Signup} />

          <Footer />
        </BrowserRouter>
        </AuthState>
        </AlertState>
      </ModalProvider>
    </ContextProvider>
  );
}

export default App;
