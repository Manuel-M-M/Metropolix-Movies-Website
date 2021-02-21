import {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../signin/Signup-Signin.css';
import AlertContext from "../../context/alerts/AlertContext";
import AuthContext from "../../context/auth/AuthContext";

const Signup = (props) => {

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { signUpUser, message, authenticate } = authContext;

    // If user is authenticated or signup or a duplicate signup
    useEffect(() => {
        if(authenticate) {
            props.history.push("/Home");
        }
    }, [message, authenticate, props.history]);

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
        if ( username.trim() === "" || 
            email.trim() === "" ||
            password.trim() === "" ||
            confirm.trim() === "" ) {
                showAlert("All fields are required", "alert-error");
                return;
        }

        // Password mínimo de 6 caracteres
        if (password.length < 10) {
            showAlert("Password cannot be less than 10 characters long.", "alert-error")
            return;
        }

        // Los dos password han de ser iguales
        if (password !== confirm) {
            showAlert("Passwords are not the same", "alert-error");
            return
        }

        // Pasarlo al action
        signUpUser({
            username,
            email,
            password
        });
    }

    
    return (
        <div className="form-usuario">
            { alert ? (<div className={`alert ${alert.category}`}>{alert.message}</div>) : null }
            <div className="contenedor-form sombra-dark">
                <h1>Sign up</h1>
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
                        <input type="submit" className="btn-sign btn-primario btn-block"
                        value="Sign Up" />
                    </div>
                </form>
                
                <Link to={'/Signin'} className="account-link">
                   Go to Sign in
                </Link>
            </div>
        </div>
    )
}

export default Signup;
