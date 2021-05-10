import React from 'react'
import {useHistory} from "react-router-dom"
import {useFirebase} from "../../../contexts/FirebaseContext"
import styles from "./PostCard.module.scss"

const PostCard = ({text, id, message}) => {
   
    const {setCurrentPost} = useFirebase(); //from context
    let history = useHistory()


    const clickHandler = () => {
        history.push("/forum/"+ id)
        setCurrentPost(message)
    }

    return (
         <div onClick={clickHandler} className={styles.card}>
            {text}
        </div>
        
       
    )
}

export default PostCard
