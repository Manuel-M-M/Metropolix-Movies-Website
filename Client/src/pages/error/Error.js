import './Error.css';

function Error () {

    return (
        
        <div className="container">
            <h3 className="title">You're in trouble !!! <span>&#160;</span></h3>
            <div className="error-body">
                <img src="../../img/backgrounds/naranja_mecanica.jpg" alt=""/>
            </div>
            <div className="user-text">
                <h5>
                    If you don't want to mess with our gang of criminals go 
                    to <a href="/Signup">Sign up</a> and create 
                    an account or <a href="/Signin">Sign in</a> if you already have one.
                </h5>
            </div>
        </div>
    );
}

export default Error;