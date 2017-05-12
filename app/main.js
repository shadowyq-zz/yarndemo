import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './helloworld.js';
import Test from './test.js';
var names = ['Alice','Emily','Kate'];
ReactDOM.render(
	<div>
	{
		names.map(function(name,i){
			return <div key={i}>aaa, {name}!</div>
		})
	}
	</div>,
	document.getElementById('container')
);


var HelloMessage = React.createClass({
	render: function(){
		return <h1>Hello {this.props.name}</h1>;
	}
});
