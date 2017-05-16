import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './helloworld.js';
import Test from './test.js';
var names = ['Alice','Emily','Kate'];
ReactDOM.render(
	// <div>
	// {
	// 	names.map(function(name,i){
	// 		return <div key={i}>aaa, {name}!</div>
	// 	})
	// }
	// </div>,
	<Hello />,
	document.getElementById('container')
);


var HelloMessage = class HelloMessage extends React.Component{
	render(){
		return <h1>Hello {this.props.name}</h1>;
	}
};

function test(){
	alert("my test function");
}

