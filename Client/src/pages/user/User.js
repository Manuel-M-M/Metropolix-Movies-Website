import { useState, useContext } from 'react';
import UserHeader from '../../components/userHeader/UserHeader';
import { Context } from '../../context/Context';
import './User.css';
import HeaderBody from '../../components/headerBody/HeaderBody';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

function User () {

    const { setIslogin } = useContext(Context);

    const history = useHistory();

    const handleSubmit = (e)=>{
         e.preventDefault();

        var token = localStorage.getItem('token');

        // var tokenDecoded = jwt_decode(token)

        // console.log(tokenDecoded);

        // const email = encodeURIComponent(tokenDecoded.username);
        fetch(`http://localhost:8000/deleteUser`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => response.json())
        .then(
            resp => {

                setIslogin(true);

                history.push("/Home")


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

     const handleLogout = (e) => {
        e.preventDefault();

        setIslogin(false);
        localStorage.removeItem('token');
        history.push("/Home")
     }

    return (
        <>
            <div className="container">
                <HeaderBody title="User Space"/>
                {/* <div className="wrap-btn"> */}
                    <div className="btn-delete">
                        <button className="btn btn-transparent mr-2"
                        onClick={(e) => {
                           handleSubmit(e);
                        }}
                        >Delete your account
                        </button>
                        <button className="btn btn-transparent mr-2"
                        onClick={(e) => {
                            handleLogout(e);
                        }}
                        >Sign Out
                        </button>
                    </div>
                {/* </div> */}
                <div className="img-head">
                    <img src="../../img/backgrounds/Collage.jpg" alt=""/>
                </div>
                <div className="user-text">
                    <h6>
                    Welcome to the temple of cinema. Now you can manage your movies and comment on them.
                    If you really are a lover of the seventh art, enter our <a href="/MChat">REAL TIME CHAT</a> and
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