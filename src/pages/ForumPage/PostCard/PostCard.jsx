import React from 'react'
import styles from "../../ForumPage/forumPage.module.scss"

const PostCard = ({text}) => {
   
    return (
        <div className={styles.card}>
            Post: {text}
        </div>
    )
}

export default PostCard
