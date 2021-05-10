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
        <div className={styles.pageContainer}>
            <div className={styles.contentContainer}>
                <h1 className={styles.pageTitle}>Tankar från studenter</h1>
                <p className={styles.pageInfo}>Här kan du och andra studenter dela med dig av 
                tankar och funderingar om livet på KTH. Du kan 
                också kommentera på inlägg som andra skrivit. 
                Alla inlägg och kommentarer granskas innan 
                publicering.</p>
                <div className={styles.postsContainer}>
                    <div onClick={changeVisible} className={styles.postButton}>Skriv ett inlägg...</div>
                    {isShown && <WritePost showPopup={setIsShown}/> }
                    {messages && messages.map(message => <PostCard key={message.id} text={message.text} id={message.id} message={message}/> )}
                </div>
             </div>
        </div>
    )
}

export default ForumPage
