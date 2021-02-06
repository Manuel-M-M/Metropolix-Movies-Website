import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import TopRated from './pages/TopRated';
import Upcomings from './pages/Upcomings';
import Popular from './pages/Popular';
import Details from './pages/Details';
import Login from './pages/login/Login';
import prueba from './pages/prueba';
import NewAccount from './pages/NewAccount';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ContextProvider from './Context';

function App() {

  return (
    <ContextProvider>
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
      <Route path="/prueba" exact component={prueba} />
      <Route path="/Login" exact component={Login} />
      <Route path="/NewAccount" exact component={NewAccount} />

      <Footer />
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
