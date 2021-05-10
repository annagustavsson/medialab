import React, { useEffect, useState } from 'react'
import styles from "./WritePost.module.scss"
import "firebase/firestore"
import {useFirebase} from "../../../contexts/FirebaseContext"


const WritePost = ({showPopup}) => {

    const {writePost} = useFirebase(); //from context

    const [newMessage, setNewMessage] = useState()
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        if (newMessage && newMessage !== '')  {
            setIsDisabled(false)
        } else { setIsDisabled(true) } 
    }, [newMessage])

    const handleOnChange = e => {
        setNewMessage(e.target.value)
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        if (e.target.value && e.target.value !== '')  {
            writePost(newMessage)
            showPopup(false)
        }
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
                    <button disabled={isDisabled} type="submit" value="Post" className={styles.submitButton}>Dela inlägg</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default WritePost
