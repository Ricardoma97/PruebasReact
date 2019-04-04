import React, { Component } from 'react';
import './OBJ.css'
class OBJ extends Component{
	render(){
	let twts=this.props.data.map((TweetUnico)=>{
		return(
			<div className="TweetUnico" key={TweetUnico.id}>
				<h1>{TweetUnico.user_name}</h1>
				<p>{TweetUnico.description}</p>
			</div>
		)
	})
		return(
			<div className="OBJ">
				{twts}
			</div>
		);
	}
}

export default OBJ;