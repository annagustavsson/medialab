import React, {useState} from 'react'
import styles from "../forumPage.module.scss"
import "firebase/firestore"
import {useFirebase} from "../../../contexts/FirebaseContext"


const WritePost = ({showPopup}) => {

    const {writePost} = useFirebase(); //from context

    const [newMessage, setNewMessage] = useState()

    const handleOnChange = e => {
        setNewMessage(e.target.value)
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        writePost(newMessage)
        showPopup(false)
    }

    return (
        <div className={styles.writePostContainer}>
            Write your post HERE
            <form onSubmit={handleOnSubmit}>
                <label>
                <input type="text" value={newMessage} onChange={handleOnChange} />
                </label>
                <input type="submit" value="Post" />
            </form>
        </div>
    )
}

export default WritePost
