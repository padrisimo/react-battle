var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component{
	render(){
		return(
			<div>
				Ou yea!
			</div>
		)
	}	
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);