import React, { Component } from 'react';
import './index.css'
class App extends Component{
	render()
	{
		return(
				<div>
					<Timer start={Date.now()}/>
				</div>
		);
	}
}
class Timer extends Component{
	componentDidMount()
	{
		this.timer=setInterval(this.change,1000);
	}
	change()
	{
		this.setState({
			time:new Date()-this.props.start,
		})
	}
	constructor(props)
	{
		super(props);
		this.state={
			time:0,
			stop:"i am stop"
		}
		this.change=this.change.bind(this);
	}
	render()
	{
		var time=Math.floor(this.state.time/1000)//uparna time ne te fetch karse
		if(time===5)
		{
			console.log("for loop badha no tme te use te kari sako");
		}
		return(
				<div>
					<h1>Hello world i am timer</h1>
					<br/>
					<span>{time}</span>
				</div>
		);
	}
}
export default App ;