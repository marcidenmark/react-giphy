import React, { Component } from 'react';

class SearchBar extends Component {
	handleUpdate = (event) => {
		// console.log(event.target.value);
		this.props.searchFunction(event.target.value);
	}
	// line 6, searchFunction is defined in app component (the parent)


	render() {
		return (
			<input
				type="text"
				className="form-control form-search"
				onChange={this.handleUpdate}
				placeholder="Search Giphies!"
			/>
		);
	}

}

export default SearchBar;


				// value="search for a giphy!"
