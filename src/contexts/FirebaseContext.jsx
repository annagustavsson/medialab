import React, { useState, useContext, useEffect } from 'react';
import firebase from "firebase/app"
import "firebase/firestore"
import {useCurrentPost} from "./CurrentPostContext"

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
    const {currentPost} = useCurrentPost()


    const [messages, setMessages] = useState([]) 
    const [answers, setAnswers] = useState([])
    

    useEffect(() => { 
        if (db) {
            const unsubscribe = db
        .collection('messages')
        .orderBy('createdAt').limit(25) //show 25 latest posts
        .onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
            setMessages(data.reverse())
        });
        return unsubscribe
        }
    }, [db]);

    useEffect(() => { 
      if (db && currentPost) {
          const unsubscribe = db
      .collection('messages')
      .doc(currentPost.id)
      .collection('answers')
      .orderBy('createdAt') 
      .onSnapshot(querySnapshot => {
          const postAnswers = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id, parentid: currentPost.id}));
          setAnswers(postAnswers)
      });
      return unsubscribe
      }
  }, [db, currentPost]);

    const writePost = (newMessage) => {
        if (db) {
            db.collection('messages').add({
                text: newMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
                // can add more fields to document here
            })
        }
    }

    const writeAnswer = (answerText) => {
      if (db) {
        db.collection('messages').doc(currentPost.id).collection('answers').add({
              answer: answerText,
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
      }
    }

  
  return (
    <FirebaseContext.Provider
      value={{
        db: db,
        messages: messages,
        answers: answers,
        writePost: writePost,
        writeAnswer: writeAnswer,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider;
