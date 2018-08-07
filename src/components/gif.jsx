import React, { Component } from 'react';

class Gif extends Component {
	handleClick = () => {
		if (this.props.selectGif ){
			this.props.selectGif(this.props.id);
		}
	}

	render() {
		const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`
			return (
				<img src={src} alt="" className="gif" onClick={this.handleClick}/>
				);
	}
}
export default Gif


// Before select gif
// class Gif extends Component {
// 	render() {
// 		const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`
// 		return(
// 			<img src={src} alt="" className="gif"/>
// 		);
// 	}
// }



		// const src = `https://media2.giphy.com/media/3o7TKRwpns23QMNNiE/giphy.gif`
	// render() {
	// 	if(!this.props.id) {
	// 		return;
	// 	}
	// }
