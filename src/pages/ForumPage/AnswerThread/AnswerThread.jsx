import React, {useState} from 'react'
import {useFirebase} from "../../../contexts/FirebaseContext"
import {useCurrentPost} from "../../../contexts/CurrentPostContext"


const AnswerThread = () => {
    const {answers, writeAnswer} = useFirebase();
    const {currentPost} = useCurrentPost();


    const [newAnswer, setNewAnswer] = useState()

    const handleOnChange = e => {
        setNewAnswer(e.target.value)
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        if (newAnswer != null) {
            writeAnswer(newAnswer)
        }
    }

    return (
        <div>
            <div>
                <div>{currentPost && currentPost.text}</div> 
                {answers.length > 0 ? answers.map(answer => <div key={answer.answer}>{answer.answer}</div>): <div> No answers yet...</div>}
            </div>
            <form onSubmit={handleOnSubmit}>
                <label>
                    <textarea value={newAnswer} onChange={handleOnChange} />
                </label>
                <div>
                    <button type="submit" value="Post">Dela svar</button>
                </div>
            </form>
        </div>
    )
}

export default AnswerThread
