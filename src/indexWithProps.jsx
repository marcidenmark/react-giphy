import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';


//
const Hello = (props) => {
	return <div>Hello, {props.name}</div>;
}
// next to use the component
// attatch it to the dom. attach the root to the dom
const root = document.getElementById('root');
if (root) {
	ReactDOM.render(<Hello name= "Marci and friends" />,root);
}

//
//starter code
// const Hello = props => <div>Hello, {props.name}</div>;
// const root = document.getElementById('root');
// if (root) {
//   ReactDOM.render(<Hello name="World" />, root);
// }
