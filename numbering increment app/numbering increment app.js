import React, { Component } from 'react';
import './css.css';
class Erd extends Component{
	constructor(props)
	{
		super(props);
		this.change=this.change.bind(this);
		this.state={
			first:"gajjar",
			skr:0
		}
		this.change=this.change.bind(this);
	}
	change()
	{
		this.setState({
			first:this.state.first,
			rtf:this.state.skr,
			first:this.state.first,
			skr:this.state.skr+1
		})
	}
	render()
	{
		var {first}=this.state;
		var {skr}=this.state;
		return(
				<div>
					<h1>Gajjar Darshit hamsukhbhai</h1>
					<h3 className="jk">{first+" "+skr}</h3>
					<button onClick={this.change}>click</button>		
				</div>
 			);
	}
}
export default Erd;