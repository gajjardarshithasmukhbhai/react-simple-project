import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
class Parent extends React.Component{
	componentDidMount()
	{
		this.parent=setInterval(this.timer,1000)
	}
	timer()
	{
		this.setState=({x:new Date()-this.props.start})
	}
	constructor(props)
	{
		super(props);
		this.state={
			x:0
		};
		this.timer=this.timer.bind(this);
	}
	render()
	{
		var x=Math.round(this.state.x/1000);
		return(
				<div>
					<h1 class="timer">I Design timing App in React Js</h1>
					<span class="text">{x}</span>
				</div>
		);
	}
}
export default Parent; 