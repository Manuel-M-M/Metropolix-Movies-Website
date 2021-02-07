import {useState} from 'react';
import { Link } from 'react-router-dom';
import './Login-Signin.css';

const Login = () => {

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

        // Pasarlo al action

    }


    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Log In</h1>
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
                        value="Log In" />
                    </div>
                </form>
                
                <Link to={'/Signin'} className="account-link">
                    Sign In
                </Link>
            </div>
        </div>
    )
}

export default Login;
