import UserHeader from '../../components/userHeader/UserHeader';
import './User.css';
import HeaderBody from '../../components/headerBody/HeaderBody';

function User () {

    return (
        <>
            <div className="container">
                <HeaderBody title="User Space"/>
                {/* <div className="wrap-btn"> */}
                    <div className="btn-delete">
                        <button className="btn btn-transparent mr-2"
                        // onClick={() => {
                        //     window.history.back();
                        // }}
                        >Delete your account
                        </button>
                    </div>
                {/* </div> */}
                <div className="img-head">
                    <img src="../../img/backgrounds/Collage.jpg" alt=""/>
                </div>
                <div className="user-text">
                    <h6>
                    Welcome to the temple of cinema. Now you can manage your movies and comment on them.
                    If you really are a lover of the seventh art, enter our <a href="#">REAL TIME CHAT</a> and
                    participate in our cinephile community.
                    </h6>
                    <h5>
                        “A film is never really good unless the camera is an eye in the head of a poet.”
                        - Orson Welles
                    </h5>
                </div>
                <div className="user-header">
                    <UserHeader />
                </div>
               
                
                {/* <div className="row justify-content-center mt-3 mb-3">
                    <button className="btn btn-transparent mr-1" >-</button>
                    <button className="btn btn-transparent ml-1" >+</button>
                </div> */}
                
            </div>
        </>
        
    );
}

export default User;