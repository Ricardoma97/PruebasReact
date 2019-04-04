import React, { Component } from 'react';
import SecondBox from './SecondBox.js'
import './Box.css'
class Box extends Component{
	constructor(props){
		super(props);
		 this.state={
		      data:"LOL"
	    }
	}
	render(){
		return(
			<div className="Box">
				<h1>first Box</h1>
	 			<SecondBox data={this.state.data}></SecondBox>
	 		</div>
		);
	}
}

export default Box;