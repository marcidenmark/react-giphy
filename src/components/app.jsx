import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {
	render() {
		const gifs = [
			{ id: "pSFa0BLnR0Ov6" },
			{ id: "NG27IcfqdwSk0" },
			{ id: "DQ1ePkmS3FzAk" },
			{ id: "26AHIA6ExwHzK1Tkk" }
		];
		return (
			<div>
				<div className="left-scene">
					<SearchBar />
					<div className="selected-gif">
						<Gif id="K5wOAFFgSS1Dq" />
					</div>
				</div>

				<div className="right-scene">
					<GifList gifs={gifs} />
				</div>
			</div>
		);

	}
}
export default App;
