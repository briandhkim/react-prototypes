import React from 'react';
import ReactDOM from 'react-dom';



let luckyNumber = () => Math.floor((Math.random()*1000)+1);
let name = 'user name';


function greeting(x){
	let returnElm = (
			<div className="container">
				<h1> user greeting, {x.name} </h1>
				<h2 className="text-muted"> lucky number, {x.luckyNumber} </h2>
			</div>
		);
	return returnElm;
}

var user ={
	name : "person name",
	luckyNumber : luckyNumber()
}

ReactDOM.render(
    // <h1 className="container">React Prototypes!</h1>,
    greeting(user),
    document.getElementById('root')
);