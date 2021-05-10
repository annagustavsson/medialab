import React from 'react';
import Styles from './RelatableCard.module.scss';

const RelatableCard = ({ text, link }) => {
	const handleClick = () => {
		console.log(link);
	};

	return (
		<button className={Styles.button} onClick={() => handleClick()}>
			<p className={Styles.text}>{text}</p>
		</button>
	);
};

export default RelatableCard;
