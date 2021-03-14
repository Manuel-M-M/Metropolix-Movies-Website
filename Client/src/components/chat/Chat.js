import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Button from './Button.js';
import Channel from './Channel.js';

firebase.initializeApp({  
    apiKey: "AIzaSyD13daBMdlDdGkoDiYfjmvVwvuSpUFId5g",
    authDomain: "rt-metropolix-chat.firebaseapp.com",
    projectId: "rt-metropolix-chat",
    storageBucket: "rt-metropolix-chat.appspot.com",
    messagingSenderId: "277745636705",
    appId: "1:277745636705:web:0023cdfea3751b560de120"

});

const auth = firebase.auth();

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
    }, [initializing])

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
                    <Button onClick={signOut}>Sign out</Button>
                    <Channel chatUser={chatUser} />
                </>
            ) : ( 
                <Button onClick={signInWithGoogle}>Sign in with Google</Button>
            )}
        </div>
    );

}

export default Chat;