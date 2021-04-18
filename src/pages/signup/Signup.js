import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../signin/Signup-Signin.css';


 function Signup({setUser}) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const history = useHistory();

    const handleSubmit = (event)=>{
        event.preventDefault();

        if ( username.trim() === '' ||
             email.trim() === '' ||
             password.trim() === '' ||
             confirm.trim() === '' ) {
                 alert("All fields are required");
                 return;
        }
        
        if ( password.length < 4 ) {
                alert("Password requires 4 characters at least")
            return;
        }

        if ( password !== confirm ) {
                alert("Password and confirm are diferents")
            return;
        }

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

    
    return (
        <div className="form-usuario">
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
                        <input 
                            type="submit" 
                            className="btn-sign btn-primario btn-block"
                            value="Sign Up" 
                        />
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
