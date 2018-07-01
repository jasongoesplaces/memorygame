import React from 'react';
import './Card.css';

function handleClick(props) {
	props.reArrangeCards();
	props.clickedCharacter(props.id);
}


function Card(props) {
	return (
		<div className="img-container">
			<img onClick={() => handleClick(props)} alt={props.name} src={props.image} />
		</div>
	)
}




export default Card