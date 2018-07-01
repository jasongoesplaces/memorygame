import React from 'react';
import './Navbar.css';





function Navbar(props) {
	return(
	<div className="navbar-fixed">
		<nav>
			<div className="nav-wrapper container">
				<a href="/" className='brand-logo left'>Programming Languages Memory Game</a>
				<ul className='right'>
					<li style={{paddingRight: "15px"}}>Score: {props.score}</li>
					<li>||</li>
					<li style={{paddingLeft: "15px"}}>Top Score: {props.topScore}</li>
				</ul>
			</div>
		</nav>
	</div>
	)
}



export default Navbar;