import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Parent from './timer.js';

class Timerh extends React.Component{
	render()
	{
		return(
				<div>
					<Parent start={Date.now()}/>
				</div>
		);
	}
}
ReactDOM.render(<Timerh/>,document.getElementById("root"))