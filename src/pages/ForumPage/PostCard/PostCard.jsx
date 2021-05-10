import React, {useState} from 'react'
import {useFirebase} from "../../../contexts/FirebaseContext"
import styles from "./PostCard.module.scss"
import AnswerThread from "../AnswerThread/AnswerThread"

const PostCard = ({text, id, message}) => {
   
    //onclick: 
    // 1) setCurrentPost(id) // mha context
    // 2) Visa AnswerThread component som får props answers (och messages.id för posten det hör till?)

    //Hur göra:
    // 1) Query på enbart ett document id för att få första svaret
    // 2) URL för komponent med svar, behövs?
    const {currentPost, setCurrentPost} = useFirebase(); //from context

    let [isShown, setIsShown] = useState(false)
    let [thisPost, setThisPost] = useState(false) //hitta bättre namn

  
    const clickHandler = () => {
        setIsShown(!isShown)
        if (isShown) {
            setCurrentPost(message) 
        }        
    }

    if (message.parentid === currentPost.id) { // if currentmessage.id är samma som answers.id
        setThisPost(true)
        console.log("true")
    }

    return (
        <div>
         <div onClick={clickHandler} className={styles.card}>
            {text}
        </div>
       <div>
        {thisPost === true ? console.log("true") : console.log("false") }
       </div>
        </div>
       
    )
}

export default PostCard
