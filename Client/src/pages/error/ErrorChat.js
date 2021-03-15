import './Error.css';

function ErrorChat () {

    return (
        
        <div className="container">
            <h3 className="title">You're in trouble !!! <span>&#160;</span></h3>
            <div className="errorChat-body">
                <img src="../../img/backgrounds/Backtothefuture.jpg" alt=""/>
            </div>
            <div className="user-text">
                <h5>
                    If my calculations are correct, when this baby hits 88 miles per hour,
                    you're gonna see some serious s***. So in order to discover the bright future
                    go to <a href="/Signup">Sign up</a> and create an account 
                    or <a href="/Signin">Sign in</a> if you already have one.
                </h5>
            </div>
        </div>
    );
}

export default ErrorChat;