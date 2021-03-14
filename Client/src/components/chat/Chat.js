import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Button from './Button.js';

firebase.initializeApp({  
    apiKey: "AIzaSyDSxvaoK61bf3wmxD6nI7wEV0dPmgVegvk",
    authDomain: "metropolix-chat.firebaseapp.com",
    projectId: "metropolix-chat",
    storageBucket: "metropolix-chat.appspot.com",
    messagingSenderId: "610836054578",
    appId: "1:610836054578:web:f35c15936f71f2ef05b22b"
});

const auth = firebase.auth();
const db = firebase.firestore();

function Chat() {

    const [chatUser, setChatUser] = useState(() => auth.currentChatUser);
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged(chatUser => {
           if (chatUser) {
               setChatUser(chatUser);
           } else {
               setChatUser(null)
           }
           if (initializing) {
               setInitializing(false);
           }
       })

       //Clean up subscription
       return unsubscribe;
    }, [])

    const signInWithGoogle = async () => {
        //Retrieve Google provider object
        const provider = new firebase.auth.GoogleAuthProvider();

        //Set language in the default browser preferrence
        auth.useDeviceLanguage();

        //Start sign in process
        try {
            await auth.signInWithPopup(provider);
        } catch(error) {
            console.error(error);
        }
    };

    const signOut = async () => {
        try {
            await firebase.auth().signOut();
        } catch(error) {
            console.log(error.message);
        }
    };

    if (initializing) return "Loading...";

    return (
        <div>
            {chatUser ? (
                <>
                    <button onClick={signOut}>Sign out</button>
                    <p>Welcome to the Metroplix chat</p>
                </>
            ) : ( 
                <Button onClick={signInWithGoogle}>Sign in with Google</Button>
            )}
        </div>
    );

}

export default Chat;