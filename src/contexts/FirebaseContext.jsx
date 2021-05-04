import React, { useState, useContext, useEffect } from 'react';
import firebase from "firebase/app"
import "firebase/firestore"

const FirebaseContext = React.createContext();

export const useFirebase = () => {
    return useContext(FirebaseContext);
  };

if (!firebase.apps.length) {
    firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
    });
 }else {
    firebase.app(); // if already initialized, use that one
 }

const FirebaseContextProvider = ({ children }) => {
    const db = firebase.firestore();


    const [messages, setMessages] = useState([])

    useEffect(() => { 
        if (db) {
            console.log("hello")
            const unsubscribe = db
        .collection('messages')
        .orderBy('createdAt').limit(25) //show 25 latest posts
        .onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
            setMessages(data)
            
        });
        return unsubscribe
        }
    }, [db]);

    const writePost = (newMessage) => {
        if (db) {
            db.collection('messages').add({
                text: newMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
                // can add more fields to document here
            })
        }
    }


  return (
    <FirebaseContext.Provider
      value={{
        db: db,
        writePost: writePost,
        messages: messages,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider;
