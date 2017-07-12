import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Auth from './Auth.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router history = {browserHistory}>
		<Route path = "/" component = {Auth}/>
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
