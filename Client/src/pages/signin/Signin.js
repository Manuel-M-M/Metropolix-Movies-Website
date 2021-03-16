import {useState, useContext} from 'react';
import { Context } from '../../context/Context';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import AuthContext from "../../context/auth/AuthContext";
import './Signup-Signin.css';

const Signin = () => {

    const { isLogin, setIslogin } = useContext(Context);

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
                

                // var decoded = jwt_decode(response.token); //decodificar el token con la librería jwt_decode
                // console.log(decoded);
            
                // var decodedHeader = jwt_decode(response.token, { header: true }); //decodificar con las cabeceras
                // console.log('Header del token:' ,decodedHeader); 
            }
            )
            .catch(
                error => console.log('Erorr: ', error)
            ));

    }

    // const authContext = useContext(AuthContext);
    // const { signInUser } = authContext;

    // const [user, saveUser] = useState({
    //     email: "",
    //     password: ""
    // });

    // const { email, password } = user;

    // const onChange = (e) => {
    //     saveUser({
    //         ...user,
    //         [e.target.name] : e.target.value
    //     })
    // }

    // const onSubmit = e => {
    //     e.preventDefault();

        // Validar que no haya campos vacíos
        // localhost:3000/login

        // Pasarlo al action

        // signInUser({
        //     email: user.email,
        //     password: user.password
        // });

    // };


    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Sign In</h1>
                <form>      {/* <form onSubmit={onSubmit}> */}
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            onChange={(e)=>emailF(e)}
                            // value={email}
                            // onChange={onChange}
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
                            // value={password}
                            // onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn-sign btn-primario btn-block"
                        value="Sign In" onClick={(e)=>handleLogin(e)} />
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