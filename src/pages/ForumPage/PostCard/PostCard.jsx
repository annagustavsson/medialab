import React from 'react'
import {useHistory} from "react-router-dom"
import {useCurrentPost} from "../../../contexts/CurrentPostContext"
import styles from "./PostCard.module.scss"

const PostCard = ({text, id, message}) => {

    const {setCurrentPost} = useCurrentPost();

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
