import React, { Component } from 'react';
import ReactDom from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './components/app.jsx';

const root = document.getElementById('root');
if (root) {
	ReactDom.render(
		<App />,
		root);
}

