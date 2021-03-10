import {useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../signin/Signup-Signin.css';
import AlertContext from "../../context/alerts/AlertContext";
import AuthContext from "../../context/auth/AuthContext";

// import { useState } from 'react';

 function Signup({setUser}){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const history = useHistory();

    const handleSubmit = (event)=>{
        event.preventDefault();

        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('confirm', confirm);

        fetch('http://localhost:8000/register', {
            method: 'POST',
            mode: 'cors',
            body: formData
        })
        .then(response => response.json())
        .then(
            resp => {

                
                history.push("/Signin")


                // console.log(resp);
                // setUser(users => {
                //     const newArray = users.slice();
                //     newArray.push(resp);
                //     return newArray;
                // });

                // // vaciar los campos:
                // setUsername("");
                // setEmail("");
                // setPassword("");
                // setConfirm("");
                
            } 
        ).catch( error => console.log(error) );
        
    }

    const handleUsername = (event)=>{
        setUsername(event.target.value);
    }
    const handleEmail = (event)=>{
        setEmail(event.target.value);
    }     
    const handlePassword = (event)=>{
        setPassword(event.target.value);
    }
    const handleConfirm = (event)=>{
        setConfirm(event.target.value);
    }

    


// const Signup = (props) => {

//     // const alertContext = useContext(AlertContext);
//     // const { alert, showAlert } = alertContext;

//     // const authContext = useContext(AuthContext);
//     // const { signUpUser, message, authenticate } = authContext;

//     // If user is authenticated or signup or a duplicate signup
//     // useEffect(() => {
//     //     if(authenticate) {
//     //         props.history.push("/Home");
//     //     }
//     // }, [message, authenticate, props.history]);

//     const [user, saveUser] = useState({
//         username: "",
//         email: "",
//         password: "",
//         confirm: ""
//     });

//     const { username, email, password, confirm } = user;

//     const onChange = (e) => {
//         saveUser({
//             ...user,
//             [e.target.name] : e.target.value
//         })
//     }

//     const onSubmit = e => {
//         e.preventDefault();


//         //Validar que no haya campos vacíos
//         if ( username.trim() === "" || 
//             email.trim() === "" ||
//             password.trim() === "" ||
//             confirm.trim() === "" ) {
//                 showAlert("All fields are required", "alert-error");
//                 return;
//         }

//         //Password mínimo de 6 caracteres
//         // if (password.length < 10) {
//         //     showAlert("Password cannot be less than 10 characters long.", "alert-error")
//         //     return;
//         // }

//         //Los dos password han de ser iguales
//         if (password !== confirm) {
//             showAlert("Passwords are not the same", "alert-error");
//             return
//         }



//         // Pasarlo al action
//         signUpUser({
//             username,
//             email,
//             password
//         });
//     }

    
    return (
        <div className="form-usuario">
            { alert ? (<div className={`alert ${alert.category}`}>{alert.message}</div>) : null }
            <div className="contenedor-form sombra-dark">
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}> 
                    <div className="campo-form">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            placeholder="Your username"
                            value={username}
                            onChange={handleUsername}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            placeholder="Your password"
                            value={password}
                            onChange={handlePassword}
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
                            onChange={handleConfirm}
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
        // <h1>signup</h1>
    )
}

export default Signup;
