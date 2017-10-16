import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//     <h1 className="container">React Prototypes!</h1>,
//     document.getElementById('root')
// );
ReactDOM.render(
    // <h1 className="container">React Prototypes!</h1>,
    greeting(user),
    document.getElementById('root')
);

var luckyNumber = () => Math.floor((Math.random()*1000)+1);
var name = 'user name';
var user ={name, luckyNumber};

function greeting(user){
	let returnDiv = (
		<div className="container">
			<h1> Hi, {user.name} </h1>
			<h2 className="text-muted"> Today's number {user.luckyNumber} </h2>
		</div>
	);
	return returnDiv;
}

/// const greeting = (user) =>{}
// 	let returnDiv = (
// 		<div className="container">
// 			<h1> Hi, {user.name} </h1>
// 			<h2 className="text-muted"> Today's number: {user.luckyNumber} </h2>
// 		</div>
// 	);
// 	return returnDiv;
// }

