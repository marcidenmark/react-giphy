import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gifs: [],
			selectedGifId: "K5wOAFFgSS1Dq"
		};

		this.search("");
	}
	//giphy api key
	//
	search = (query) => {
		giphy ('rcDQ1uxkajNgxkTx0XNs8ZOTJwdQ4bEF')
		.search({
			q: query,
			rating: 'g',
			limit:10
		},
		(error, result) => {
			this.setState({
				gifs:result.data
			});
		});
	}

	selectGif = (id) => {
		this.setState({
			selectGifId: id
		});
	}

	render() {
		// const gifs = [
		// 	{ id: "pSFa0BLnR0Ov6" },
		// 	{ id: "NG27IcfqdwSk0" },
		// 	{ id: "DQ1ePkmS3FzAk" },
		// 	{ id: "26AHIA6ExwHzK1Tkk" }
		// ];
		return (
			<div>
				<div className="left-scene">
					<SearchBar searchFunction={this.search} />
					<div className="selected-gif">
						<Gif id={this.state.selectedGifId} />
					</div>
				</div>

				<div className="right-scene">
					<GifList gifs={this.state.gifs} selectGif={this.selectGif} />
				</div>
			</div>
		);

	}
}
export default App;
