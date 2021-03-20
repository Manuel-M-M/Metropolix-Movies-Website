import { useContext } from 'react';
import { Context } from '../../context/Context';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
import './Signup-Signin.css';

const Signin = () => {

    const { setIslogin } = useContext(Context);

    const history = useHistory();
    let email= "";
    let password= "";
    function emailF(e) {
        email = e.target.value;
    }

    function passwordF(e) {
        password = e.target.value;
    }

    function handleLogin(e) {

        e.preventDefault();

        const config = {
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: email , password: password})
        };

        const request = new Request('http://localhost:8000/login', config);
            fetch(request)
            .then( response => response.json()
            .then(
                response => {
                console.log('hola');
                localStorage.setItem('token', response.token); // guardar token en localstorage
                console.log('adios');
                setIslogin(true);
                history.push("/User");
            }
            )
            .catch(
                error => console.log('Erorr: ', error)
            ));
    }


    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Sign In</h1>
                <form>      
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            onChange={(e)=>emailF(e)}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            onChange={(e)=>passwordF(e)}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit" 
                            className="btn-sign btn-primario btn-block"
                            value="Sign In" 
                            onClick={(e)=>handleLogin(e)} 
                        />
                    </div>
                </form>               
                <Link to={'/Signup'} className="account-link">
                    Go to Sign up
                </Link>
            </div>
        </div>
    )
}

export default Signin;