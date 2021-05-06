import React, { useState}  from 'react'
import "firebase/firestore"
import {useFirebase} from "../../contexts/FirebaseContext"
import PostCard from './PostCard/PostCard'
import WritePost from "./WritePost/WritePost"
import styles from "./forumPage.module.scss"



const ForumPage = () => { 

    let [isShown, setIsShown] = useState(false)

    const {messages} = useFirebase(); 

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
