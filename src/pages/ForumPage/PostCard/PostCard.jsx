import React from 'react'
import styles from "./PostCard.module.scss"

const PostCard = ({text}) => {
   
    return (
        <div className={styles.card}>
            Post: {text}
        </div>
    )
}

export default PostCard
