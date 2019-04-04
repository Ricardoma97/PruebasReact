import React, { Component } from 'react';
import TWT from './TWT.js'
import './SecondBox.css'

class SecondBox extends Component{
	render(){
		return(
			<div className="SecondBox">
				<h1>Second box</h1>
				<p>data={this.props.data}</p>
				<TWT></TWT>
			</div>
		);
	}
}

export default SecondBox;