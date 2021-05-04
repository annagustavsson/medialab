import React, { useState, useEffect }  from 'react'
import "firebase/firestore"
import {
    db,
  } from '../../firebase/firebase';
import PostCard from './PostCard/PostCard'
import WritePost from "./WritePost/WritePost"
import styles from "./forumPage.module.scss"


const ForumPage = () => { 

    const [messages, setMessages] = useState([])
    let [isShown, setIsShown] = useState(false)

   
useEffect(() => { // TODO: make general hook or js function in separate file
    if (db) {
       const unsubscribe = db
       .collection('messages')
       .orderBy('createdAt').limit(25) //show 25 latest posts
       .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
        setMessages(data)
       });
       return unsubscribe
    }
}, );

    const changeVisible = () => {
        setIsShown(!isShown)
    }

    return (
        <div className={styles.container}>
            {messages && messages.map(message => <PostCard key={message.id} text={message.text}/> )}
            <div onClick={changeVisible} className={styles.postButton}>write post...</div>
             {isShown && <WritePost showPopup={setIsShown}/> }
        </div>
    )
}

export default ForumPage
