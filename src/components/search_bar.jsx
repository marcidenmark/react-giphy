import React, { Component } from 'react';
import App from './app.jsx'

class SearchBar extends Component {
	handleUpdate = (event) => {
		console.log(event.target.value);
		this.props.searchFunction(event.target.value);
	}


	render() {
		return (
			<input type="text" className="form-control form-search"
				onChange={this.handleUpdate} />


		);
	}

}

export default SearchBar;
