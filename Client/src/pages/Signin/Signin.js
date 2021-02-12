import {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "../../context/auth/AuthContext";
import './Signup-Signin.css';

const Signin = () => {


    const authContext = useContext(AuthContext);
    const { signInUser } = authContext;

    const [user, saveUser] = useState({
        email: "",
        password: ""
    });

    const { email, password } = user;

    const onChange = (e) => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacíos
        // localhost:3000/login

        // Pasarlo al action

        signInUser({
            email: user.email,
            password: user.password
        });

    };


    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Sign In</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Sign In" />
                    </div>
                </form>
                
                <Link to={'/Signup'} className="account-link">
                    Sign up
                </Link>
            </div>
        </div>
    )
}

export default Signin;