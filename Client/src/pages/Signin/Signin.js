import {useState} from 'react';
import { Link } from 'react-router-dom';
import '.././login/Login-Signin.css';

const Signin = () => {

    const [user, saveUser] = useState({
        username: "",
        email: "",
        password: "",
        confirm: ""
    });

    const { username, email, password, confirm } = user;

    const onChange = (e) => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacíos

        // Password mínimo de 6 caracteres

        // Los dos password han de ser iguales

        // Pasarlo al action

    }

    
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Sign In</h1>
                <form onSubmit={onSubmit}>
                <div className="campo-form">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Your username"
                            value={username}
                            onChange={onChange}
                        />
                    </div>
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
                        <label htmlFor="confirm">Confirm Password</label>
                        <input 
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Repeat your password"
                            value={confirm}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Sign In" />
                    </div>
                </form>
                
                <Link to={'/Login'} className="account-link">
                   Back to Log In
                </Link>
            </div>
        </div>
    )
}

export default Signin;