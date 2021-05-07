import React, {useState} from 'react'
import styles from "./WritePost.module.scss"
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
        <div className={styles.container}>
            <div className={styles.content}>
                <h3 className={styles.title}>Nytt inlägg</h3>
            <form onSubmit={handleOnSubmit}>
                <label>
                <textarea className={styles.textInput} cols="50" rows="15" value={newMessage} onChange={handleOnChange} />
                </label>
                <div className={styles.CTA}>
                    <p className={styles.disclaimer}>Om läget är akut, ring 112.</p>
                    <button type="submit" value="Post" className={styles.submitButton}>Dela inlägg</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default WritePost
