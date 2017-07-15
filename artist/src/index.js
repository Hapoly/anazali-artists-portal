import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Auth from './Auth.js';
import Dashboard from './Dashboard.js';
import Messages from './Messages.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router history = {browserHistory}>
		<Route path = "/" component = {Auth}/>
		<Route path="/dashboard" component={Dashboard}/>
		<Route path="/dashboard/messages" component={Messages}/>
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
