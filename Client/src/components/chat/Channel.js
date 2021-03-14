import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import Message from './Message';

// const db = firebase.firestore();

                             
// const Channel = ({ chatUser = null,  db = null }) => {

//     const [messages, setMessages] = useState([]);
//     const [newMessage, setNewMessage] = useState('');

//     const { uid, displayName, photoURL } = chatUser;

//     useEffect (() => {
//         if (db) {
//             const unsubscribe = db
//                 .collection('messages')
//                 .orderBy('createdAt')
//                 .limit(100)
//                 .onSnapshot(querySnapshot => {
//                     //Get all documents from collection with IDs
//                     const data = querySnapshot.docs.map(doc => ({
//                         ...doc.data(),
//                         id: doc.id,
//                     }));
//                     //Update state
//                     setMessages(data)
//                 })

//             //Detach listener
//             return unsubscribe;
//         }
//     }, [db]);

//     const handleOnChange = e => {
//         setNewMessage(e.target.value);
//     };

//     const handleOnSubmit = e => {
//         e.preventDefault();

//         // const trimmedMessage = newMessage.trim();
//         // if (trimmedMessage) {
//         //     //Add new message in Firestore
//         //     messagesRef.add({
//         //         text: trimmedMessage,
//         //         createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//         //         uid,
//         //         displayName
//         //     });
//         //     //Clear input field
//         //     setNewMessage('');
//         //}

//         if (db) {
//             db.collection('messages').add({
//                 text: newMessage,
//                 createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//                 uid,
//                 displayName,
//                 // photoURL
//             })
//         }
//     };

//     return (
//         <>
//             <ul>
//                 {messages.map(message => (
//                     <li key={message.id}>
//                         <Message {...message}/>
//                     </li>
//                 ))}
//             </ul>
//             <form onSubmit={handleOnSubmit}>
//                     <input
//                         // ref={inputRef} 
//                         type="text"
//                         value={newMessage}
//                         onChange={handleOnChange}
//                         placeholder="Type your message here ..."
//                     />
//                     <button type="submit" disabled={!newMessage}>
//                         Send
//                     </button>
//             </form>
//         </>
//     );
// };

// export default Channel;