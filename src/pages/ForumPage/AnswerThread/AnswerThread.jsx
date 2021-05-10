import React from 'react'
import {useFirebase} from "../../../contexts/FirebaseContext"

// visa answers från context (de är alltid från currentpost)
// props {post, answers}


const AnswerThread = () => {
    const {currentPost, answers} = useFirebase(); //from context} = useFirebase(); //from context
    return (
        <div>
            hej
        </div>
    )
}

export default AnswerThread
