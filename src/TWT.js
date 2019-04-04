import React, { Component } from 'react';
import './TWT.css';
import OBJ from './OBJ.js'

class TWT extends Component{
	constructor(props){
		super (props);
		this.state={
			hits:[]
		}
		this.con = this.con.bind(this);
	}
	 componentDidMount() {
    fetch('https://still-garden-88285.herokuapp.com/draft_tweets')
      .then(response => response.json())
      .then(data => this.setState({ hits: data.draft_tweets }));
  	}
  	con(){
  	var h= this.state.hits;
  		console.log(h);
  	}

	render(){
		return(
			<div className="TWT">
				<h1>third</h1>
				<button onClick={this.con}>Console log</button>
				<OBJ data={this.state.hits}></OBJ>
			</div>
		);
	}













//si se quiere insertar
	onTweet(event){
    let auxUser=this.state.user;
    let auxid=this.state.id;
    let auxvalue=this.state.value;
    let tweets=this.state.tweets;
    tweets.push(
      {
        user: auxUser, 
        id: auxid,
        txt: auxvalue
      }
    );
    this.setState({tweets});
    fetch("https://still-garden-88285.herokuapp.com/draft_tweets", {
              method: "post",
              body: JSON.stringify({ "user_name": auxUser, "description":auxvalue }),
               headers:{
                 'Content-Type': 'application/json'
                }
              })
            .then(function(data) {
          console.log("Request succeeded with  response", data);
           })
       .catch(function(error) {
           console.log("Request failed", error);
         });
  }
}

export default TWT;