import React, { useState } from 'react';
import { useFirebase } from '../../../contexts/FirebaseContext';
import { useCurrentPost } from '../../../contexts/CurrentPostContext';
import Styles from './AnswerThread.module.scss';

const AnswerThread = () => {
	const { answers, writeAnswer } = useFirebase();
	const { currentPost } = useCurrentPost();

	const [newAnswer, setNewAnswer] = useState();

	const handleOnChange = (e) => {
		setNewAnswer(e.target.value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (newAnswer != null) {
			writeAnswer(newAnswer);
		}
	};

	return (
		<div className={Styles.pageContainer}>
			<div className={Styles.contentContainer}>
				<div className={Styles.postText}>
					<span>
						<b>{`Inlägg: `}</b>
					</span>
					<span>{currentPost && currentPost.text}</span>
				</div>
				<div className={Styles.answersContainer}>
					<form onSubmit={handleOnSubmit} className={Styles.newReply}>
						<label>
							<textarea
								className={Styles.textInput}
								value={newAnswer}
								onChange={handleOnChange}
							/>
						</label>
						<button type='submit' value='Post' className={Styles.shareButton}>
							Dela svar
						</button>
					</form>
					{answers.length > 0 ? (
						answers.map((answer, idx) => (
							<div key={idx} className={Styles.answer}>
								{answer.answer}
							</div>
						))
					) : (
						<div className={Styles.noAnswersYet}> No answers yet...</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default AnswerThread;
