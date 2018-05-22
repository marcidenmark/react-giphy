import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
	renderList= () => {
		return this.props.gifs.map (gif => {
			return <Gif id={gif.id} key={gif.id} />
		})
	}
	//gif id coming from gif.jsx

	render() {
		return (
			<div className="gif-list">
			 {this.renderList()}
			</div>
			);
	}

}
// we need to make an array and pass the gif component in

export default GifList;
