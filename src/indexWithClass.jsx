//now with class instead of props
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';


class Hello extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false
		};
	}

	handleClick = () =>  {
		//TODO: change the state
		this.setState({
			clicked: !this.state.clicked
		});

	}

	render() {
		return (
			<div className={this.state.clicked ? 'clicked' : null}
				onClick={this.handleClick}>
				Hello {this.props.name}  </div>
			);
	}

}
const root = document.getElementById('root');
if (root) {
	ReactDOM.render(<Hello name= "Marci and friends" />,root);
}

//{this.state.clicked ? 'clicked' : else, null-- do nothing}
//so, if the state is clicked, change style to clicked (style from css) .
//When we click on the div, call the method handleClick
