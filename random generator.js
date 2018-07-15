import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
class Hitesh extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={
			r:2
		};
		this.getrandomNumber=this.getrandomNumber.bind(this);
	}
	getrandomNumber()
	{
		this.setState({r:Math.ceil(Math.floor(Math.random()*10))})
	}
	render()
	{
		return(
				<div>
				     <button className="lk" onClick={this.getrandomNumber}>Get Random Number</button>
					<Darshit ret={this.state.r}/>
				</div>
		);
	}
}
class Darshit extends React.Component{
	render()
	{
		return(
				<div>
					<h3>{this.props.ret}</h3>
				</div>
		);
	}
}
ReactDOM.render(<Hitesh/>,document.getElementById("root"));  